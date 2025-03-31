
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Accordion</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>

        <ComponentShowcase title="Accordion Examples">
          <ComponentCard
            title="Basic Accordion"
            description="A simple accordion component."
            code={`<Accordion type="single" collapsible className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>\n      Yes. It adheres to the WAI-ARIA design pattern.\n    </AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>Is it styled?</AccordionTrigger>\n    <AccordionContent>\n      Yes. It comes with default styles that matches the other components' aesthetic.\n    </AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-3">\n    <AccordionTrigger>Is it animated?</AccordionTrigger>\n    <AccordionContent>\n      Yes. It's animated by default, but you can disable it if you prefer.\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>`}
          >
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other components' aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Multiple Accordion"
            description="Accordion that can have multiple items open."
            code={`<Accordion type="multiple" className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Section 1</AccordionTrigger>\n    <AccordionContent>\n      Content for section 1. Multiple sections can be opened simultaneously.\n    </AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>Section 2</AccordionTrigger>\n    <AccordionContent>\n      Content for section 2. Try opening this while section 1 is also open.\n    </AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-3">\n    <AccordionTrigger>Section 3</AccordionTrigger>\n    <AccordionContent>\n      Content for section 3. All three sections can be open at the same time.\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>`}
          >
            <div className="w-full">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Section 1</AccordionTrigger>
                  <AccordionContent>
                    Content for section 1. Multiple sections can be opened simultaneously.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Section 2</AccordionTrigger>
                  <AccordionContent>
                    Content for section 2. Try opening this while section 1 is also open.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Section 3</AccordionTrigger>
                  <AccordionContent>
                    Content for section 3. All three sections can be open at the same time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default AccordionPage;
