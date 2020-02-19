import React from "react"
import { ThemeProvider } from "styled-components"
import { Theme, WindowDimensionsProvider } from "jdb-components"

export const wrapRootElement = ({ element }) => {
  if (typeof window !== "undefined") {
    return (
      <ThemeProvider theme={Theme}>
        <WindowDimensionsProvider>{element}</WindowDimensionsProvider>
      </ThemeProvider>
    )
  }
}
