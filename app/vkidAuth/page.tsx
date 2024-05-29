import { notFound } from 'next/navigation';

export default async function Page({
	searchParams,
}: {
	searchParams?: { payload: string };
}) {

	let payload = searchParams?.payload;

	if (!payload) {
		notFound();
	}

	let dto: Record<string, any> = {}

	let access_token = process.env.VK_SERVICE_TOKEN;
	let v = "5.131";

	let { token, uuid, user } = JSON.parse(payload);

	// in case of not a one tap auth
	if (user) {
		dto.vkId = user.id;
		dto.firstName = user.first_name;
	}

	if (!token || !uuid || !access_token) {
		notFound();
	}

	let body = new URLSearchParams({
		v,
		uuid,
		access_token,
		token
	})

	console.log(body);

	let res = await fetch(`https://api.vk.com/method/auth.exchangeSilentAuthToken`, {
		cache: 'no-store',
		method: "POST",
		body
	});

	if (!res.ok) {
		console.log(`VK exchange silent FAILED: `, await res.json());
		notFound()
	}

	let { response: respWithAccessToken } = await res.json();

	let { email, user_id } = respWithAccessToken;

	dto.vkId = user_id;
	dto.email = email;

	return <h1>Hello!</h1>;
}
