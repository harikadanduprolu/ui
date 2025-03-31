
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export interface SidebarItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  children?: SidebarItem[];
}

interface SidebarNavProps {
  items: SidebarItem[];
  className?: string;
}

export function SidebarNav({ items, className }: SidebarNavProps) {
  const location = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <nav className={cn("grid gap-1", className)}>
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItem === item.title;
        
        return (
          <div key={item.title}>
            {hasChildren ? (
              <button
                onClick={() => toggleExpand(item.title)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-all hover:bg-sidebar-accent",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </div>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-sidebar-accent",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.title}</span>
              </Link>
            )}

            {hasChildren && isExpanded && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children!.map((child) => {
                  const isChildActive = location.pathname === child.href;
                  
                  return (
                    <Link
                      key={child.title}
                      to={child.href}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-all hover:bg-sidebar-accent",
                        isChildActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground"
                      )}
                    >
                      {child.icon && <child.icon className="h-3.5 w-3.5" />}
                      <span>{child.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
