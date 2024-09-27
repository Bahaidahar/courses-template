"use client";

import { PropsWithChildren, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { usePathname, useRouter } from "next/navigation";

export const AuthDialog = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push("user/baha");
    console.log("Form submitted");
    setIsOpen(false);
  };
  if (pathname === "/") {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="backdrop-blur-md sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Account</DialogTitle>
            <DialogDescription>
              Login to your account or create a new one.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col items-start gap-2">
                    <Label htmlFor="login-email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label htmlFor="login-password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Login</Button>
                </DialogFooter>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col items-start gap-2">
                    <Label htmlFor="register-name" className="text-right">
                      Name
                    </Label>
                    <Input id="register-name" className="col-span-3" required />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label htmlFor="register-email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Label htmlFor="register-password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="register-password"
                      type="password"
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Register</Button>
                </DialogFooter>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="backdrop-blur-md sm:max-w-[425px]">
          <Button onClick={() => router.push("/")}>Log out</Button>
        </DialogContent>
      </Dialog>
    );
  }
};
