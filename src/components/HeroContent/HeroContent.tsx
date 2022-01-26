import './style.css';



type HeroProps = {
    title?: string,
    text?: string,
    buttonText?: string,
    heroImage: string | undefined,
    buttonImage?: string | undefined
    buttonActive: boolean
    rightHero?: boolean
}

function HeroContent(props:HeroProps){

    return (
        <div className={props.rightHero ? 'hero right-hero' : 'hero'}>
            <div className="hero_image-container">
                <img className='hero_image' src={props.heroImage} />
            </div>
            <div className="hero_text-container">
                <div className="hero_text-title">
                    <h3>{props.title}</h3>  
                </div>
                <div className="hero_text-content">
                    <p>{props.text}</p>
                </div>
                <div className={props.buttonActive ? 'hero_text-button' : ''}>
                    <img className='hero_text-button_image' src={props.buttonImage}/>
                    <a href="#">{props.buttonText}</a>
                </div>
            </div>
        </div>
    );

}


export default HeroContent;