import styled, { css, DefaultTheme } from 'styled-components'
import {ButtonProps} from '.'

type WrapperProps = Pick<ButtonProps, 'size'>


const wrapperModifiers = { 
    small: (theme:DefaultTheme) => css`
        height: 5.6rem;
        font-size: ${theme.font.sizes.small};

    `,
    medium: (theme:DefaultTheme)=>css`
       height: 5.6rem;
        font-size: ${theme.font.sizes.small};
    `,
    large: (theme:DefaultTheme) => css`
       height: 5.6rem;
       font-size: ${theme.font.sizes.small};
    `,
  }

export const Wrapper = styled.button<WrapperProps>`

  ${({theme,size}) => css`

  border-radius: 5px;
  
    background-color: #F43253;

    padding-left:25px;
    padding-right: 25px ;
    color: white;
    cursor: pointer;
    font-size:16px;
    border-radius: ;

    display: inline-flex;
    align-items:  center;
    overflow: hidden;

    &:hover {
        background-color: #E41F41;
    }


    ${!!size && wrapperModifiers[size](theme)}

  `}

`