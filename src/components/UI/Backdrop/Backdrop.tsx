import React from 'react'
import css from './Backdrop.module.css'

interface Props {
    show: boolean
}

const Backdrop: React.FC<Props> = (props) => {
    console.log(props.children)
    return (
        props.show ?
        <div className={css.Backdrop}>
            {props.children}
        </div> : null
    )
}

export default Backdrop
