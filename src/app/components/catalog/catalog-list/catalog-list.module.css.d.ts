declare namespace CatalogListModuleCssNamespace {
  export interface ICatalogListModuleCss {
    "catalog-list": string;
  }
}

declare const CatalogListModuleCssModule: CatalogListModuleCssNamespace.ICatalogListModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CatalogListModuleCssNamespace.ICatalogListModuleCss;
};

export = CatalogListModuleCssModule;
