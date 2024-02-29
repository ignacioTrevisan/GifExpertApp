import React, { useEffect, useState } from 'react'
import { GetGif } from '../helpers/getGifs';

export const UseFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GetGif(category)
            .then(nuevaCategoria => {
                setImages(nuevaCategoria);
                setIsLoading(false)
            });
    }, [])

    return {
        images,
        isLoading,
    }
}
