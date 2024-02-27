
import { useEffect } from "react";
const useTitle = (title) => {
    useEffect(()=>{
        document.title=`${title}- Verify Certificate`
    },[title])
};

export default useTitle;