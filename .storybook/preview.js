//import React from 'react';
//import GlobalStyles from '../src/styles/global'
//export const decorators = [(Story) => <> <GlobalStyles/><Story /></>]

//import {ThemeProvider, themeProvider} from 'styled-components'
import GlobalStyles from '../src/styles/global'


export const decorators = [
    (Story) => <>
    <GlobalStyles/>
            <Story/>
  
    </>
       
]