
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ToastPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Toast</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A succinct message that is displayed temporarily.
        </p>

        <ComponentShowcase title="Toast Examples">
          <ComponentCard
            title="Simple Toast"
            description="A simple toast notification."
            code={`<Button\n  onClick={() => {\n    toast({\n      title: "Toast Title",\n      description: "Toast Description",\n    })\n  }}\n>\n  Show Toast\n</Button>`}
          >
            <Button
              onClick={() => {
                toast({
                  title: "Toast Title",
                  description: "Toast Description",
                })
              }}
            >
              Show Simple Toast
            </Button>
          </ComponentCard>

          <ComponentCard
            title="Toast Variants"
            description="Different types of toast notifications."
            code={`<div className="flex flex-wrap gap-2">\n  <Button\n    onClick={() => {\n      toast({\n        title: "Success!",\n        description: "Your changes have been saved.",\n        className: "bg-green-500 border-green-500",\n      })\n    }}\n    className="bg-green-500 hover:bg-green-600"\n  >\n    Success Toast\n  </Button>\n  <Button\n    onClick={() => {\n      toast({\n        title: "Error!",\n        description: "There was a problem with your request.",\n        variant: "destructive",\n      })\n    }}\n    variant="destructive"\n  >\n    Error Toast\n  </Button>\n  <Button\n    onClick={() => {\n      toast({\n        title: "Info",\n        description: "Just so you know...",\n        className: "bg-blue-500 border-blue-500",\n      })\n    }}\n    className="bg-blue-500 hover:bg-blue-600"\n  >\n    Info Toast\n  </Button>\n</div>`}
          >
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  toast({
                    title: "Success!",
                    description: "Your changes have been saved.",
                    className: "bg-green-500 border-green-500",
                  })
                }}
                className="bg-green-500 hover:bg-green-600"
              >
                Success Toast
              </Button>
              <Button
                onClick={() => {
                  toast({
                    title: "Error!",
                    description: "There was a problem with your request.",
                    variant: "destructive",
                  })
                }}
                variant="destructive"
              >
                Error Toast
              </Button>
              <Button
                onClick={() => {
                  toast({
                    title: "Info",
                    description: "Just so you know...",
                    className: "bg-blue-500 border-blue-500",
                  })
                }}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Info Toast
              </Button>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default ToastPage;
