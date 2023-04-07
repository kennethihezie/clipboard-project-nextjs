import Text from "../Text/text"
import TitleText from "../TitleText/title-text"

const Section = ({ id, titleText, text, flag }) => {
    return (
        <section id={ id } className="max-w-6xl mx-auto p-6 text-center my-20 px-10">
                <TitleText text={ titleText } color="darkGrayishBlue" size="4xl" mdSize="5xl" />

                <Text text={ text } color="darkGrayishBlue" size="xl" />

                {
                    flag ? <img src="/images/image-devices.png" alt="" className="mx-auto" />
                    : ""
                }
        </section>
    )
}

export default Section