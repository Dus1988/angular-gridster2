import { GridsterSwap } from './gridsterSwap.service';
import { GridsterItemComponent } from './gridsterItem.component';
import { GridsterComponent } from './gridster.component';
import { GridsterPush } from './gridsterPush.service';
export declare class GridsterDraggable {
    gridsterItem: GridsterItemComponent;
    gridster: GridsterComponent;
    lastMouse: {
        pageX: number;
        pageY: number;
    };
    offsetLeft: number;
    offsetTop: number;
    margin: number;
    diffTop: number;
    diffLeft: number;
    top: number;
    left: number;
    height: number;
    width: number;
    positionX: number;
    positionY: number;
    positionXBackup: number;
    positionYBackup: number;
    enabled: boolean;
    dragStartFunction: (event: any) => void;
    dragFunction: (event: any) => void;
    dragStopFunction: (event: any) => void;
    mousemove: Function;
    mouseup: Function;
    touchmove: Function;
    touchend: Function;
    touchcancel: Function;
    mousedown: Function;
    touchstart: Function;
    push: GridsterPush;
    swap: GridsterSwap;
    path: Array<{
        x: number;
        y: number;
    }>;
    constructor(gridsterItem: GridsterItemComponent, gridster: GridsterComponent);
    checkContentClass(target: any, current: any, contentClass: any): boolean;
    dragStart(e: any): void;
    dragMove(e: any): void;
    calculateItemPositionFromMousePosition(e: any): void;
    dragStop(e: any): void;
    cancelDrag(): void;
    makeDrag(): void;
    calculateItemPosition(): void;
    toggle(): void;
}
