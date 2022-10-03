const RowButton = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for IOS
            </button>

            <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for MAC
            </button>
        </div>
    )
}

export default RowButton