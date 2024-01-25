import styled from "styled-components";
import Menu from '../components/Sidebar'

const Base = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr auto;
  align-content: flex-start;
  background: var(--darker);
  padding: .8rem;
  min-height: 100vh;
`

const Home: React.FC = () => {
  return (
    <Base>
      <Menu />
    </Base>
  );
}

export default Home;