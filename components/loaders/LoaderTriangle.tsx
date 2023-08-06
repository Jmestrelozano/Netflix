import React from 'react'
import { Triangle } from 'react-loader-spinner'

export const LoaderTriangle = (): JSX.Element => {
    return (
        <Triangle
            height="100"
            width="100"
            color="#fff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass="absolute bottom-2 z-10 right-0"
            visible={true}
        />
    )
}
