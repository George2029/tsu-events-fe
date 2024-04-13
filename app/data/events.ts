import { plainToClass } from 'class-transformer';
import { Event } from '@/app/classes/event';

export const eventsJSON = [
	{
		"id": 2,
		"type": "MOVIE_EVENT",
		"title": "Evening of Gaspar Noe",
		"location": "TSU 12th building, 3rd floor, TISP, room 22",
		"description": "It's time to dive into the creations of the great french master",
		"moderator": "George",
		"placesTotal": 10,
		"status": "NOTPASSED",
		"startTime": "2024-05-19T11:00:37.000Z",
		"endTime": "2024-05-19T14:12:37.000Z",
		"rating": 0,
		"createdAt": "2024-04-10T16:59:06.713Z",
		"updatedAt": "2024-04-10T16:59:06.713Z"
	},
	{
		"id": 3,
		"type": "BOARD_GAMES_EVENT",
		"title": "Brass Birmingham",
		"location": "Lenina Avenue, 64",
		"description": "Dynamic, strategic game",
		"moderator": "Stepan",
		"placesTotal": 4,
		"status": "NOTPASSED",
		"startTime": "2024-05-20T08:30:37.000Z",
		"endTime": "2024-05-20T11:13:37.000Z",
		"rating": 0,
		"createdAt": "2024-04-10T16:59:21.604Z",
		"updatedAt": "2024-04-10T16:59:21.604Z"
	},
	{
		"id": 4,
		"type": "CONTEST_EVENT",
		"title": "KnacktoHack",
		"location": "TSU 2rd building, 115",
		"description": "bring friends, the time has come to think about about agi",
		"moderator": "Ivan",
		"placesTotal": 30,
		"status": "NOTPASSED",
		"startTime": "2024-04-09T06:45:37.000Z",
		"endTime": "2024-04-09T09:09:37.000Z",
		"rating": 0,
		"createdAt": "2024-04-10T17:28:45.027Z",
		"updatedAt": "2024-04-10T17:28:45.027Z"
	},
	{
		"id": 1,
		"type": "CUSTOM_EVENT",
		"title": "Lenin & Stalin. Their relationship",
		"location": "TSU library, 3rd floor, Eng-speaking club",
		"description": "It's better to be at a funny debate than at a boring lecture",
		"moderator": "Maxim",
		"placesTotal": 50,
		"status": "NOTPASSED",
		"startTime": "2024-06-01T08:00:30.000Z",
		"endTime": "2024-06-01T10:09:37.000Z",
		"rating": 0,
		"createdAt": "2024-04-10T16:31:52.715Z",
		"updatedAt": "2024-04-11T06:28:27.152Z"
	}
]

export const events: Event[] = eventsJSON.map(event => plainToClass(Event, event));

