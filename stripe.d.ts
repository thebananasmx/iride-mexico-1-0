// This file provides TypeScript definitions for the custom Stripe web component.
// It allows <stripe-buy-button> to be used in JSX without causing type errors.

// FIX: Import 'react' to make React's types available and wrap the namespace declaration
// in `declare global` to correctly augment the global JSX namespace from a module.
import 'react';

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
