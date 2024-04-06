import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function DropdownHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <a href="/about" className="hover: cursor-pointer">
            about me
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/contact" className="hover: cursor-pointer">
            contact
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/my-posts" className="hover: cursor-pointer">
            my posts
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
