'use server'

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CreateEventDto } from '@/app/classes/events/dto/create-event.dto';
import { CreateMovieEventConfigDto } from '@/app/classes/events/dto/movieEventConfig/create-movieEventConfig.dto';

type PrevState = {
	message: string;
}

export default async function createEvent(prevState: PrevState, formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) return { message: 'unauthorized' };

	let title = formData.get('title')?.toString().trim();
	let location = formData.get('location')?.toString().trim();
	let description = formData.get('description')?.toString().trim();
	let type = formData.get('type')?.toString().trim();
	let moderator = formData.get('moderator')?.toString().trim();
	let placesTotal = Number(formData.get('placesTotal'));
	let startTime = formData.get('startTime')?.toString().trim();
	let endTime = formData.get('endTime')?.toString().trim();

	let data = {
		title,
		location,
		type,
		description,
		moderator,
		placesTotal,
		startTime,
		endTime
	}

	let event = plainToInstance(CreateEventDto, data);
	let valid = await validate(event);

	if (valid.length) return { message: valid.toString() };

	let movieConfigIds = formData.get('movieConfigIds')?.toString();
	let movieConfigDtos: CreateMovieEventConfigDto[] = [];
	let movieConfigMistakes: string[] = [];

	if (movieConfigIds) {
		movieConfigIds.split(",").forEach(async (configId) => {
			let title = formData.get(`movieConfigTitle-${configId}`)?.toString().trim();
			let description = formData.get(`movieConfigDescription-${configId}`)?.toString().trim();
			let url = formData.get(`movieConfigUrl-${configId}`)?.toString();
			let duration = formData.get(`movieConfigDuration-${configId}`)?.toString().trim();
			let audio = formData.get(`movieConfigAudio-${configId}`)?.toString().trim();
			let subtitles = formData.get(`movieConfigSubtitles-${configId}`)?.toString().trim();
			let movieConfigDtoWithoutEventId = {
				title,
				description,
				url,
				duration,
				audio,
				subtitles
			};
			let configWithoutEventId = plainToInstance(CreateMovieEventConfigDto, movieConfigDtoWithoutEventId);
			let valid = await validate(configWithoutEventId);
			if (valid.length) {
				movieConfigMistakes.push(valid.toString());
			} else {
				movieConfigDtos.push(configWithoutEventId);
			}
		});
	}

	if (movieConfigMistakes.length) return { message: movieConfigMistakes.toString() }

	let res = await fetch('http://localhost:3000/mod/events', {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify(event)
	});

	if (!res.ok) {
		let resJSON = await res.json();
		return {
			message: resJSON
		}
	}

	let newEvent = await res.json();

	console.log(newEvent);

	if (movieConfigDtos.length) {
		movieConfigDtos.forEach(async (config) => {
			let res = await fetch('http://localhost:3000/mod/events/movie', {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({ eventId: newEvent.id, ...config })
			});
			let resJSON = await res.json();
			console.log(resJSON);
		});
	}

	redirect(`/${newEvent.id}`);

}
