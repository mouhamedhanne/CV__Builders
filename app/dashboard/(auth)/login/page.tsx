"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, LogIn } from "lucide-react";
import { signInUser } from "@/authentification/auth.supbase";
import { useState } from "react";
import { faGitlabSquare } from "@fortawesome/free-brands-svg-icons/faGitlabSquare";

const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must contain at least 8 chars"),
});

type LoginformValue = z.infer<typeof LoginFormSchema>;

const LoginPage = () => {
  const [isLoading, setIsloading] = useState(false);

  const form = useForm<LoginformValue>({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleSubmit = async (values: LoginformValue) => {
    console.log(values);
    try {
      setIsloading(true);
      await signInUser(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
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
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="gap-2" disabled={isLoading}>
              {isLoading ? (
                <Loader2 size="16" className="animate-spin" />
              ) : (
                <LogIn size="16" />
              )}
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default LoginPage;

{
  /**
const form =
    useForm <
    z.infer <
    typeof loginFormSchema >> { resolver: zodResolver(loginFormSchema) };

 */
}
