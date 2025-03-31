
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioGroupPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Radio Group</h1>
        <p className="text-muted-foreground mb-8">
          Radio group components for selecting a single option from a list.
        </p>

        <ComponentShowcase
          title="Radio Group Variants"
          description="Different styles and configurations of radio groups"
        >
          <ComponentCard
            title="Basic Radio Group"
            description="A simple radio group for selecting an option"
            code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </ComponentCard>

          <ComponentCard
            title="Vertical Radio Group"
            description="A stacked vertical radio group"
            code={`<RadioGroup defaultValue="comfortable" className="space-y-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="comfortable" className="space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </ComponentCard>

          <ComponentCard
            title="Disabled Radio Group Items"
            description="Radio group with disabled options"
            code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="r4" />
    <Label htmlFor="r4">Enabled Option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="r5" disabled />
    <Label htmlFor="r5" className="text-muted-foreground">Disabled Option</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="r4" />
                <Label htmlFor="r4">Enabled Option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="r5" disabled />
                <Label htmlFor="r5" className="text-muted-foreground">Disabled Option</Label>
              </div>
            </RadioGroup>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default RadioGroupPage;
