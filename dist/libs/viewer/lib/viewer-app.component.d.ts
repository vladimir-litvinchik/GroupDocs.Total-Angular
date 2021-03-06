import { AfterViewInit, OnInit } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { FileDescription, FileModel, ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, PasswordService, FileCredentials, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfig } from "./viewer-config";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { Subscription } from 'rxjs';
import { IntervalTimer } from './interval-timer';
export declare class ViewerAppComponent implements OnInit, AfterViewInit {
    private _viewerService;
    private _modalService;
    private _navigateService;
    private _renderPrintService;
    private _windowService;
    private _loadingMaskService;
    title: string;
    files: FileModel[];
    file: FileDescription;
    viewerConfig: ViewerConfig;
    countPages: number;
    formatDisabled: boolean;
    showThumbnails: boolean;
    credentials: FileCredentials;
    browseFilesModal: string;
    showSearch: boolean;
    isDesktop: boolean;
    isLoading: boolean;
    _zoom: number;
    _pageWidth: number;
    _pageHeight: number;
    options: any;
    timerOptions: any;
    intervalTime: number;
    intervalTimer: IntervalTimer;
    countDownInterval: number;
    secondsLeft: number;
    fileWasDropped: boolean;
    formatIcon: string;
    fileParam: string;
    querySubscription: Subscription;
    selectedPageNumber: number;
    runPresentation: boolean;
    isFullScreen: boolean;
    startScrollTime: number;
    endScrollTime: number;
    docElmWithBrowsersFullScreenFunctions: HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
    };
    docWithBrowsersExitFunctions: Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
    };
    zoomService: ZoomService;
    fullScreen(): void;
    constructor(_viewerService: ViewerService, _modalService: ModalService, configService: ViewerConfigService, uploadFilesService: UploadFilesService, _navigateService: NavigateService, zoomService: ZoomService, pagePreloadService: PagePreloadService, _renderPrintService: RenderPrintService, passwordService: PasswordService, _windowService: WindowService, _loadingMaskService: LoadingMaskService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly rewriteConfig: boolean;
    readonly zoomConfig: boolean;
    readonly pageSelectorConfig: boolean;
    readonly searchConfig: boolean;
    readonly thumbnailsConfig: boolean;
    readonly rotateConfig: boolean;
    readonly downloadConfig: boolean;
    readonly uploadConfig: boolean;
    readonly printConfig: boolean;
    readonly browseConfig: boolean;
    readonly htmlModeConfig: boolean;
    readonly saveRotateStateConfig: boolean;
    readonly enableRightClickConfig: boolean;
    readonly currentPage: number;
    ifPresentation(): boolean;
    ifExcel(): boolean;
    ifImage(): boolean;
    validURL(str: any): boolean;
    getFileName(): string;
    openModal(id: string): void;
    closeModal(id: string): void;
    selectDir($event: string): void;
    selectFile($event: string, password: string, modalId: string): void;
    preloadPages(start: number, end: number): void;
    upload($event: string): void;
    nextPage(): void;
    prevPage(): void;
    toLastPage(): void;
    toFirstPage(): void;
    zoomIn(): void;
    zoomOut(): void;
    fileDropped($event: any): void;
    private ptToPx;
    getFitToWidth(): number;
    getFitToHeight(): number;
    zoomOptions(): {
        value: any;
        name: string;
        separator: boolean;
    }[];
    getTimerOptions(): {
        value: number;
        name: string;
        separator: boolean;
    }[];
    zoom: any;
    selectZoom($event: any): void;
    rotate(deg: number): void;
    private changeAngle;
    downloadFile(): void;
    printFile(): void;
    openThumbnails(): void;
    private clearData;
    onRightClick(): boolean;
    openSearch(): void;
    private refreshZoom;
    selectCurrentPage(pageNumber: any): void;
    onMouseWheelUp(): void;
    onMouseWheelDown(): void;
    vertScrollEnded(onTop: boolean): boolean;
    private TryOpenFileByUrl;
    toggleTimer($event: any): void;
    showCountDown(): boolean;
    startCountDown(seconds: number, reset?: boolean): void;
    private startInterval;
    private slideInRange;
    private resetInterval;
    pausePresenting(): void;
    resumePresenting(): void;
    presentationRunning(): boolean;
    presentationPaused(): boolean;
    startPresentation(): void;
    openFullScreen(): void;
    closeFullScreen(byButton?: boolean): void;
}
