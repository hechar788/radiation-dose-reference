import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

const Providers = ({ children }: { children: ReactNode }) => (
    <IntlProvider locale="en" defaultLocale="en">
        {children}
    </IntlProvider>
);

export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: Providers, ...options });
