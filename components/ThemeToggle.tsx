"use client";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="relative text-lg">
        <button
          className="justify-between w-full font-medium text-sm py-2.5 text-center inline-flex items-center"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="dark:hidden" />
          <Moon className="hidden dark:block" />
        </button>
      </div>
    </div>
  );
}
