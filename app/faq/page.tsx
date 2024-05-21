import Feedback from '@/app/ui/faq/feedback';
import { AboutIcon } from '@/app/ui/navbar/icons';
import { TelegramFilled } from '@/app/ui/icons/fillIcons';
import { GithubFilled } from '@/app/ui/icons/fillIcons';
import { ChevronDownMicro } from '@/app/ui/icons/microIcons';

export default function FAQ() {
	return (
		<div className="mt-16 md:mt-5 max-w-xl w-full px-5">
			<div className="text-xl text-center">Informational Page</div>
			<ul className="space-y-4 mt-10">
				{faqData.map((item) => <FaqItem key={item.title} props={{ item }} />)}
			</ul>
			<div className="mt-10 justify-center flex gap-2">
				<span>Communication: (click to copy)</span>
				{feedbackOptions.map(feedbackOption => <Feedback key={feedbackOption.link} props={{ feedbackOption }} />)}
			</div>
		</div>
	);
}

const feedbackOptions = [
	{
		link: 'https://t.me/kasparov777',
		icon: TelegramFilled
	},
	{
		link: 'casinych@gmail.com',
		icon: AboutIcon
	},
	{
		link: 'https://github.com/George2029',
		icon: GithubFilled
	},

]

function FaqItem({ props }: { props: { item: { title: string, text: string[] } } }) {
	let { title, text } = props.item;
	return (
		<li className="p-5 bg-cardBG dark:bg-darkcardBG rounded-lg ring-border dark:ring-darkborder ring-1">
			<details className="space-y-4">
				<summary className="cursor-pointer font-semibold  flex items-center gap-2">
					{title}
					{ChevronDownMicro}
				</summary>
				{text.map((text, index) => <p className="italic" key={index}>{text}</p>)}
			</details>
		</li>
	)
}

let faqData = [
	{
		title: 'What does UEMS stand for?',
		text: [`It stands for University Events Management System, for which this application serves as a POC (proof of concept).`]
	},
	{
		title: 'What is the point of it?',
		text: [`It's very purpose is to show how much more convenient event organization could be done.`, `At the moment of writing, to the knowledge of the developer there is no single source of events around a university, everything is scattered away around social network groups, being not always transparent and convenient.`, `Even though some local events have obviously right to stay being locally scoped and a few particpants keep enjoying themselves, it doesn't seem to benefit to a whole picture of university for applicants, especially for foreigners who have to dive into the campus life alone, presuming no social connections established in advance. Meanwhile Russian government aims to reach 710 thousand foreigner students studying in Russian at the 2025.`, `I genuinely believe this project could help to make the students environment a bit friendlier and better for everyone.`]
	},
	{
		title: 'Requests? What for?',
		text: [`The Requests or Event Requests are crucial functionality of the application, they faciliate students-driven approach in events organization: they enable every "Experienced" (i.e. who visited event at least one event) to share new ideas in form of requests, for which every user can vote for.`]
	},
	{
		title: `To what extent is it finished?`,
		text: [`While the essential funcitonality is developed, there are plenty of features that don't have an implementation so far, but could be realized in the future`, `For instance, Event Configuration datums for fine-grained customization of event information display could add even more transparency to an event, making a user choice to participate easier. SMTP server for email notifications (currently Google Gmail API that has its limitations). More decent UI for account page and in general, integration of feedbacks system with rating to faciliate communication with organizers, performance imporovements, etc`]
	},
	{
		title: 'Can I contribute?',
		text: [`Sure, the project is open-source and everyone is free to submit pull requests.`]
	}
]

