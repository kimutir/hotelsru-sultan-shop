declare namespace HeaderContactsModuleCssNamespace {
  export interface IHeaderContactsModuleCss {
    "contact": string;
    "contact-description": string;
    "contact-logo": string;
    "contact-title": string;
    "contacts-list": string;
  }
}

declare const HeaderContactsModuleCssModule: HeaderContactsModuleCssNamespace.IHeaderContactsModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderContactsModuleCssNamespace.IHeaderContactsModuleCss;
};

export = HeaderContactsModuleCssModule;
