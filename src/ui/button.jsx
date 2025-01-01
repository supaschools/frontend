import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import darkStyles from "./css_modules/dark.button.module.css"; // Import the CSS module
import lightStyles from "./css_modules/light.button.module.css"; // Import the CSS module

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold uppercase tracking-wide ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled-foreground disabled:border-transparent",
  {
    variants: {
      variant: {
        solid: darkStyles.duolingoButton,
        light: lightStyles.duolingoButton,
        primary: darkStyles.primary,
        secondary: darkStyles.secondary,
        success: darkStyles.success,
        danger: darkStyles.danger,
        withoutShadow: `${darkStyles.duolingoButton} shadow-none`,
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-10 px-4",
        icon: "h-11 w-11",
        none: "",
        rounded: "rounded-full",
        full: "h-12 w-full",
        fsix: "h-12 w-[60%]",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, textSize, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, textSize }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
