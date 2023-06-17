import { useEffect, useState } from "react"
import { VideoCard } from "../../components/VideoCard/VideoCard"
import dataBase, { Database } from "../../components/dataBase";
import ataquesGif from "../../assets/ataquesGif.gif"
import barbarianSword from "../../assets/barbarianSword.png"
import "./Attacks.css"

interface Attack {
  id: number;
  image?: string;
  url: string;
}

export const Attacks = () => {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const currentSlug = window.location.pathname.substring(1);
    const firstRoute = currentSlug.split('/')[1];
    setSlug(firstRoute);
  }, [slug]);

  const thSelected: Attack[] | undefined = (dataBase as Database)[slug]?.attacks; 
  return (
    <div className="list_all_cards__container">
      <img className="barbarian_sword__image" src={barbarianSword} alt="" />
      <img className="animated_gif" src={ataquesGif} alt="gif ataques" />
      {thSelected? (
        thSelected.map((th) => {
          return (
            <VideoCard
            key={th.id}
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