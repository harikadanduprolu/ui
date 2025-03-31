
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CardsPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Cards</h1>
        <p className="text-muted-foreground mb-8">
          Card components for displaying content in containers.
        </p>

        <ComponentShowcase
          title="Card Types"
          description="Different card styles and layouts"
        >
          <ComponentCard
            title="Simple Card"
            description="Basic card with header and content"
            code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content with some information.</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content with some information.</p>
              </CardContent>
            </Card>
          </ComponentCard>

          <ComponentCard
            title="Card with Footer"
            description="Card with content and a footer with actions"
            code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your information to create an account.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Sign Up</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Enter your information to create an account.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Enter your email" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Sign Up</Button>
              </CardFooter>
            </Card>
          </ComponentCard>

          <ComponentCard
            title="Card with Tabs"
            description="Card containing tabbed content"
            code={`<Card className="w-[400px]">
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
    <CardDescription>Manage your account preferences.</CardDescription>
  </CardHeader>
  <CardContent>
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="johndoe" />
        </div>
      </TabsContent>
      <TabsContent value="preferences" className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Input id="theme" defaultValue="Light" />
        </div>
      </TabsContent>
    </Tabs>
  </CardContent>
  <CardFooter>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  </TabsList>
                  <TabsContent value="profile" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="johndoe" />
                    </div>
                  </TabsContent>
                  <TabsContent value="preferences" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Input id="theme" defaultValue="Light" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default CardsPage;
