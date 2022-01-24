import TokenSend from './components/TokenSend.js'
import Faucet from './components/Faucet.js'
import './App.css';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function App() {

  const Token = FCTToken;

  return (
    <div className="App">
    <Container>
    <Row className="justify-content-md-center">
      <Col>
      <div>Faucet</div>
      <Faucet  tokenContract={Token}/>
      </Col>
      <Col>
      <div> Send area</div>
      <TokenSend tokenContract={Token}/>
      </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;