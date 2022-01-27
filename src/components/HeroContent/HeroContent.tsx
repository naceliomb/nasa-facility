import "./style.css";
import Paragraph from "../Paragraph/Paragraph";

type HeroProps = {
    title?: string,
    paragraphs: object,
    buttonText?: string,
    heroImage: string | undefined,
    buttonImage?: string | undefined,
    buttonActive: boolean,
    rightHero?: boolean,
};

function HeroContent(props: HeroProps) {
    const paragraphs = props.paragraphs;

    const paragraphsArray = Object.keys(paragraphs).map(function (key) {
        return paragraphs[key];
    });




    return (
        <div className={props.rightHero ? "hero right-hero" : "hero"}>
            <div className="hero_image-container">
                <img className="hero_image" src={props.heroImage} />
            </div>
            <div className="hero_text-container">
                <div className="hero_text-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="hero_text-paragraph-container">
                    {paragraphsArray.map((paragraph) => {
                        return <Paragraph text={paragraph} />;
                    })}

                    <div className={props.buttonActive ? "hero_text-button" : ""}>
                        <img className="hero_text-button_image" src={props.buttonImage} />
                        <a href="#">{props.buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroContent;
