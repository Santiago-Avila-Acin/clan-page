import { useNavigate } from "react-router-dom";
import "./SingleFunction.css";

interface AllFunction {
  id: number;
  image: string;
  title: string;
  slug: string;
}

interface SingleFunctionProps {
  functionData: AllFunction;
}

export const SingleFunction: React.FC<SingleFunctionProps> = ({ functionData }) => {
  const navigate = useNavigate();

  const handleOptionClick = (slug: string) => {
    navigate(`/${slug}/select-th`);
  };

  return (
    <div onClick={() => handleOptionClick(functionData.slug)} className="single_card">
      <div className="single_card__container">
        <div className="single_card__image">
          <img src={functionData.image} alt={functionData.title} />
        </div>
        <p className="single_card__function">{functionData.title}</p>
      </div>
    </div>
  );
};
