import RowButton from "../row-button/row-button"

const Hero = () => {
    return (
        <section id="hero">
            <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
                <img src="/images/logo.svg" alt="" className="mx-auto my-16" />

                <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
                    A history of everything you copy
                </h3>

                <p className="max-w-3xl mx-auto mb-10 text-2xl text-darkGrayishBlue">
                Clipboard allows you to track and organize everything you copy.
                Instantly access your clipboard on all your devices.
                </p>

                <RowButton />
            </div>
        </section>
    )
}

export default Hero