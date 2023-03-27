declare namespace FooterContactsModuleCssNamespace {
  export interface IFooterContactsModuleCss {
    "contacts": string;
    "icons": string;
    "mail": string;
    "phone": string;
    "sub-title": string;
    "title": string;
  }
}

declare const FooterContactsModuleCssModule: FooterContactsModuleCssNamespace.IFooterContactsModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterContactsModuleCssNamespace.IFooterContactsModuleCss;
};

export = FooterContactsModuleCssModule;
