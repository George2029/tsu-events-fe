import Genre from '@/app/ui/Genre';
import RequestPreviewUI from '@/app/ui/requests/RequestPreviewUI';
import { getMovieRequests } from '@/app/actions/requests/getMovieRequests';
import { genresBarConfig } from './genresBarConfig';

export default async function Requests() {
	let requests = await getMovieRequests();
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				{requests.map(requestPreview => <RequestPreviewUI key={requestPreview.id} props={{ requestPreview }} />)}
			</div>
		</div>
	)
}
