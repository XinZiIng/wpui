interface DataInterface {
    isActive?: boolean,
    isDisabled?: boolean,
    text: string,
    [propName: string]: any
}

export default interface OptionsInterface {
    title?: string,
    footerButtonText?: string,
    borderRadius?: number,
    onChange?(ev: any),
    onClick?(ev: object, i: number),
    maskBlur?: number,
    maskClosable?: boolean,
    data: DataInterface[]
}