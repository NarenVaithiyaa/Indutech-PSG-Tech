import React from 'react';
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import Icon from '../AppIcon';

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                success: "bg-success text-success-foreground hover:bg-success/90",
                warning: "bg-warning text-warning-foreground hover:bg-warning/90",
                danger: "bg-error text-error-foreground hover:bg-error/90",
            },
            size: {
                default: "h-12 px-6 py-3 text-base sm:h-13 sm:px-7 lg:h-14 lg:px-8 lg:text-lg",
                sm: "h-10 rounded-md px-4 text-sm sm:h-11 sm:px-5 lg:text-base",
                lg: "h-14 rounded-md px-10 text-lg sm:h-15 sm:px-12 lg:h-16 lg:px-14 lg:text-xl",
                icon: "h-12 w-12 sm:h-13 sm:w-13 lg:h-14 lg:w-14",
                xs: "h-9 rounded-md px-3 text-sm sm:h-10 sm:px-4",
                xl: "h-16 rounded-md px-12 text-xl sm:h-17 sm:px-14 lg:h-18 lg:px-16 lg:text-2xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(({
    className,
    variant,
    size,
    asChild = false,
    children,
    loading = false,
    iconName = null,
    iconPosition = 'left',
    iconSize = null,
    fullWidth = false,
    disabled = false,
    ...props
}, ref) => {
    const Comp = asChild ? Slot : "button";

    // Icon size mapping based on button size
    const iconSizeMap = {
        xs: 12,
        sm: 14,
        default: 16,
        lg: 18,
        xl: 20,
        icon: 16,
    };

    const calculatedIconSize = iconSize || iconSizeMap?.[size] || 16;

    // Loading spinner
    const LoadingSpinner = () => (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );

    // Icon rendering
    const renderIcon = () => {
        if (!iconName) return null;

        return (
            <Icon
                name={iconName}
                size={calculatedIconSize}
                className={cn(
                    children && iconPosition === 'left' && "mr-2",
                    children && iconPosition === 'right' && "ml-2"
                )}
            />
        );
    };

    return (
        <Comp
            className={cn(
                buttonVariants({ variant, size, className }),
                fullWidth && "w-full"
            )}
            ref={ref}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <LoadingSpinner />}
            {iconName && iconPosition === 'left' && renderIcon()}
            {children}
            {iconName && iconPosition === 'right' && renderIcon()}
        </Comp>
    );
});

Button.displayName = "Button";

export default Button;