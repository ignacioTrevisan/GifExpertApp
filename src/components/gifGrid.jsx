
import { GifItem } from './gifItem';
import { UseFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
