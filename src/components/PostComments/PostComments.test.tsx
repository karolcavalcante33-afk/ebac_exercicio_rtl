import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from './index'

describe('Inserção de comentários', () => {
  test('deve inserir dois comentários na lista', () => {
    render(<PostComments />)

    const campo = screen.getByTestId('campo-comentario')
    const botao = screen.getByTestId('botao-comentar')

    // Primeiro comentário
    fireEvent.change(campo, {
      target: { value: 'Primeiro comentário' }
    })

    fireEvent.click(botao)

    // Segundo comentário
    fireEvent.change(campo, {
      target: { value: 'Segundo comentário' }
    })

    fireEvent.click(botao)

    const comentarios = screen.getAllByTestId('comentario')

    expect(comentarios.length).toBe(2)
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})
