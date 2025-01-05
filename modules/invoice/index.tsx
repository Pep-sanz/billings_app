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
import { FiDownload } from 'react-icons/fi';
import { CreateInvoice } from './components/create-invoice';
import { useRouter } from 'next/navigation';

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

export default function Invoice() {
  const router = useRouter();
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
        <SectionHeading title="Tagihan" icon={<FaFileInvoiceDollar />} />
        <SectionSubHeading>
          <p>Kelola Tagihan Anda</p>
          <div className="space-x-4 flex items-center">
            <Button onClick={() => setDialog({ ...dialog, create: true })}>
              <LuCirclePlus />
              <p>Tambah Transaksi</p>
            </Button>
            <Button variant={'outline'}>
              <FiDownload />
              <p>Download</p>
            </Button>
          </div>
        </SectionSubHeading>
      </div>
      <div className="space-y-4 bg-white p-6 rounded-md">
        <div className="flex justify-between">
          <FormGenerator
            id="form"
            onSubmit={() => {}}
            grid={12}
            form={formFilter}
            data={[
              {
                name: 'month',
                placeholder: 'Pilih Bulan',
                grid: 2,
                type: 'select',
                options: [
                  { id: '01', label: 'Januari' },
                  { id: '02', label: 'Februari' },
                  { id: '03', label: 'Maret' },
                  { id: '04', label: 'April' },
                  { id: '05', label: 'Mei' },
                  { id: '06', label: 'Juni' },
                  { id: '07', label: 'Juli' },
                  { id: '08', label: 'Agustus' },
                  { id: '09', label: 'September' },
                  { id: '10', label: 'Oktober' },
                  { id: '11', label: 'November' },
                  { id: '12', label: 'Desember' },
                ],
              },
              {
                name: 'tahun',
                placeholder: 'Pilih Tahun',
                type: 'select',
                grid: 2,
                options: [
                  { id: '2023', label: '2023' },
                  { id: '2022', label: '2022' },
                  { id: '2021', label: '2021' },
                  { id: '2020', label: '2020' },
                ],
              },
              {
                name: 'status',
                placeholder: 'Status',
                grid: 2,
                type: 'select',
                options: [
                  { id: 'pending', label: 'Pending' },
                  { id: 'success', label: 'Success' },
                  { id: 'rejected', label: 'Rejected' },
                ],
              },
            ]}
          />
          <BaseInputSearch
            className="min-w-[300px] mt-2"
            placeholder={`Cari Tagihan...`}
            onChange={(val) =>
              setPaginationAndSearch((p) => ({ ...p, search: val }))
            }
          />
        </div>
        <BaseTable
          data={dataInvoice}
          columns={[
            {
              accessorKey: 'invoiceId',
              header: 'No. Tagihan',
            },
            {
              accessorKey: 'name',
              header: 'Name',
            },
            {
              accessorKey: 'address',
              header: 'Alamat',
            },
            {
              accessorKey: 'product',
              header: 'Produk',
            },
            {
              accessorKey: 'price',
              header: 'Harga',
            },
            {
              accessorKey: 'due_date',
              header: 'Jatuh Tempo',
              cell: ({ row }) => {
                return (
                  <p>
                    {row.original.due_date
                      ? moment(row.original.due_date).format('DD-MMMM-YYYY')
                      : 'N/A'}
                  </p>
                );
              },
            },
            {
              accessorKey: 'status',
              header: 'Status',
              cell: ({ row }) => {
                return (
                  <Badge
                    variant={
                      row.original.status === 'success'
                        ? 'success'
                        : row.original.status === 'rejected'
                        ? 'destructive'
                        : 'outline'
                    }
                  >
                    {row.original.status}
                  </Badge>
                );
              },
            },
            {
              accessorKey: 'invoiceId',
              header: 'Aksi',
              cell: ({ row }) => {
                return (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiOutlineDotsHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {/* <DropdownMenuSeparator /> */}
                      <DropdownMenuItem
                        onClick={() =>
                          router.push(
                            `/invoice/${row.original.invoiceId}/detail-invoice`,
                          )
                        }
                      >
                        <FaEye />
                        <p>Detail</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FaPenToSquare />
                        <p>Edit</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FaTrash />
                        <p>Hapus</p>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              },
            },
          ]}
        />
        <BasePagination
          currentPage={paginationAndSearch.page}
          itemsPerPage={paginationAndSearch.per_page}
          totalPages={
            (dataInvoice.length < 10 ? 1 : dataInvoice.length) as number
          }
          onPageChange={(page) => {
            setPaginationAndSearch((p) => ({ ...p, page }));
          }}
          totalItems={dataInvoice.length as number}
          onItemsPerPageChange={(itemsPerPage) => {
            setPaginationAndSearch((p) => ({
              ...p,
              per_page: itemsPerPage,
              page: 1,
            }));
          }}
        />
      </div>

      {dialog.create && (
        <CreateInvoice
          isOpen={dialog.create}
          onClose={() => {
            setDialog((p) => ({ ...p, create: false }));
          }}
        />
      )}
    </Container>
  );
}
