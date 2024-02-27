'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type BillboardColumn = {
	id: string;
	label: string;
	createdAt: string;
};

// eslint-disable-next-line @typescript-eslint/array-type
export const columns: ColumnDef<BillboardColumn>[] = [
	{
		accessorKey: 'label',
		header: 'Label'
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
