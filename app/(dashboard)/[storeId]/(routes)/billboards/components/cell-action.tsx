'use client';

import { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import type { BillboardColumn } from './columns';
import { Button } from '@/components/ui/button';
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { AlertModal } from '@/components/modals/alert-modal';

interface CellActionProps {
	data: BillboardColumn;
}

export const CellAction = ({ data }: CellActionProps): React.ReactNode => {
	const params = useParams();
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const onCopy = async (id: string): Promise<void> => {
		await navigator.clipboard.writeText(id);
		toast.success('Billboard Id copied to the clipboard.');
	};

	const onDelete = async (): Promise<void> => {
		try {
			setLoading(true);
			await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
			router.refresh();
			toast.success('Billboard deleted.');
		} catch (error) {
			toast.error('Make sure you removed all categories using this billboard.');
		} finally {
			setLoading(false);
			setOpen(false);
		}
	};

	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => {
					setOpen(false);
				}}
				onConfirm={() => {
					void onDelete();
				}}
				loading={loading}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='h-8 w-8 p-0'>
						<span className='sr-only'>Open menu</span>
						<MoreHorizontal className='h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem
						onClick={() => {
							void onCopy(data.id);
						}}
					>
						<Copy className='mr-2 h-4 w-4' />
						Copy Id
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => {
							router.push(`/${params.storeId}/billboards/${data.id}`);
						}}
					>
						<Edit className='mr-2 h-4 w-4' />
						Update
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => {
							setOpen(true);
						}}
					>
						<Trash className='mr-2 h-4 w-4' />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};
