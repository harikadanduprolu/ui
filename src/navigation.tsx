
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Check,
  ChevronsUpDown,
  Clock,
  Contact,
  CreditCard,
  CrownIcon,
  FileText,
  Home,
  Layers,
  LogIn,
  MessageSquare,
  Pencil,
  Radio,
  Sliders,
  SlidersHorizontal,
  SquareAsterisk,
  TableIcon,
  ToggleLeft,
  UserPlus,
  type LucideIcon,
  LayoutDashboard,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  category?: string;
  children?: NavItem[];
}

// UI Elements submenu items
export const uiElementItems: NavItem[] = [
  {
    title: "Buttons",
    href: "/buttons",
    icon: SquareAsterisk,
    category: "Inputs",
  },
  {
    title: "Inputs",
    href: "/inputs",
    icon: Pencil,
    category: "Inputs",
  },
  {
    title: "Checkbox",
    href: "/checkbox",
    icon: Check,
    category: "Inputs",
  },
  {
    title: "Select",
    href: "/select",
    icon: ChevronsUpDown,
    category: "Inputs",
  },
  {
    title: "Switch",
    href: "/switch",
    icon: ToggleLeft,
    category: "Inputs",
  },
  {
    title: "Radio Group",
    href: "/radio-group",
    icon: Radio,
    category: "Inputs",
  },
  {
    title: "Slider",
    href: "/slider",
    icon: SlidersHorizontal,
    category: "Inputs",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: CreditCard,
    category: "Layout",
  },
  {
    title: "Dialog",
    href: "/dialog",
    icon: MessageSquare,
    category: "Overlay",
  },
  {
    title: "Alert",
    href: "/alert",
    icon: AlertCircle,
    category: "Feedback",
  },
  {
    title: "Tabs",
    href: "/tabs",
    icon: Layers,
    category: "Layout",
  },
  {
    title: "Avatar",
    href: "/avatar",
    icon: Contact,
    category: "Display",
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
    category: "Display",
  },
  {
    title: "Table",
    href: "/table",
    icon: TableIcon,
    category: "Display",
  },
];

// Main navigation items
export const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/",
    icon: Home,
    category: "Introduction",
  },
  {
    title: "UI Elements",
    href: "#",
    icon: LayoutDashboard,
    category: "Components",
    children: uiElementItems,
  },
  {
    title: "Premium Models",
    href: "/premium-models",
    icon: CrownIcon,
    category: "Premium",
  },
  {
    title: "Login",
    href: "/login",
    icon: LogIn,
    category: "Auth",
  },
  {
    title: "Sign Up",
    href: "/sign-up",
    icon: UserPlus,
    category: "Auth",
  },
];

export const categorizedNavItems = navItems.reduce<Record<string, NavItem[]>>(
  (acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  },
  {}
);

export const sidebarItems = navItems;
