"use client";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variants for the ToggleTheme component styles using class-variance-authority.
 */
const toggleThemeVariants = cva(
  "group size-11 bg-background dark:bg-forground",
  {
    variants: {
      variant: {
        default:
          "border-none shadow-none hover:text-white hover:bg-gray-300 dark:data-[state=on]:bg-slate-900 hover:data-[state=on]:bg-gray-300 dark:hover:data-[state=on]:bg-slate-300 dark:group-hover:text-slate-900 data-[state=on]:bg-background",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        twoxl: "rounded-2xl",
        full: "rounded-full",
      },
      size: {
        default: "size-9",
        sm: "size-9 ",
        lg: "size-12",
        icon: "size-9",
      },
    },
  }
);

/**
 * Props for the ToggleTheme component.
 */
interface ToggleThemeProps extends VariantProps<typeof toggleThemeVariants> {
  className?: string;
  iconSize?:number;
}

/**
 * ToggleTheme component for switching between light and dark themes.
 *
 * @param {ToggleThemeProps} props - Props for customizing the appearance and behavior of the toggle.
 * @returns {JSX.Element} The ToggleTheme component.
 */
const ToggleTheme = ({
  className,
  variant,
  size,
  iconSize=16,
  rounded,
}: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      type="button"
      variant="outline"
      className={cn(toggleThemeVariants({ variant, rounded, size, className }))}
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      // aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Moon
        size={iconSize}
        strokeWidth={2}
        className="group-data-[state=on]:text-white-900/80 group-hover:text-slate-900 shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
      <Sun
        size={iconSize}
        strokeWidth={2}
        className="group-hover:dark:text-slate-900 dark:text-white drop-shadow-lg  group-hover:text-slate-900 absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  );
};

export default ToggleTheme;
