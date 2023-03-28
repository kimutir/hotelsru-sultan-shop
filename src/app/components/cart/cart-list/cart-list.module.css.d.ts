declare namespace CartListModuleCssNamespace {
  export interface ICartListModuleCss {
    title: string;
  }
}

declare const CartListModuleCssModule: CartListModuleCssNamespace.ICartListModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CartListModuleCssNamespace.ICartListModuleCss;
};

export = CartListModuleCssModule;
