'use client'
import { useFormStatus } from 'react-dom';

export default function CreateEventButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="btn"
		>
			{pending ? "Creating..." : "Create"}
		</button>
	)
}
