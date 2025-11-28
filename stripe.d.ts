// This file provides TypeScript definitions for the custom Stripe web component.
// It allows <stripe-buy-button> to be used in JSX without causing type errors.

// FIX: By importing from 'react', this file is correctly treated as a module,
// which is required for global namespace augmentation to work correctly.
// This resolves all TypeScript errors related to 'declare global' and unknown namespaces.
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
