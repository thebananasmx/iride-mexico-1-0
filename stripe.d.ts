// This file provides TypeScript definitions for the custom Stripe web component.
// It allows <stripe-buy-button> to be used in JSX without causing type errors.

// FIX: `import * as React from 'react'` is used to correctly import React's types.
// The previous `import 'react';` did not make the `React` namespace available,
// which caused the global JSX types to be overwritten, leading to errors across the app.
import * as React from 'react';

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
