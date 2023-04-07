import Text from "../Text/text"
import TitleText from "../TitleText/title-text"

const FeatureSection = () => {
    return (
       <div className="section max-w-6xl mx-auto p-6 text-center my-20 px-10">
           <div className="relative flex flex-col md:flex-row md:space-x-32">
                  {/* The image will take 50% of the page */}
                  <div className="md:w-1/2">
                       <img src="/images/image-computer.png" alt="" className="md:absolute top-0 right-[50%]" />
                  </div>

                  <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
                    <div>
                        <TitleText text="Quick Search" color="darkGrayishBlue" size="2xl" mdSize="xl" />
                        <Text color="darkGrayishBlue" size="xl" text="Easily search your snippets by content, category, web address, application, and more." />
                    </div>

                    <div>
                        <TitleText text="iCloud Sync" color="darkGrayishBlue" size="2xl" mdSize="xl" />
                        <Text color="darkGrayishBlue" size="xl" text="Instantly saves and syncs snippets across all your devices." />
                    </div>

                    <div>
                        <TitleText text="Completely History" color="darkGrayishBlue" size="2xl" mdSize="xl" />
                        <Text color="darkGrayishBlue" size="xl" text="Retrieve any snippets from the first moment you started using the app." />
                    </div>
                  </div>
           </div>
       </div>
    )
}

export default FeatureSection