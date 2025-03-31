
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const ButtonsPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Buttons</h1>
        <p className="text-muted-foreground mb-8">
          Button components for user actions and interactions.
        </p>

        <ComponentShowcase
          title="Button Variants"
          description="Different visual styles for various use cases"
        >
          <ComponentCard
            title="Button Variants"
            description="Standard button variants: default, outline, secondary, ghost, link, and destructive."
            code={`<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
          >
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </ComponentCard>

          <ComponentCard
            title="Button Sizes"
            description="Buttons come in different sizes: default, small, large, and icon."
            code={`<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Loader2 className="h-4 w-4" /></Button>`}
          >
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Loader2 className="h-4 w-4" /></Button>
          </ComponentCard>

          <ComponentCard
            title="Button States"
            description="Buttons can be disabled or show loading states."
            code={`<Button disabled>Disabled</Button>
<Button>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>`}
          >
            <Button disabled>Disabled</Button>
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
          </ComponentCard>

          <ComponentCard
            title="Button with Icons"
            description="Buttons can include icons for additional visual cues."
            code={`<Button>
  <Loader2 className="mr-2 h-4 w-4" />
  Refresh
</Button>
<Button variant="outline">
  Settings
  <Loader2 className="ml-2 h-4 w-4" />
</Button>`}
          >
            <Button>
              <Loader2 className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline">
              Settings
              <Loader2 className="ml-2 h-4 w-4" />
            </Button>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default ButtonsPage;
