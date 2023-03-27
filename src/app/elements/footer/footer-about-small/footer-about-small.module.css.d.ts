declare namespace FooterAboutSmallModuleCssNamespace {
  export interface IFooterAboutSmallModuleCss {
    about: string;
    logo: string;
    mail: string;
    text: string;
  }
}

declare const FooterAboutSmallModuleCssModule: FooterAboutSmallModuleCssNamespace.IFooterAboutSmallModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterAboutSmallModuleCssNamespace.IFooterAboutSmallModuleCss;
};

export = FooterAboutSmallModuleCssModule;
