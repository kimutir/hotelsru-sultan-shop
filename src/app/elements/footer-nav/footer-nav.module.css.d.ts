declare namespace FooterNavModuleCssNamespace {
  export interface IFooterNavModuleCss {
    "nav": string;
    "nav-list": string;
    "title": string;
  }
}

declare const FooterNavModuleCssModule: FooterNavModuleCssNamespace.IFooterNavModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterNavModuleCssNamespace.IFooterNavModuleCss;
};

export = FooterNavModuleCssModule;
