import { useEffect, useState } from "react"
import { ListCard } from "../../components/ListCard/ListCard";
import dataBase, { Database } from "../../components/dataBase";
import basesGuerrasGif from "../../assets/basesGuerrasGif.gif"
import barbarianSword from "../../assets/barbarianSword.png"
import "./WarBases.css"

interface WarBases {
  id: number;
  image: string;
  url: string;
}

export const WarBases = () => {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const currentSlug = window.location.pathname.substring(1);
    const firstRoute = currentSlug.split('/')[1];
    setSlug(firstRoute);
    console.log(slug);
  }, [slug]);

  const thSelected: WarBases[] | undefined = (dataBase as Database)[slug]?.warBases; 
  console.log(thSelected)
  return (
    <div className="list_all_cards__container">
      <img className="barbarian_sword__image" src={barbarianSword} alt="" />
      <img className="animated_gif" src={basesGuerrasGif} alt="gif bases guerra" />
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