import rawReference from './radiation-dose-reference.json';
import type { RadiationDoseReference } from './radiation-dose.types';

export const radiationDoseReference: RadiationDoseReference = rawReference;

export type { ApproximateEffectiveDose, Procedure, RadiationDoseReference, Region } from './radiation-dose.types';
