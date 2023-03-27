declare namespace HiddenContentModuleCssNamespace {
  export interface IHiddenContentModuleCss {
    "button": string;
    "content": string;
    "content-hidden": string;
    "rotated": string;
    "triangle": string;
  }
}

declare const HiddenContentModuleCssModule: HiddenContentModuleCssNamespace.IHiddenContentModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HiddenContentModuleCssNamespace.IHiddenContentModuleCss;
};

export = HiddenContentModuleCssModule;
