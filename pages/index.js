import { Component } from "react";
import Hero from "../components/hero/hero";

export default class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Hero />
      </div>
    )
  }
}