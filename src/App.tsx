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
    const titleApresentation = "HOUSTON? I HAVE A SOLUTION!";
    const contentApresentation1 = "Public information provided by NASA's API in a simplified and fair way.";
    const contentApresentation2 = "Get access to photos and other information from nasa missions.";

    const marsImageApresentation1 = "Get access to images of our red neighbor.Thanks to rovers sent to mars by NASA ( Curiosity, Opportunity, Spirit, Perseverance ), we can have access to images of Mars."
    const marsImageApresentation2 = "Filter your search by Data, Camera, Rover."

    const marsRoversApresentation1 = "Get access to information about rovers on mars launched by NASA."
    const marsRoversApresentation2 = "Information such as: - Release date of. - Description of the mission. - Date of the last photo sent."

    return (
        <main className="main-page">
            <section className="landing-section">
				<Header />
                <section className="sub-section apresentation-project">
                    <HeroContent
                        heroImage={HeroImageApresentation}
                        title={titleApresentation}
                        text={contentApresentation1}
                        text2={contentApresentation2}
                        buttonActive={false}
                    />
                </section>
				<ButtonGeneric buttonText="DISCOVER IT" linkButton="#features-section"/>
            </section>
			<section id="features-section" className="features-section">
                <HeaderFeatures />
                <section className="features-section_mars-image">
                    <TitleFeature title="mars images"/>
                    <HeroContent
                        heroImage={marsImage}
                        text={marsImageApresentation1}
                        text2={marsImageApresentation2}
                        buttonActive={true}
                        buttonImage={marsImageButtonImage}
                        buttonText="LET'S GO?"
                        rightHero={true}
                    />
                </section>
                <section className="features-section_mars-rovers">
                    <TitleFeature title="mars rovers" />
                    <HeroContent 
                        heroImage={nasaRover}
                        text={marsRoversApresentation1}
                        text2={marsRoversApresentation2}
                        buttonActive={true}
                        buttonImage={astronautButtonRocket}
                        buttonText="LET'S GO?"
                    />
                </section>
			</section>
        </main>
    );
}

export default App;
