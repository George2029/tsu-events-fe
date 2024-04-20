'use client'
import { useState } from 'react';

export default function About() {
	let [obj, setObj] = useState({ message: 'asdf' });

	return (
		<div>
			About page
			<div onClick={() => setObj(obj => { return { message: 'gg' } })}>click here</div>
			<div>{obj.message}</div>

		</div>
	);
}
