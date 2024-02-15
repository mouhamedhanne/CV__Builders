import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonItem from "@/components/ui/ButtonList/ButtonItem";
import useSession from "@/hooks/useSession";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { updateUserEmail } from "@/authentification/auth.supbase";

const UpdateEmailSchema = z.object({
  email: z
    .string({ required_error: "Required" })
    .email("Invalid email address"),
  password: z.string().min(8, "password must contain at least 8 chars"),
});

type UpdateEmailFormValues = z.infer<typeof UpdateEmailSchema>;

const UpdateEmailButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading, refreshSession } = useSession();

  const form = useForm<UpdateEmailFormValues>({
    mode: "onSubmit",
    resolver: zodResolver(UpdateEmailSchema),
  });

  const handleSubmit = async (values: UpdateEmailFormValues) => {
    try {
      setIsLoading(true);
      await updateUserEmail(values.email, {
        email: user?.email || "",
        password: values.password,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    refreshSession();
    setIsDialogOpen(isOpen);
  };

  const handleOpen = () => setIsDialogOpen(true);

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <ButtonItem
          onClick={handleOpen}
          value={user?.email}
          isLoading={loading}
          className="block justify-between items-center lg:flex"
        >
          Email
        </ButtonItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>Update email</DialogTitle>
              <DialogDescription>Update your email address</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="exemple@exemple.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button disabled={isLoading} className="gap-2">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save size="16" />
                )}
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEmailButton;
