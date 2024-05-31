import Back from '@/app/ui/buttons/Back'

export default function NotFound() {
	return (
		<div className="mt-20 md:mt-10">
			<div className="text-center">
				<p className="text-base font-semibold text-indigo-600">404</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
				<p className="mt-6 text-base leading-7 ">Sorry, we couldn’t find the page you’re looking for.</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Back />
				</div>
			</div>
		</div>
	)
}
