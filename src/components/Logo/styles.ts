import styled, {css} from 'styled-components'

import {LogoProps} from '.'

const wrapperModifiers = { 
    normal: () => css`
    width: 12.3rem!important;
    height: 3.2rem!important;
    `,

    large: () => css`
    width: 18.45rem!important;
    height: 4.8rem!important;
    `
}

export const Wrapper = styled.div<LogoProps>`
    ${({color, size})=> css`
        color: ${[color]};
        ${!!size && wrapperModifiers[size]}
    `}
`