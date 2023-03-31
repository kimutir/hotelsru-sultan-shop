declare namespace AdminFormModuleCssNamespace {
  export interface IAdminFormModuleCss {
    "form-input": string;
    "form-option": string;
    "form-wrapper": string;
    "option-wrapper": string;
    "select-wrapper": string;
  }
}

declare const AdminFormModuleCssModule: AdminFormModuleCssNamespace.IAdminFormModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AdminFormModuleCssNamespace.IAdminFormModuleCss;
};

export = AdminFormModuleCssModule;
