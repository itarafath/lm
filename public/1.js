(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/form/Editors.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"]
  },
  data: function data() {
    return {
      content: 'Compose Epic Story...',
      editorOption: {}
    };
  },
  computed: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quill[data-v-6d360d8c] {\n  height: 520px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=template&id=6d360d8c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/form/Editors.vue?vue&type=template&id=6d360d8c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "pageEditor" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xl": "", fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h3", { staticClass: "pa-0" }, [
                  _vm._v("Awesome Quill Editor   "),
                  _c("a", { attrs: { href: "https://quilljs.com" } }, [
                    _vm._v("Offical Website")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "" } },
                [
                  _c("quill-editor", {
                    staticClass: "quill",
                    attrs: { content: _vm.content, options: _vm.editorOption }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/views/form/Editors.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/form/Editors.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editors_vue_vue_type_template_id_6d360d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editors.vue?vue&type=template&id=6d360d8c&scoped=true& */ "./resources/js/views/form/Editors.vue?vue&type=template&id=6d360d8c&scoped=true&");
/* harmony import */ var _Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editors.vue?vue&type=script&lang=js& */ "./resources/js/views/form/Editors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true& */ "./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editors_vue_vue_type_template_id_6d360d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editors_vue_vue_type_template_id_6d360d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d360d8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/Editors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/Editors.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/form/Editors.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=style&index=0&id=6d360d8c&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_style_index_0_id_6d360d8c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/form/Editors.vue?vue&type=template&id=6d360d8c&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/form/Editors.vue?vue&type=template&id=6d360d8c&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_template_id_6d360d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editors.vue?vue&type=template&id=6d360d8c&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/Editors.vue?vue&type=template&id=6d360d8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_template_id_6d360d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_template_id_6d360d8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);