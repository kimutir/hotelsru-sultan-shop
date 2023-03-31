declare namespace CartTotalModuleCssNamespace {
  export interface ICartTotalModuleCss {
    total: string;
  }
}

declare const CartTotalModuleCssModule: CartTotalModuleCssNamespace.ICartTotalModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CartTotalModuleCssNamespace.ICartTotalModuleCss;
};

export = CartTotalModuleCssModule;
