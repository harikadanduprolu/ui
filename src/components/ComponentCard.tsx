
import { cn } from "@/lib/utils";
import CodeBlock from "./CodeBlock";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ComponentCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  className?: string;
}

const ComponentCard = ({ title, description, children, code, className }: ComponentCardProps) => {
  return (
    <Card className={cn("w-full mb-8", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 border rounded-md bg-background">
            <div className="flex flex-wrap gap-4">{children}</div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock code={code} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
