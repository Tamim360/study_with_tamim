import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Study With Tamim`
    },[title])
}

export default useTitle