declare namespace HeaderBottomModuleCssNamespace {
  export interface IHeaderBottomModuleCss {
    "border": string;
    "header-bottom": string;
    "header-bottom-small": string;
  }
}

declare const HeaderBottomModuleCssModule: HeaderBottomModuleCssNamespace.IHeaderBottomModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderBottomModuleCssNamespace.IHeaderBottomModuleCss;
};

export = HeaderBottomModuleCssModule;
