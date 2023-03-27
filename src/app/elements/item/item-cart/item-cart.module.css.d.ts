declare namespace ItemCartModuleCssNamespace {
  export interface IItemCartModuleCss {
    "actions": string;
    "cart-button": string;
    "cart-wrapper": string;
    "price": string;
  }
}

declare const ItemCartModuleCssModule: ItemCartModuleCssNamespace.IItemCartModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemCartModuleCssNamespace.IItemCartModuleCss;
};

export = ItemCartModuleCssModule;
