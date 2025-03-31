
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Switch</h1>
        <p className="text-muted-foreground mb-8">
          Switch components for toggling between two states.
        </p>

        <ComponentShowcase
          title="Switch Variants"
          description="Different styles and states of switches"
        >
          <ComponentCard
            title="Basic Switch"
            description="A simple toggle switch"
            code={`<Switch />`}
          >
            <Switch />
          </ComponentCard>

          <ComponentCard
            title="Switch with Label"
            description="Switch with an associated label"
            code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Disabled Switch"
            description="Switch that cannot be toggled"
            code={`<div className="flex items-center space-x-2">
  <Switch id="disabled-mode" disabled />
  <Label htmlFor="disabled-mode" className="text-muted-foreground">
    Disabled Mode
  </Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Switch id="disabled-mode" disabled />
              <Label htmlFor="disabled-mode" className="text-muted-foreground">
                Disabled Mode
              </Label>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Checked Switch"
            description="Switch in the on state"
            code={`<div className="flex items-center space-x-2">
  <Switch id="checked-mode" defaultChecked />
  <Label htmlFor="checked-mode">Active Mode</Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Switch id="checked-mode" defaultChecked />
              <Label htmlFor="checked-mode">Active Mode</Label>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default SwitchPage;
