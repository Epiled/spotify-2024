import styled from "styled-components";
import Menu from '../components/Menu'

const Base = styled.div`
  background: var(--darker);
  padding: .8rem;
  display: grid;
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