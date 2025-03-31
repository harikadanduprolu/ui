
import { useState } from "react";
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Badge } from "@/components/ui/badge";

const BadgePage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Badge</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Small status descriptors for UI elements.
        </p>

        <ComponentShowcase title="Badge Examples">
          <ComponentCard
            title="Badge Variants"
            description="Badges in different variants."
            code={`<Badge>Default</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="destructive">Destructive</Badge>\n<Badge variant="outline">Outline</Badge>`}
          >
            <Badge className="mr-2 mb-2">Default</Badge>
            <Badge className="mr-2 mb-2" variant="secondary">Secondary</Badge>
            <Badge className="mr-2 mb-2" variant="destructive">Destructive</Badge>
            <Badge className="mb-2" variant="outline">Outline</Badge>
          </ComponentCard>

          <ComponentCard
            title="Custom Badges"
            description="Badges with custom classes."
            code={`<Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>\n<Badge className="bg-green-500 hover:bg-green-600">Green</Badge>\n<Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>\n<Badge className="bg-orange-500 hover:bg-orange-600">Orange</Badge>`}
          >
            <Badge className="mr-2 mb-2 bg-blue-500 hover:bg-blue-600">Blue</Badge>
            <Badge className="mr-2 mb-2 bg-green-500 hover:bg-green-600">Green</Badge>
            <Badge className="mr-2 mb-2 bg-purple-500 hover:bg-purple-600">Purple</Badge>
            <Badge className="mb-2 bg-orange-500 hover:bg-orange-600">Orange</Badge>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default BadgePage;
