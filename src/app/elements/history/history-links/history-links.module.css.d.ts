declare namespace HistoryLinksModuleCssNamespace {
  export interface IHistoryLinksModuleCss {
    "links-wrapper": string;
    "not-active": string;
  }
}

declare const HistoryLinksModuleCssModule: HistoryLinksModuleCssNamespace.IHistoryLinksModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HistoryLinksModuleCssNamespace.IHistoryLinksModuleCss;
};

export = HistoryLinksModuleCssModule;
