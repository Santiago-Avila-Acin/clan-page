import { Link } from "react-router-dom"
import sitVillager from "../../assets/sitVillager.png";
import "./Header.css"

export const Header = () => {
  return (
    <div className="header__container">
      <Link to="/">
        <div className="title__container">
          <h1>Guerreros Celta</h1>
          <img src="https://api-assets.clashofclans.com/badges/512/NToNBfymiOXuDYagozs1qJ8Q529IY5vlQCtnLA0hT84.png" alt="clan logo" />
        </div>
        <img className="header__sit_villager" src={sitVillager} alt="sit villager" />
      </Link>
    </div>
  )
}