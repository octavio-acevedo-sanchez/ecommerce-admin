import { UserButton } from '@clerk/nextjs';

const SetupPage = (): React.ReactNode => {
	return (
		<div className='p-4'>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};

export default SetupPage;
