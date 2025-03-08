import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContractHistoryItem({ item }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{item.type}</h3>
          <p className="text-sm text-muted-foreground">
            {new Date(item.timestamp).toLocaleString()}
          </p>
        </div>
        <div className="space-x-2">
          <Link href={`/contracts/${item.type.toLowerCase()}?id=${item.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 