import type { MessageDescriptor } from 'react-intl';
import { useIntl } from 'react-intl';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { DoseLevel } from 'src/utils/dose-level';

import { i18n } from './DoseLevelBadge.i18n';

const LEVEL_LABELS: Record<DoseLevel, MessageDescriptor> = {
    minimal: i18n.minimal,
    low: i18n.low,
    moderate: i18n.moderate,
    higher: i18n.higher,
};

const LEVEL_CLASSES: Record<DoseLevel, string> = {
    minimal: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    low: 'border-sky-200 bg-sky-50 text-sky-700',
    moderate: 'border-amber-200 bg-amber-50 text-amber-800',
    higher: 'border-rose-200 bg-rose-50 text-rose-700',
};

type DoseLevelBadgeProps = {
    level: DoseLevel;
};

export const DoseLevelBadge = ({ level }: DoseLevelBadgeProps) => {
    const intl = useIntl();

    return (
        <Badge variant="outline" className={cn(LEVEL_CLASSES[level])} title={intl.formatMessage(i18n.tooltip)}>
            {intl.formatMessage(LEVEL_LABELS[level])}
        </Badge>
    );
};
