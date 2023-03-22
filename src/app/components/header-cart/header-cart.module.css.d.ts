declare namespace HeaderCartModuleCssNamespace {
  export interface IHeaderCartModuleCss {
    "cart": string;
    "cart-amount": string;
    "cart-title": string;
    "cart-total": string;
    "cart-wrapper": string;
  }
}

declare const HeaderCartModuleCssModule: HeaderCartModuleCssNamespace.IHeaderCartModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderCartModuleCssNamespace.IHeaderCartModuleCss;
};

export = HeaderCartModuleCssModule;
