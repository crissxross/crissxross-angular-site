import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "crissxross",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
