import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en <addCategory />', () => {
    test('Que la caja de texto cambie al escribir', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const texto = screen.getByRole('textbox');

        fireEvent.input(texto, { target: { value: "hola" } })


        expect(texto.value).toBe("hola");

        /* si la ruta fuese 
        camino.event.target.saludo.mensaje="hola"
        fireEvent.input(texto, 
            { camino:
                 { event:
                     { target:
                         { saludo:
                             {mensaje:
                                 "hola"
                                }
                            }
                        }
                     
                    }
                 
                }
                )*/

    })
    test('debe llamar onNewCategory si el input tiene valor', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)
        const texto = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(texto, { target: { value: "valor" } })
        fireEvent.submit(form);
        expect(texto.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith("valor");
    })
    test('No debe llamar onNewCategory si el input no tiene valor', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)
        const texto = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(texto, { target: { value: "valor" } })
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(1);
    })


    //fireEvent.(que cosa?)(a que)
})