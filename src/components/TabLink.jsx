import React, { useEffect, useState } from 'react'

const TabLink = ({title,state,active,setActive,children}) => {
    return (
        <li onClick={() => setActive(state)} className={`tab-link  ${active == state ? 'tab-active' : ''}`}>
            {children}
            <h4>{title}</h4>
        </li>
    )
}

export default TabLink
