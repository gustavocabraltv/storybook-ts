import * as S from './styles'

export type HeadingProps = { 
  children: React.ReactNode,
  color?: "blue" | "black"
 
}

const Heading = ({children, color = 'blue'}: HeadingProps) => (
  <S.Wrapper color={color}>
  <h1> {children}</h1>
  </S.Wrapper>
)

export default Heading