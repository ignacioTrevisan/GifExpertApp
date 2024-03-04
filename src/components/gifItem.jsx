import PropTypes from 'prop-types'

export const GifItem = ({ img, Titulo, id }) => {
    return (
        <div className="card">
            <img src={img} alt={Titulo}></img>
            <p>{Titulo}</p>
        </div>
    )
}
GifItem.propTypes = {
    Titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}