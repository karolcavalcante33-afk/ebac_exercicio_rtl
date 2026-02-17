import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Inserção de comentários', () => {
  test('deve inserir dois comentários na tela', () => {
    render(<App />)

    const input = screen.getByTestId('campo-comentario')
    const botao = screen.getByTestId('botao-comentar')

    // Primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(botao)

    // Segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(botao)

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})
