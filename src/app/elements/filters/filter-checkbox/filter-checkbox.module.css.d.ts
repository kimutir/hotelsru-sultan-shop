declare namespace FilterCheckboxModuleCssNamespace {
  export interface IFilterCheckboxModuleCss {
    "checkbox": string;
    "checkbox-lable": string;
    "checkbox-list": string;
    "filter": string;
    "title": string;
  }
}

declare const FilterCheckboxModuleCssModule: FilterCheckboxModuleCssNamespace.IFilterCheckboxModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterCheckboxModuleCssNamespace.IFilterCheckboxModuleCss;
};

export = FilterCheckboxModuleCssModule;
