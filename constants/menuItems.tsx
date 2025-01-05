import { ImenuItems } from '@/types/menu';
import { Calendar, Inbox, Search, Settings } from 'lucide-react';
import { FaChartBar, FaDatabase, FaFileInvoiceDollar } from 'react-icons/fa6';
import { AiOutlineProduct } from 'react-icons/ai';
import { MdOutlineCategory } from 'react-icons/md';
import { PiUsers } from 'react-icons/pi';
import { TbMessageReportFilled } from 'react-icons/tb';

export const MENU_ITEMS: ImenuItems[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <FaChartBar />,
    isShow: true,
  },
  {
    title: 'Tagihan',
    url: '/invoice',
    icon: <FaFileInvoiceDollar />,
    isShow: true,
  },
  {
    title: 'Master Data',
    url: '/master-data',
    icon: <FaDatabase />,
    isShow: true,
    children: [
      {
        title: 'Produk',
        url: '/master-data/products',
        icon: <AiOutlineProduct />,
        isShow: true,
      },
      {
        title: 'Kategori',
        url: '/master-data/categories',
        icon: <MdOutlineCategory />,
        isShow: true,
      },
      {
        title: 'Pelanggan',
        url: '/master-data/customer',
        icon: <PiUsers />,
        isShow: true,
      },
    ],
  },
  {
    title: 'Pengaduan',
    url: '/complaint',
    icon: <TbMessageReportFilled />,
    isShow: true,
  },
  {
    title: 'Settings',
    url: '#',
    icon: <Settings />,
    isShow: true,
  },
];
