import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';
import { FaPrint } from 'react-icons/fa6';
import { QRCodeCanvas } from 'qrcode.react';

const dataDetail = [
  {
    key: 'Subtotal',
    value: '100.000',
  },
  {
    key: 'Discount',
    value: '0',
  },
  {
    key: 'Biaya Admin',
    value: '0',
  },
  {
    key: 'Kode Unik',
    value: '0',
  },
  {
    key: 'Total',
    value: '100.000',
  },
];

export default function Bill() {
  const data = [
    {
      product: 'Paket Internet 1Mbps-Januari 2025',
      information: 'Paket Internet 1Mbps',
      quantity: '1',
      Subtotal: '150.000',
    },
  ];
  return (
    <div className="grid grid-cols-3 space-y-6">
      <div className="col-span-3 flex justify-between h-32">
        <div className="flex flex-col justify-center pl-6 flex-1">
          <FaPrint size={32} />
          BossNet
        </div>
        <div className="flex-1 text-xl justify-center flex">
          <p>Billings</p>
        </div>
      </div>
      <div className="col-span-3 border flex items-center">
        <div className="border-r flex-1 h-full px-3 py-6">
          <h3 className="text-3xl font-thin mb-6">Dari</h3>
          <ul>
            <li>Billings</li>
            <li>phone: 08876323222</li>
            <li>Email: admin@gmail.com</li>
          </ul>
        </div>
        <div className="border-r flex-1 h-full px-3 py-6">
          <h3 className="text-3xl font-thin mb-6">Kepada</h3>
          <ul>
            <li>Billings</li>
            <li>phone: 08876323222</li>
            <li>Email: admin@gmail.com</li>
          </ul>
        </div>
        <div className=" flex-1 h-full px-3 py-6">
          <h3 className="text-3xl font-thin mb-6">Tagihan</h3>
          <ul>
            <li>Billings</li>
            <li>phone: 08876323222</li>
            <li>Email: admin@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 w-full">
        <Table className="border">
          <TableHeader className="bg-neutral-400 hover:!bg-neutral-400">
            <TableRow className="hover:!bg-neutral-400">
              <TableHead className="text-neutral-900 font-semibold">
                Produk
              </TableHead>
              <TableHead className="text-neutral-900 font-semibold">
                Keterangan
              </TableHead>
              <TableHead className="text-neutral-900 font-semibold">
                Qty
              </TableHead>
              <TableHead className="text-neutral-900 font-semibold">
                Subtotal
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((res) => (
              <TableRow key={res.product}>
                <TableCell className="font-medium">{res.information}</TableCell>
                <TableCell>{res.information}</TableCell>
                <TableCell>{res.quantity}</TableCell>
                <TableCell className="text-right">{res.Subtotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className=" col-span-3 flex justify-between">
        <div className="border-r flex-1 h-full px-3 py-6">
          <h3 className=" font-semibold mb-6">Catatan:</h3>
          <QRCodeCanvas value="http://localhost:3000/invoice/bill" />
        </div>
        <div className="border px-3 text-sm">
          {dataDetail.map((item, index) => (
            <div key={index} className="flex border-b">
              <div className="w-[50%] py-2 border-r">
                <p
                  className={`min-w-[400px] ${
                    item.key === 'Total' ? 'font-semibold' : ''
                  }`}
                >
                  {item.key}
                </p>
              </div>
              <div
                className={`${
                  item.key === 'Total' ? 'font-semibold' : ''
                } px-2 flex items-center`}
              >
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
