declare namespace CartActionsModuleCssNamespace {
  export interface ICartActionsModuleCss {
    "actions": string;
    "cart-button": string;
    "cart-wrapper": string;
    "price": string;
  }
}

declare const CartActionsModuleCssModule: CartActionsModuleCssNamespace.ICartActionsModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CartActionsModuleCssNamespace.ICartActionsModuleCss;
};

export = CartActionsModuleCssModule;
