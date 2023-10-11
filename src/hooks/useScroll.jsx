import React, { useEffect, useState } from 'react'

const useScroll = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return scroll
}

export default useScroll
