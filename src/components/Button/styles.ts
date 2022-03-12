import styled, { css, DefaultTheme } from 'styled-components'
import {ButtonProps} from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth'>


const wrapperModifiers = { 
    small: (theme:DefaultTheme) => css`
        height: 3.6rem;
        font-size: ${theme.font.sizes.small};
        padding-left:25px;
        padding-right: 25px;

    `,
    medium: (theme:DefaultTheme)=>css`
       height: 4.6rem;
        font-size: ${theme.font.sizes.small};
        padding-left:25px;
        padding-right: 25px;
    `,
    large: (theme:DefaultTheme) => css`
       height: 5.6rem;
       font-size: ${theme.font.sizes.medium};
       padding-left:55px;
       padding-right:55px;
    `,
    fullWidth: () => css`
        width: 100%;
    `
  }

export const Wrapper = styled.button<WrapperProps>`

  ${({theme, size, fullWidth}) => css`
 // display: flex;
 //  align-items: center;
 //  justify-content: center;

  border-radius: 5px;

    background: #F43253;
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    &:hover {
        background-color: #E41F41;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}

  `}

`