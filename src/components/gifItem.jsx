export const GifItem = ({ img, Titulo }) => {
    return (
        <div className="card">
            <img src={img}></img>
            <p>{Titulo}</p>
        </div>
    )
}