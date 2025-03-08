import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Code2, 
  History, 
  Home,
} from "lucide-react";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500"
  },
  {
    label: "Analyze",
    icon: BookOpen,
    href: "/contracts/analyze",
    color: "text-violet-500"
  },
  {
    label: "Generate",
    icon: Code2,
    href: "/contracts/generate",
    color: "text-pink-500"
  },
  {
    label: "History",
    icon: History,
    href: "/contracts/history",
    color: "text-emerald-500"
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900/60 backdrop-blur-sm border-r border-slate-800/40">
      <div className="px-3 py-2">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold tracking-tight">
            SmartAI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-800/50 rounded-lg transition",
                pathname === route.href ? "bg-slate-800/50" : "transparent",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 