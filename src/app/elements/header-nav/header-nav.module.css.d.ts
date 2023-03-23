declare namespace HeaderNavModuleCssNamespace {
  export interface IHeaderNavModuleCss {
    "nav-item": string;
    "nav-list": string;
  }
}

declare const HeaderNavModuleCssModule: HeaderNavModuleCssNamespace.IHeaderNavModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderNavModuleCssNamespace.IHeaderNavModuleCss;
};

export = HeaderNavModuleCssModule;
