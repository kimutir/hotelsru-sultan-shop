declare namespace HeaderManagerModuleCssNamespace {
  export interface IHeaderManagerModuleCss {
    link: string;
    manager: string;
    phone: string;
    time: string;
  }
}

declare const HeaderManagerModuleCssModule: HeaderManagerModuleCssNamespace.IHeaderManagerModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderManagerModuleCssNamespace.IHeaderManagerModuleCss;
};

export = HeaderManagerModuleCssModule;
