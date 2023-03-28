declare namespace BurgerMenuModuleCssNamespace {
  export interface IBurgerMenuModuleCss {
    burger: string;
  }
}

declare const BurgerMenuModuleCssModule: BurgerMenuModuleCssNamespace.IBurgerMenuModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BurgerMenuModuleCssNamespace.IBurgerMenuModuleCss;
};

export = BurgerMenuModuleCssModule;
