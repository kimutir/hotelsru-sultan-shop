declare namespace CartItemModuleCssNamespace {
  export interface ICartItemModuleCss {
    "image-container": string;
    "img": string;
    "item-content": string;
    "item-content-small": string;
    "item-description": string;
    "item-wrapper": string;
    "item-wrapper-small": string;
    "last-item": string;
  }
}

declare const CartItemModuleCssModule: CartItemModuleCssNamespace.ICartItemModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CartItemModuleCssNamespace.ICartItemModuleCss;
};

export = CartItemModuleCssModule;
