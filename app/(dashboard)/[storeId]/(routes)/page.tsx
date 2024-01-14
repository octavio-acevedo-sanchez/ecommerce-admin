import prismadb from '@/lib/prismadb';

interface DashboardPageProps {
	params: { storeId: string };
}

const DashboardPage = async ({
	params
}: DashboardPageProps): Promise<JSX.Element> => {
	const store = await prismadb.store.findFirst({
		where: {
			id: params.storeId
		}
	});

	return (
		<>
			<div>This is a Dashboard!</div>
			<div>Active Store: {store?.name}</div>
		</>
	);
};

export default DashboardPage;
