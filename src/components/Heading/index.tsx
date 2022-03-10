import * as S from './styles'

export type HeadingProps = { 
  children: React.ReactNode,
  color?: "primary" | "secondary"
 
}

const Heading = ({children, color = 'primary'}: HeadingProps) => (
  <S.Wrapper color={color}>
  <h1> {children}</h1>
  </S.Wrapper>
)

export default Heading