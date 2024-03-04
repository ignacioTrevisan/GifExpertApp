
/**

 * @jest-environment jsdom

 */
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components';

describe('Prueba a <GifItem />', () => {
    test('Hacer match con el spanshot', () => {
        const imagen = "https://media4.giphy.com/media/UPYCIVX3ABQoLAGO7W/giphy.gif?cid=ffddb294jme2owkru490riardwfc23ijeoy1edebeartqe7b&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        const { container } = render(<GifItem Titulo="Tu hermana" img={imagen} />)
        expect(container).toMatchSnapshot();
        screen.debug();
    })
    test('Hacer mostrar el titulo indicado y el alt indicado', () => {
        const imagen = "https://media4.giphy.com/media/UPYCIVX3ABQoLAGO7W/giphy.gif?cid=ffddb294jme2owkru490riardwfc23ijeoy1edebeartqe7b&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        const Titulo = "Tu hermana";
        render(<GifItem Titulo={Titulo} img={imagen} />)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(imagen);
        expect(alt).toBe("Tu hermana");

    })

})