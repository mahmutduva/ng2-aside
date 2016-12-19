import { EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
export declare class AsideMenuComponent {
    private sanitizer;
    side: 'left' | 'right';
    sideMode: 'over' | 'push';
    isBackdrop: boolean;
    width: string;
    isOpened: boolean;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    toggle(isOpen?: boolean): Promise<void>;
    constructor(sanitizer: DomSanitizer);
    readonly _asideMenu: string;
    readonly _isAsideClosed: boolean;
    readonly _isAsideOpened: boolean;
    readonly _asideLeft: boolean;
    readonly _asideRight: boolean;
    readonly _asideModeOver: boolean;
    readonly _asideModePush: boolean;
    readonly _asideLeftPosition: string;
    readonly _asideRightPosition: string;
    readonly _asideOpened: SafeStyle;
}
