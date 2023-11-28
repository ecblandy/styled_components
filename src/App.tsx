import CssGlobal from "./styled"
import { ContainerDiv } from "./styled"
import Header from "./components/Cabecalho/Cabecalho"
import ListaVagas from "./containers/ListaVagas/ListaVagas"
import Hero from "./components/Hero/Hero"
function App() {
  return (
    <>
      <CssGlobal />
      <Header />
      <Hero />
      <ContainerDiv>
        <ListaVagas />
      </ContainerDiv>
    </>
  )
}

export default App
