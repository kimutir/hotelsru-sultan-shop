declare namespace FooterPriceModuleCssNamespace {
  export interface IFooterPriceModuleCss {
    price: string;
    social: string;
    text: string;
    title: string;
  }
}

declare const FooterPriceModuleCssModule: FooterPriceModuleCssNamespace.IFooterPriceModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterPriceModuleCssNamespace.IFooterPriceModuleCss;
};

export = FooterPriceModuleCssModule;
