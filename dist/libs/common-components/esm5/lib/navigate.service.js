/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { PagePreloadService } from "./page-preload.service";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./page-preload.service";
var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._observer = new BehaviorSubject(null);
        this._navigate = this._observer.asObservable();
    }
    Object.defineProperty(NavigateService.prototype, "navigate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navigate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "countPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._countPages;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._countPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "currentPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NavigateService.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.toLastPage = /**
     * @return {?}
     */
    function () {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    };
    /**
     * @return {?}
     */
    NavigateService.prototype.toFirstPage = /**
     * @return {?}
     */
    function () {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NavigateService.prototype.navigateTo = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    };
    NavigateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NavigateService.ctorParameters = function () { return [
        { type: PagePreloadService }
    ]; };
    /** @nocollapse */ NavigateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(i0.ɵɵinject(i1.PagePreloadService)); }, token: NavigateService, providedIn: "root" });
    return NavigateService;
}());
export { NavigateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._currentPage;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._countPages;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._navigate;
    /**
     * @type {?}
     * @private
     */
    NavigateService.prototype._pagePreloadService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV6QztJQVNFLHlCQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUxuRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLGNBQVMsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd0RSxDQUFDO0lBRUQsc0JBQUkscUNBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFlLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx3Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBRUQsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTs7OztJQU1ELGtDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQTVERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxPLGtCQUFrQjs7OzBCQUQxQjtDQWlFQyxBQTdERCxJQTZEQztTQTFEWSxlQUFlOzs7Ozs7SUFDMUIsdUNBQXlCOzs7OztJQUN6QixzQ0FBd0I7Ozs7O0lBQ3hCLG9DQUErRTs7Ozs7SUFDL0Usb0NBQXNFOzs7OztJQUUxRCw4Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2UgPSAwO1xyXG4gIHByaXZhdGUgX2NvdW50UGFnZXMgPSAwO1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPihudWxsKTtcclxuICBwcml2YXRlIF9uYXZpZ2F0ZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgbmF2aWdhdGUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb3VudFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY291bnRQYWdlcztcclxuICB9XHJcblxyXG4gIHNldCBjb3VudFBhZ2VzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2NvdW50UGFnZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1cnJlbnRQYWdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZXh0UGFnZSgpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSA8IHRoaXMuX2NvdW50UGFnZXMpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFBhZ2UrKztcclxuICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50UGFnZS0tO1xyXG4gICAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9MYXN0UGFnZSgpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gdGhpcy5fY291bnRQYWdlcztcclxuICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLl9jdXJyZW50UGFnZSk7XHJcbiAgfVxyXG5cclxuICB0b0ZpcnN0UGFnZSgpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gMTtcclxuICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLl9jdXJyZW50UGFnZSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKHBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICB0aGlzLl9wYWdlUHJlbG9hZFNlcnZpY2UuY2hhbmdlTGFzdFBhZ2VJblZpZXcocGFnZSk7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHBhZ2UpO1xyXG4gIH1cclxufVxyXG4iXX0=