import "./style.css";
type PargraphProps = {
    text: string,
    normal?: boolean | true,
    thin?: boolean | false

}

function Paragraph(props:PargraphProps) {

    const textSplited = props.text.split('<br>')

    return (
        <div className={props.normal ? "hero_text-content" : "hero_text-content_thin"}>
            {textSplited.map(text => {
                return <p>{text}</p>
            })}
        </div>

    );
}

export default Paragraph;
