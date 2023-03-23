declare namespace FooterNavLinkModuleCssNamespace {
  export interface IFooterNavLinkModuleCss {
    link: string;
  }
}

declare const FooterNavLinkModuleCssModule: FooterNavLinkModuleCssNamespace.IFooterNavLinkModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterNavLinkModuleCssNamespace.IFooterNavLinkModuleCss;
};

export = FooterNavLinkModuleCssModule;
