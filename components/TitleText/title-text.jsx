const TitleText = ({ text, color, size, mdSize }) => {
    return (
        <h3 className={`mb-8 text-${size} font-sans font-bold text-${color} md:text-${mdSize}`}>
          { text }
        </h3>
    )
}

export default TitleText