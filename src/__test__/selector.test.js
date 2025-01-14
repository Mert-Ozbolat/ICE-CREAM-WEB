import { render } from "@testing-library/react"
import Selector from "../components/list/selector"
import userEvent from '@testing-library/user-event'

describe('Selector bileşeni', () => {

    const mockFn = jest.fn()

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('cornet seçilince butonun arka planı değişir', () => {
        render(<Selector selectedType='cornet' handleType={mockFn} />)

        const cornetBtn = screen.getByRole('button', { name: /külahta/i })

        expect(cornetBtn).toHaveClass('bg-white')

        const cupBtn = screen.getByRole('button', { name: /bardakta/i })

        expect(cupBtn).not.toHaveClass('bg-white')

    })


    it('cup seçilince butonun arka planı değişir', () => {
        render(<Selector selectedType='cup' handleType={mockFn} />)

        const cupBtn = screen.getByRole('button', { name: /bardakta/i })

        expect(cupBtn).toHaveClass('bg-white')

        const cornetBtn = screen.getByRole('button', { name: /külahta/i })

        expect(cornetBtn).not.toHaveClass('bg-white')
    })



    it('butonlara tıklandığında fonksiyon doğru parametreler ile çalışır', async () => {

        const user = userEvent.setup()

        render(<Selector selectedType='cup' handleType={mockFn} />)

        const cupBtn = screen.getByRole('button', { name: /bardakta/i })
        const cornetBtn = screen.getByRole('button', { name: /külahta/i })

        await user.click(cupBtn)

        expect(mockFn).toHaveBeenCalledWidth('cup')

        await user.click(cornetBtn)

        expect(mockFn).toHaveBeenCalledWith('cornet')
    })

})