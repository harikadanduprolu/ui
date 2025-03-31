
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TabsPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Tabs</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A set of layered sections of content that display one panel at a time.
        </p>

        <ComponentShowcase title="Tabs Examples">
          <ComponentCard
            title="Basic Tabs"
            description="Simple tabs with content."
            code={`<Tabs defaultValue="account" className="w-full">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">\n    <p className="p-4">Make changes to your account here.</p>\n  </TabsContent>\n  <TabsContent value="password">\n    <p className="p-4">Change your password here.</p>\n  </TabsContent>\n</Tabs>`}
          >
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <p className="p-4">Make changes to your account here.</p>
              </TabsContent>
              <TabsContent value="password">
                <p className="p-4">Change your password here.</p>
              </TabsContent>
            </Tabs>
          </ComponentCard>

          <ComponentCard
            title="Tabs with Cards"
            description="Tabs with card content."
            code={`<Tabs defaultValue="account" className="w-full">\n  <TabsList className="grid w-full grid-cols-2">\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">\n    <Card>\n      <CardHeader>\n        <CardTitle>Account</CardTitle>\n        <CardDescription>\n          Make changes to your account here. Click save when you&apos;re done.\n        </CardDescription>\n      </CardHeader>\n      <CardContent className="space-y-2">\n        <div className="space-y-1">\n          <Label htmlFor="name">Name</Label>\n          <Input id="name" defaultValue="John Doe" />\n        </div>\n        <div className="space-y-1">\n          <Label htmlFor="username">Username</Label>\n          <Input id="username" defaultValue="@johndoe" />\n        </div>\n      </CardContent>\n      <CardFooter>\n        <Button>Save changes</Button>\n      </CardFooter>\n    </Card>\n  </TabsContent>\n  <TabsContent value="password">\n    <Card>\n      <CardHeader>\n        <CardTitle>Password</CardTitle>\n        <CardDescription>Change your password here.</CardDescription>\n      </CardHeader>\n      <CardContent className="space-y-2">\n        <div className="space-y-1">\n          <Label htmlFor="current">Current password</Label>\n          <Input id="current" type="password" />\n        </div>\n        <div className="space-y-1">\n          <Label htmlFor="new">New password</Label>\n          <Input id="new" type="password" />\n        </div>\n      </CardContent>\n      <CardFooter>\n        <Button>Save password</Button>\n      </CardFooter>\n    </Card>\n  </TabsContent>\n</Tabs>`}
          >
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you&apos;re done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@johndoe" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default TabsPage;
