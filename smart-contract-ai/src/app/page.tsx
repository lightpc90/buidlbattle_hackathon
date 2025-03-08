import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 sm:text-5xl xl:text-6xl/none">
          AI-Powered Smart Contract Platform
        </h1>
        <p className="mx-auto max-w-[600px] text-slate-300 md:text-xl">
          Analyze, generate, and deploy smart contracts with the power of AI.
          Secure, efficient, and user-friendly.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link href="/contracts/analyze">
            <Button size="lg" className="w-full sm:w-auto bg-blue-500/80 hover:bg-blue-600/80 backdrop-blur-sm">
              Analyze Contract
            </Button>
          </Link>
          <Link href="/contracts/generate">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500/50 hover:bg-emerald-500/10">
              Generate Contract
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 