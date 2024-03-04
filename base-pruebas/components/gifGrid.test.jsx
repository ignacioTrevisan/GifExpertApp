import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/gifGrid'
import { UseFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs');
describe('pruebas a <gifGrid />', () => {

    test('Inicialmente debe mostrar "cargando..."', () => {
        UseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        const categoria = "Dragon Ball Z"
        render(<GifGrid category={categoria} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(categoria);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe("Cargando...");
    })
    test('Debe mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {
                id: '1',
                Titulo: 'Saitama',
                img: 'https://localhost:saitama.jpg'
            },
            {
                id: '2',
                Titulo: 'Goku',
                img: 'https://localhost:Goku.jpg'
            }
        ]

        UseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        const categoria = "Dragon Ball Z"
        render(<GifGrid category={categoria} />);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    })

})