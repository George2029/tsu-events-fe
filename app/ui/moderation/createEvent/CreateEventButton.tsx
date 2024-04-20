'use client'
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

export default function CreateEventButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="p-2 rounded-md text-sm bg-indigo-600 font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-indigo-400"
		>
			{pending ? "Creating..." : "Create"}
		</button>
	)
}
