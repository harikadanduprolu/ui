
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Cloud, CreditCard, LogOut, Mail, MessageSquare, PlusCircle, Settings, User, UserPlus } from "lucide-react";
import { useState } from "react";

const DropdownMenuPage = () => {
  const [position, setPosition] = useState("bottom");
  const [bookmarked, setBookmarked] = useState(true);
  const [read, setRead] = useState(false);

  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Dropdown Menu</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions — triggered by a button.
        </p>

        <ComponentShowcase title="Dropdown Menu Examples">
          <ComponentCard
            title="Basic Dropdown"
            description="A simple dropdown menu."
            code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open Menu</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-56">\n    <DropdownMenuLabel>My Account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuItem>Billing</DropdownMenuItem>\n    <DropdownMenuItem>Settings</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Logout</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ComponentCard>

          <ComponentCard
            title="Advanced Dropdown with Icons"
            description="A dropdown menu with icons and keyboard shortcuts."
            code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-56">\n    <DropdownMenuLabel>My Account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuGroup>\n      <DropdownMenuItem>\n        <User className="mr-2 h-4 w-4" />\n        <span>Profile</span>\n        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>\n      </DropdownMenuItem>\n      <DropdownMenuItem>\n        <CreditCard className="mr-2 h-4 w-4" />\n        <span>Billing</span>\n        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>\n      </DropdownMenuItem>\n      <DropdownMenuItem>\n        <Settings className="mr-2 h-4 w-4" />\n        <span>Settings</span>\n        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>\n      </DropdownMenuItem>\n    </DropdownMenuGroup>\n    <DropdownMenuSeparator />\n    <DropdownMenuGroup>\n      <DropdownMenuItem>\n        <UserPlus className="mr-2 h-4 w-4" />\n        <span>Invite users</span>\n      </DropdownMenuItem>\n      <DropdownMenuItem>\n        <MessageSquare className="mr-2 h-4 w-4" />\n        <span>New message</span>\n      </DropdownMenuItem>\n      <DropdownMenuSub>\n        <DropdownMenuSubTrigger>\n          <PlusCircle className="mr-2 h-4 w-4" />\n          <span>New Team</span>\n        </DropdownMenuSubTrigger>\n        <DropdownMenuSubContent>\n          <DropdownMenuItem>\n            <Mail className="mr-2 h-4 w-4" />\n            <span>Email</span>\n          </DropdownMenuItem>\n          <DropdownMenuItem>\n            <MessageSquare className="mr-2 h-4 w-4" />\n            <span>Message</span>\n          </DropdownMenuItem>\n          <DropdownMenuSeparator />\n          <DropdownMenuItem>\n            <Cloud className="mr-2 h-4 w-4" />\n            <span>More...</span>\n          </DropdownMenuItem>\n        </DropdownMenuSubContent>\n      </DropdownMenuSub>\n    </DropdownMenuGroup>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>\n      <LogOut className="mr-2 h-4 w-4" />\n      <span>Log out</span>\n      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>\n    </DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>New message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Cloud className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ComponentCard>

          <ComponentCard
            title="Interactive Dropdown Items"
            description="Dropdown menu with radio items and checkboxes."
            code={`const [position, setPosition] = useState("bottom")\nconst [bookmarked, setBookmarked] = useState(true)\nconst [read, setRead] = useState(false)\n\n<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-56">\n    <DropdownMenuLabel>Appearance</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuCheckboxItem\n      checked={bookmarked}\n      onCheckedChange={setBookmarked}\n    >\n      Bookmark page\n    </DropdownMenuCheckboxItem>\n    <DropdownMenuCheckboxItem\n      checked={read}\n      onCheckedChange={setRead}\n    >\n      Mark as read\n    </DropdownMenuCheckboxItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuLabel>Position</DropdownMenuLabel>\n    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>\n      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>\n      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>\n      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>\n    </DropdownMenuRadioGroup>\n  </DropdownMenuContent>\n</DropdownMenu>`}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={bookmarked}
                  onCheckedChange={setBookmarked}
                >
                  Bookmark page
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={read}
                  onCheckedChange={setRead}
                >
                  Mark as read
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Position</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default DropdownMenuPage;
