declare namespace FilterPriceModuleCssNamespace {
  export interface IFilterPriceModuleCss {
    "filter-price": string;
    "inputs": string;
    "title": string;
  }
}

declare const FilterPriceModuleCssModule: FilterPriceModuleCssNamespace.IFilterPriceModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterPriceModuleCssNamespace.IFilterPriceModuleCss;
};

export = FilterPriceModuleCssModule;
