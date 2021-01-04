import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'bcd-ui-component',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'bcd-ui-component',
      //proxiesFile: './generated/bcd-ui-component-react/src/components.ts',
      //proxiesFile: '../../src/bcd-ui-component-react/src/components.ts',
      proxiesFile: '../bcd-ui-component-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
