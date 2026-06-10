import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';

import { routeTree } from './routeTree.gen';

import './index.css';

const router = createRouter({ routeTree, basepath: import.meta.env.BASE_URL });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <IntlProvider locale="en" defaultLocale="en">
            <RouterProvider router={router} />
        </IntlProvider>
    </StrictMode>,
);
