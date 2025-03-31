
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AvatarPage = () => {
  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Avatar</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>

        <ComponentShowcase title="Avatar Examples">
          <ComponentCard
            title="Basic Avatar"
            description="An avatar with an image."
            code={`<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ComponentCard>

          <ComponentCard
            title="Avatar Variants"
            description="Avatars with different sizes and styles."
            code={`<div className="flex gap-4 items-center">\n  <Avatar className="h-6 w-6">\n    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n    <AvatarFallback>CN</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n    <AvatarFallback>CN</AvatarFallback>\n  </Avatar>\n  <Avatar className="h-14 w-14">\n    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n    <AvatarFallback>CN</AvatarFallback>\n  </Avatar>\n  <Avatar className="h-10 w-10 rounded-md">\n    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-md" />\n    <AvatarFallback className="rounded-md">CN</AvatarFallback>\n  </Avatar>\n</div>`}
          >
            <div className="flex gap-4 items-center">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 rounded-md">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-md" />
                <AvatarFallback className="rounded-md">CN</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Avatar Fallbacks"
            description="Avatars with fallback content."
            code={`<div className="flex gap-4">\n  <Avatar>\n    <AvatarFallback>JD</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarFallback>AB</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarFallback>TS</AvatarFallback>\n  </Avatar>\n</div>`}
          >
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default AvatarPage;
