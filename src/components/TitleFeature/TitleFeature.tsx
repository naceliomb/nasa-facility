import "./style.css";

type TitleFeatureProps = {
    title: string
}

function TitleFeature (props:TitleFeatureProps) {
    return (
        <div className="title-feature">
            <h3 className="title-feature_title">{props.title}</h3>
            <span className="title-feature_line"></span>
        </div>
    );
}


export default TitleFeature;