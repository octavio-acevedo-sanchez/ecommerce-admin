import Navbar from '@/components/navbar';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export default async function DashboardLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: { storeId: string };
}): Promise<JSX.Element> {
	const { userId } = auth();

	if (!userId) {
		redirect('/sign-in');
	}

	const store = await prismadb.store.findFirst({
		where: {
			id: params.storeId,
			userId
		}
	});

	if (!store) {
		redirect('/');
	}

	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
