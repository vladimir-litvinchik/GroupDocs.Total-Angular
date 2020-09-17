/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';
export class ExcelDocumentComponent extends DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     * @param {?} windowService
     * @param {?} navigateService
     */
    constructor(_elementRef, zoomService, windowService, navigateService) {
        super(_elementRef, zoomService, windowService, navigateService);
        this.panzoom = null;
        this.navigateService = navigateService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPageNo = 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.refreshExcelDocHeight();
        this.pages.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.refreshExcelDocHeight();
        }));
        this.navigateService.navigate.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.selectSheet(value);
        }));
    }
    /**
     * @return {?}
     */
    refreshExcelDocHeight() {
        // For current iteration we'll change actual height of .document
        this.doc = this._elementRef.nativeElement.children.item(0);
        this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        // magic number 37 is the height of the bottom-bar with navigation between pages
        this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
    }
    /**
     * @param {?} number
     * @return {?}
     */
    selectSheet(number) {
        this.currentPageNo = number;
    }
}
ExcelDocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\r\n      <gd-excel-page *ngIf=\"currentPageNo == page.number || page.number == 0\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sheets\">\r\n  <div class=\"sheets-wrapper\">\r\n    <div *ngFor=\"let page of file?.pages\">\r\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:flex;border-top:1px solid #e7e7e7;position:fixed;bottom:17px;right:17px;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:flex}.page{position:relative;display:inline-block;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ExcelDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
ExcelDocumentComponent.propDecorators = {
    pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }]
};
if (false) {
    /** @type {?} */
    ExcelDocumentComponent.prototype.pages;
    /** @type {?} */
    ExcelDocumentComponent.prototype.currentPageNo;
    /** @type {?} */
    ExcelDocumentComponent.prototype.panzoom;
    /** @type {?} */
    ExcelDocumentComponent.prototype.navigateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPeEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjs7Ozs7OztJQU8zRCxZQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGVBQWdDO1FBQzFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQVBsRSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBUWIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDLEdBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFDdEMsS0FBSyxDQUFDLEVBQUU7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNuQixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscWhDQUE4Qzs7YUFFL0M7Ozs7WUFYbUIsVUFBVTtZQUlyQixXQUFXO1lBRlgsYUFBYTtZQUNiLGVBQWU7OztvQkFVckIsWUFBWSxTQUFDLGtCQUFrQjs7OztJQUFoQyx1Q0FBdUU7O0lBRXZFLCtDQUFzQjs7SUFDdEIseUNBQWU7O0lBQ2YsaURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uL3dpbmRvdy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFpvb21TZXJ2aWNlIH0gZnJvbSAgJy4uL3pvb20uc2VydmljZSc7XHJcbmltcG9ydCB7IEV4Y2VsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1kb2N1bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxEb2N1bWVudENvbXBvbmVudCBleHRlbmRzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICB7XHJcbiAgQFZpZXdDaGlsZHJlbihFeGNlbFBhZ2VDb21wb25lbnQpIHBhZ2VzOiBRdWVyeUxpc3Q8RXhjZWxQYWdlQ29tcG9uZW50PjsgXHJcbiAgXHJcbiAgY3VycmVudFBhZ2VObzogbnVtYmVyO1xyXG4gIHBhbnpvb20gPSBudWxsO1xyXG4gIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKF9lbGVtZW50UmVmLCB6b29tU2VydmljZSwgd2luZG93U2VydmljZSwgbmF2aWdhdGVTZXJ2aWNlKTtcclxuICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IDE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xyXG4gICAgdGhpcy5wYWdlcy5jaGFuZ2VzLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoXHJcbiAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICB0aGlzLnNlbGVjdFNoZWV0KHZhbHVlKTtcclxuICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hFeGNlbERvY0hlaWdodCgpIHtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSdsbCBjaGFuZ2UgYWN0dWFsIGhlaWdodCBvZiAuZG9jdW1lbnRcclxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICB0aGlzLnBhbnpvb20gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gbWFnaWMgbnVtYmVyIDM3IGlzIHRoZSBoZWlnaHQgb2YgdGhlIGJvdHRvbS1iYXIgd2l0aCBuYXZpZ2F0aW9uIGJldHdlZW4gcGFnZXNcclxuICAgIHRoaXMuZG9jLnN0eWxlLmhlaWdodCA9IHRoaXMucGFuem9vbS5zY3JvbGxIZWlnaHQgKyAzNyArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIHNlbGVjdFNoZWV0KG51bWJlcil7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSBudW1iZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==