import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const useTitle = (title) => {
    const location = useLocation()
    const pathname = location.pathname
    useEffect(() => {
        document.title = `${title} - Study With Tamim`
    },[title])
}

export default useTitle