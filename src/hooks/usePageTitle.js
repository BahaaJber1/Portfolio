import { useEffect } from "react";

function usePageTitle(title) {
    useEffect(() => {
        document.title = title + " | Bahaa Jber";
    }, [title]);
}

export default usePageTitle;
