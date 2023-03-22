declare namespace CustomSelectModuleCssNamespace {
  export interface ICustomSelectModuleCss {
    "select": string;
    "select-title": string;
    "select-wrapper": string;
  }
}

declare const CustomSelectModuleCssModule: CustomSelectModuleCssNamespace.ICustomSelectModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CustomSelectModuleCssNamespace.ICustomSelectModuleCss;
};

export = CustomSelectModuleCssModule;
