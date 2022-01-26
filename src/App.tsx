import './global/styles/reset.css';
import './assets/styles/index.css';
import Header from './components/Header/Header';
import HeroContent from './components/HeroContent/HeroContent';

function App() {
  return (
    <section className='main-page'>
      <Header />
      <section className='apresentation-project'>
        <HeroContent />
      </section>

    </section>
  );
}

export default App;
