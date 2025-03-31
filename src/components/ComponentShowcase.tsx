
import { cn } from "@/lib/utils";

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const ComponentShowcase = ({ title, description, children, className }: ComponentShowcaseProps) => {
  return (
    <section className={cn("mb-12", className)}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
};

export default ComponentShowcase;
