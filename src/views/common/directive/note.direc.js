"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var global_1 = require('../global');
var $$NoteDirec = (function () {
    function $$NoteDirec(G) {
        // this.sub = this.httpStatus.subscribe(
        //     httpStatus => {
        //
        //         switch (httpStatus) {
        //             case httpStatus > 0 && httpStatus < 300:
        //                 this.title = '操作成功';
        //                 break;
        //             case 401:
        //                 this.title = 'TOKEN 失效';
        //                 break;
        //             case 404:
        //                 this.title = '页面不存在';
        //                 break;
        //             case 500:
        //                 this.title = '操作失败';
        //                 break;
        //             default:
        //                 this.title = '操作失败';
        //                 break;
        //         }
        //
        //         if (httpStatus) {
        //             setTimeout(() => {
        //                 this.G.httpStatus = 0;
        //                 this.title = '';
        //             }, 2000);
        //         }
        //     }
        // );
        this.G = G;
    }
    // httpStatus: Observable<any> = new Observable(observer => {
    //     setInterval(() => {
    //         observer.next(this.G.httpStatus);
    //     }, 1000);
    // });
    $$NoteDirec.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    $$NoteDirec = __decorate([
        core_1.Component({
            selector: 'd-note',
            template: "\n        <div class=\"content\" *ngIf=\"G?.httpStatus >= 400\">\n            <h5>{{G?.httpError?.title}}</h5>\n            <ol>\n                <li *ngFor=\"let err of G.httpError.error.data\">\n                    {{err.message}}\n                </li>\n            </ol>\n        </div>\n    \n        <div class=\"content\" *ngIf=\"G?.httpStatus < 300\">\n            \u64CD\u4F5C\u6210\u529F\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [global_1.GLOBAL])
    ], $$NoteDirec);
    return $$NoteDirec;
}());
exports.$$NoteDirec = $$NoteDirec;
//# sourceMappingURL=note.direc.js.map