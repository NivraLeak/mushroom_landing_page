const path = require('path');

module.exports = {
  // Otras configuraciones de Webpack...

  module: {
    rules: [
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos/', // La carpeta de salida para los archivos de video
            },
          },
        ],
      },
    ],
  },

  // Otras configuraciones de Webpack...
};
