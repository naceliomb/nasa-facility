import './style.css';

type HeaderFeaturesProps = {
    text?: string
    rightSide?: boolean
}

function HeaderFeatures(props:HeaderFeaturesProps) {
    return (
        <div className={props.rightSide ? "header-features header-features_right-side" : "header-features"}>
            <div className="title-container">
                <span className='title'>{props.text ? props.text : "features"}</span>
            </div>
            
        </div>
    );
}

export default HeaderFeatures;