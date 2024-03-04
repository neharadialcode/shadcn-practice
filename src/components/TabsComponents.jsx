import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsCard from "./TabsCard";

const TabsComponents = () => {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto my-7">
        <TabsTrigger value="account">About the roaster</TabsTrigger>
        <TabsTrigger value="password">Comments (24)</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="bg-red-400 w-full flex gap-6">
          <div className="flex flex-col gap-6">
            <TabsCard />
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                iusto consequatur amet quos nisi veritatis eligendi maxime quia
                distinctio soluta voluptate qui assumenda eaque quasi quod
                deserunt, repellat sed ipsum?
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                iusto consequatur amet quos nisi veritatis eligendi maxime quia
                distinctio soluta voluptate qui assumenda eaque quasi quod
                deserunt, repellat sed ipsum?
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                iusto consequatur amet quos nisi veritatis eligendi maxime quia
                distinctio soluta voluptate qui assumenda eaque quasi quod
                deserunt, repellat sed ipsum?
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod rem
            non harum illo doloribus libero alias atque eum reprehenderit veniam
            quidem laboriosam quisquam voluptas est nostrum reiciendis fugit,
            perferendis a?
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponents;
