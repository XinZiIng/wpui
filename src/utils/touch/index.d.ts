export interface TouchDataInterface {
    touchstart: {
        pageY: number,
        pageX: number
    },
    touchmove: {
        pageY: number,
        pageX: number
    },
    touchend: {
        pageY: number,
        pageX: number
    },
    moveDistance: {
        pageY: number,
        pageX: number
    },
    rotate: number,
    scale: number,
    lock: boolean,
}

export interface TouchOptionsInterface {
    el: HTMLElement,
    multiTouch?: boolean,

    onTouchStart?(ev?: Event, data?: { [propName: string]: any }),

    onTouchMove?(ev?: Event, data?: { [propName: string]: any }),

    onTouchEnd?(ev?: Event, data?: { [propName: string]: any }),
}