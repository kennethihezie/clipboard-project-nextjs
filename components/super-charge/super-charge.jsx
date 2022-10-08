import Section from "../Section/section"



const SuperChargeContainer = ({children  }) => {
    return (
        <div>
         <Section id="super-charge" titleText="Supercharge your workflow" text="We've got the tools to boost your productivity." />

         <div className="flex flex-col items-center justify-between spacey-16 md:flex-row md:space-y-0 md:space-x-12">
            { children }
         </div>
       </div>
    )
}

export default SuperChargeContainer