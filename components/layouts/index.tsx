import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './sidebar';
import Navbar from './navbar/Navbar';
import { MENU_ITEMS } from '@/constants/menuItems';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Navbar />
      <AppSidebar items={MENU_ITEMS} />
      <main className="w-full min-h-screen">{children}</main>
    </SidebarProvider>
  );
}
