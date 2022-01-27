import "./global/styles/reset.css";
import "./global/styles/index.css";
import Header from "./components/Header/Header";
import HeroContent from "./components/HeroContent/HeroContent";
import ButtonGeneric from "./components/ButtonGeneric/ButtonGeneric";
import HeaderFeatures from "./components/HeaderFeatures/HeaderFeatures";
import TitleFeature from "./components/TitleFeature/TitleFeature";
import HeroImageApresentation from "./assets/images/heroDiscoveryAstronaut.png";
import marsImageButtonImage from "./assets/images/astronautButton.png";
import marsImage from "./assets/images/mars.png"
import nasaRover from "./assets/images/nasaRover.png"
import astronautButtonRocket from "./assets/images/astronautButtonRocket.png"


function App() {

    //data
    const titleApresentation = "HOUSTON? I HAVE A SOLUTION!";
    const contentApresentation1 = "Public information provided by NASA's API in a simplified and fair way.";
    const contentApresentation2 = "Get access to photos and other information from nasa missions.";

    const landingApresentation = {
        contentApresentation1,
        contentApresentation2,

    };
    
    const marsImageApresentation1 = "Get access to images of our red neighbor.<br>Thanks to rovers sent to mars by NASA ( Curiosity, Opportunity, Spirit, Perseverance ), we can have access to images of Mars."
    const marsImageApresentation2 = "Filter your search by Data, Camera, Rover."
    const marsImageApresentation = {
        marsImageApresentation1, 
        marsImageApresentation2
    };
    
    const marsRoversApresentation1 = "Get access to information about rovers on mars launched by NASA."
    const marsRoversApresentation2 = "Information such as:<br>- Release date of.<br>- Description of the mission.<br>- Date of the last photo sent."
    const marsRoversApresentation = {
        marsRoversApresentation1,
        marsRoversApresentation2
    };


    return (
        <main className="main-page">
            <section className="landing-section">
				<Header />
                <section className="sub-section apresentation-project">
                    <HeroContent
                        heroImage={HeroImageApresentation}
                        paragraphs={landingApresentation}
                        title={titleApresentation}
                        buttonActive={false}
                    />
                </section>
				<ButtonGeneric buttonText="DISCOVER IT" linkButton="#features-section"/>
            </section>
			<section id="features-section" className="features-section">
                <HeaderFeatures />
                <section className="features-section_mars-images">
                    <TitleFeature title="mars images"/>
                    <HeroContent
                        heroImage={marsImage}
                        paragraphs={marsImageApresentation}
                        buttonActive={true}
                        buttonImage={marsImageButtonImage}
                        buttonText="LET'S GO?"
                        rightHero={true}
                        normal={false}
                        thin={true}
                    />
                </section>
                <section className="features-section_mars-rovers">
                    <TitleFeature title="mars rovers" />
                    <HeroContent 
                        heroImage={nasaRover}
                        paragraphs={marsRoversApresentation}
                        buttonActive={true}
                        buttonImage={astronautButtonRocket}
                        buttonText="LET'S GO?"
                        normal={false}
                        thin={true}
                        leftButtonImage={true}
                    />
                </section>
			</section>
        </main>
    );
}

export default App;
