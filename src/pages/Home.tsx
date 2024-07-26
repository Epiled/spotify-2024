import styled from "styled-components";
import Sidebar from '../components/Sidebar'
import Rodape from "../components/Rodape";
import BarraSuperior from "../components/BarraSuperior";
import Secoes from "../components/Secoes";

const Base = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  align-content: flex-start;
  background: var(--darker);
  padding: .8rem;
  min-height: 100vh;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  column-gap: 0.8rem;
  row-gap: 0.8rem;

  @media screen and (min-width: 1368px) {
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr;
  }
`

const Principal = styled.main`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`

const Home: React.FC = () => {
  return (
    <Base>
      <Container>
        <Sidebar />
        <Principal>
          <BarraSuperior />
          <Secoes />
        </Principal>
      </Container>

      <Rodape />
    </Base>
  );
}

export default Home;