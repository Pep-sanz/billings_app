'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  useSidebar,
} from '@/components/ui/sidebar';
import { ImenuItems } from '@/types/menu';
import { usePathname } from 'next/navigation';
import { FaPrint } from 'react-icons/fa6';

export function AppSidebar({ items }: { items: ImenuItems[] }) {
  const pathName = usePathname();
  const { open } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center flex-row h-16">
        <FaPrint />
        <p className={`${open ? 'block' : 'hidden'}`}>Billings</p>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <div key={item.title}>
                  {item.children && item.children.length > 0 ? (
                    // Collapsible Menu Item
                    <Collapsible defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger
                          asChild
                          className={`${
                            item.children
                              .map((item) => item.url)
                              .filter((f) => f === pathName)
                              ? 'text-neutral-600'
                              : 'text-black'
                          }`}
                        >
                          <SidebarMenuButton>
                            {item.icon}
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {item.children.map((subItem) => (
                            <SidebarMenuSub key={subItem.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={subItem.url === pathName}
                                className={`${
                                  subItem.url === pathName
                                    ? 'text-black'
                                    : 'text-neutral-600'
                                }`}
                              >
                                <a href={subItem.url}>
                                  {subItem.icon}
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuSub>
                          ))}
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    // Normal Menu Item
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={item.url === pathName}
                        className={`${
                          item.url === pathName
                            ? 'text-black'
                            : 'text-neutral-600'
                        }`}
                      >
                        <a href={item.url}>
                          {item.icon}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
