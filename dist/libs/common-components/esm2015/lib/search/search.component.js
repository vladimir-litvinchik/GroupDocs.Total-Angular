/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SearchService } from "../search.service";
export class SearchComponent {
    /**
     * @param {?} _searchService
     */
    constructor(_searchService) {
        this._searchService = _searchService;
        this.hidePanel = new EventEmitter(false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe((/**
         * @param {?} total
         * @return {?}
         */
        (total) => {
            this.total = total;
            if (total !== 0) {
                this.current = 1;
            }
            else {
                this.current = 0;
            }
            this._searchService.setCurrent(this.current);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setText(text) {
        this._searchService.setText(text);
    }
    /**
     * @return {?}
     */
    hide() {
        this.setText('');
        this.hidePanel.emit(true);
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    }
    /**
     * @return {?}
     */
    next() {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.textElement.nativeElement.focus();
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-search',
                template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <div class=\"gd-nav-search-btn\" (click)=\"prev()\">\n    <fa-icon [icon]=\"['fas','chevron-left']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn\" (click)=\"next()\">\n    <fa-icon [icon]=\"['fas','chevron-right']\"></fa-icon>\n  </div>\n  <div class=\"gd-nav-search-btn gd-nav-search-cancel\" (click)=\"hide()\">\n    <fa-icon [icon]=\"['fas','times']\"></fa-icon>\n  </div>\n</div>\n",
                styles: [".gd-nav-search-btn{float:left;margin:0 10px;padding:3px 5px;cursor:pointer;color:#959da5}.gd-nav-search-cancel{font-size:15px;width:10px;margin-left:1px;margin-top:-2px}.gd-search-count{color:#959da5;font-size:11px;position:absolute;left:221px;top:13px;text-align:right;width:62px}.gd-nav-search-container{background-color:#3e4e5a;min-width:330px;padding:8px 0 7px 7px;position:absolute;left:328px;top:49px;z-index:1}.gd-search-input{float:left;height:11px;width:215px;padding:5px 65px 5px 5px}@media (max-width:1025px){.gd-nav-search-container{top:70px;left:45%}.gd-search-input{width:auto}.gd-search-count{left:48%}}@media (min-width:401px) and (max-width:700px){.gd-search-input{width:226px}.gd-search-count{left:55%}}@media (max-width:500px){.gd-nav-search-container{width:100%;left:0}}"]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: SearchService }
];
SearchComponent.propDecorators = {
    hidePanel: [{ type: Output }],
    textElement: [{ type: ViewChild, args: ['text', {
                    static: true
                },] }]
};
if (false) {
    /** @type {?} */
    SearchComponent.prototype.hidePanel;
    /** @type {?} */
    SearchComponent.prototype.current;
    /** @type {?} */
    SearchComponent.prototype.total;
    /** @type {?} */
    SearchComponent.prototype.textElement;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype._searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sZUFBZTs7OztJQVcxQixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVR2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFdkQsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFPUixjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4bEJBQXNDOzthQUV2Qzs7OztZQU5PLGFBQWE7Ozt3QkFTbEIsTUFBTTswQkFLTixTQUFTLFNBQUMsTUFBTSxFQUFDO29CQUNoQixNQUFNLEVBQUcsSUFBSTtpQkFDZDs7OztJQVBELG9DQUF1RDs7SUFFdkQsa0NBQVk7O0lBQ1osZ0NBQVU7O0lBRVYsc0NBRTJCOzs7OztJQUVmLHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi4vc2VhcmNoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQE91dHB1dCgpIGhpZGVQYW5lbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGN1cnJlbnQgPSAwO1xuICB0b3RhbCA9IDA7XG5cbiAgQFZpZXdDaGlsZCgndGV4dCcse1xuICAgIHN0YXRpYyA6IHRydWVcbiAgfSkgdGV4dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSkge1xuICAgIF9zZWFyY2hTZXJ2aWNlLnRvdGFsQ2hhbmdlLnN1YnNjcmliZSgodG90YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgaWYgKHRvdGFsICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRDdXJyZW50KHRoaXMuY3VycmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRUZXh0KHRleHQpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNldFRleHQoJycpO1xuICAgIHRoaXMuaGlkZVBhbmVsLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPiAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2Uuc2V0Q3VycmVudCh0aGlzLmN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA8IHRoaXMudG90YWwpIHtcbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRDdXJyZW50KHRoaXMuY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGV4dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=