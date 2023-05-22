module.exports = {
  webpack: (config) => {
    // The idea is to target the 'css-loader' and overwrite the exportLocalsConvention option to 'camelCase'.
    // This allows to use kebab-cased classNames from .module.scss as camelCased classNames in .tsx.
    // .my-best-class equals to myBestClass
    // https://stackoverflow.com/questions/74038400/convert-css-module-kebab-case-class-names-to-camelcase-in-next-js

    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use));
    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader !== undefined
          && moduleLoader.loader.includes('css-loader')
          && typeof moduleLoader.options.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              exportLocalsConvention: 'camelCase'
            }
          };
        }
      });
    });

    return config;
  }
}
