import { render, screen } from '@testing-library/react'

import Tag from '.'

describe('<Tag />', () => {
  it('should render the heading', () => {
    const { container } = render(<Tag />)

    expect(screen.getByRole('heading', { name: /Tag/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})