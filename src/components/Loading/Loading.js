import React from 'react'
import style from "./Loading.module.css"

export default function Loading() {
    return (
        <div className={style.loading_screen}>
            <div className={style.loader}>
                <div className={style.loader_inside}></div>
            </div>
            <h3>Loading...</h3>
        </div>
    )
}
