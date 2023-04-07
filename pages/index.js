import { Component } from "react";
import BottomCta from "../components/Bottom-cta/bottom-cta";
import FeatureSection from "../components/Features-section/feature-section";
import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import References from "../components/References/references";
import Section from "../components/Section/section";
import SuperChargeItem from "../components/Super-charge-item/super-charge-item";
import SuperChargeContainer from "../components/Super-charge/super-charge";

export default class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Hero />

        <Section id="snippets" titleText="Keep track of your snippets" text="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything." />

        <FeatureSection />

        <Section flag={ true } id="access" titleText="Access Clipboard Anywhere" text="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks." />


        <SuperChargeContainer>
           <SuperChargeItem id="1" image="/images/icon-blacklist.svg" text="Easily search your snippets by content, category, web address, application, and more." titleText="Create Blacklists" />

           <SuperChargeItem id="2" image="/images/icon-text.svg" text="Remove unwanted formatting from copied text for a consistent look." titleText="Plain Text Snippets" />

           <SuperChargeItem id="3" image="/images/icon-preview.svg" text="Quick preview of all snippets on your Clipboard for easy access." titleText="Sneak Preview" />
        </SuperChargeContainer>

        <References />

        <BottomCta />

        <Footer />
      </div>
    )
  }
}