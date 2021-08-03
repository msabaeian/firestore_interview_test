/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path")

module.exports = {
  resolver: {
    extraNodeModules: {
      "assets": path.resolve(__dirname, 'src/assets'),
      "components": path.resolve(__dirname, 'src/components'),
      "constant": path.resolve(__dirname, 'src/constant'),
      "screens": path.resolve(__dirname, 'src/screens'),
      "utils": path.resolve(__dirname, 'src/utils'),
      "store": path.resolve(__dirname, 'src/store')
    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
