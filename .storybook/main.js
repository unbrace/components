const path = require('path');

module.exports = {
  stories: ['../src/stories/*.stories.(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          propFilter(prop) {
            if (prop.parent) {
              return !prop.parent.fileName.includes('@types/react');
            }

            return true;
          }
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../src')],
      },
    },{
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
    },
  },'storybook-addon-react-docgen' ],
};
