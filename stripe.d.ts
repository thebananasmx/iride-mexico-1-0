// This file provides TypeScript definitions for the custom Stripe web component.
// It allows <stripe-buy-button> to be used in JSX without causing type errors.

// FIX: Replaced the module import with a triple-slash reference directive.
// This prevents the file from becoming a module, which was causing the global
// JSX types to be overwritten instead of augmented.
/// <reference types="react" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'buy-button-id': string;
                'publishable-key': string;
            };
        }
    }
}
