(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slider_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slider.component.html */ "rOCw");
/* harmony import */ var _slider_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.component.scss */ "40x4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SliderComponent = class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SliderComponent.ctorParameters = () => [];
SliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slider',
        template: _raw_loader_slider_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slider_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SliderComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Development\Angular Projects\E-Com\E-comerce-App\src\main.ts */"zUnb");


/***/ }),

/***/ "0Sms":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-data/user-data.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"user-data\">\n  <h1>User Data</h1>\n  <form [formGroup]=\"formUserData\" class=\"user-form\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"name\" />\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Phone</mat-label>\n      <input matInput formControlName=\"phone\" />\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address</mat-label>\n      <input matInput formControlName=\"address\" />\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Coordinates</mat-label>\n      <input matInput readonly formControlName=\"coordinates\" />\n    </mat-form-field>\n    <div class=\"map-container\">\n      <agm-map\n        class=\"map\"\n        [latitude]=\"coordinates[0]\"\n        [longitude]=\"coordinates[1]\"\n      >\n        <agm-marker\n          [latitude]=\"coordinates[0]\"\n          [longitude]=\"coordinates[1]\"\n          draggable=\"true\"\n        ></agm-marker>\n      </agm-map>\n    </div>\n    <button mat-button class=\"save-btn\" (click)=\"saveUser()\">Save</button>\n    <button *ngIf=\"!formUserData.invalid\" mat-button class=\"save-btn\">\n      Confirm Order\n    </button>\n  </form>\n</div>\n");

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "oHuE");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");






let HeaderComponent = class HeaderComponent {
    constructor(data, snackBar) {
        this.data = data;
        this.snackBar = snackBar;
        this.cartItems = [];
        this.count = 0;
        this.cartNumber = 0;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
        this.data.cartRefresh$.subscribe((info) => {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.count = info;
        });
    }
    ngOnInit() {
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        console.log(this.cartItems);
        this.cartItemFunc();
    }
    deleteCart() {
        localStorage.removeItem('cart');
        this.cartNumberFunc();
        this.snackBar.open(`Cart Deleted Successfully`, 'End now', {
            duration: 3000,
            panelClass: ['panel', 'main-color'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    cartItemFunc() {
        if (localStorage.getItem('cart') != null) {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.count = this.cartItems.length;
        }
    }
    removeOneItem(productId) {
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i]._id === productId) {
                this.snackBar.open(` ( ${this.cartItems[i].name} )   Deleted Successfully`, 'End now', {
                    duration: 3000,
                    panelClass: ['panel', 'main-color'],
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });
                this.cartItems.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
                this.cartNumberFunc();
                // this.loadCart();
                this.check();
                if (this.cartItems.length === 0) {
                    localStorage.removeItem('cart');
                }
            }
        }
    }
    check() {
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    }
    cartNumberFunc() {
        let cartValue = [];
        cartValue = JSON.parse(localStorage.getItem('cart') || '[]');
        this.cartNumber = cartValue.length;
        this.data.cartRefresh$.next(this.cartNumber);
        console.log('cart Number:' + this.cartNumber);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "lgGG");
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.scss */ "iWmG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _producat_details_producat_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../producat-details/producat-details.component */ "o+jQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








const images = './assets/';
const image = (path) => images + path;
let ProductComponent = class ProductComponent {
    constructor(dialog, data, renderer, snackBar) {
        this.dialog = dialog;
        this.data = data;
        this.renderer = renderer;
        this.snackBar = snackBar;
        // @ViewChild('cardBtn') input: ElementRef<HTMLInputElement>;
        this.cartNumber = 0;
        this.cartItems = [];
        // products = [
        //   {
        //     id: 1,
        //     name: 'aaa',
        //     price: 21,
        //     image: image('1.jpg')
        //   },
        //   {
        //     id: 2,
        //     name: 'bbbb',
        //     price: 21,
        //     image: image('1.jpg')
        //   },
        //   {
        //     id: 3,
        //     name: 'cccccc',
        //     price: 21,
        //     image: image('1.jpg')
        //   },
        //   {
        //     id: 4,
        //     name: 'ddddd',
        //     price: 21,
        //     image: image('1.jpg')
        //   },
        //   {
        //     id: 5,
        //     name: 'rrrr',
        //     price: 21,
        //     image: image('1.jpg')
        //   },
        //   {
        //     id: 6,
        //     name: 'tttttt',
        //     price: 21,
        //     image: image('1.jpg')
        //   },
        // ];
        this.count = 0;
        this.toggle = true;
        this.status = 'Enable';
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
        this.data.cartRefresh$.subscribe((info) => {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.count = info;
        });
    }
    ngOnInit() {
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        // this.check();
        // this.cartItemFunc();
    }
    // check(): void {
    //   this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // }
    cartItemFunc() {
        if (localStorage.getItem('cart') != null) {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.count = this.cartItems.length;
        }
    }
    openDetails(id) {
        let productData;
        const productsData = this.products;
        console.log(this.products);
        productsData.forEach((product) => {
            if (product._id === id) {
                productData = product;
            }
        });
        this.dialog.open(_producat_details_producat_details_component__WEBPACK_IMPORTED_MODULE_6__["ProducatDetailsComponent"], {
            data: { products: productData },
        });
    }
    addToCart(product) {
        this.toggle = false;
        this.status = 'Disable';
        console.log(product);
        const cartDataNull = localStorage.getItem('cart');
        const id = product._id;
        if (cartDataNull === null) {
            const getStoredData = [];
            getStoredData.push(product);
            localStorage.setItem('cart', JSON.stringify(getStoredData));
            product.status = this.status;
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        }
        else {
            let index = -1;
            for (let i = 0; i < this.cartItems.length; i++) {
                if (id === this.cartItems[i].id) {
                    this.cartItems[i].cartProdQnt = product.cartProdQnt;
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                this.cartItems.push(product);
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
            }
            else {
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
            }
        }
        this.snackBar.open(` ( ${product.name} )   Added Successfully`, 'End now', {
            duration: 3000,
            panelClass: ['panel', 'main-color'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
        this.cartNumberFunc();
    }
    cartNumberFunc() {
        let cartValue = [];
        cartValue = JSON.parse(localStorage.getItem('cart') || '[]');
        this.cartNumber = cartValue.length;
        this.data.cartRefresh$.next(this.cartNumber);
        console.log('cart Number:' + this.cartNumber);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
ProductComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
};
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
        styles: [_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductComponent);



/***/ }),

/***/ "40x4":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#carouselExampleControls {\n  width: 100%;\n  height: 500px;\n}\n\n.carousel-control-next,\n.carousel-control-prev {\n  background-color: #ff8100;\n  width: 50px;\n  height: 50px;\n  transform: translate(-20px, 240px);\n  border-radius: 50%;\n  opacity: 0.7 !important;\n}\n\n.carousel-control-prev {\n  transform: translate(20px, 240px) !important;\n}\n\n.carousel {\n  width: 100%;\n  /* height: 800px; */\n}\n\n.carousel-inner {\n  height: 100%;\n}\n\nimg {\n  height: 500px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBOztFQUVFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LFxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MTAwO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMjQwcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvcGFjaXR5OiAwLjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjQwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiA4MDBweDsgKi9cclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:9000/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DiW5":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-slider></app-slider>\n<div id=\"app-container\">\n  <div class=\"container\">\n    <h1>Categories</h1>\n    <mat-button-toggle-group\n      name=\"fontStyle\"\n      value=\"All\"\n      aria-label=\"Font Style\"\n    >\n      <mat-button-toggle value=\"All\" (click)=\"getProducts('')\">\n        <img src=\"./../assets/1.jpg\" />\n        <span class=\"title\">All</span>\n      </mat-button-toggle>\n      <mat-button-toggle (click)=\"getProducts('category1')\">\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Pizza</span>\n      </mat-button-toggle>\n      <mat-button-toggle (click)=\"getProducts('category2')\">\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Susagge</span>\n      </mat-button-toggle>\n      <mat-button-toggle (click)=\"getProducts('category3')\">\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Pasta</span>\n      </mat-button-toggle>\n      <mat-button-toggle>\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Pizza</span>\n      </mat-button-toggle>\n      <mat-button-toggle>\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Susagge</span>\n      </mat-button-toggle>\n      <mat-button-toggle>\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Pasta</span>\n      </mat-button-toggle>\n      <mat-button-toggle>\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Pasta</span>\n      </mat-button-toggle>\n      <mat-button-toggle>\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Pizza</span>\n      </mat-button-toggle>\n      <mat-button-toggle (click)=\"getProducts('category3s')\">\n        <img src=\"./../assets/1.jpg\" /> <span class=\"title\">Susagge</span>\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n    <div *ngIf=\"isLoading\" class=\"loading\">\n      <mat-spinner></mat-spinner>\n      <h2>Loading...</h2>\n    </div>\n    <!-- <div class=\"info-container\">\n    <div class=\"personal-info\">\n      <h1 class=\"info-title\"><strong>Trip Information</strong></h1>\n      <h1><strong>Name:</strong> {{ clientData.username }}</h1>\n      <h3><strong>Phone:</strong> {{ clientData.phone }}</h3>\n      <h3><strong>Ticket Number:</strong> {{ clientData.ticket_no }}</h3>\n      <h3><strong>Trip Time:</strong> {{ clientData.trip_date }}</h3>\n      <h3><strong>Trip Duration:</strong> {{ clientData.trip_duration }}</h3>\n    </div>\n  </div> -->\n\n    <!-- <mat-tab-group> -->\n    <!-- <mat-tab label=\"Menu\"> -->\n    <!-- <mat-button-toggle-group\n        class=\"sub-categoreis\"\n        appearance=\"legacy\"\n        name=\"fontStyle\"\n        aria-label=\"Font Style\"\n        value=\"{{ selected }}\"\n      >\n        <mat-button-toggle\n          *ngFor=\"let category of clientData.menu.categories; let i = index\"\n          (click)=\"getProducts(reservatioId, category.id)\"\n          value=\"{{ category.id }}\"\n          >{{ category.name }}</mat-button-toggle\n        >\n      </mat-button-toggle-group> -->\n    <!-- <h3 *ngIf=\"products.length === 0\">There is no items</h3> -->\n    <!-- <div class=\"items\">\n        <div class=\"item\" *ngFor=\"let product of clientData.menu.products\">\n          <img src=\"{{ product.image }}\" alt=\"\" />\n          <div class=\"content\">\n            <ul>\n              <li>\n                <strong>{{ product.name }}</strong>\n              </li>\n            </ul>\n          </div>\n          <div class=\"actions\">\n            <button\n              (click)=\"openDetails(product.id)\"\n              color=\"primary\"\n              mat-mini-fab\n              class=\"example-icon favorite-icon\"\n              aria-label=\"Example icon-button with heart icon\"\n            >\n              <mat-icon>visibility</mat-icon>\n            </button>\n            <button\n              color=\"primary\"\n              mat-mini-fab\n              class=\"example-icon favorite-icon\"\n              aria-label=\"Example icon-button with heart icon\"\n              (click)=\"addToCart(product)\"\n            >\n              <mat-icon>shopping_cart</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div> -->\n    <!-- </mat-tab> -->\n    <!-- <mat-tab label=\"Services\"> -->\n    <h3 class=\"empty-message\" *ngIf=\"products.length === 0 && !isLoading\">\n      There is no items\n    </h3>\n    <div class=\"items\" *ngIf=\"!isLoading\">\n      <app-product\n        *ngFor=\"let product of products\"\n        [product]=\"product\"\n        [products]=\"products\"\n      ></app-product>\n    </div>\n    <!-- </mat-tab> -->\n    <!-- </mat-tab-group> -->\n    <!-- <div class=\"contact-us\">\n    <h1 class=\"info-title\"><strong>Contact Us</strong></h1>\n    <form class=\"form\" [formGroup]=\"contcatForm\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Enter Your Message</mat-label>\n        <input matInput formControlName=\"comment\" />\n        <mat-icon matSuffix>mail_outline</mat-icon>\n      </mat-form-field>\n      <input hidden formControlName=\"reservation_id\" />\n      <button\n      mat-raised-button\n      [disabled]=\"contcatForm.invalid\"\n      color=\"primary\"\n      (click)=\"sendMessage()\"\n      >\n      Send\n    </button>\n  </form>\n</div> -->\n  </div>\n</div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this._cartRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // tslint:disable-next-line:variable-name
    get cartRefresh$() {
        return this._cartRefresh$;
    }
    // getClient(id): Observable<any> {
    //   return this.http.get(`${this.baseUrl}/index/${id}`);
    // }
    // sendMessage(data: any): Observable<any> {
    //   return this.http.post(`${this.baseUrl}/contact`, data);
    // }
    // sendCart(data: any): Observable<any> {
    //   return this.http.post(`${this.baseUrl}/createOrder`, data);
    // }
    // getProducts(reservationId: number, categoryId: number): Observable<any> {
    //   const url = `${this.baseUrl}/productsByCategory?reservation_id=${reservationId}&category_id=${categoryId}`;
    //   return this.http.get(`${url}`);
    // }
    getProducts(category) {
        const url = `${this.baseUrl}products?category=${category}`;
        return this.http.get(`${url}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "yZN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "MVUD":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cart .modal {\n  background-color: #1f1f1f !important;\n}\n#cart .container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#cart .container .cart {\n  width: 100%;\n}\n#cart .container .items-num {\n  color: #f68b1e;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 30px;\n}\n#cart .container h1 {\n  margin: 0px 0px 16px;\n}\n#cart .container .message {\n  width: 500px;\n  height: 500px;\n  box-shadow: 0 0 8px lightgrey;\n  border-radius: 8px;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 150px;\n  flex-direction: column;\n  background-color: #1f1f1f;\n  color: white;\n  border-radius: 50%;\n}\n#cart .container .message .icon {\n  color: #f68b1e;\n  width: 200px;\n}\n#cart .container .user-data {\n  margin-top: 100px;\n  width: 100%;\n}\n#cart .container .user-data h1 {\n  color: #f68b1e;\n  font-size: 30px;\n  font-weight: 500;\n}\n#cart .container .user-data .content {\n  width: 100%;\n  background-color: #1f1f1f;\n  color: #f68b1e;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  border-radius: 12px;\n}\n#cart .container .user-data .content h3 {\n  margin: 0px;\n}\n#cart .container .user-data .content h3 span {\n  color: white;\n}\n#cart .container .contain {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  flex-wrap: wrap;\n}\n#cart .container .contain .items-list {\n  width: 587px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 700px;\n  overflow: scroll;\n  overflow-x: hidden;\n  border-radius: 19px;\n}\n#cart .container .contain .items-list .item {\n  width: 98%;\n  display: flex;\n  justify-content: space-between;\n  background-color: #1f1f1f;\n  padding: 10px;\n  margin-top: 5px;\n  border-radius: 14px;\n  box-shadow: 0 3px 12px lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white;\n}\n#cart .container .contain .items-list .item .image-container {\n  width: 160px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#cart .container .contain .items-list .item .image-container img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #202020;\n}\n#cart .container .contain .items-list .item .image-container p {\n  margin: 6px 0 0;\n}\n#cart .container .contain .items-list .item .content {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#cart .container .contain .items-list .item .content h1 {\n  margin: 0px;\n}\n#cart .container .contain .items-list .item .content .details {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#cart .container .contain .items-list .item .content .details h2 {\n  margin: 0px;\n}\n#cart .container .contain .items-list .item .content .details .btns {\n  display: flex;\n  justify-content: space-between;\n  width: 90px;\n  align-items: center;\n}\n#cart .container .contain .items-list .item .content .details .btns .increment-btn {\n  color: #f68b1e;\n}\n#cart .container .contain .items-list .item .content .details .btns h3 {\n  margin: 0px;\n}\n#cart .container .contain .items-list .item .content .details .remove-item-btn {\n  color: red;\n  width: 50px;\n  height: 50px;\n  background-color: #ff000026;\n}\n#cart .container .contain .items-list .item .content .details .remove-item-btn mat-icon {\n  font-size: 35px;\n  margin-right: 6px;\n}\n#cart .container .contain .total-container .total-amount {\n  width: 480px;\n  border-radius: 17px;\n  margin-top: 10px;\n  box-shadow: 0 3px 12px #bcbcbc;\n  padding: 20px;\n  background-color: #1f1f1f;\n  color: white;\n  overflow: scroll;\n  overflow-y: inherit;\n  overflow-x: hidden;\n}\n#cart .container .contain .total-container .total-amount .sub-header {\n  font-weight: 500;\n  margin: 0px;\n  color: #f68b1e;\n}\n#cart .container .contain .total-container .total-amount .sub-content {\n  width: 100%;\n  height: 300px;\n  max-height: 350px;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  border-bottom: 1px solid black;\n  padding-bottom: 20px;\n  overflow: scroll;\n}\n#cart .container .contain .total-container .total-amount .sub-content h1 {\n  color: #f68b1e;\n  margin: 0px;\n  font-weight: 500;\n}\n#cart .container .contain .total-container .total-amount .total {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n#cart .container .contain .total-container .total-amount .total h1 {\n  margin: 0px;\n  font-weight: 500;\n  color: #f68b1e;\n}\n#cart .container .contain .total-container .total-amount .confirm-btn {\n  background-color: #f68b1e33;\n  color: white;\n  width: 100%;\n  margin-top: 15px;\n  height: 45px;\n  color: #f68b1e;\n  font-size: large;\n}\n#cart .container .contain .total-container .clear-all-cart-btn {\n  width: 100%;\n  background-color: #ff000021;\n  color: red;\n  margin-top: 15px;\n  height: 40px;\n  border: none;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0NBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUlJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLSTtFQUNFLG9CQUFBO0FBSE47QUFNSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUpSO0FBUUk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFOTjtBQVFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5SO0FBU007RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTUTtFQUNFLFdBQUE7QUFQVjtBQVNVO0VBQ0UsWUFBQTtBQVBaO0FBY0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWk47QUFjTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUFiUjtBQWdCUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBZFY7QUFnQlU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkWjtBQWdCWTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWRkO0FBaUJZO0VBQ0UsZUFBQTtBQWZkO0FBbUJVO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBakJaO0FBbUJZO0VBQ0UsV0FBQTtBQWpCZDtBQW9CWTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBbEJkO0FBb0JjO0VBQ0UsV0FBQTtBQWxCaEI7QUFxQmM7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFuQmhCO0FBcUJnQjtFQUVFLGNBQUE7QUFwQmxCO0FBdUJnQjtFQUNFLFdBQUE7QUFyQmxCO0FBeUJjO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUF2QmhCO0FBeUJnQjtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXZCbEI7QUFpQ1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQS9CVjtBQWlDVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUEvQlo7QUFrQ1U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFoQ1o7QUFtQ1k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBakNkO0FBcUNVO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBbkNaO0FBcUNZO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW5DZDtBQXdDVTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF0Q1o7QUEwQ1E7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBeENWIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FydCB7XHJcbiAgLm1vZGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmNhcnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbXMtbnVtIHtcclxuICAgICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweCAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4IGxpZ2h0Z3JleTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZjY4YjFlO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWRhdGEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xyXG4gICAgICAgIGNvbG9yOiAjZjY4YjFlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAuaXRlbXMtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDU4N3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA1cHggbGlnaHRncmV5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcclxuXHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4IGxpZ2h0Z3JheTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYigzMiwgMzIsIDMyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJ0bnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW5jcmVtZW50LWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNjhiMWUyMDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5yZW1vdmUtaXRlbS1idG4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDI2O1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b3RhbC1jb250YWluZXIge1xyXG5cclxuICAgICAgICAudG90YWwtYW1vdW50IHtcclxuICAgICAgICAgIHdpZHRoOiA0ODBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTJweCAjYmNiY2JjO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogaW5oZXJpdDtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAuc3ViLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y2OGIxZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3ViLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50b3RhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2Y2OGIxZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29uZmlybS1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY4YjFlMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xlYXItYWxsLWNhcnQtYnRuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDIxO1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Mv+G":
/*!*****************************************************************************!*\
  !*** ./src/app/components/producat-details/producat-details.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#item-container .mat-dialog-container {\n  width: 600px !important;\n}\n#item-container .item {\n  width: 600px;\n  height: 300px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  padding: 8px;\n}\n#item-container .item img {\n  border-radius: 8px 8px 0px 0px;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n#item-container .item .content {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n#item-container .item .content ul {\n  margin: 0px;\n  width: 100%;\n  margin-left: -25px;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#item-container .item .content ul h1 {\n  font-size: 26px;\n  color: #F68B1E;\n}\n#item-container .item .content ul .type {\n  background: #fc7f0042;\n  padding: 4px 14px;\n  border-radius: 12px;\n  color: #fc7f00;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n#item-container .item .content ul .currency {\n  color: #F68B1E;\n}\n#item-container .item .content ul .currency span {\n  color: white;\n  font-size: 22px;\n  font-weight: 600;\n  margin-left: 4px;\n}\n#item-container .item .content ul .cardBtn {\n  background: #fc7f0042;\n  color: #F68B1E;\n  border-radius: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWNhdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUJBQUE7QUFBSjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEo7QUFLSTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSk47QUFNTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSlY7QUFTUTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFQVjtBQVVRO0VBQ0UsY0FBQTtBQVJWO0FBVVU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSWjtBQVlRO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVlYiLCJmaWxlIjoicHJvZHVjYXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpdGVtLWNvbnRhaW5lciB7XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDNweCA4cHggMC4xcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICBjb2xvcjogI0Y2OEIxRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHt9XHJcblxyXG4gICAgICAgIC50eXBlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYzdmMDA0MjtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmM3ZjAwO1xyXG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1cnJlbmN5IHtcclxuICAgICAgICAgIGNvbG9yOiAjRjY4QjFFO1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkQnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYzdmMDA0MjtcclxuICAgICAgICAgIGNvbG9yOiAjRjY4QjFFO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "bSQM");
/* harmony import */ var _cart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.scss */ "MVUD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-data/user-data.component */ "YrRj");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");









let CartComponent = class CartComponent {
    constructor(router, data, dialog, snackBar) {
        this.router = router;
        this.data = data;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.totalAmount = 0;
        this.cartItems = [];
        this.order = {};
        this.cartNumber = 0;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
        this.data.cartRefresh$.subscribe((info) => {
            this.user = JSON.parse(localStorage.getItem('user') || '[]');
        });
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user') || '[]');
        this.checkCart();
        this.loadCart();
        this.userRefresh();
        this.cartNumberFunc();
    }
    submitOrder() {
        this.dialog.open(_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_7__["UserDataComponent"], {
        // width: '70%',
        // panelClass: 'modal',
        });
    }
    userRefresh() {
        const user = JSON.parse(localStorage.getItem('user') || '[]');
        this.data.cartRefresh$.next(user);
    }
    checkCart() {
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        if (localStorage.getItem('customer') !== null) {
            this.order = this.cartItems;
        }
    }
    loadCart() {
        if (localStorage.getItem('cart')) {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.totalAmount = this.cartItems.reduce((acc, val) => {
                return acc + val.price * val.cartProdQnt;
            }, 0);
            // this.user.price = this.totalAmount;
        }
    }
    incrementProduct(prodId, quantity) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id === prodId) {
                this.cartItems[i].cartProdQnt = quantity + 1;
            }
        }
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        this.loadCart();
    }
    decreaseProduct(prodId, quantity) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id === prodId) {
                this.cartItems[i].cartProdQnt = quantity - 1;
            }
        }
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        this.loadCart();
    }
    removeAllCart() {
        localStorage.removeItem('cart');
        this.router.navigate(['/']);
    }
    removeOneItem(productId) {
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id === productId) {
                this.snackBar.open(` ( ${this.cartItems[i].name} )   Added Successfully`, 'End now', {
                    duration: 3000,
                    panelClass: ['panel', 'main-color'],
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });
                this.cartItems.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
                this.loadCart();
                // this.checkCart();
                this.cartNumberFunc();
            }
        }
    }
    cartNumberFunc() {
        let cartValue = [];
        cartValue = JSON.parse(localStorage.getItem('cart') || '[]');
        this.cartNumber = cartValue.length;
        this.data.cartRefresh$.next(this.cartNumber);
        console.log('cart Number:' + this.cartNumber);
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        styles: [_cart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartComponent);



/***/ }),

/***/ "Qa4M":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-submit/confirm-submit.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"order-message\">\n  <h1>Your Order Submitted</h1>\n  <button mat-raised-button color=\"primary\" (click)=\"reload()\">Continue</button>\n</div>\n");

/***/ }),

/***/ "SdlR":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/producat-details/producat-details.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"item-container\">\n  <div class=\"item\">\n    <img src=\"{{ data.products.image }}\" alt=\"\" />\n    <div class=\"content\">\n      <ul>\n        <h1>\n          {{ data.products.name }}\n        </h1>\n        <h3>{{ data.products.describe }}</h3>\n        <h3 class=\"type\">{{ data.products.type }}</h3>\n        <h3 class=\"currency\">\n          $<span>{{ data.products.price | number }}</span>\n        </h3>\n        <button\n          class=\"cardBtn\"\n          mat-button\n          aria-label=\"Example icon-button with heart icon\"\n          (click)=\"addToCart(data.products)\"\n        >\n          <mat-icon>shopping_cart</mat-icon>\n        </button>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




const images = './assets/';
const image = (path) => images + path;
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'E-Commerce';
    }
    ngOnInit() {
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VME5":
/*!*****************************************************************!*\
  !*** ./src/app/components/sendmessage/sendmessage.component.ts ***!
  \*****************************************************************/
/*! exports provided: SendmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessageComponent", function() { return SendmessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sendmessage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sendmessage.component.html */ "imcK");
/* harmony import */ var _sendmessage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendmessage.component.scss */ "xlSO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SendmessageComponent = class SendmessageComponent {
    constructor() { }
    ngOnInit() {
    }
    reload() {
        window.location.reload();
    }
};
SendmessageComponent.ctorParameters = () => [];
SendmessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sendmessage',
        template: _raw_loader_sendmessage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sendmessage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SendmessageComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <app-footer></app-footer> -->\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"footer-container\">\n  <div class=\"container\">\n    <div class=\"data-container\">\n      <div class=\"contact-us\">\n        <h1>Contact Us</h1>\n        <div class=\"data\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\"\n            >phone</mat-icon\n          >\n          <p>01011111111</p>\n        </div>\n        <div class=\"data\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\"\n            >mail</mat-icon\n          >\n          <p>mostafa.zayan@hotmail.com</p>\n        </div>\n      </div>\n      <div class=\"our-location\">\n        <h1>Our Location</h1>\n        <div class=\"data\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\"\n            >place</mat-icon\n          >\n          <p>Nasr city, Cairo, Egypt</p>\n        </div>\n      </div>\n      <div class=\"follow-us\">\n        <h1>Follow Us</h1>\n        <div class=\"data\">\n          <img\n            class=\"social-icon\"\n            src=\"../../../assets/facebook-square-brands.svg\"\n            alt=\"\"\n          />\n          <img\n            class=\"social-icon\"\n            src=\"../../../assets/instagram-square-brands.svg\"\n            alt=\"\"\n          />\n          <img\n            class=\"youtube-icon\"\n            src=\"../../../assets/youtube-brands.svg\"\n            alt=\"\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"coby-right\">\n      <p>© Copy Right - Created By <span>Mostafa Zayan</span></p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "XTaH":
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-submit/confirm-submit.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmSubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmSubmitComponent", function() { return ConfirmSubmitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_submit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-submit.component.html */ "Qa4M");
/* harmony import */ var _confirm_submit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-submit.component.scss */ "it/M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ConfirmSubmitComponent = class ConfirmSubmitComponent {
    constructor() { }
    ngOnInit() {
    }
    reload() {
        window.location.reload();
    }
};
ConfirmSubmitComponent.ctorParameters = () => [];
ConfirmSubmitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-submit',
        template: _raw_loader_confirm_submit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_submit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfirmSubmitComponent);



/***/ }),

/***/ "YrRj":
/*!*************************************************************!*\
  !*** ./src/app/components/user-data/user-data.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataComponent", function() { return UserDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-data.component.html */ "0Sms");
/* harmony import */ var _user_data_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-data.component.scss */ "wElN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");






let UserDataComponent = class UserDataComponent {
    constructor(data) {
        this.data = data;
        this.coordinates = [];
        this.data.cartRefresh$.subscribe((info) => {
            this.user = JSON.parse(localStorage.getItem('user') || '[]');
            console.log('pla', this.coordinates);
            this.getPosition();
            this.addForm();
        });
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user') || '[]');
        console.log('pla', this.coordinates);
        this.getPosition();
        this.addForm();
    }
    getPosition() {
        navigator.geolocation.getCurrentPosition(resp => {
            console.log(resp.coords.latitude, resp.coords.longitude);
            console.log(resp);
            this.coordinates = [resp.coords.latitude, resp.coords.longitude];
        });
    }
    addForm() {
        this.formUserData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.phone, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.address, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            coordinates: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.coordinates, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
    }
    saveUser() {
        localStorage.setItem('user', JSON.stringify(this.formUserData.value));
        const user = JSON.parse(localStorage.getItem('user') || '[]');
        this.data.cartRefresh$.next(user);
    }
};
UserDataComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
UserDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-data',
        template: _raw_loader_user_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        styles: [_user_data_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserDataComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_producat_details_producat_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/producat-details/producat-details.component */ "o+jQ");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_confirm_submit_confirm_submit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/confirm-submit/confirm-submit.component */ "XTaH");
/* harmony import */ var _components_sendmessage_sendmessage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sendmessage/sendmessage.component */ "VME5");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "wn8t");
/* harmony import */ var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user-data/user-data.component */ "YrRj");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @agm/core */ "LSHg");































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_producat_details_producat_details_component__WEBPACK_IMPORTED_MODULE_13__["ProducatDetailsComponent"],
            _components_confirm_submit_confirm_submit_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmSubmitComponent"],
            _components_sendmessage_sendmessage_component__WEBPACK_IMPORTED_MODULE_21__["SendmessageComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"],
            _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_24__["SliderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_27__["CartComponent"],
            _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_28__["LandingPageComponent"],
            _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_29__["UserDataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_30__["AgmCoreModule"].forRoot({
                apiKey: ''
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "bSQM":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"cart\">\n  <div class=\"container\">\n    <div class=\"user-data\" *ngIf=\"user\">\n      <h1>User Data</h1>\n      <div class=\"content\">\n        <h3>\n          Name: <span> {{ user.name }}</span>\n        </h3>\n        <h3>\n          Phone: <span>{{ user.phone }} </span>\n        </h3>\n        <h3>\n          Address: <span>{{ user.address }}</span>\n        </h3>\n      </div>\n    </div>\n    <div *ngIf=\"cartItems.length === 0\" class=\"message\">\n      <img\n        class=\"icon\"\n        src=\"../../../assets/production_quantity_limits_black_24dp.svg\"\n      />\n      <h1>There Is No Items Yet</h1>\n    </div>\n\n    <div *ngIf=\"cartItems.length > 0\" class=\"cart\">\n      <h1 class=\"items-num\">Shooping Cart ({{ cartItems.length }})</h1>\n      <div class=\"contain\">\n        <div class=\"items-list\">\n          <div class=\"item\" *ngFor=\"let item of cartItems\">\n            <div class=\"image-container\">\n              <img src=\"{{ item.image }}\" alt=\"\" />\n            </div>\n            <div class=\"content\">\n              <h1>{{ item.name }}</h1>\n              <p>\n                {{ item.description }}\n              </p>\n              <div class=\"details\">\n                <h2>{{ item.price }} EGP</h2>\n                <div class=\"btns\">\n                  <button\n                    class=\"increment-btn\"\n                    (click)=\"incrementProduct(item.id, item.cartProdQnt)\"\n                    mat-icon-button\n                    aria-label=\"Example icon button with a vertical three dot icon\"\n                  >\n                    <mat-icon>add_circle</mat-icon>\n                  </button>\n                  <h3>{{ item.cartProdQnt }}</h3>\n                  <button\n                    [disabled]=\"item.cartProdQnt <= 1\"\n                    (click)=\"decreaseProduct(item.id, item.cartProdQnt)\"\n                    mat-icon-button\n                    class=\"increment-btn\"\n                    aria-label=\"Example icon button with a vertical three dot icon\"\n                  >\n                    <mat-icon>remove_circle</mat-icon>\n                  </button>\n                </div>\n                <button\n                  mat-icon-button\n                  (click)=\"removeOneItem(item.id)\"\n                  class=\"remove-item-btn\"\n                >\n                  <mat-icon class=\"remove-icon\">delete_sweep</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"total-container\">\n          <div class=\"total-amount\">\n            <h1 class=\"sub-header\">Sub Total</h1>\n            <div class=\"sub-content\">\n              <div class=\"left\">\n                <h3 *ngFor=\"let item of cartItems\">\n                  {{ item.name }} ( {{ item.price | currency: 'EGP ' }} )\n                  <span style=\"color: #f68b1e; font-weight: bold\"> X </span>\n                  {{ item.cartProdQnt }}\n                </h3>\n\n                <!-- <h1>Discount</h1> -->\n              </div>\n              <div class=\"right\">\n                <h3 *ngFor=\"let item of cartItems\">\n                  {{ item.cartProdQnt * item.price | currency: 'EGP ' }}\n                </h3>\n              </div>\n            </div>\n\n            <div class=\"total\">\n              <h1>Total Amount</h1>\n              <h1>{{ totalAmount | currency: 'EGP ' }}</h1>\n            </div>\n            <button mat-button (click)=\"submitOrder()\" class=\"confirm-btn\">\n              Confirm\n            </button>\n          </div>\n          <button\n            mat-stroked-button\n            (click)=\"removeAllCart()\"\n            class=\"clear-all-cart-btn\"\n          >\n            <mat-icon class=\"remove-icon\">delete_sweep</mat-icon>\n            Clear All\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <app-footer></app-footer> -->\n");

/***/ }),

/***/ "iWmG":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#product .item {\n  width: 225px;\n  height: 350px;\n  box-shadow: 0 3px 6px lightgrey;\n  border-radius: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n  margin: 10px;\n}\n#product .item .product-image {\n  background-image: url('slide-1.png');\n  border-radius: 10px;\n  width: 204px;\n  height: 155px;\n  box-shadow: 0 5px 8px lightgrey;\n  /* transform: translateY(-40px); */\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-top: 10px;\n}\n#product .item .content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#product .item .content h2,\n#product .item .content h3 {\n  margin: 0px !important;\n}\n#product .item .content .type {\n  background: #fc7f0042;\n  padding: 4px 14px;\n  border-radius: 12px;\n  color: #fc7f00;\n}\n#product .item .content .currency {\n  color: #F68B1E;\n}\n#product .item .content .currency span {\n  color: black;\n  font-size: 22px;\n  font-weight: 600;\n  margin-left: 4px;\n}\n#product .item .actions {\n  width: 90%;\n  justify-content: space-between;\n  display: flex;\n}\n#product .item .actions .cardBtn {\n  background: #fc7f0042;\n  color: #F68B1E;\n  border-radius: 4px;\n  width: 96px;\n}\n.pressed {\n  background-color: lightgray;\n  color: white;\n  width: 96px;\n}\n.panel.main-color {\n  background: #1f1f1f;\n  color: #F68B1E;\n}\n.panel.main-color button {\n  background-color: #F68B1E40;\n  color: #F68B1E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhOO0FBTUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1NOztFQUVFLHNCQUFBO0FBSlI7QUFPTTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFMUjtBQVFNO0VBQ0UsY0FBQTtBQU5SO0FBUVE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOVjtBQVdJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQVROO0FBV007RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUUjtBQWlCQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkRjtBQWlCQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQWRGO0FBZ0JFO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBZEoiLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0IHtcclxuXHJcblxyXG4gIC5pdGVtIHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNzBweDtcclxuXHJcbiAgICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvc2xpZGUtMS5wbmcnKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgd2lkdGg6IDIwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDVweCA4cHggbGlnaHRncmV5O1xyXG4gICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpOyAqL1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBoMixcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50eXBlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmM3ZjAwNDI7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBjb2xvcjogI2ZjN2YwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1cnJlbmN5IHtcclxuICAgICAgICBjb2xvcjogI0Y2OEIxRTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5jYXJkQnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmM3ZjAwNDI7XHJcbiAgICAgICAgY29sb3I6ICNGNjhCMUU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5wcmVzc2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA5NnB4O1xyXG59XHJcblxyXG4ucGFuZWwubWFpbi1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICBjb2xvcjogI0Y2OEIxRTtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNjhCMUU0MDtcclxuICAgIGNvbG9yOiAjRjY4QjFFO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "imcK":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sendmessage/sendmessage.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"order-message\">\n  <h1>Your Message Sended</h1>\n  <button mat-raised-button color=\"primary\" (click)=\"reload()\">Continue</button>\n</div>\n");

/***/ }),

/***/ "it/M":
/*!*************************************************************************!*\
  !*** ./src/app/components/confirm-submit/confirm-submit.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25maXJtLXN1Ym1pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY29uZmlybS1zdWJtaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItbWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "lgGG":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"product\">\n  <div class=\"item\">\n    <div class=\"product-image\" alt=\"\"></div>\n    <div class=\"content\">\n      <h2>{{ product.name }}</h2>\n      <h3>{{ product.description }}</h3>\n      <p class=\"type\">{{ product.type }}</p>\n      <p class=\"currency\">\n        $<span>{{ product.price | number }}</span>\n      </p>\n    </div>\n    <div class=\"actions\">\n      <button\n        (click)=\"openDetails(product._id)\"\n        mat-button\n        class=\"cardBtn\"\n        aria-label=\"Example icon-button with heart icon\"\n      >\n        <mat-icon>visibility</mat-icon>\n      </button>\n      <button\n        class=\"cardBtn\"\n        mat-button\n        aria-label=\"Example icon-button with heart icon\"\n        (click)=\"addToCart(product)\"\n        [ngClass]=\"{ cardBtn: toggle, pressed: !toggle }\"\n      >\n        <mat-icon>shopping_cart</mat-icon>\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "o+jQ":
/*!***************************************************************************!*\
  !*** ./src/app/components/producat-details/producat-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProducatDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducatDetailsComponent", function() { return ProducatDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_producat_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./producat-details.component.html */ "SdlR");
/* harmony import */ var _producat_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producat-details.component.scss */ "Mv+G");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






let ProducatDetailsComponent = class ProducatDetailsComponent {
    constructor(data, dataService) {
        this.data = data;
        this.dataService = dataService;
        this.cartNumber = 0;
        this.cartItems = [];
        this.count = 0;
        this.dataService.cartRefresh$.subscribe((info) => {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.count = info;
        });
    }
    ngOnInit() {
        console.log(this.data);
        this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    }
    cartItemFunc() {
        if (localStorage.getItem('cart') != null) {
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            this.count = this.cartItems.length;
        }
    }
    addToCart(product) {
        console.log(product);
        const cartDataNull = localStorage.getItem('cart');
        const id = product.id;
        if (cartDataNull === null) {
            const getStoredData = [];
            getStoredData.push(product);
            localStorage.setItem('cart', JSON.stringify(getStoredData));
            // product.status = this.status;
            this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        }
        else {
            let index = -1;
            for (let i = 0; i < this.cartItems.length; i++) {
                if (id === this.cartItems[i].id) {
                    this.cartItems[i].cartProdQnt = product.cartProdQnt;
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                this.cartItems.push(product);
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
            }
            else {
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
            }
        }
        this.cartNumberFunc();
    }
    cartNumberFunc() {
        let cartValue = [];
        cartValue = JSON.parse(localStorage.getItem('cart') || '[]');
        this.cartNumber = cartValue.length;
        this.dataService.cartRefresh$.next(this.cartNumber);
        console.log('cart Number:' + this.cartNumber);
    }
};
ProducatDetailsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
ProducatDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-producat-details',
        template: _raw_loader_producat_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producat_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProducatDetailsComponent);



/***/ }),

/***/ "oHuE":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar {\n  background-color: #1f1f1f !important;\n  color: #F68B1E !important;\n  position: fixed !important;\n  z-index: 6 !important;\n  display: flex !important;\n  justify-content: space-between !important;\n}\n.mat-toolbar .mat-badge-content {\n  background-color: #F68B1E !important;\n  margin: 6px !important;\n}\n.actions-btns {\n  width: 100%;\n  text-align: center;\n}\n.actions-btns .check-out {\n  width: 95%;\n  margin: 10px 0px !important;\n  background-color: #f68b1e40 !important;\n  box-shadow: none !important;\n  color: #f68b1e !important;\n}\n.actions-btns .deleteCart {\n  margin-bottom: 10px;\n  box-shadow: none !important;\n  width: 95%;\n  background-color: #ff000040;\n  color: red;\n  margin-bottom: 10px !important;\n}\n.mat-menu-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-height: 600px;\n  padding-bottom: 10px;\n}\n.mat-menu-content .cart-items .cart-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.mat-menu-content .cart-items .item {\n  width: 250px !important;\n  box-shadow: 0 3px 8px 0.1px lightgrey !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  padding: 10px !important;\n  margin: 0px 5px 5px 5px !important;\n}\n.mat-menu-content .cart-items .item img {\n  border-radius: 18px;\n  width: 60px;\n  height: 60px;\n  margin-left: 10px;\n}\n.mat-menu-content .cart-items .item .content ul {\n  margin: 0px;\n  margin-left: -25px;\n  list-style: none;\n}\n.mat-menu-content .cart-items .item .actions button {\n  color: #f61e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7QUFDRjtBQUNFO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFESjtBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFIRjtBQU1JO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUpOO0FBT0k7RUFDRSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FBTE47QUFVTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVJSO0FBY1E7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQWJWO0FBa0JRO0VBQ0UsY0FBQTtBQWhCViIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogI0Y2OEIxRSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDYgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjY4QjFFICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbnMtYnRucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAuY2hlY2stb3V0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY4YjFlNDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjY4YjFlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZGVsZXRlQ2FydCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA0MDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmNhcnQtaXRlbXMge1xyXG4gICAgLmNhcnQtaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggOHB4IDAuMXB4IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMHB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICMxZjFmMWY7XHJcbiAgICAgIC8vIGNvbG9yOiAjZjY4YjFlO1xyXG5cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjYxZTFlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyAuaXRlbTpob3ZlciB7XHJcbiAgICAvLyAgIC5hY3Rpb25zIHtcclxuICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICB9XHJcblxyXG4gIC5zdWJtaXQge31cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "qMys":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#app-container .container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#app-container .container h1 {\n  color: #F68B1E;\n  margin-top: 30px;\n  font-size: 40px;\n}\n#app-container .container .empty-message {\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  background-color: #f68b1e4f;\n  color: #f68b1e;\n  padding: 15px 40px;\n  font-size: 25px;\n  border-radius: 10px;\n}\n#app-container .container .loading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n}\n#app-container .container .loading .mat-progress-spinner circle,\n#app-container .container .loading .mat-spinner circle {\n  stroke: #f68b1e !important;\n  stroke-width: 2% !important;\n}\n#app-container .container .loading h2 {\n  color: #F68B1E;\n  margin-left: 14px;\n}\n#app-container .container .info-container {\n  width: 100%;\n  display: flex;\n  margin-top: 20px;\n  justify-content: space-around;\n}\n#app-container .container .info-container .personal-info {\n  box-shadow: 0 3px 8px lightgrey;\n  padding: 20px;\n  border-radius: 12px;\n  width: 100%;\n}\n#app-container .container .info-container .personal-info .info-title {\n  border-bottom: 2px solid;\n}\n#app-container .container .contact-us {\n  box-shadow: 0 3px 8px lightgrey;\n  border-radius: 12px;\n  padding: 60px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n#app-container .container .contact-us .info-title {\n  border-bottom: 2px solid;\n}\n#app-container .container .contact-us .form {\n  display: flex;\n  flex-direction: column;\n}\n#app-container .container .mat-tab-labels {\n  display: flex;\n  justify-content: center;\n}\n#app-container .container .mat-tab-header {\n  border-bottom: none;\n}\n#app-container .container .sub-categoreis {\n  margin-top: 20px;\n  width: 100%;\n}\n#app-container .container .items {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.mat-menu-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-height: 600px;\n  padding-bottom: 10px;\n}\n.mat-menu-content .cart-items .cart-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.mat-menu-content .cart-items .item {\n  width: 250px !important;\n  box-shadow: 0 3px 8px 0.1px lightgrey !important;\n  border-radius: 8px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  padding: 10px !important;\n  margin: 0px 5px 5px 5px !important;\n}\n.mat-menu-content .cart-items .item img {\n  border-radius: 18px;\n  width: 60px;\n  height: 60px;\n  margin-left: 10px;\n}\n.mat-menu-content .cart-items .item .content ul {\n  margin: 0px;\n  margin-left: -25px;\n  list-style: none;\n}\n.mat-menu-content .cart-items .item .actions button {\n  color: #f61e1e;\n}\n.example-spacer {\n  flex: 1 1 auto;\n}\n.mat-tab-body-content {\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.mat-button-toggle-checked {\n  background-color: #F68B1E !important;\n}\n.mat-button-toggle-checked .mat-button-toggle-button {\n  color: white !important;\n}\n.mat-button-toggle-group {\n  border: none;\n  box-shadow: none !important;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 40px;\n}\n.mat-button-toggle-group img {\n  width: 70px;\n  height: 70px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  border-radius: 35px;\n  transform: translateY(-29px);\n}\n.mat-button-toggle-group .title {\n  margin-top: -25px;\n  font-size: 20px;\n}\n.mat-button-toggle {\n  background-color: #1f1f1f;\n  box-shadow: 0 3px 8px lightgrey;\n  margin: 16px 5px;\n  border-radius: 25px;\n  color: white;\n}\n.mat-button-toggle .mat-button-toggle-ripple {\n  border-radius: 25px;\n}\n.mat-button-toggle-button {\n  color: #F68B1E !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n.mat-button-toggle-label-content {\n  padding: 0 12px !important;\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQU47QUFHSTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxXQUFBO0FBSk47QUFNTTs7RUFFRSwwQkFBQTtFQUNBLDJCQUFBO0FBSlI7QUFPTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUxSO0FBU0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFQTjtBQVNNO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBUFI7QUFTUTtFQUNFLHdCQUFBO0FBUFY7QUFhSTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBWE47QUFhTTtFQUNFLHdCQUFBO0FBWFI7QUFjTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVpSO0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBZE47QUFpQkk7RUFDRSxtQkFBQTtBQWZOO0FBa0JJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBaEJOO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWxCTjtBQWlFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBOURGO0FBaUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQS9ETjtBQWtFSTtFQUNFLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7QUFoRU47QUFxRU07RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFuRVI7QUF5RVE7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQXhFVjtBQTZFUTtFQUNFLGNBQUE7QUEzRVY7QUE4RkE7RUFDRSxjQUFBO0FBNUZGO0FBK0ZBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBNUZGO0FBK0ZBO0VBQ0Usb0NBQUE7QUE1RkY7QUE4RkU7RUFDRSx1QkFBQTtBQTVGSjtBQWlHQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBOUZGO0FBZ0dFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQTlGSjtBQWlHRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQS9GSjtBQW1HQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWhHRjtBQW9HQTtFQUNFLG1CQUFBO0FBakdGO0FBdUdBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBcEdGO0FBeUdBO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7QUF0R0YiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1jb250YWluZXIge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICNGNjhCMUU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wdHktbWVzc2FnZSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjhiMWU0ZjtcclxuICAgICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjZjtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsXHJcbiAgICAgIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgICAgIHN0cm9rZTogI2Y2OGIxZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMiUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjRjY4QjFFO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgLnBlcnNvbmFsLWluZm8ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCBsaWdodGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuaW5mby10aXRsZSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LXVzIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggOHB4IGxpZ2h0Z3JleTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuaW5mby10aXRsZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10YWItbGFiZWxzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3ViLWNhdGVnb3JlaXMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIC8vIC5pdGVtIHtcclxuICAgICAgLy8gICB3aWR0aDogMTcwcHg7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgLy8gICBib3gtc2hhZG93OiAwIDNweCA4cHggMC4xcHggbGlnaHRncmV5O1xyXG4gICAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgIC8vICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC8vICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIC8vICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgLy8gICBpbWcge1xyXG4gICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAvLyAgIH1cclxuXHJcbiAgICAgIC8vICAgLmNvbnRlbnQge1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgLy8gICAgIHVsIHtcclxuICAgICAgLy8gICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIC8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgIC8vICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG5cclxuICAgICAgLy8gICAuYWN0aW9ucyB7XHJcbiAgICAgIC8vICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LW1lbnUtcGFuZWwge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMDBlMGM7XHJcbn1cclxuXHJcblxyXG4ubWF0LW1lbnUtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAuY2FydC1pdGVtcyB7XHJcbiAgICAuY2FydC1pdGVtcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCA4cHggMC4xcHggbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwcHggNXB4IDVweCA1cHggIWltcG9ydGFudDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICAgICAgLy8gY29sb3I6ICNmNjhiMWU7XHJcblxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICNmNjFlMWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIC5pdGVtOmhvdmVyIHtcclxuICAgIC8vICAgLmFjdGlvbnMge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdCB7fVxyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNjhCMUUgIWltcG9ydGFudDtcclxuXHJcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogNDBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI5cHgpO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCBsaWdodGdyZXk7XHJcbiAgbWFyZ2luOiAxNnB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtcmlwcGxlIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtYnV0dG9uIHtcclxuICBjb2xvcjogI0Y2OEIxRSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuXHJcblxyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "rOCw":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contain\">\n  <div\n    id=\"carouselExampleControls\"\n    class=\"carousel slide\"\n    data-bs-ride=\"carousel\"\n  >\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img\n          src=\"../../../assets/slide-1.png\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n      </div>\n      <div class=\"carousel-item\">\n        <img\n          src=\"../../../assets/slide-2.png\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n      </div>\n      <div class=\"carousel-item\">\n        <img\n          src=\"../../../assets/slide-3.png\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n      </div>\n    </div>\n    <button\n      class=\"carousel-control-prev\"\n      type=\"button\"\n      data-bs-target=\"#carouselExampleControls\"\n      data-bs-slide=\"prev\"\n    >\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\">Previous</span>\n    </button>\n    <button\n      class=\"carousel-control-next\"\n      type=\"button\"\n      data-bs-target=\"#carouselExampleControls\"\n      data-bs-slide=\"next\"\n    >\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\">Next</span>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "wn8t");





const routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wElN":
/*!***************************************************************!*\
  !*** ./src/app/components/user-data/user-data.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#user-data h1 {\n  color: #f68b1e;\n}\n#user-data .user-form {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n}\n#user-data .map-container {\n  width: 100%;\n}\n#user-data .map-container agm-map {\n  width: 100%;\n  height: 300px;\n}\n#user-data .save-btn {\n  background-color: #f68b1e1f;\n  color: #f68b1e;\n  margin-top: 10px;\n}\n#user-data .modal {\n  background-color: #1f1f1f !important;\n}\n#user-data .mat-input-element {\n  color: #f68b1e;\n}\n#user-data .mat-form-field-label {\n  color: #f68b1e;\n}\n#user-data .mat-form-field {\n  color: #f68b1e;\n}\n#user-data .mat-form-field-underline {\n  background-color: #f68b1e;\n}\n#user-data .mat-form-field-ripple {\n  background-color: #f68b1e;\n}\n#user-data .mat-form-field-required-marker {\n  color: #f68b1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtBQUhKO0FBS0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUhOO0FBUUU7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxvQ0FBQTtBQVBKO0FBVUU7RUFDRSxjQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7QUFUSjtBQVlFO0VBQ0UsY0FBQTtBQVZKO0FBYUU7RUFDRSx5QkFBQTtBQVhKO0FBY0U7RUFDRSx5QkFBQTtBQVpKO0FBZUU7RUFDRSxjQUFBO0FBYkoiLCJmaWxlIjoidXNlci1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXItZGF0YSB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgfVxyXG5cclxuICAudXNlci1mb3JtIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB9XHJcblxyXG4gIC5tYXAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGFnbS1tYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuc2F2ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2OGIxZTFmO1xyXG4gICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBjb2xvcjogI2Y2OGIxZTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2Y2OGIxZTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBjb2xvcjogI2Y2OGIxZTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2OGIxZTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2OGIxZTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xyXG4gICAgY29sb3I6ICNmNjhiMWU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "wn8t":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing-page.component.html */ "DiW5");
/* harmony import */ var _landing_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.component.scss */ "qMys");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const images = './assets/';
const image = (path) => images + path;
let LandingPageComponent = class LandingPageComponent {
    constructor(dialog, data, formBuilder, route) {
        this.dialog = dialog;
        this.data = data;
        this.formBuilder = formBuilder;
        this.route = route;
        this.isLoading = false;
        this.staticId = '161430102560384761d84fd';
        this.clientData = [];
        this.products = [];
        this.cartNumber = 0;
        this.cartItems = [];
        this.count = 0;
        this.cartProducts = [];
        this.localClientData = [];
        this.cartIds = [];
        // this.data.cartRefresh$.subscribe((info: any) => {
        //   this.count = info;
        // });
    }
    ngOnInit() {
        // this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        // this.clientId = this.route.snapshot.paramMap.get('id');
        // // this.getClientData();
        // // this.getProducts(this.reservatioId, 1);
        // this.check();
        // this.cartItemFunc();
        // this.initContactForm();
        // this.localClientData = JSON.parse(localStorage.getItem('clientData') || '[]');
        // this.resId = this.localClientData.reservation_id;
        // console.log(this.resId);
        this.getProducts('');
    }
    initContactForm() {
        this.contcatForm = this.formBuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            reservation_id: [localStorage.getItem('resId'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    // sendMessage() {
    //   this.data.sendMessage(this.contcatForm.value).subscribe((res: any) => {
    //     console.log(res);
    //     this.dialog.open(SendmessageComponent);
    //   })
    // }
    // sendCart() {
    //   const resId = localStorage.getItem('resId');
    //   const data = {
    //     items: this.cartItems,
    //     reservation_id: resId
    //   }
    //   this.data.sendCart(data).subscribe((res: any) => {
    //     console.log(res);
    //     localStorage.removeItem('cart');
    //     this.dialog.open(ConfirmSubmitComponent);
    //   })
    // }
    // getClientData() {
    //   this.data.getClient(this.staticId).subscribe((res: any) => {
    //     this.clientData = res.data;
    //     this.reservatioId = res.data.reservation_id;
    //     this.resId = res.data.reservation_id;
    //     this.selected = res.data.menu.categories[0].id;
    //     this.products = res.data.menu.products;
    //     console.log(this.selected);
    //     console.log('client data', this.clientData);
    //     localStorage.setItem('resId', JSON.stringify(this.resId));
    //     localStorage.setItem('clientData', JSON.stringify(this.clientData));
    //   })
    // }
    // getProducts(reservationId: number, categoryId: number) {
    //   this.data.getProducts(reservationId, categoryId).subscribe((res: any) => {
    //     this.products = res.data;
    //     this.clientData.menu.products = this.products;
    //     this.selected = categoryId;
    //     console.log(this.products);
    //   })
    // }
    getProducts(category) {
        this.isLoading = true;
        this.data.getProducts(category).subscribe((res) => {
            setTimeout(() => {
                this.products = res;
                this.isLoading = false;
            }, 1000);
            console.log(this.products);
        });
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LandingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-landing-page',
        template: _raw_loader_landing_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
        styles: [_landing_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LandingPageComponent);



/***/ }),

/***/ "xlSO":
/*!*******************************************************************!*\
  !*** ./src/app/components/sendmessage/sendmessage.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZW5kbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic2VuZG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItbWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "yZN6":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer-container {\n  background-color: #1f1f1f;\n  width: 100%;\n  margin-top: 40px;\n}\n#footer-container .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: white;\n}\n#footer-container .container .data-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#footer-container .container .data-container h1 {\n  color: #F68B1E;\n}\n#footer-container .container .data-container .contact-us,\n#footer-container .container .data-container .our-location,\n#footer-container .container .data-container .follow-us {\n  width: 360px;\n  padding: 20px;\n}\n#footer-container .container .data-container .contact-us h1,\n#footer-container .container .data-container .our-location h1,\n#footer-container .container .data-container .follow-us h1 {\n  color: #F68B1E;\n  font-size: 35px;\n  font-weight: 500;\n}\n#footer-container .container .data-container .contact-us .data,\n#footer-container .container .data-container .our-location .data,\n#footer-container .container .data-container .follow-us .data {\n  display: flex;\n  margin-top: 10px;\n}\n#footer-container .container .data-container .contact-us .data mat-icon,\n#footer-container .container .data-container .our-location .data mat-icon,\n#footer-container .container .data-container .follow-us .data mat-icon {\n  color: #F68B1E;\n}\n#footer-container .container .data-container .contact-us .data p,\n#footer-container .container .data-container .our-location .data p,\n#footer-container .container .data-container .follow-us .data p {\n  font-size: 18px;\n  margin: 3px 5px !important;\n}\n#footer-container .container .data-container .contact-us .data .social-icon,\n#footer-container .container .data-container .our-location .data .social-icon,\n#footer-container .container .data-container .follow-us .data .social-icon {\n  width: 25px;\n  margin-right: 10px;\n}\n#footer-container .container .data-container .contact-us .data .youtube-icon,\n#footer-container .container .data-container .our-location .data .youtube-icon,\n#footer-container .container .data-container .follow-us .data .youtube-icon {\n  width: 36px;\n}\n#footer-container .container .coby-right {\n  border-top: 1px solid #F68B1E;\n  width: 100%;\n  text-align: center;\n  padding-top: 13px;\n}\n#footer-container .container .coby-right p span {\n  color: #F68B1E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ007RUFDRSxjQUFBO0FBQ1I7QUFFTTs7O0VBR0UsWUFBQTtFQUNBLGFBQUE7QUFBUjtBQUVROzs7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRVY7QUFDUTs7O0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBR1Y7QUFEVTs7O0VBQ0UsY0FBQTtBQUtaO0FBRlU7OztFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQU1aO0FBSFU7OztFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQU9aO0FBSlU7OztFQUNFLFdBQUE7QUFRWjtBQUZJO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUlOO0FBRFE7RUFDRSxjQUFBO0FBR1YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3Rlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogI0Y2OEIxRTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhY3QtdXMsXHJcbiAgICAgIC5vdXItbG9jYXRpb24sXHJcbiAgICAgIC5mb2xsb3ctdXMge1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBjb2xvcjogI0Y2OEIxRTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjY4QjFFO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDVweCAhaW1wb3J0YW50XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY2lhbC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAueW91dHViZS1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvYnktcmlnaHQge1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0Y2OEIxRTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IDEzcHg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjRjY4QjFFO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <span style=\"cursor: pointer\" [routerLink]=\"['/']\">E-Commerce</span>\n  <span class=\"example-spacer\"></span>\n  <button\n    mat-icon-button\n    class=\"example-icon favorite-icon\"\n    [matMenuTriggerFor]=\"menu\"\n  >\n    <mat-icon>shopping_cart</mat-icon>\n    <span\n      class=\"badge\"\n      *ngIf=\"count > 0\"\n      [matBadge]=\"count\"\n      matBadgePosition=\"after\"\n      matBadgeColor=\"warn\"\n      style=\"position: absolute\"\n    ></span>\n  </button>\n  <mat-menu class=\"menu-container\" #menu=\"matMenu\">\n    <!-- <button mat-menu-item>Item 1</button>\n    <button mat-menu-item>Item 2</button> -->\n    <div class=\"cart-items\">\n      <div class=\"item\" *ngFor=\"let item of cartItems\">\n        <img src=\"{{ item.imageUrl }}\" alt=\"\" />\n        <div class=\"content\">\n          <ul>\n            <li>\n              <strong>{{ item.name }}</strong>\n            </li>\n            <li>{{ item.price }} EGP</li>\n          </ul>\n        </div>\n        <div class=\"actions\">\n          <button\n            color=\"primary\"\n            mat-icon-button\n            class=\"example-icon favorite-icon\"\n            aria-label=\"Example icon-button with heart icon\"\n            (click)=\"removeOneItem(item._id)\"\n          >\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <h3 *ngIf=\"cartItems.length === 0\">Cart is empty</h3>\n    <div class=\"actions-btns\">\n      <button\n        mat-raised-button\n        *ngIf=\"cartItems.length > 0\"\n        class=\"check-out\"\n        color=\"primary\"\n        [routerLink]=\"['/cart']\"\n      >\n        <!-- (click)=\"sendCart()\" -->\n        Check Out\n      </button>\n      <button\n        mat-raised-button\n        *ngIf=\"cartItems.length > 0\"\n        class=\"deleteCart\"\n        (click)=\"deleteCart()\"\n      >\n        Remove All\n      </button>\n    </div>\n  </mat-menu>\n</mat-toolbar>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map