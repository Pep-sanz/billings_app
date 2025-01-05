'use client';

import Container from '@/components/elements/Container';
import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import {
  FaEye,
  FaFileInvoiceDollar,
  FaPenToSquare,
  FaTrash,
} from 'react-icons/fa6';
import React, { useState } from 'react';
import BaseTable from '@/components/elements/base-table';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import { IoPrintOutline } from 'react-icons/io5';
import { LuCirclePlus } from 'react-icons/lu';
import { Badge } from '@/components/ui/badge';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import FormGenerator from '@/components/elements/form-generator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { filterType } from '@/types/filter.type';
import BaseInputSearch from '@/components/elements/base-input-search';
import BasePagination from '@/components/elements/base-pagination';
import Bill from './bill';

const dataInvoice = [
  {
    invoiceId: 'INV-001',
    name: 'John Doe',
    address: '123 Main St, Anytown, USA',
    product: 'Product A',
    price: '$100',
    due_date: '2023-06-30',
    status: 'success',
  },
  {
    invoiceId: 'INV-002',
    name: 'John Doe 2',
    address: '123 Main St, Anytown, USA',
    product: 'Product B',
    price: '$300',
    due_date: '2023-07-30',
    status: 'rejected',
  },
];

export default function DetailInvoice() {
  const [paginationAndSearch, setPaginationAndSearch] = React.useState({
    page: 1,
    per_page: 10,
    search: '',
  });
  const [dialog, setDialog] = useState({
    create: false,
    delete: false,
  });
  const formFilter = useForm({
    resolver: zodResolver(filterType),
  });
  return (
    <Container className="space-y-6">
      <div className="space-y-1 bg-white p-6 rounded-md">
        <SectionHeading title="Detail Tagihan" icon={<FaFileInvoiceDollar />} />
        <SectionSubHeading>
          <p>Kelola Tagihan Anda</p>
          <div className="space-x-4 flex items-center">
            <Button onClick={() => setDialog({ ...dialog, create: true })}>
              <LuCirclePlus />
              <p>Tambah Transaksi</p>
            </Button>
            <Button variant={'outline'}>
              <IoPrintOutline />
              <p>print</p>
            </Button>
          </div>
        </SectionSubHeading>
      </div>
      <div className="space-y-4 bg-white p-6">
        <Bill />
      </div>
    </Container>
  );
}
