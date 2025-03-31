
import { categorizedNavItems } from '@/navigation';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/MainLayout';
import { sidebarItems } from '@/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            UI Spectacle
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            A beautiful showcase of shadcn/ui components. Browse, explore, and learn how to use these
            beautifully designed UI components in your projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Components</CardTitle>
                <CardDescription>Form controls, buttons, and input elements</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {categorizedNavItems['Inputs']?.slice(0, 5).map((item) => (
                  <Link key={item.href} to={item.href} className="flex items-center justify-between py-1.5 text-sm hover:underline">
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/buttons">View Input Components</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Layout Components</CardTitle>
                <CardDescription>Structural components for your interface</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {categorizedNavItems['Layout']?.slice(0, 5).map((item) => (
                  <Link key={item.href} to={item.href} className="flex items-center justify-between py-1.5 text-sm hover:underline">
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cards">View Layout Components</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Display Components</CardTitle>
                <CardDescription>Components for displaying content</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {categorizedNavItems['Display']?.slice(0, 5).map((item) => (
                  <Link key={item.href} to={item.href} className="flex items-center justify-between py-1.5 text-sm hover:underline">
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/badge">View Display Components</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Overlay Components</CardTitle>
                <CardDescription>Popups, modals and overlay elements</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {categorizedNavItems['Overlay']?.slice(0, 5).map((item) => (
                  <Link key={item.href} to={item.href} className="flex items-center justify-between py-1.5 text-sm hover:underline">
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/dialog">View Overlay Components</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback Components</CardTitle>
                <CardDescription>Notifications, alerts, and feedback elements</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {categorizedNavItems['Feedback']?.slice(0, 5).map((item) => (
                  <Link key={item.href} to={item.href} className="flex items-center justify-between py-1.5 text-sm hover:underline">
                    <span>{item.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/alert">View Feedback Components</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
