"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generateWidgetSession/route";
exports.ids = ["app/api/generateWidgetSession/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FgenerateWidgetSession%2Froute&page=%2Fapi%2FgenerateWidgetSession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgenerateWidgetSession%2Froute.ts&appDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FgenerateWidgetSession%2Froute&page=%2Fapi%2FgenerateWidgetSession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgenerateWidgetSession%2Froute.ts&appDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_shiven_Desktop_HackHarvard_23_src_app_api_generateWidgetSession_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/generateWidgetSession/route.ts */ \"(rsc)/./src/app/api/generateWidgetSession/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/generateWidgetSession/route\",\n        pathname: \"/api/generateWidgetSession\",\n        filename: \"route\",\n        bundlePath: \"app/api/generateWidgetSession/route\"\n    },\n    resolvedPagePath: \"/Users/shiven/Desktop/HackHarvard-23/src/app/api/generateWidgetSession/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shiven_Desktop_HackHarvard_23_src_app_api_generateWidgetSession_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/generateWidgetSession/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZVdpZGdldFNlc3Npb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdlbmVyYXRlV2lkZ2V0U2Vzc2lvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdlbmVyYXRlV2lkZ2V0U2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoaXZlbiUyRkRlc2t0b3AlMkZIYWNrSGFydmFyZC0yMyUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzaGl2ZW4lMkZEZXNrdG9wJTJGSGFja0hhcnZhcmQtMjMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDNkM7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtcGxlLW5leHQtYXBwLz8xODIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2hpdmVuL0Rlc2t0b3AvSGFja0hhcnZhcmQtMjMvc3JjL2FwcC9hcGkvZ2VuZXJhdGVXaWRnZXRTZXNzaW9uL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZW5lcmF0ZVdpZGdldFNlc3Npb24vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZVdpZGdldFNlc3Npb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dlbmVyYXRlV2lkZ2V0U2Vzc2lvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zaGl2ZW4vRGVza3RvcC9IYWNrSGFydmFyZC0yMy9zcmMvYXBwL2FwaS9nZW5lcmF0ZVdpZGdldFNlc3Npb24vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZ2VuZXJhdGVXaWRnZXRTZXNzaW9uL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FgenerateWidgetSession%2Froute&page=%2Fapi%2FgenerateWidgetSession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgenerateWidgetSession%2Froute.ts&appDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/generateWidgetSession/route.ts":
/*!****************************************************!*\
  !*** ./src/app/api/generateWidgetSession/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var terra_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! terra-api */ \"(rsc)/./node_modules/terra-api/lib/cjs/index.js\");\n\n\nconst terra = new terra_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.TERRA_DEV_ID ?? \"universityofmassachusettsamherst-testing-t9yVTx5Fvf\", process.env.TERRA_API_KEY ?? \"3cCdGaZEjDrEY9Xv9_tjUa34Pttk_b6v\", process.env.TERRA_WEBHOOK_SECRET ?? \"\");\nasync function GET(request) {\n    const resp = await terra.generateWidgetSession({\n        referenceID: \"HelloHarvard\",\n        language: \"en\",\n        authSuccessRedirectUrl: \"http://localhost:3000\",\n        authFailureRedirectUrl: \"http://localhost:3000\"\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        url: resp.url\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZW5lcmF0ZVdpZGdldFNlc3Npb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQzFCO0FBRTlCLE1BQU1FLFFBQVEsSUFBSUQsaURBQUtBLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxJQUFJLHVEQUF1REYsUUFBUUMsR0FBRyxDQUFDRSxhQUFhLElBQUksb0NBQW9DSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQixJQUFJO0FBRXpNLGVBQWVDLElBQUlDLE9BQW9CO0lBQzFDLE1BQU1DLE9BQU8sTUFBTVIsTUFBTVMscUJBQXFCLENBQUM7UUFDM0NDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyx3QkFBd0I7UUFDeEJDLHdCQUF3QjtJQUM1QjtJQUNBLE9BQU9mLGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1FBQUVDLEtBQUtQLEtBQUtPLEdBQUc7SUFBQyxHQUFHO1FBQUVDLFFBQVE7SUFBRztBQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXBsZS1uZXh0LWFwcC8uL3NyYy9hcHAvYXBpL2dlbmVyYXRlV2lkZ2V0U2Vzc2lvbi9yb3V0ZS50cz80NGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBUZXJyYSBmcm9tIFwidGVycmEtYXBpXCI7XG5cbmNvbnN0IHRlcnJhID0gbmV3IFRlcnJhKHByb2Nlc3MuZW52LlRFUlJBX0RFVl9JRCA/PyBcInVuaXZlcnNpdHlvZm1hc3NhY2h1c2V0dHNhbWhlcnN0LXRlc3RpbmctdDl5VlR4NUZ2ZlwiLCBwcm9jZXNzLmVudi5URVJSQV9BUElfS0VZID8/IFwiM2NDZEdhWkVqRHJFWTlYdjlfdGpVYTM0UHR0a19iNnZcIiwgcHJvY2Vzcy5lbnYuVEVSUkFfV0VCSE9PS19TRUNSRVQgPz8gXCJcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGVycmEuZ2VuZXJhdGVXaWRnZXRTZXNzaW9uKHtcbiAgICAgICAgcmVmZXJlbmNlSUQ6IFwiSGVsbG9IYXJ2YXJkXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcImVuXCIsXG4gICAgICAgIGF1dGhTdWNjZXNzUmVkaXJlY3RVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG4gICAgICAgIGF1dGhGYWlsdXJlUmVkaXJlY3RVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgICB9KVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVybDogcmVzcC51cmwgfSwgeyBzdGF0dXM6IDIwMH0pOyBcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiVGVycmEiLCJ0ZXJyYSIsInByb2Nlc3MiLCJlbnYiLCJURVJSQV9ERVZfSUQiLCJURVJSQV9BUElfS0VZIiwiVEVSUkFfV0VCSE9PS19TRUNSRVQiLCJHRVQiLCJyZXF1ZXN0IiwicmVzcCIsImdlbmVyYXRlV2lkZ2V0U2Vzc2lvbiIsInJlZmVyZW5jZUlEIiwibGFuZ3VhZ2UiLCJhdXRoU3VjY2Vzc1JlZGlyZWN0VXJsIiwiYXV0aEZhaWx1cmVSZWRpcmVjdFVybCIsImpzb24iLCJ1cmwiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/generateWidgetSession/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/iconv-lite","vendor-chunks/terra-api","vendor-chunks/async-mutex","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/tslib","vendor-chunks/webidl-conversions","vendor-chunks/safer-buffer","vendor-chunks/node-fetch","vendor-chunks/encoding","vendor-chunks/cross-fetch"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FgenerateWidgetSession%2Froute&page=%2Fapi%2FgenerateWidgetSession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgenerateWidgetSession%2Froute.ts&appDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshiven%2FDesktop%2FHackHarvard-23&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();