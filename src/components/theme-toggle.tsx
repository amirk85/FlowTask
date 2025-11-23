"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-muted transition-colors relative overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 transform transition-transform duration-500 rotate-0 dark:-rotate-90 scale-100 dark:scale-0`}
        />
        <Moon
          className={`absolute inset-0 transform transition-transform duration-500 rotate-90 dark:rotate-0 scale-0 dark:scale-100`}
        />
      </div>
    </button>
  );
}
