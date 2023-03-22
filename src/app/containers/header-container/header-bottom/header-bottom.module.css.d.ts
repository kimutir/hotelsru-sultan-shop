declare namespace HeaderBottomModuleCssNamespace {
  export interface IHeaderBottomModuleCss {
    "header-bottom": string;
  }
}

declare const HeaderBottomModuleCssModule: HeaderBottomModuleCssNamespace.IHeaderBottomModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderBottomModuleCssNamespace.IHeaderBottomModuleCss;
};

export = HeaderBottomModuleCssModule;
