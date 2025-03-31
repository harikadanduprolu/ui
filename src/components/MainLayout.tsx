
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { SidebarItem, SidebarNav } from './SidebarNav';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Sheet, SheetContent } from './ui/sheet';
import { MainNav } from './MainNav';
import { PremiumPlanModal } from './PremiumPlanModal';

interface MainLayoutProps {
  children: React.ReactNode;
  items: SidebarItem[];
}

export function MainLayout({ children, items }: MainLayoutProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar */}
      {isMobile && (
        <>
          <header className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="font-semibold">UI Spectacle</div>
            <div className="grow"></div>
            <MainNav />
          </header>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="w-72 p-0">
              <div className="space-y-4 py-4">
                <div className="px-4 py-2">
                  <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                    UI Spectacle
                  </h2>
                  <div className="text-muted-foreground text-xs px-2 mb-4">
                    A showcase of shadcn/ui components
                  </div>
                  <SidebarNav items={items} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}

      {/* Desktop sidebar */}
      {!isMobile && (
        <>
          <aside
            className={cn(
              "fixed inset-y-0 z-30 hidden md:flex w-72 flex-col border-r bg-sidebar transition-all md:relative"
            )}
          >
            <div className="flex flex-col px-4 py-6">
              <div className="px-2">
                <h2 className="mb-2 text-lg font-semibold tracking-tight">
                  UI Spectacle
                </h2>
                <p className="text-muted-foreground text-xs mb-6">
                  A showcase of shadcn/ui components
                </p>
              </div>
              <SidebarNav items={items} />
            </div>
          </aside>
          <header className="fixed top-0 left-72 right-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-6">
            <div className="grow"></div>
            <MainNav />
          </header>
        </>
      )}

      {/* Main content */}
      <main
        className={cn(
          "flex flex-col w-full",
          isMobile ? "pt-14" : "pt-14"
        )}
      >
        <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 md:px-8 md:py-10">
          {children}
        </div>
      </main>
      
      {/* Premium Plan Modal */}
      <PremiumPlanModal />
    </div>
  );
}
