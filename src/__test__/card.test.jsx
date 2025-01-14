import { fireEvent, render } from "@testing-library/react"
import Card from "../components/list/card"
import { useDispatch } from "react-redux"

jest.mock('react-redux', () => {
    retuseDispatch: jest.fn();
})

describe('Card bileşeni testleri', () => {

    const dispatchMock = jest.fn()
    const mockItem = {
        name: 'Bal Badem',
        image: '/ice-1.png',
        price: 25,
        id: '354b',
    }

    beforeEach(() => {
        useDispatch.mockReturnValueOnce(dispatchMock)
        dispatchMock.mockClear()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('İtem detaylarını doğru şekilde renderlar', () => {
        render(<Card item={mockItem} />)

        screen.getByRole('heading', { name: mockItem.name })
        screen.getByText('25tl / top');
        expect(screen.getByRole('img')).toHaveAttribute('src', '/ice-1.png')
    })


    it('Tipin seçili olma durumuna göre Sepete Ekle butonunun görünürlüğünü değişir', () => {


        render(<Card item={mockItem} />)
        const cartBtn = screen.getByRole('button', { name: /sepet/i })
        expect(cartBtn).toHaveClass('invisible')
        const typeBtn = screen.getByRole('button', { name: /külahta/i })

        fireEvent.click(typeBtn);

        expect(cartBtn).not.toHaveClass('invisible')


    })

    it('Sepete Ekle butonuna tıklanıldığında reducera haber verir', () => { })


})