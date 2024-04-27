'use client'
import { useFormStatus } from 'react-dom';

export default function EditEventButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="p-2 rounded-md text-sm bg-indigo-600 font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-indigo-400"
		>
			{pending ? "Updating..." : "Update"}
		</button>
	)
}
