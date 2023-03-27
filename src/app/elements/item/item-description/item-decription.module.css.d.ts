declare namespace ItemDecriptionModuleCssNamespace {
  export interface IItemDecriptionModuleCss {
    "content-wrapper": string;
    "description-small": string;
    "image": string;
    "image-wrapper": string;
    "title": string;
  }
}

declare const ItemDecriptionModuleCssModule: ItemDecriptionModuleCssNamespace.IItemDecriptionModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemDecriptionModuleCssNamespace.IItemDecriptionModuleCss;
};

export = ItemDecriptionModuleCssModule;
