import "./style.css";
type PargraphProps = {
    text: string,

}

function Paragraph(props:PargraphProps) {

    const textSplited = props.text.split('<br>')

    return (
        <div className="hero_text-content">
            {textSplited.map(text => {
                return <p>{text}</p>
            })}
        </div>

    );
}

export default Paragraph;
