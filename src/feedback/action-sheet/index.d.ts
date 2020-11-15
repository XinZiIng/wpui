export interface DataInterface {
    isActive?: boolean,
    isDisabled?: boolean,
    text: string,
    [propName: string]: any
}

export interface OptionsInterface {
    title?: string,
    footerButtonText?: string,
    borderRadius?: number,
    changed?(ev: any),
    onClick?(ev: object, i: number),
    blur?: number,
    data: DataInterface[]
}