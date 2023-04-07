import RowButton from "../Row-button/row-button"
import Text from "../Text/text"
import TitleText from "../TitleText/title-text"

const BottomCta = () => {
    return (
        <section id="hero">
            <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
                <TitleText text="A history of everything you copy" color="darkGrayishBlue" size="4xl" mdSize="5xl" />
                
                <Text text="Clipboard allows you to track and organize everything you copy.
                Instantly access your clipboard on all your devices." color="darkGrayishBlue" size="2xl" />
               
                <RowButton />
            </div>
        </section>
    )
}

export default BottomCta