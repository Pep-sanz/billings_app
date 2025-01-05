'use client';

import Container from '@/components/elements/Container';
import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import { FaEye, FaPenToSquare, FaTrash } from 'react-icons/fa6';
import React from 'react';
import BaseTable from '@/components/elements/base-table';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { LuCirclePlus } from 'react-icons/lu';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AiOutlineProduct } from 'react-icons/ai';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BaseInputSearch from '@/components/elements/base-input-search';
import BasePagination from '@/components/elements/base-pagination';
import { Breadcrumbs } from '@/components/elements/breadcrumbs';

const dataProducts = [
  {
    nomor: '01',
    name: 'John Doe',
    price: '$100',
    due_date: '2023-06-30',
    cycle: 'Per-bulan',
  },
  {
    nomor: '02',
    name: 'John Doe 2',
    price: '$300',
    cycle: 'Per-bulan',
  },
];

export default function ProductList() {
  const [paginationAndSearch, setPaginationAndSearch] = React.useState({
    page: 1,
    per_page: 10,
    search: '',
  });
  const breadcrumbItems = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Produk', link: '/master-data/product' },
  ];

  return (
    <Container className="space-y-4">
      <div className="space-y-1 bg-white p-6 rounded-md">
        <SectionHeading title="Produk" icon={<AiOutlineProduct />} />
        <SectionSubHeading>
          <Breadcrumbs items={breadcrumbItems} />
          <div className="space-x-4 flex items-center">
            <Button>
              <LuCirclePlus />
              <p>Tambah Produk</p>
            </Button>
          </div>
        </SectionSubHeading>
      </div>
      <div className="space-y-4 bg-white p-6 rounded-md">
        <div className="flex justify-between">
          <BaseInputSearch
            className="min-w-[300px] mt-2"
            placeholder={`Cari Produk...`}
            onChange={(val) =>
              setPaginationAndSearch((p) => ({ ...p, search: val }))
            }
          />
        </div>
        <BaseTable
          data={dataProducts}
          columns={[
            {
              accessorKey: 'nomor',
              header: 'No.',
            },
            {
              accessorKey: 'name',
              header: 'Name',
            },
            {
              accessorKey: 'price',
              header: 'Harga',
            },
            {
              accessorKey: 'cycle',
              header: 'Siklus',
            },
            {
              accessorKey: 'id',
              header: 'Aksi',
              cell: () => {
                return (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiOutlineDotsHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {/* <DropdownMenuSeparator /> */}
                      <DropdownMenuItem>
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
            (dataProducts.length < 10 ? 1 : dataProducts.length) as number
          }
          onPageChange={(page) => {
            setPaginationAndSearch((p) => ({ ...p, page }));
          }}
          totalItems={dataProducts.length as number}
          onItemsPerPageChange={(itemsPerPage) => {
            setPaginationAndSearch((p) => ({
              ...p,
              per_page: itemsPerPage,
              page: 1,
            }));
          }}
        />
      </div>
    </Container>
  );
}
