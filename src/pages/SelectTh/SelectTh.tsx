import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import "./SelectTh.css"

import th10s from "../../assets/th10s.png"
import th11s from "../../assets/th11s.png"
import th12s from "../../assets/th12s.png"
import th13s from "../../assets/th13s.png"
import th14s from "../../assets/th14s.png"
import th15s from "../../assets/th15s.png"

export const SelectTh = () => {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const currentSlug = window.location.pathname.substring(1);
    const firstRoute = currentSlug.split('/')[0];
    setSlug(firstRoute);
    console.log(slug);
  }, [slug]);
  
  const navigate = useNavigate();
  const handleTh = (th: string) => {
    navigate(`/${slug}/${th}`)
  }

  return (
    <div className="select_th__container">
      <div className="select_th__title_container">
        <h1 className="select_th__title">SELECCIONA TU AYUNTAMIENTO</h1>
      </div>
      <div className="select_th__cards__container">
        <div onClick={() => handleTh("th10")} className="select_th__single_card--left">
          <h2>TH 10</h2>
          <img src={th10s} alt="select th10" />
        </div>
        <div onClick={() => handleTh("th11")} className="select_th__single_card--right">
          <h2>TH 11</h2>
          <img src={th11s} alt="select th11" />
        </div>
        <div onClick={() => handleTh("th12")} className="select_th__single_card--left">
          <h2>TH 12</h2>
          <img src={th12s} alt="select th12" />
        </div>
        <div onClick={() => handleTh("th13")} className="select_th__single_card--right">
          <h2>TH 13</h2>
          <img src={th13s} alt="select th13" />
        </div>
        <div onClick={() => handleTh("th14")} className="select_th__single_card--left">
          <h2>TH 14</h2>
          <img src={th14s} alt="select th14" />
        </div>
        <div onClick={() => handleTh("th15")} className="select_th__single_card--right">
          <h2>TH 15</h2>
          <img src={th15s} alt="select th15" />
        </div>
      </div>
    </div>
  )
}