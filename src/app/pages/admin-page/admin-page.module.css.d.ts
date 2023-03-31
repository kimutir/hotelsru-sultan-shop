declare namespace AdminPageModuleCssNamespace {
  export interface IAdminPageModuleCss {
    "action-button": string;
    "admin-actions": string;
    "admin-wrapper": string;
  }
}

declare const AdminPageModuleCssModule: AdminPageModuleCssNamespace.IAdminPageModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AdminPageModuleCssNamespace.IAdminPageModuleCss;
};

export = AdminPageModuleCssModule;
