declare namespace ItemCartModuleCssNamespace {
  export interface IItemCartModuleCss {
    "actions": string;
    "cart-button": string;
    "cart-content-bottom-small": string;
    "cart-content-top-small": string;
    "cart-share-button-small": string;
    "cart-wrapper": string;
    "cart-wrapper-small": string;
    "price": string;
  }
}

declare const ItemCartModuleCssModule: ItemCartModuleCssNamespace.IItemCartModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemCartModuleCssNamespace.IItemCartModuleCss;
};

export = ItemCartModuleCssModule;
