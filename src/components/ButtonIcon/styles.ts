import styled, { css, DefaultTheme }  from 'styled-components'

import { ButtonIconProps } from '.'

type WrapperProps = Pick<ButtonIconProps, 'color' | 'tamanho'>

const wrapperModifiers = {
     blue: (theme: DefaultTheme) => css`
     background-color: #2D44FF;
     color: white;
     &:hover {
        background-color: #273AD2;
    }
   

    `,
     yellow: (theme: DefaultTheme) => css`
     background-color: #F5D37F;
     color: #5F4507;
     `,
     black: (theme: DefaultTheme) => css`
     background-color: black;
     color: white;
     `,
     pequeno:(theme: DefaultTheme) => css`
     height: 55px;
     padding-left:25px;
     padding-right: 8px;
     `,
     medio:(theme: DefaultTheme) => css`
     height: 150px;
     padding-left:25px;
     padding-right: 8px;
     `



}

export const Wrapper = styled.button<ButtonIconProps>`

    ${({theme, color, tamanho})=> css`


    ${!!color && wrapperModifiers[color](theme)}
    ${!!tamanho && wrapperModifiers[tamanho](theme)}
    

    `}

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    
    cursor: pointer;
    font-size:16px;

 

    
    >span {
        margin-right: 10px;
    }


`
