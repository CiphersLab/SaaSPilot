
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";


const MobileNav = async () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="sm:hidden">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mx-[10px]">
        <DropdownMenuGroup>          
          <DropdownMenuItem>
            <Link className="flex items-center" href="/pricing">
              Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center" href="/about-us">
              About Us
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center" href="/contact-us">
              Contact Us
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center" href="/auth/login">
              Sign In
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
