
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Checkbox</h1>
        <p className="text-muted-foreground mb-8">
          Checkbox components for selecting multiple options.
        </p>

        <ComponentShowcase
          title="Checkbox Variants"
          description="Different styles and states of checkboxes"
        >
          <ComponentCard
            title="Basic Checkbox"
            description="A simple checkbox for selecting an option"
            code={`<Checkbox id="terms" />`}
          >
            <Checkbox id="terms" />
          </ComponentCard>

          <ComponentCard
            title="Checkbox with Label"
            description="Checkbox with an associated label"
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms1" />
  <Label htmlFor="terms1">Accept terms and conditions</Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="terms1" />
              <Label htmlFor="terms1">Accept terms and conditions</Label>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Disabled Checkbox"
            description="Checkbox that cannot be interacted with"
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms2" disabled />
  <Label htmlFor="terms2" className="text-muted-foreground">
    Accept terms and conditions
  </Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" disabled />
              <Label htmlFor="terms2" className="text-muted-foreground">
                Accept terms and conditions
              </Label>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Checked Checkbox"
            description="Checkbox in a checked state"
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms3" defaultChecked />
  <Label htmlFor="terms3">
    I agree to the terms and conditions
  </Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="terms3" defaultChecked />
              <Label htmlFor="terms3">
                I agree to the terms and conditions
              </Label>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default CheckboxPage;
