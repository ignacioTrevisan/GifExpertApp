export const GetGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Nd8E55FyaTMm4A58IyL9ZXsVFNJLslQq&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(info => ({
        id: info.id,
        Titulo: info.title,
        img: info.images.downsized.url,
    }));
    return gifs;
}