declare namespace CartModalModuleCssNamespace {
  export interface ICartModalModuleCss {
    "cross": string;
    "modal": string;
    "modal-content": string;
  }
}

declare const CartModalModuleCssModule: CartModalModuleCssNamespace.ICartModalModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CartModalModuleCssNamespace.ICartModalModuleCss;
};

export = CartModalModuleCssModule;
