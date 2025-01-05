'use client';

import Container from '@/components/elements/Container';
import OpenLayersMap from '@/components/elements/maps';
import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { FaChartBar } from 'react-icons/fa6';
import { IoPrintOutline } from 'react-icons/io5';
import { LuCirclePlus } from 'react-icons/lu';

export default function Dashboard() {
  return (
    <Container className="space-y-6">
      <div className="space-y-1 bg-white p-6 rounded-md">
        <SectionHeading title="Dashboard" icon={<FaChartBar />} />
        <SectionSubHeading>
          <p>Kelola Tagihan Anda</p>
          <div className="space-x-4 flex items-center">
            <Button>
              <LuCirclePlus />
              <p>Tambah Transaksi</p>
            </Button>
            <Button>
              <IoPrintOutline />
              <p>print</p>
            </Button>
          </div>
        </SectionSubHeading>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <Card className="w-[250px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pengaduan</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pendaftaran Pelanggan
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center">
          <div className="">test</div>
          <OpenLayersMap />
        </div>
      </div>
    </Container>
  );
}
