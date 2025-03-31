
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import ComponentCard from "@/components/ComponentCard";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SliderPage = () => {
  const [singleValue, setSingleValue] = useState(50);
  const [rangeValue, setRangeValue] = useState([25, 75]);
  const [steppedValue, setSteppedValue] = useState(25);

  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Slider</h1>
        <p className="text-muted-foreground mb-8">
          Slider components for selecting values from a range.
        </p>

        <ComponentShowcase
          title="Slider Variants"
          description="Different styles and configurations of sliders"
        >
          <ComponentCard
            title="Basic Slider"
            description="A simple slider for selecting a single value"
            code={`const [value, setValue] = useState(50)

<Slider
  defaultValue={[50]}
  max={100}
  step={1}
  onValueChange={(value) => setValue(value[0])}
/>

<div className="mt-2">Value: {value}</div>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <Slider
                defaultValue={[singleValue]}
                max={100}
                step={1}
                onValueChange={(value) => setSingleValue(value[0])}
              />
              <div className="text-sm">Value: {singleValue}</div>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Range Slider"
            description="Select a range between two values"
            code={`const [value, setValue] = useState([25, 75])

<Slider
  defaultValue={[25, 75]}
  max={100}
  step={1}
  onValueChange={setValue}
/>

<div className="mt-2">Range: {value[0]} - {value[1]}</div>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <Slider
                defaultValue={rangeValue}
                max={100}
                step={1}
                onValueChange={setRangeValue}
              />
              <div className="text-sm">Range: {rangeValue[0]} - {rangeValue[1]}</div>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Stepped Slider"
            description="Slider with defined steps"
            code={`const [value, setValue] = useState(25)

<Slider
  defaultValue={[25]}
  max={100}
  step={25}
  onValueChange={(value) => setValue(value[0])}
/>

<div className="mt-2">Value: {value}</div>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <Slider
                defaultValue={[steppedValue]}
                max={100}
                step={25}
                onValueChange={(value) => setSteppedValue(value[0])}
              />
              <div className="text-sm">Value: {steppedValue}</div>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Disabled Slider"
            description="A slider that cannot be interacted with"
            code={`<Slider
  defaultValue={[50]}
  max={100}
  step={1}
  disabled
/>`}
          >
            <div className="w-full max-w-sm">
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                disabled
              />
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default SliderPage;
