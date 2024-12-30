import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles, MyRoutes, Sidebar, useThemeStore } from "./index"
import { Device } from "./styles/breakpoints"
import { useState } from "react";
function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={ themeStyle }>
      <Container>
        <GlobalStyles/>
        <section className="contentSiderbar">
          <Sidebar state={ sidebarOpen } setState={() => setSidebarOpen(!sidebarOpen)}/>
        </section>
        <section className="contentMenuHamb">menu hamb</section>
        <section className="contentRouters"><MyRoutes/></section>
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSiderbar {
    display: none;
    background-color: rgba(224, 18, 18, 0.5);
  }
  .contentMenuHamb {
    position: absolute;
    background-color: rgba(14, 236, 88, 0.5);
  }
  .contentRouters {
    background-color: rgba(112, 12, 241, 0.5);
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSiderbar {
      display: initial;
    }
    .contentMenuHamb {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`

export default App
