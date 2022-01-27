import "./style.css";
import Paragraph from "../Paragraph/Paragraph";
import ButtonWithImage from "../ButtonWithImage/ButtonWithImage";

type HeroProps = {
    title?: string,
    paragraphs: object,
    buttonText?: string,
    heroImage: string | undefined,
    buttonImage?: string | undefined,
    buttonActive: boolean,
    leftButtonImage?: boolean,
    rightHero?: boolean,
    normal?: boolean | true,
    thin?: boolean | false
};

function HeroContent(props: HeroProps) {
    const paragraphs : {[index: string]:any} = props.paragraphs;

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
                        return <Paragraph text={paragraph} normal={props.normal==false ? props.normal : true} thin={props.thin==true ? props.thin : false}/>;
                    })}

                    {props.buttonActive ? <ButtonWithImage active={true} image={props.buttonImage} text={props.buttonText} leftImage={props.leftButtonImage ? true : false} /> : <></>}

                </div>
            </div>
        </div>
    );
}

export default HeroContent;
