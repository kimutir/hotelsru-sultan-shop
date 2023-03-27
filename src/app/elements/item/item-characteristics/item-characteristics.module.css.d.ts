declare namespace ItemCharacteristicsModuleCssNamespace {
  export interface IItemCharacteristicsModuleCss {
    list: string;
  }
}

declare const ItemCharacteristicsModuleCssModule: ItemCharacteristicsModuleCssNamespace.IItemCharacteristicsModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemCharacteristicsModuleCssNamespace.IItemCharacteristicsModuleCss;
};

export = ItemCharacteristicsModuleCssModule;
