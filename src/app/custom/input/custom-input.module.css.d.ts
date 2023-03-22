declare namespace CustomInputModuleCssNamespace {
  export interface ICustomInputModuleCss {
    "input": string;
    "input-wrapper": string;
    "submit": string;
  }
}

declare const CustomInputModuleCssModule: CustomInputModuleCssNamespace.ICustomInputModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CustomInputModuleCssNamespace.ICustomInputModuleCss;
};

export = CustomInputModuleCssModule;
