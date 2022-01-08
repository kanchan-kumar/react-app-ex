import youtube from "../api/youtube";
import {useEffect, useState} from "react";

const useYouTubeVideos = (defaultSearch) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearch);
    }, [defaultSearch]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useYouTubeVideos;
