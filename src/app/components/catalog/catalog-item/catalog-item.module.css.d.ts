declare namespace CatalogItemModuleCssNamespace {
  export interface ICatalogItemModuleCss {
    bottom: string;
    content: string;
    image: string;
    info: string;
    item: string;
    size: string;
    title: string;
  }
}

declare const CatalogItemModuleCssModule: CatalogItemModuleCssNamespace.ICatalogItemModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CatalogItemModuleCssNamespace.ICatalogItemModuleCss;
};

export = CatalogItemModuleCssModule;
