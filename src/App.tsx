import './global/styles/reset.css';
import './global/styles/index.css';
import Header from './components/Header/Header';
import HeroContent from './components/HeroContent/HeroContent';
import HeroImage from './assets/images/heroDiscoveryAstronaut.png';

function App() {

  const titleApresentation = 'HOUSTON? I HAVE A SOLUTION!';
  const contentApresentation = "Public information provided by NASA's API in a simplified and fair way. Get access to photos and other information from nasa missions.";

  return (
    <section className='main-page'>
      <Header />
      <section className='sub-section apresentation-project'>
        <HeroContent heroImage={HeroImage} title={titleApresentation} text={contentApresentation} buttonActive={false} />
      </section>

    </section>
  );
}

export default App;
