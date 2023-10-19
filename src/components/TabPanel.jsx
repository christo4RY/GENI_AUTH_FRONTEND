import React from 'react'

const TabPanel = ({ children, state, active, title }) => {
    return (
        <div className={`w-full ${active == state ? 'block' : 'hidden'}`}>
            <div className='mb-4 md:mb-8'>
                <h1 className="text-xl md:text-2xl font-semibold text-slate-700">{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default TabPanel
