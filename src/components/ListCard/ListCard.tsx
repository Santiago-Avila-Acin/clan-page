import "./ListCard.css"

interface ListCardProps {
  image: string;
  url: string;
}

export const ListCard = ({image, url}: ListCardProps) => {
  return (
    <div className="list_card__container">
      
      <div className="list_image__container">
        <img src={image} alt="" />
      </div>
        <a href={url}>
          <button className="join__button ">Copiar Aldea</button>
        </a>
    </div>
  )
}