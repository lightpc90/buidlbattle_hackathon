import { Button } from "@/components/ui/button";
import { ConnectWallet } from "@/components/shared/ConnectWallet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/40 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ConnectWallet />
          </nav>
        </div>
      </div>
    </header>
  );
} 