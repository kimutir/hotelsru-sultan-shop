declare namespace ItemDecriptionModuleCssNamespace {
  export interface IItemDecriptionModuleCss {
    "content-wrapper": string;
    "content-wrapper-small": string;
    "description-small": string;
    "image": string;
    "image-small": string;
    "image-wrapper": string;
    "image-wrapper-small": string;
    "size": string;
    "title": string;
  }
}

declare const ItemDecriptionModuleCssModule: ItemDecriptionModuleCssNamespace.IItemDecriptionModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemDecriptionModuleCssNamespace.IItemDecriptionModuleCss;
};

export = ItemDecriptionModuleCssModule;
