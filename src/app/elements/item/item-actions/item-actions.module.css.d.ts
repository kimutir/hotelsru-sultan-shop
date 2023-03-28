declare namespace ItemActionsModuleCssNamespace {
  export interface IItemActionsModuleCss {
    "actions": string;
    "actions-small": string;
    "price": string;
    "price-list": string;
  }
}

declare const ItemActionsModuleCssModule: ItemActionsModuleCssNamespace.IItemActionsModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemActionsModuleCssNamespace.IItemActionsModuleCss;
};

export = ItemActionsModuleCssModule;
