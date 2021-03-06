import React from 'react'
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'


const Modal: React.FC = (props: any) => {
    return (
        <div className={styles.Modal}>
            {/* <Backdrop
                show={props.showingLogin}
            /> */}
            <div 
                className={styles.Modal}
                style={{
                    transform: props.showingLogin ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.showingLogin ? '1' : '0' 
                }}
                >
                {props.children}
            </div>
        </div>
    )
}

export default Modal;
