
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock = ({ code, className }: CodeBlockProps) => {
  return (
    <div className={cn("relative rounded-md overflow-hidden", className)}>
      <pre className="p-4 overflow-x-auto bg-code-background border border-code-border rounded-md">
        <code className="text-sm text-code-foreground font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
