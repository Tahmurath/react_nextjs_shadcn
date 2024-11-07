// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[300px] bg-gray-50 flex flex-col text-center p-4 rounded-lg shadow-md gap-4">
        
      <h1>Home</h1>
      <h1 className="font-bold text-2xl">Login</h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      <Button variant={"default"}>Click me</Button>
      <Button variant={"destructive"}>Click me</Button>
      <Button variant={"ghost"}>Click me</Button>
      <Button variant={"link"}>Click me</Button>
      <Button variant={"outline"}>Click me</Button>
      <Button variant={"secondary"}>Click me</Button>
      <a href="/dashboard">dashboard</a>

      <h1>
        Read <Link href="/advices">this page!</Link>
      </h1>

      </div>
      </div>
  );
}
