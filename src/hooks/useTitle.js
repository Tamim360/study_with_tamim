import { useEffect } from "react"

const useTitle = (title, home = false) => {
    useEffect(() => {
        if (home) {
            document.title = 'Study With Tamim'
        } else {
            document.title = `${title} - Study With Tamim`
        }
    },[title])
}

export default useTitle