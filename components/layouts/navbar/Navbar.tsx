'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import React from 'react';
import { FaRegBell } from 'react-icons/fa6';

export default function Navbar() {
  const { open } = useSidebar();
  return (
    <div
      className={cn(
        'flex justify-between items-center bg-sidebar w-full fixed top-0 right-0 h-16',
        open ? 'pl-64' : 'pl-14',
      )}
    >
      <SidebarTrigger />
      <div className="mr-6 flex justify-between items-center bg-background  shadow-md rounded-full py-1 px-3 w-[100px]">
        <div className="">
          <FaRegBell size={24} />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
