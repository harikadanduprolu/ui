
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputsPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Inputs</h1>
        <p className="text-muted-foreground mb-8">
          Input components for collecting user data.
        </p>

        <ComponentShowcase
          title="Text Inputs"
          description="Standard text input fields"
        >
          <ComponentCard
            title="Default Input"
            description="Standard input field for text entry"
            code={`<Input type="text" placeholder="Enter your name" />`}
          >
            <Input type="text" placeholder="Enter your name" />
          </ComponentCard>

          <ComponentCard
            title="Disabled Input"
            description="Input field that cannot be edited"
            code={`<Input disabled type="text" placeholder="Disabled input" />`}
          >
            <Input disabled type="text" placeholder="Disabled input" />
          </ComponentCard>

          <ComponentCard
            title="Input with Label"
            description="Input with an associated label for accessibility"
            code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>`}
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
          </ComponentCard>

          <ComponentCard
            title="File Input"
            description="Input for file uploads"
            code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </ComponentCard>
        </ComponentShowcase>

        <ComponentShowcase 
          title="Input Variants" 
          description="Different types of input fields for various data types"
        >
          <ComponentCard
            title="Password Input"
            description="Secure input for password entry"
            code={`<Input type="password" placeholder="Enter your password" />`}
          >
            <Input type="password" placeholder="Enter your password" />
          </ComponentCard>

          <ComponentCard
            title="Number Input"
            description="Input restricted to numerical values"
            code={`<Input type="number" placeholder="Enter amount" />`}
          >
            <Input type="number" placeholder="Enter amount" />
          </ComponentCard>

          <ComponentCard
            title="Date Input"
            description="Input for date selection"
            code={`<Input type="date" />`}
          >
            <Input type="date" />
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default InputsPage;
