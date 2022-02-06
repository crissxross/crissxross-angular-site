import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';
// A Deprication Notice from npx scully advised adding this Puppeteer import here
import '@scullyio/scully-plugin-puppeteer';

const defaultPostRenderers = ['seoHrefOptimise', criticalCSS];

/**
 * configuration for the markdown plugin
 */
setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "crissxross",
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
