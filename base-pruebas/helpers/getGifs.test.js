import { GetGif } from "../../src/helpers/getGifs";

describe('probando <getGifs />', () => {

    test('Deberia traer datos validos', async () => {
        const gifs = await GetGif('One Punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            Titulo: expect.any(String),
            img: expect.any(String),
        })
    })


})