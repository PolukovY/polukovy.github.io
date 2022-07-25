module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/techworld-with-yevgen/" : "/",
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
