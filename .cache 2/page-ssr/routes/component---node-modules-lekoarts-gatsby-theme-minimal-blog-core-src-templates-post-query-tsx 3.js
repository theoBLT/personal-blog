exports.id = "component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx";
exports.ids = ["component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/index.js":
/*!*************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */
const MDXRenderer = __webpack_require__(/*! ./mdx-renderer */ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js");

module.exports = {
  MDXRenderer: MDXRenderer
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/mdx-renderer.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");

const _excluded = ["scope", "children"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

const React = __webpack_require__(/*! react */ "react");

const {
  mdx
} = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const {
  useMDXScope
} = __webpack_require__(/*! ./context */ "./node_modules/gatsby-plugin-mdx/context.js");

module.exports = function MDXRenderer(_ref) {
  let {
    scope,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const mdxScope = useMDXScope(scope); // Memoize the compiled component

  const End = React.useMemo(() => {
    if (!children) {
      return null;
    }

    const fullScope = _objectSpread({
      // React is here just in case the user doesn't pass them in
      // in a manual usage of the renderer
      React,
      mdx
    }, mdxScope);

    const keys = Object.keys(fullScope);
    const values = keys.map(key => fullScope[key]);
    const fn = new Function(`_fn`, ...keys, `${children}`);
    return fn({}, ...values);
  }, [children, scope]);
  return React.createElement(End, _objectSpread({}, props));
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx":
/*!********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_post__WEBPACK_IMPORTED_MODULE_0__["default"]);
const query = "2145575470";

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MinimalBlogCorePost)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx");



function MinimalBlogCorePost(_ref) {
  let props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_post__WEBPACK_IMPORTED_MODULE_2__["default"], props);
}

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/** @jsx jsx */


// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
const ColorModeToggle = ({
  isDark,
  toggle
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
  onClick: toggle,
  type: "button",
  "aria-label": isDark ? `Activate Light Mode` : `Activate Dark Mode`,
  title: isDark ? `Activate Light Mode` : `Activate Dark Mode`,
  sx: {
    opacity: 0.65,
    position: `relative`,
    borderRadius: `5px`,
    width: `40px`,
    height: `25px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    transition: `opacity 0.3s ease`,
    border: `none`,
    outline: `none`,
    background: `none`,
    cursor: `pointer`,
    padding: 0,
    appearance: `none`,
    "&:hover, &:focus": {
      opacity: 1
    }
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    position: `relative`,
    width: `24px`,
    height: `24px`,
    borderRadius: `50%`,
    border: t => isDark ? `4px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
    backgroundColor: isDark ? `toggleIcon` : `transparent`,
    transform: isDark ? `scale(0.55)` : `scale(1)`,
    transition: `all 0.45s ease`,
    overflow: isDark ? `visible` : `hidden`,
    boxShadow: t => isDark ? `none` : `inset 8px -8px 0px 0px ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`,
    "&:before": {
      content: `""`,
      position: `absolute`,
      right: `-9px`,
      top: `-9px`,
      height: `24px`,
      width: `24px`,
      border: t => isDark ? `2px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
      borderRadius: `50%`,
      transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
      opacity: isDark ? 0 : 1,
      transition: `transform 0.45s ease`
    },
    "&:after": {
      content: `""`,
      width: `8px`,
      height: `8px`,
      borderRadius: `50%`,
      margin: `-4px 0 0 -4px`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      boxShadow: t => `0 -23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 0 23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`,
      transform: isDark ? `scale(1)` : `scale(0)`,
      transition: `all 0.35s ease`
    }
  }
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorModeToggle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/** @jsx jsx */



const Footer = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, "\xA9 ", new Date().getFullYear(), " by ", siteTitle, ". All rights reserved."), (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme's GitHub repository",
    href: "https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
  }, "Theme"), ` `, "by", ` `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme author's website",
    href: "https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
  }, "LekoArts")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */




const HeaderExternalLinks = () => {
  const {
    externalLinks
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, externalLinks && externalLinks.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    sx: {
      "a:not(:first-of-type)": {
        ml: 3
      },
      fontSize: [1, `18px`]
    }
  }, externalLinks.map(link => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    key: link.url,
    href: link.url
  }, link.name))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderExternalLinks);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */






const HeaderTitle = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__["default"])(`/${basePath}`),
    "aria-label": `${siteTitle} - Back to home`,
    sx: {
      color: `heading`,
      textDecoration: `none`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    sx: {
      my: 0,
      fontWeight: `medium`,
      fontSize: [3, 4]
    }
  }, siteTitle));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTitle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _colormode_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colormode-toggle */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx");
/* harmony import */ var _header_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx");
/* harmony import */ var _header_external_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-external-links */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx");
/** @jsx jsx */







const Header = () => {
  const {
    navigation: nav
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const [colorMode, setColorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.useColorMode)();
  const isDark = colorMode === `dark`;

  const toggleColorMode = e => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("header", {
    sx: {
      mb: [5, 6]
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    sx: {
      alignItems: `center`,
      justifyContent: `space-between`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_header_title__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_colormode_toggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: isDark,
    toggle: toggleColorMode
  })), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      variant: `dividers.bottom`,
      alignItems: `center`,
      justifyContent: `space-between`,
      mt: 3,
      color: `secondary`,
      a: {
        color: `secondary`,
        ":hover": {
          color: `heading`
        }
      },
      flexFlow: `wrap`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nav: nav
  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_header_external_links__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */






const ItemTags = ({
  tags
}) => {
  const {
    tagsPath,
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, tags.map((tag, i) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    key: tag.slug
  }, !!i && `, `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    sx: t => {
      var _t$styles;

      return _objectSpread({}, (_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a);
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_4__["default"])(`/${basePath}/${tagsPath}/${tag.slug}`)
  }, tag.name))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemTags);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx");
/* harmony import */ var _styles_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts");
/* harmony import */ var _skip_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skip-nav */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */









const Layout = ({
  children,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {
  styles: t => ({
    "*": {
      boxSizing: `inherit`
    },
    html: {
      WebkitTextSizeAdjust: `100%`
    },
    img: {
      borderStyle: `none`
    },
    pre: {
      fontFamily: `monospace`,
      fontSize: `1em`
    },
    "[hidden]": {
      display: `none`
    },
    "::selection": {
      backgroundColor: (0,theme_ui__WEBPACK_IMPORTED_MODULE_9__.get)(t, `colors.text`),
      color: (0,theme_ui__WEBPACK_IMPORTED_MODULE_9__.get)(t, `colors.background`)
    },
    a: {
      transition: `all 0.3s ease-in-out`,
      color: `text`
    }
  })
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_seo__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_skip_nav__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Skip to content"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_10__.Container, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_10__.Box, {
  id: "skip-nav",
  as: "main",
  variant: "layout.main",
  sx: _objectSpread({}, _styles_code__WEBPACK_IMPORTED_MODULE_5__["default"]),
  className: className
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */






const Navigation = ({
  nav
}) => {
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, nav && nav.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav", {
    sx: {
      "a:not(:last-of-type)": {
        mr: 3
      },
      fontSize: [1, `18px`],
      ".active": {
        color: `heading`
      }
    }
  }, nav.map(item => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    activeClassName: "active",
    key: item.slug,
    sx: t => {
      var _t$styles;

      return _objectSpread({}, (_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a);
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_4__["default"])(`/${basePath}/${item.slug}`)
  }, item.title))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PostFooter = ({
  post
}) => null;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostFooter);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-mdx */ "./node_modules/gatsby-plugin-mdx/index.js");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx");
/* harmony import */ var _item_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-tags */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seo */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx");
/* harmony import */ var _post_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx");
/** @jsx jsx */







const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({
  data: {
    post
  }
}) => {
  var _post$banner, _post$banner$childIma, _post$banner$childIma2;

  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: post.title,
    description: post.description ? post.description : post.excerpt,
    image: post.banner ? (_post$banner = post.banner) === null || _post$banner === void 0 ? void 0 : (_post$banner$childIma = _post$banner.childImageSharp) === null || _post$banner$childIma === void 0 ? void 0 : (_post$banner$childIma2 = _post$banner$childIma.resize) === null || _post$banner$childIma2 === void 0 ? void 0 : _post$banner$childIma2.src : undefined,
    pathname: post.slug,
    canonicalUrl: post.canonicalUrl
  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_7__.Heading, {
    as: "h1",
    variant: "styles.h1"
  }, post.title), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
    sx: {
      color: `secondary`,
      mt: 3,
      a: {
        color: `secondary`
      },
      fontSize: [1, 1, 2]
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("time", null, post.date), post.tags && (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ` — `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_item_tags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tags: post.tags
  })), post.timeToRead && ` — `, post.timeToRead && (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", null, post.timeToRead, " min read")), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
    sx: {
      my: 5,
      ".gatsby-resp-image-wrapper": {
        my: [4, 4, 5],
        boxShadow: shadow.join(`, `)
      },
      variant: `layout.content`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1__.MDXRenderer, null, post.body)), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_post_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: post
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");





const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``
}) => {
  const site = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author
  } = site;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    title: title,
    defaultTitle: defaultTitle,
    titleTemplate: `%s | ${siteTitle}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", {
    lang: siteLanguage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:creator",
    content: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "gatsby-theme",
    content: "@lekoarts/gatsby-theme-minimal-blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-32x32.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-16x16.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/apple-touch-icon.png`)
  }), canonicalUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }) : null, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _excluded = ["children"];

/** @jsx jsx */


const skipNavStyles = {
  border: 0,
  clip: `react(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  "&:focus": {
    padding: 3,
    position: `fixed`,
    top: `15px`,
    left: `15px`,
    backgroundColor: `heading`,
    color: `background`,
    zIndex: 1,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`
  }
};

const SkipNavLink = _ref => {
  let {
    children
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({}, props, {
    sx: skipNavStyles,
    href: "#skip-nav",
    "data-skip-link": "true"
  }), children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipNavLink);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_318001574_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/318001574.json */ "./public/page-data/sq/d/318001574.json");


const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_318001574_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_ui_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/color */ "./node_modules/@theme-ui/color/dist/theme-ui-color.esm.js");

const code = {
  "[data-name='live-editor']": {
    fontSize: 1,
    "textarea, pre": {
      padding: t => `${t.space[3]} !important`
    }
  },
  "[data-name='live-preview']": {
    padding: t => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: (0,_theme_ui_color__WEBPACK_IMPORTED_MODULE_0__.tint)(`primary`, 0.7)
  },
  ".prism-code": {
    fontSize: [1, 1, 2],
    padding: `2rem 1rem 1rem 1rem`,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3
      }
    }
  },
  ".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']": {
    ".prism-code": {
      pt: `1rem`
    }
  },
  ".token": {
    display: `inline-block`
  },
  "p > code, li > code": {
    bg: `gray.2`,
    color: `gray.8`,
    px: 2,
    py: 1,
    borderRadius: `2px`
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    bg: `rgb(1, 22, 39)`,
    borderRadius: `2px`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`
    },
    'pre[class~="language-php"]:before': {
      content: `"php"`,
      background: `#777bb3`,
      color: `black`
    },
    'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
      content: `"py"`,
      background: `#306998`,
      color: `white`
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`
    }
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `rgb(1, 22, 39)`
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`
  },
  ".code-title": {
    backgroundColor: (0,_theme_ui_color__WEBPACK_IMPORTED_MODULE_0__.tint)(`primary`, 0.7),
    color: `black`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `monospace`,
    mx: [0, 0, 0, -3]
  },
  "[data-name='live-preview'], [data-name='live-editor']": {
    mx: [0, 0, 0, -3],
    fontSize: [1, 1, 2]
  },
  ".token-line": {
    pr: 3
  },
  ".highlight-line": {
    backgroundColor: `rgb(2, 55, 81)`,
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`
    }
  },
  ".react-live-wrapper": {
    position: `relative`
  },
  ".react-live-wrapper .code-copy-button": {
    right: [0, 0, 0, -3]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */
function replaceSlashes(input) {
  return input.replace(/\/\/+/g, `/`);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ }),

/***/ "./public/page-data/sq/d/318001574.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/318001574.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"Théo Blochet","siteTitleAlt":"Théo Blochet","siteHeadline":"Theo\'s personal blog","siteUrl":"https://www.theoblochet.com","siteDescription":"Theo\'s personal blog","siteLanguage":"en","siteImage":"null.jpg","author":"@theoblochet"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx.js.map