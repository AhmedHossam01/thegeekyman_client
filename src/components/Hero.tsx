import React from "react"
import HeroStyles from "../styles/modules/hero.module.scss"

const Hero: React.FC<IProps> = ({ title }) => {
  return (
    <div className={HeroStyles.hero}>
      <h1 style={{ color: "white" }}> {title} </h1>
    </div>
  )
}

interface IProps {
  title: string
}

export default Hero
