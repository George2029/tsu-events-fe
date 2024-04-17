'use client'

function CreateOneEvent() {

	let now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	let normalizedTimeString = now.toISOString().slice(0, 16);

	return (
		<form className="md:mx-20">
			<h2 className="font-semibold text-center border-b border-gray-900/10 pb-12">New Event</h2>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-green-950/60 pb-12">
				<div>
					<label htmlFor="title" className="text-sm font-semibold leading-6">
						Title
					</label>
					<div>
						<div>
							<input
								type="text"
								name="title"
								id="title"
								autoComplete="title"
								className="rounded-lg bg-gray-700"
								placeholder="Some Event"
								maxLength={50}
								required
							/>
						</div>
					</div>
				</div>

				<div>
					<label htmlFor="description" className="block text-sm  font-semibold leading-6">
						Description
					</label>
					<div className="mt-2">
						<textarea
							id="description"
							name="description"
							rows={2}
							className="w-full rounded-md dark:bg-gray-700"
							placeholder="It will be great, trust"
							maxLength={1000}
						/>
					</div>
					<p className="mt-2 text-sm leading-6 text-gray-500">Write a few sentences about the event.</p>
				</div>


				<div>
					<legend className="text-sm font-semibold leading-8">Type</legend>
					<div className="mt-2 space-y-2">
						<div className="flex items-center gap-x-3">
							<input
								id="movie"
								name="eventType"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
								required
							/>
							<label htmlFor="movie" className="text-sm leading-8">
								Movie Event
							</label>
						</div>
						<div className="flex items-center gap-x-3">
							<input
								id="BOARD_GAMES_EVENT"
								name="eventType"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label htmlFor="BOARD_GAMES_EVENT" className="text-sm leading-8">
								Board Games Event
							</label>
						</div>
						<div className="flex items-center gap-x-3">
							<input
								id="CONTEST_EVENT"
								name="eventType"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label htmlFor="CONTEST_EVENT" className="text-sm leading-8">
								Contest Event
							</label>
						</div>
						<div className="flex items-center gap-x-3">
							<input
								id="CUSTOM_EVENT"
								name="eventType"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label htmlFor="CUSTOM_EVENT" className="text-sm leading-8">
								Custom Event
							</label>
						</div>
					</div>
				</div>
				<div>
					<label htmlFor="location" className="text-sm font-semibold leading-6">
						Location
					</label>
					<div>
						<div>
							<input
								type="text"
								name="location"
								id="location"
								className="rounded-lg dark:bg-gray-700"
								placeholder="TSU 12th building"
								required
							/>
						</div>
					</div>
				</div>
				<div>
					<label htmlFor="placesTotal" className="text-sm font-semibold leading-6">
						Places Total
					</label>
					<div>
						<div>
							<input
								type="number"
								name="placesTotal"
								id="placesTotal"
								min="4"
								max="500"
								className="rounded-lg dark:bg-gray-700"
								placeholder="10"
								required
							/>
						</div>
					</div>
				</div>
				<div>
					<label htmlFor="moderator" className="text-sm font-semibold leading-6">
						Moderator
					</label>
					<div>
						<div>
							<input
								type="text"
								name="moderator"
								id="moderator"
								className="rounded-lg dark:bg-gray-700"
								placeholder="George"
							/>
						</div>
					</div>
				</div>
				<div className="max-w-72">
					<label htmlFor="startDateTime" className="leading-6 text-sm text-gray-900 dark:text-white font-semibold">Start time:</label>
					<div className="relative">
						<div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
							</svg>
						</div>
						<input
							type="datetime-local"
							id="startDateTime"
							name="startDateTime"
							className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							defaultValue={normalizedTimeString}
							min={normalizedTimeString}
							required
						/>
					</div>
				</div>
				<div className="max-w-72">
					<label htmlFor="endDateTime" className="leading-6 text-sm text-gray-900 dark:text-white font-semibold">End time:</label>
					<div className="relative">
						<div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
							</svg>
						</div>
						<input
							type="datetime-local"
							id="endDateTime"
							name="endDateTime"
							className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							defaultValue={normalizedTimeString}
							min={normalizedTimeString}
							required
						/>

					</div>
				</div>
			</div>
			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Create
				</button>
			</div>
		</form>
	)
}


export default function EditEvents() {
	return (
		<div>
			<CreateOneEvent />
		</div>
	)
}
