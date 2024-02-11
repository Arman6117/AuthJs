import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});
export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 to-purple-600">
      <div className="space-y-6 flex flex-col text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔒Auth
        </h1>
        <p className="text-lg text-white">Simple Next Js authentication</p>
        <LoginButton >
          <Button variant={"secondary"} size={"lg"}>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
