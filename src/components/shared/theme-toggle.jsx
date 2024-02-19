import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <>
      {theme === "light" ? (
        <Sun
          className="h-[1.2rem] w-[1.2rem] cursor-pointer"
          onClick={toggleTheme}
          color="black"
        />
      ) : (
        <Moon
          className="h-[1.2rem] w-[1.2rem] cursor-pointer"
          color="white"
          onClick={toggleTheme}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </>
  );
}
