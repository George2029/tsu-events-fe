import getVisits from '@/app/actions/user/getVisits';

import type { Visit } from '@/app/types/visit';
import VisitCard from '@/app/ui/user/VisitCard';

export default async function Visits() {
	let visits = await getVisits();
	return <ul> {
		visits.map((visit: Visit) => <VisitCard key={visit.id} props={{ visit }} />)}
	</ul>

}
