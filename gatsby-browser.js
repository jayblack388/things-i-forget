import React from "react"
import { ThemeProvider } from "styled-components"
import { Theme, GlobalStyles, WindowDimensionsProvider } from "jdb-components"

export const wrapRootElement = ({ element }) => {
  if (typeof window !== "undefined") {
    return (
      <ThemeProvider theme={Theme({ darkMode: true })}>
        <GlobalStyles />
        <WindowDimensionsProvider>{element}</WindowDimensionsProvider>
      </ThemeProvider>
    )
  }
}
