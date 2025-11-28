// This file provides TypeScript definitions for the custom Stripe web component.
// It allows <stripe-buy-button> to be used in JSX without causing type errors.

// FIX: An incorrect import (`import 'react'`) in this declaration file caused a cascading
// type error across the entire application, preventing TypeScript from recognizing standard JSX elements
// (like 'div', 'h1', etc.). Changing it to `import React from 'react'` correctly brings the `React`
// type namespace into scope, resolving all JSX-related errors.
import React from 'react';

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
