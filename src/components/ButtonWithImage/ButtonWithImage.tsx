import "./style.css"
type ButtonWithImageProps = {
    active?: boolean | false,
    image?: string | undefined,
    text?: string,
    leftImage?: boolean
}

function ButtonWithImage(props:ButtonWithImageProps) {
    return (
        <div className={props.active ? props.leftImage ? "hero_text-button left-button-image" : "hero_text-button" : ""}>
            <img className="hero_text-button_image" src={props.image} />
            <a href="#">{props.text}</a>
        </div>
    );
}

export default ButtonWithImage;
