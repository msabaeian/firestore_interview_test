import React, { Fragment } from 'react'

interface IVisible {
    condition: boolean | string | number
    children: any
}

function Visible(props: IVisible) : JSX.Element | null {
    const {condition, children} = props

    if(!condition) return null;
    
    return <Fragment>{children}</Fragment>
}

export default Visible
