import { OnInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { GridsterConfig } from './gridsterConfig.interface';
import { GridsterItemComponent } from './gridsterItem.component';
import { GridsterGridComponent } from './gridsterGrid.component';
import { GridsterItem } from './gridsterItem.interface';
export declare class GridsterComponent implements OnInit, OnDestroy {
    renderer: Renderer2;
    options: GridsterConfig;
    calculateLayoutDebounce: Function;
    movingItem: GridsterItem;
    previewStyle: Function;
    el: any;
    $options: GridsterConfig;
    mobile: boolean;
    curWidth: number;
    curHeight: number;
    grid: Array<GridsterItemComponent>;
    columns: number;
    rows: number;
    curColWidth: number;
    curRowHeight: number;
    windowResize: Function;
    emptyCellClick: Function;
    emptyCellDrop: Function;
    emptyCellMove: Function;
    gridLines: GridsterGridComponent;
    static checkCollisionTwoItems(item: GridsterItem, item2: GridsterItem): boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    resize(): void;
    setOptions(): void;
    optionsChanged(): void;
    ngOnDestroy(): void;
    emptyCellClickCb(e: any): void;
    emptyCellDragDrop(e: any): void;
    emptyCellDragOver(e: any): void;
    getValidItemFromEvent(e: any): GridsterItem | undefined;
    onResize(): void;
    checkIfToResize(): boolean;
    setGridSize(): void;
    setGridDimensions(): void;
    calculateLayout(): void;
    addItem(itemComponent: GridsterItemComponent): void;
    removeItem(itemComponent: GridsterItemComponent): void;
    checkCollision(itemComponent: GridsterItem, ignoreItem?: GridsterItem): GridsterItemComponent | boolean;
    checkGridCollision(itemComponent: GridsterItem): boolean;
    findItemWithItem(itemComponent: GridsterItem, ignoreItem?: GridsterItem): GridsterItemComponent;
    autoPositionItem(itemComponent: GridsterItemComponent): void;
    getNextPossiblePosition(newItem: GridsterItem): boolean;
    pixelsToPosition(x: number, y: number, roundingMethod: Function): [number, number];
    pixelsToPositionX(x: number, roundingMethod: Function): number;
    pixelsToPositionY(y: number, roundingMethod: Function): number;
    positionXToPixels(x: number): number;
    positionYToPixels(y: number): number;
    checkCompact(): void;
    checkCompactUp(): boolean;
    moveUpTillCollision(itemComponent: GridsterItemComponent): boolean;
    checkCompactLeft(): boolean;
    moveLeftTillCollision(itemComponent: GridsterItemComponent): boolean;
}
