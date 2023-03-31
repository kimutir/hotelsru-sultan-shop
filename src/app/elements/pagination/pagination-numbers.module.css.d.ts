declare namespace PaginationNumbersModuleCssNamespace {
  export interface IPaginationNumbersModuleCss {
    "active": string;
    "pagination": string;
    "pagination-item": string;
  }
}

declare const PaginationNumbersModuleCssModule: PaginationNumbersModuleCssNamespace.IPaginationNumbersModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PaginationNumbersModuleCssNamespace.IPaginationNumbersModuleCss;
};

export = PaginationNumbersModuleCssModule;
