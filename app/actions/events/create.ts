'use server'

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CreateEventDto } from '@/app/classes/events/dto/create-event.dto';

import { CreateMovieEventConfigDto } from '@/app/classes/events/dto/movieEventConfig/create-movieEventConfig.dto';
import { CreateBoardGamesEventConfigDto } from '@/app/classes/events/dto/boardGamesEventConfig/create-boardGamesEventConfig.dto';
import { CreateContestEventConfigDto } from '@/app/classes/events/dto/contestEventConfig/create-contestEventConfig.dto';
import { CreateCustomEventConfigDto } from '@/app/classes/events/dto/customEventConfig/create-customEventConfig.dto';

type PrevState = {
	message: string;
}

export default async function createEvent(prevState: PrevState, formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) return redirect('/signin');

	let title = formData.get('title')?.toString().trim();
	let location = formData.get('location')?.toString().trim();
	let description = formData.get('description')?.toString().trim();
	let type = formData.get('type')?.toString().trim();
	let placesTotal = Number(formData.get('placesTotal'));
	let startTime = formData.get('startTime')?.toString().trim();
	let endTime = formData.get('endTime')?.toString().trim();

	let data = {
		title,
		location,
		type,
		description,
		placesTotal,
		startTime,
		endTime
	}

	let event = plainToInstance(CreateEventDto, data);
	let valid = await validate(event);

	if (valid.length) return { message: valid.toString() };

	let movieConfigIds = formData.get('movieConfigIds')?.toString();
	console.log(`movie ids: `, movieConfigIds);
	let movieConfigDtos: CreateMovieEventConfigDto[] = [];

	if (movieConfigIds) {
		let idsArr = movieConfigIds.split(',');
		for (let i = 0; i < idsArr.length; i++) {
			let title = formData.get(`movieConfigTitle-${idsArr[i]}`)?.toString().trim();
			let description = formData.get(`movieConfigDescription-${idsArr[i]}`)?.toString().trim();
			let url = formData.get(`movieConfigUrl-${idsArr[i]}`)?.toString();
			let duration = formData.get(`movieConfigDuration-${idsArr[i]}`)?.toString().trim();
			let audio = formData.get(`movieConfigAudio-${idsArr[i]}`)?.toString().trim();
			let subtitles = formData.get(`movieConfigSubtitles-${idsArr[i]}`)?.toString().trim();
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
				console.log(valid);
				return {
					message: valid.toString()
				}
			} else {
				movieConfigDtos.push(configWithoutEventId);
			}
		}
	}


	let boardGamesConfigIds = formData.get('boardGamesConfigIds')?.toString();
	let boardGamesConfigDtos: CreateBoardGamesEventConfigDto[] = [];

	console.log('bg ids: ', boardGamesConfigIds);

	if (boardGamesConfigIds) {
		let idsArr = boardGamesConfigIds.split(',');
		for (let i = 0; i < idsArr.length; i++) {
			let title = formData.get(`boardGamesConfigTitle-${idsArr[i]}`)?.toString().trim();
			let description = formData.get(`boardGamesConfigDescription-${idsArr[i]}`)?.toString().trim();
			let maxPlayers = Number(formData.get(`boardGamesConfigMaxPlayers-${idsArr[i]}`));
			let boardGamesConfigDtoWithoutEventId = {
				title,
				description,
				maxPlayers
			};
			let configWithoutEventId = plainToInstance(CreateBoardGamesEventConfigDto, boardGamesConfigDtoWithoutEventId);
			let valid = await validate(configWithoutEventId);
			if (valid.length) {
				console.log(valid);
				return {
					message: valid.toString()
				}
			} else {
				boardGamesConfigDtos.push(configWithoutEventId);
			}
		}
	}

	let contestConfigIds = formData.get('contestConfigIds')?.toString();
	console.log(`contest ids: `, contestConfigIds);
	let contestConfigDtos: CreateContestEventConfigDto[] = [];

	if (contestConfigIds) {
		let idsArr = contestConfigIds.split(',');
		for (let i = 0; i < idsArr.length; i++) {
			let title = formData.get(`contestConfigTitle-${idsArr[i]}`)?.toString().trim();
			let description = formData.get(`contestConfigDescription-${idsArr[i]}`)?.toString().trim();
			let prize = formData.get(`contestConfigPrize-${idsArr[i]}`)?.toString();
			let rules = formData.get(`contestConfigRules-${idsArr[i]}`)?.toString().trim();
			let contestConfigDtoWithoutEventId = {
				title,
				description,
				prize,
				rules
			};
			let configWithoutEventId = plainToInstance(CreateContestEventConfigDto, contestConfigDtoWithoutEventId);
			let valid = await validate(configWithoutEventId);
			if (valid.length) {
				console.log(valid);
				return {
					message: valid.toString()
				}
			} else {
				contestConfigDtos.push(configWithoutEventId);
			}
		}
	}

	let customConfigIds = formData.get('customConfigIds')?.toString();
	let customConfigDtos: CreateCustomEventConfigDto[] = [];

	if (customConfigIds) {
		let idsArr = customConfigIds.split(',');
		for (let i = 0; i < idsArr.length; i++) {
			let title = formData.get(`customConfigTitle-${idsArr[i]}`)?.toString().trim();
			let description = formData.get(`customConfigDescription-${idsArr[i]}`)?.toString().trim();
			let customConfigDtoWithoutEventId = {
				title,
				description,
			};
			let configWithoutEventId = plainToInstance(CreateCustomEventConfigDto, customConfigDtoWithoutEventId);
			let valid = await validate(configWithoutEventId);
			if (valid.length) {
				console.log(valid);
				return {
					message: valid.toString()
				}
			} else {
				customConfigDtos.push(configWithoutEventId);
			}
		}
	}

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
	let eventId = newEvent.id;

	console.log(newEvent);

	if (movieConfigDtos.length) {
		for (let i = 0; i < movieConfigDtos.length; i++) {
			let res = await fetch('http://localhost:3000/mod/events/movie', {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({ eventId, ...movieConfigDtos[i] })
			});
			let resJSON = await res.json();
			console.log(resJSON);
		};
	}

	if (boardGamesConfigDtos.length) {
		for (let i = 0; i < boardGamesConfigDtos.length; i++) {
			let res = await fetch('http://localhost:3000/mod/events/boardgames', {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({ eventId, ...boardGamesConfigDtos[i] })
			});
			let resJSON = await res.json();
			console.log(resJSON);
		};
	}

	if (contestConfigDtos.length) {
		for (let i = 0; i < contestConfigDtos.length; i++) {
			let res = await fetch('http://localhost:3000/mod/events/contest', {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({ eventId, ...contestConfigDtos[i] })
			});
			let resJSON = await res.json();
			console.log(resJSON);
		};
	}

	if (customConfigDtos.length) {
		for (let i = 0; i < customConfigDtos.length; i++) {
			let res = await fetch('http://localhost:3000/mod/events/custom', {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({ eventId, ...customConfigDtos[i] })
			});
			let resJSON = await res.json();
			console.log(resJSON);
		};
	}

	redirect(`/${newEvent.id}`);

}
