declare namespace CatalogAsideModuleCssNamespace {
  export interface ICatalogAsideModuleCss {
    "aside-wrapper-small": string;
  }
}

declare const CatalogAsideModuleCssModule: CatalogAsideModuleCssNamespace.ICatalogAsideModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CatalogAsideModuleCssNamespace.ICatalogAsideModuleCss;
};

export = CatalogAsideModuleCssModule;
