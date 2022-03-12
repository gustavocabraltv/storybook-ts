import * as S from './styles'
import ArrowRight from '../../assets/arrow-right-box.svg'


export type ButtonIconProps = { 
  children?: React.ReactNode
  color?: 'blue' | 'yellow' | 'black'
  tamanho?: 'pequeno' | 'medio'

}

const ButtonIcon = ({children, color='blue', tamanho='pequeno' }: ButtonIconProps) => (
  <S.Wrapper color={color} tamanho={tamanho}>
    <span>{children} </span><img src={ArrowRight}/> 
  </S.Wrapper>
)

export default ButtonIcon

