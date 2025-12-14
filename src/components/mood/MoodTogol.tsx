"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/mood/DarkMood"
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      setIsDark(theme === "dark");
    }, [theme]);
  
    const toggleTheme = () => {
      const newTheme = isDark ? "light" : "dark";
      setTheme(newTheme);
      setIsDark(!isDark);
    };
  
    return (
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

