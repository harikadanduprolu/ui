
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DialogPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Dialog</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>

        <ComponentShowcase title="Dialog Examples">
          <ComponentCard
            title="Basic Dialog"
            description="A simple dialog with a trigger button."
            code={`<Dialog>\n  <DialogTrigger asChild>\n    <Button>Open Dialog</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Basic Dialog</DialogTitle>\n      <DialogDescription>This is a simple dialog example with a title and description.</DialogDescription>\n    </DialogHeader>\n    <p>Dialog content goes here. This area can contain any content you need.</p>\n  </DialogContent>\n</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Basic Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Basic Dialog</DialogTitle>
                  <DialogDescription>
                    This is a simple dialog example with a title and description.
                  </DialogDescription>
                </DialogHeader>
                <p>Dialog content goes here. This area can contain any content you need.</p>
              </DialogContent>
            </Dialog>
          </ComponentCard>

          <ComponentCard
            title="Form Dialog"
            description="A dialog containing a form."
            code={`<Dialog>\n  <DialogTrigger asChild>\n    <Button>Edit Profile</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Edit profile</DialogTitle>\n      <DialogDescription>Make changes to your profile here.</DialogDescription>\n    </DialogHeader>\n    <div className="grid gap-4 py-4">\n      <div className="grid grid-cols-4 items-center gap-4">\n        <Label htmlFor="name" className="text-right">Name</Label>\n        <Input id="name" placeholder="Your name" className="col-span-3" />\n      </div>\n      <div className="grid grid-cols-4 items-center gap-4">\n        <Label htmlFor="username" className="text-right">Username</Label>\n        <Input id="username" placeholder="@username" className="col-span-3" />\n      </div>\n    </div>\n    <DialogFooter>\n      <Button type="submit">Save changes</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" placeholder="Your name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" placeholder="@username" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default DialogPage;
