declare namespace HistoryLinkModuleCssNamespace {
  export interface IHistoryLinkModuleCss {
    "active": string;
    "not-active": string;
  }
}

declare const HistoryLinkModuleCssModule: HistoryLinkModuleCssNamespace.IHistoryLinkModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HistoryLinkModuleCssNamespace.IHistoryLinkModuleCss;
};

export = HistoryLinkModuleCssModule;
