import * as S from './styles'

import {Search} from '@styled-icons/material-outlined'
import {ShoppingCart} from '@styled-icons/material-outlined'
import {Menu as MenuIcon} from '@styled-icons/material-outlined'
import Logo from '../Logo'




const Menu = () => (
  <S.Wrapper>

<S.IconWrapper> 
       <MenuIcon/> 
</S.IconWrapper>

<S.LogoWrapper>
         <Logo />
</S.LogoWrapper>

<S.MenuGroup> 
   <S.IconWrapper>
          <Search/>
   </S.IconWrapper>
        
   <S.IconWrapper>
          <ShoppingCart/>
   </S.IconWrapper>
</S.MenuGroup>
 

   
   
  </S.Wrapper>
)

export default Menu