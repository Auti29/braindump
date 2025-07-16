import { useEffect, useState } from "react";
import axios from "axios";
const BE_URL = import.meta.env.VITE_BE_URL;


export function useContent(){
    const [contents, setContents] = useState([]);
    
    useEffect(() => {
        async function fetchContent(){
            const respose = await axios.get(`${BE_URL}/api/v1/content`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
    
            setContents(respose.data.content);
        } 

    fetchContent();
    }, []);

    return contents;
}