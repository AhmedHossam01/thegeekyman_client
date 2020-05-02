import React from "react"
import HeroStyles from "../styles/modules/hero.module.scss"

const Hero: React.FC<IProps> = ({ image, title, paragraph }) => {
  return (
    <div
      className={HeroStyles.hero}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={HeroStyles.overlay} />
      <div className={HeroStyles.content}>
        <h1 style={{ color: "white" }}> {title} </h1>
        <p> {paragraph} </p>
      </div>
    </div>
  )
}

interface IProps {
  image: string
  title: string
  paragraph: string
}

export default Hero
