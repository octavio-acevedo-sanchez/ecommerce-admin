'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type SizeColumn = {
	id: string;
	name: string;
	value: string;
	createdAt: string;
};

// eslint-disable-next-line @typescript-eslint/array-type
export const columns: ColumnDef<SizeColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Name'
	},
	{
		accessorKey: 'value',
		header: 'Value',
		cell: ({ row }) => (
			<div className='flex items-center gap-x-2'>
				{row.original.value}
				<div
					className='h-6 w-6 rounded-full border'
					style={{ backgroundColor: row.original.value }}
				></div>
			</div>
		)
	},
	{
		accessorKey: 'createdAt',
		header: 'Date'
	},
	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />
	}
];
