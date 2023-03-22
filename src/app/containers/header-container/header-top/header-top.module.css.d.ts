declare namespace HeaderTopModuleCssNamespace {
  export interface IHeaderTopModuleCss {
    "header-top": string;
  }
}

declare const HeaderTopModuleCssModule: HeaderTopModuleCssNamespace.IHeaderTopModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderTopModuleCssNamespace.IHeaderTopModuleCss;
};

export = HeaderTopModuleCssModule;
