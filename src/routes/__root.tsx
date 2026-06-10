import { createRootRoute, Outlet } from '@tanstack/react-router';

import { Layout } from 'src/components/layout';

export const Route = createRootRoute({
    component: () => (
        <Layout>
            <Outlet />
        </Layout>
    ),
});
