import { useEffect, useState } from "react"
import { VideoCard } from "../../components/VideoCard/VideoCard"
import dataBase, { Database } from "../../components/dataBase";
import guiasGif from "../../assets/guiasGif.gif"
import barbarianSword from "../../assets/barbarianSword.png"
import "./Guides.css"

interface Guides {
  id: number;
  image?: string;
  url: string;
}

export const Guides = () => {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const currentSlug = window.location.pathname.substring(1);
    const firstRoute = currentSlug.split('/')[1];
    setSlug(firstRoute);
    console.log(slug);
  }, [slug]);

  const thSelected: Guides[] | undefined = (dataBase as Database)[slug]?.guides; 
  console.log(thSelected)
  return (
    <div className="list_all_cards__container">
      <img className="barbarian_sword__image" src={barbarianSword} alt="" />
      <img className="animated_gif" src={guiasGif} alt="gif guias" />
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