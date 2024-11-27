import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/classname-merge';
import * as React from 'react';
import './button.css';

const buttonVariants = cva('button', {
	variants: {
		variant: {
			default: 'default',
			destructive: 'destructive',
			outline: 'outline',
			secondary: 'secondary',
			ghost: 'ghost',
			link: 'link',
		},
		size: {
			default: 'default',
			sm: 'sm',
			lg: 'lg',
			icon: 'icon',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, size, variant, ...props }, ref) => (
		<button ref={ref} className={cn(buttonVariants({ className, size, variant }))} {...props}>
			{props.children}
		</button>
	),
);

Button.displayName = 'Button';
