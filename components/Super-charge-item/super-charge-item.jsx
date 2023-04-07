import Section from "../Section/section"

const SuperChargeItem = ({ id, image, text, titleText }) => {
    return (
        <div className="flex flex-col items-center space-y-5">
            <img src={ image } alt="" className="mb-6"/>
            <Section text={ text } titleText={ titleText }/>
        </div>
    )
}

export default SuperChargeItem