const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Express Journalist`
    }, [title])
}

export default useTitle;