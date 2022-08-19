import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Conhecimentos from './page/Conhecimentos';
import Contatos from './page/Contatos';
import Home from './page/Home';
import Projetos from './page/Projetos';
import QuemSouEu from './page/QuemSouEu';
import Modal from 'react-modal/lib/components/Modal';



function App() {
  return (
    
      <>
        <Header />
        <Home />
        <section id='sobremim'><QuemSouEu/></section>
        <section id='project' offset="50"><Projetos /></section>
        <section id='skills'><Conhecimentos /></section>
        <section id='contact'> <Contatos /></section>
        <Footer />
      </>
    
  );
}

export default App;
Modal.setAppElement("#root")
