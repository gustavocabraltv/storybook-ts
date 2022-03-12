//import React from 'react';
//import GlobalStyles from '../src/styles/global'
//export const decorators = [(Story) => <> <GlobalStyles/><Story /></>]

//import {ThemeProvider, themeProvider} from 'styled-components'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'


export const decorators = [
    (Story) => (
        <>
         <ThemeProvider theme={theme}>
          <GlobalStyles/>
           <Story/>
           </ThemeProvider>
           </>
   )
       
]

export const parameters = {
    layout: 'fullscreen',
  };