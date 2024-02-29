
import { GifItem } from './gifItem';
import { UseFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = UseFetchGifs(category);

    return (
        <>

            <h1>{category}</h1>
            {isLoading && <h2>Cargando...</h2>}
            <div className='card-grid'>
                {images.map(img => <GifItem {...img} key={img.id} />)}
            </div>
        </>
    )
}
