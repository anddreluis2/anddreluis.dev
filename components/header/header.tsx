import { SeparatorVertical } from "lucide-react";
import { DropdownHeader } from "./components/dropdown-header";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-6 justify-between flex">
      <Link className="hover:cursor-pointer" href="/">
        <SeparatorVertical />
      </Link>
      <DropdownHeader />
    </header>
  );
}
