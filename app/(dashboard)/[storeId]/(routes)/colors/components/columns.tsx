'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ColorColumn = {
	id: string;
	name: string;
	value: string;
	createdAt: string;
};

// eslint-disable-next-line @typescript-eslint/array-type
export const columns: ColumnDef<ColorColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Name'
	},
	{
		accessorKey: 'value',
		header: 'Value'
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
