declare namespace CustomButtonModuleCssNamespace {
  export interface ICustomButtonModuleCss {
    "button": string;
    "button-content": string;
    "button-icon": string;
  }
}

declare const CustomButtonModuleCssModule: CustomButtonModuleCssNamespace.ICustomButtonModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CustomButtonModuleCssNamespace.ICustomButtonModuleCss;
};

export = CustomButtonModuleCssModule;
