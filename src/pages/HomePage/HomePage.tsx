import { ActiveClan } from "../../components/ActiveClan/ActiveClan";
import { JoinButton } from "../../components/JoinButton/JoinButton";
import { SingleFunction } from "../../components/SingleFunction/SingleFunction";
import { useNavigate } from "react-router-dom"
import "./HomePage.css"

import skeleton from "../../assets/skeleton.png"
import barbarianPointing from "../../assets/barbarianPointing.png"
import shieldDistribution from "../../assets/shieldDistribution.png"
import elixirDeposit from "../../assets/elixirDeposit.png"
import goldLeague from "../../assets/goldLeague.png"
import lvl200 from "../../assets/lvl200.png"
interface allFunction{
  id: number;
  image: string;
  title: string;
  slug: string;
}

const allFunctions: allFunction[]= [
  {
    id: 1,
    image: shieldDistribution,
    title: "BASES DE GUERRA",
    slug: "bases-guerra"
  },
  {
    id: 2,
    image: elixirDeposit,
    title: "BASES DE FARMING",
    slug: "bases-farming"
  },
  {
    id: 3,
    image: goldLeague,
    title: "ATAQUES",
    slug: "ataques"
  },
  {
    id: 4,
    image: lvl200,
    title: "GUIAS",
    slug: "guias"
  }
]

export const HomePage = () => {
  return (
    <div className="main__container">
      <ActiveClan />
      <JoinButton />
      <div className="main_images__container">
        <img className="skeleton__image" src={skeleton} alt="skeleton" />
        <img className="barbarian__image" src={barbarianPointing} alt="barbarian Pointer" />
      </div>
      <div className="functions__container">
        {allFunctions.map((functionData) => (
          <SingleFunction key={functionData.id} functionData={functionData} />
        ))}
      </div>
    </div>
  )
}