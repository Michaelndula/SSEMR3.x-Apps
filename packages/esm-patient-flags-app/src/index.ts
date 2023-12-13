import { defineConfigSchema, getSyncLifecycle } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import clearCacheButtonComponent from './clear-cache/clear-cache.component';
import patientFlagsComponent from './patient-flags/patient-flags.component';

const moduleName = '@ssemr/esm-patient-flags-app';

const options = {
  featureName: 'patient-flags',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const clearCacheButton = getSyncLifecycle(clearCacheButtonComponent, options);
export const patientFlag = getSyncLifecycle(patientFlagsComponent, options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
