import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function DropdownHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/" className="hover: cursor-pointer">
            about me
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>
          <Link href="/contact" className="hover: cursor-pointer">
            contact
          </Link>
        </DropdownMenuItem> */}
        <DropdownMenuItem>
          <Link href="/my-posts" className="hover: cursor-pointer">
            my posts
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
