import { useEffect, useState } from "react"
import { ListCard } from "../../components/ListCard/ListCard";
import dataBase, { Database } from "../../components/dataBase";
import basesFarmingGif from "../../assets/basesFarmingGif.gif"
import barbarianSword from "../../assets/barbarianSword.png"
import "./FarmingBases.css"

interface FarmingBases {
  id: number;
  image: string;
  url: string;
}

export const FarmingBases = () => {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const currentSlug = window.location.pathname.substring(1);
    const firstRoute = currentSlug.split('/')[1];
    setSlug(firstRoute);
  }, [slug]);

  const thSelected: FarmingBases[] | undefined = (dataBase as Database)[slug]?.farmingBases; 
  return (
    <div className="list_all_cards__container">
      <img className="barbarian_sword__image" src={barbarianSword} alt="" />
      <img className="animated_gif" src={basesFarmingGif} alt="gif bases de farming" />
      {thSelected? (
        thSelected.map((th) => {
          return (
            <ListCard
            key={th.id}
            image={th.image}
            url={th.url}
            />
          );}) 
          ) : (
            <h1>Cargando...</h1>
          )

      }
    </div>
  )
}