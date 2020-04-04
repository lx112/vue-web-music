module.exports = {
  publicPath: "/vue-web-music/",
  outputDir: "vue-web-music",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  chainWebpack: config => {
    config
      .plugin("webpack-bundle-analyzer")
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    //压缩图片
    // config.module
    //   .rule("images")
    //   .use("image-webpack-loader")
    //   .loader("image-webpack-loader")
    //   .options({ bypassOnDebug: true })
    //   .end();
  }
};
