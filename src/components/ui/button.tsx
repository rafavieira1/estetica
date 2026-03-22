import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-95 group shadow-none",
  {
    variants: {
      variant: {
        default: "bg-[#111] text-white hover:opacity-80",
        destructive: "bg-destructive text-destructive-foreground hover:opacity-80",
        outline: "border border-[#111] bg-transparent text-[#111] hover:bg-[#f5f5f7]",
        secondary: "bg-[#f5f5f7] text-[#111] hover:bg-[#e8e8ed]",
        ghost: "hover:bg-[#f5f5f7] hover:text-[#111]",
        link: "text-[#111] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-5 py-[9px] text-[13px]",
        sm: "h-auto px-4 py-[7px] text-[12px]",
        lg: "h-auto px-6 py-3 md:px-8 md:py-3.5 text-[14px] md:text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
