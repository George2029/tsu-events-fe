import { Config } from '@/app/ui/icons';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const AmountOfConfigs = dynamic(() => import('./NumberOfConfigs'), {
	loading: () => <div className="w-6 h-6 rounded-lg animate-pulse bg-sky-200 dark:bg-neutral-800"></div>
});

export default async function EventConfigs({ props }: { props: { eventId: number, type: EventType } }) {
	let { eventId, type } = props;
	return (
		<div className="flex justify-between">
			<div className="text-sm font-semibold">Event Configs</div>
			<div className="flex gap-2">
				<div>
					<AmountOfConfigs props={{ eventId, type }} />
				</div>
				<Link href={`/${eventId}/configs/${type.toLowerCase()}`} className="md:active:scale-90 duration-300 active:scale-50 cursor-pointer text-specialIcons dark:text-darkspecialIcons hover:animate-pulse">{Config}</Link>
			</div>
		</div>
	)
}
