"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 5106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ AppLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.js


//header component to navigate to home page
//using the next/link
const Header = ()=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "card",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "card-header",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "nav",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "nav-item",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                children: "Home"
                            })
                        })
                    })
                })
            })
        })
    });
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/AppLayout.js




//creating layout to be used in my /pages
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-f69acd758053f981",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("link", {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                    crossOrigin: "anonymous",
                    className: "jsx-f69acd758053f981"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-f69acd758053f981" + " " + "main",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
                    props.children
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "f69acd758053f981",
                children: ".main.jsx-f69acd758053f981{text-align:centre}"
            })
        ]
    });
/* harmony default export */ const AppLayout = (Layout);


/***/ })

};
;