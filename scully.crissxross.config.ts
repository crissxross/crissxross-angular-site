import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

// require('scully-plugin-page-title');

/**
 * configuration for the markdown plugin
 */
setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "crissxross",
  outDir: './dist/static',
  defaultPostRenderers: [
    'seoHrefOptimise',
    // 'changeTitlePlugin',
  ],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
