import './style.css';
type ButtonGenericProps = {
    buttonImage?: string | undefined,
    buttonText: string,
    linkButton?: string
}

function ButtonGeneric(props:ButtonGenericProps) {
    return (
        <div className='button-generic'>
            <img className='button-generic_image' src={props.buttonImage} />
            <a href={props.linkButton}>{props.buttonText}</a>
        </div>
    );
}

export default ButtonGeneric;
