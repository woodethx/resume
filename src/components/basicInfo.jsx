import '../styles/basicInfo.css'
import { useState } from 'react'

export default function BasicInfo({data, editing}){

    return(
        <div className="BasicInfo">
            <h2>{data.name}</h2>
        </div>
    )
}