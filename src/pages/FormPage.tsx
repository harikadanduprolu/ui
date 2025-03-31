
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    }),
  bio: z.string().max(160, {
    message: "Bio must not be longer than 160 characters.",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const FormPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      terms: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Form submitted!",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Form</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Building forms with validation using React Hook Form and Zod.
        </p>

        <ComponentShowcase title="Form Examples">
          <ComponentCard
            title="Basic Form"
            description="A simple form with validation."
            code={`function BasicForm() {\n  return (\n    <form className="space-y-6">\n      <div className="grid gap-2">\n        <Label htmlFor="email">Email</Label>\n        <Input type="email" id="email" placeholder="m@example.com" required />\n      </div>\n      <div className="grid gap-2">\n        <Label htmlFor="password">Password</Label>\n        <Input type="password" id="password" required />\n      </div>\n      <div className="flex items-center space-x-2">\n        <Checkbox id="terms" />\n        <label\n          htmlFor="terms"\n          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"\n        >\n          Accept terms and conditions\n        </label>\n      </div>\n      <Button type="submit">Login</Button>\n    </form>\n  )\n}`}
          >
            <div className="w-full max-w-md mx-auto">
              <form className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
                <Button type="submit">Login</Button>
              </form>
            </div>
          </ComponentCard>

          <ComponentCard
            title="React Hook Form with Zod Validation"
            description="A form with validation using React Hook Form and Zod."
            code={`const FormSchema = z.object({\n  username: z\n    .string()\n    .min(2, {\n      message: "Username must be at least 2 characters.",\n    })\n    .max(30, {\n      message: "Username must not be longer than 30 characters.",\n    }),\n  email: z\n    .string()\n    .email({\n      message: "Please enter a valid email address.",\n    }),\n  bio: z.string().max(160, {\n    message: "Bio must not be longer than 160 characters.",\n  }),\n  terms: z.boolean().refine((val) => val === true, {\n    message: "You must accept the terms and conditions.",\n  }),\n})\n\nfunction ProfileForm() {\n  const form = useForm<z.infer<typeof FormSchema>>({\n    resolver: zodResolver(FormSchema),\n    defaultValues: {\n      username: "",\n      email: "",\n      bio: "",\n      terms: false,\n    },\n  })\n\n  function onSubmit(data: z.infer<typeof FormSchema>) {\n    toast({\n      title: "Form submitted!",\n      description: (\n        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">\n          <code className="text-white">{JSON.stringify(data, null, 2)}</code>\n        </pre>\n      ),\n    })\n  }\n\n  return (\n    <Form {...form}>\n      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">\n        <FormField\n          control={form.control}\n          name="username"\n          render={({ field }) => (\n            <FormItem>\n              <FormLabel>Username</FormLabel>\n              <FormControl>\n                <Input placeholder="shadcn" {...field} />\n              </FormControl>\n              <FormDescription>\n                This is your public display name.\n              </FormDescription>\n              <FormMessage />\n            </FormItem>\n          )}\n        />\n        <FormField\n          control={form.control}\n          name="email"\n          render={({ field }) => (\n            <FormItem>\n              <FormLabel>Email</FormLabel>\n              <FormControl>\n                <Input placeholder="m@example.com" {...field} />\n              </FormControl>\n              <FormDescription>\n                We'll never share your email with anyone else.\n              </FormDescription>\n              <FormMessage />\n            </FormItem>\n          )}\n        />\n        <FormField\n          control={form.control}\n          name="bio"\n          render={({ field }) => (\n            <FormItem>\n              <FormLabel>Bio</FormLabel>\n              <FormControl>\n                <Textarea\n                  placeholder="Tell us a little bit about yourself"\n                  className="resize-none"\n                  {...field}\n                />\n              </FormControl>\n              <FormDescription>\n                You can <span>@mention</span> other users and organizations.\n              </FormDescription>\n              <FormMessage />\n            </FormItem>\n          )}\n        />\n        <FormField\n          control={form.control}\n          name="terms"\n          render={({ field }) => (\n            <FormItem className="flex flex-row items-start space-x-3 space-y-0">\n              <FormControl>\n                <Checkbox\n                  checked={field.value}\n                  onCheckedChange={field.onChange}\n                />\n              </FormControl>\n              <div className="space-y-1 leading-none">\n                <FormLabel>\n                  Accept terms and conditions\n                </FormLabel>\n                <FormDescription>\n                  You agree to our Terms of Service and Privacy Policy.\n                </FormDescription>\n              </div>\n              <FormMessage />\n            </FormItem>\n          )}\n        />\n        <Button type="submit">Submit</Button>\n      </form>\n    </Form>\n  )\n}`}
          >
            <div className="w-full max-w-md mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="m@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          We'll never share your email with anyone else.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about yourself"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          You can <span>@mention</span> other users and organizations.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Accept terms and conditions
                          </FormLabel>
                          <FormDescription>
                            You agree to our Terms of Service and Privacy Policy.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default FormPage;
