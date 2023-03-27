declare namespace FilterForModuleCssNamespace {
  export interface IFilterForModuleCss {
    "clicked": string;
    "filter": string;
    "filter-aside": string;
    "filter-item": string;
    "filter-item-aside": string;
  }
}

declare const FilterForModuleCssModule: FilterForModuleCssNamespace.IFilterForModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterForModuleCssNamespace.IFilterForModuleCss;
};

export = FilterForModuleCssModule;
