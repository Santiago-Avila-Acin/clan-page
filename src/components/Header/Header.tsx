import { Link } from "react-router-dom"
import sitVillager from "../../assets/sitVillager.png";
// import discordLogo from "../../assets/discordLogo.png";
import "./Header.css"

export const Header = () => {
  return (
    <div className="header__container">
      <Link to="/">
        <div className="title__container">
          <h1>Guerreros Celta</h1>
          <img src="https://api-assets.clashofclans.com/badges/512/aLhM8azT6kgxw8F3f44lPia8jNbm7Ff_wVq_mVK7XmQ.png" alt="clan logo" />
        </div>
        {/* <img className="discord_logo" src={discordLogo} alt="" /> */}
        <img className="header__sit_villager" src={sitVillager} alt="sit villager" />
      </Link>
    </div>
  )
}