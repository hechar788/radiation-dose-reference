import { createFileRoute } from '@tanstack/react-router';

import { DoseGuide } from 'src/components/dose-guide';

export const Route = createFileRoute('/')({
    component: DoseGuide,
});
