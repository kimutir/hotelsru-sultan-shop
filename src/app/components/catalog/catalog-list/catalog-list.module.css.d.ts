declare namespace CatalogListModuleCssNamespace {
  export interface ICatalogListModuleCss {
    "catalog": string;
    "catalog-list": string;
    "catalog-list-description": string;
    "catalog-list-meduim": string;
    "catalog-list-small": string;
    "catalog-small": string;
  }
}

declare const CatalogListModuleCssModule: CatalogListModuleCssNamespace.ICatalogListModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CatalogListModuleCssNamespace.ICatalogListModuleCss;
};

export = CatalogListModuleCssModule;
