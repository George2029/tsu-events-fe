import CreateEvent from '@/app/ui/moderation/CreateEvent';
import canMod from '@/app/actions/moderation/canMod'
import { notFound } from 'next/navigation';

export default async function ModerationPage() {
	let res = await canMod();
	if (!res) return notFound();
	return (
		<CreateEvent />
	)
}
