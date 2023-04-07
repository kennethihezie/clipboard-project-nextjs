const Text  = ({ text, color, size }) => {
    return (
        <p className={`max-w-3xl mx-auto mb-10 text-${size} text-${color}`}>
            { text }
        </p>
    )
}

export default Text