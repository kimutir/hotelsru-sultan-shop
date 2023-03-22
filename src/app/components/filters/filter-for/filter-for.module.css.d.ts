declare namespace FilterForModuleCssNamespace {
  export interface IFilterForModuleCss {
    "filter": string;
    "filter-item": string;
  }
}

declare const FilterForModuleCssModule: FilterForModuleCssNamespace.IFilterForModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterForModuleCssNamespace.IFilterForModuleCss;
};

export = FilterForModuleCssModule;
