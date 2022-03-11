import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small'|'medium'|'large'
  fullWidth?: boolean
}


const Button = ({children, size= 'medium', fullWidth =false}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth}>
    {children}
  </S.Wrapper>
)

export default Button