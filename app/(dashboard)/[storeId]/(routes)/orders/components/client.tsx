'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { columns, type OrderColumn } from './columns';

interface OrderClientProps {
	data: OrderColumn[];
}

export const OrderClient = ({ data }: OrderClientProps): React.ReactNode => {
	return (
		<>
			<Heading
				title={`Orders (${data.length})`}
				description='Manage orders for your store'
			/>
			<Separator />
			<DataTable searchKey='products' columns={columns} data={data} />
		</>
	);
};
