import './App.css';
import {Container} from 'reactstrap';
import Deneme from './components/Deneme';
import NavBar from './components/Header/NavBar'
import ProductList from './components/ProductList.js/ProductList';

function App() {
  return (
    <div className="App">
      <Container>
      <NavBar></NavBar>
      <Deneme></Deneme>
      <ProductList></ProductList>
      </Container>
      
    </div>
  );
}

export default App;
