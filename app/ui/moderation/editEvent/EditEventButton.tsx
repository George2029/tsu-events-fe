'use client'
import { useFormStatus } from 'react-dom';

export default function EditEventButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="btn mb-2"
		>
			{pending ? "Updating..." : "Update"}
		</button>
	)
}
