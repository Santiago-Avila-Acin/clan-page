import "./SelectTh.css"
import th10s from "../../assets/th10s.png"
import th11s from "../../assets/th11s.png"
import th12s from "../../assets/th12s.png"
import th13s from "../../assets/th13s.png"
import th14s from "../../assets/th14s.png"
import th15s from "../../assets/th15s.png"

export const SelectTh = () => {
  return (
    <div className="select_th__container">
      <div className="select_th__title_container">
        <h1 className="select_th__title">SELECCIONA TU AYUNTAMIENTO</h1>
      </div>
      <div className="select_th__cards__container">
        <div className="select_th__single_card--left">
          <h2>TH 10</h2>
          <img src={th10s} alt="select th10" />
        </div>
        <div className="select_th__single_card--right">
          <h2>TH 11</h2>
          <img src={th11s} alt="select th11" />
        </div>
        <div className="select_th__single_card--left">
          <h2>TH 12</h2>
          <img src={th12s} alt="select th12" />
        </div>
        <div className="select_th__single_card--right">
          <h2>TH 13</h2>
          <img src={th13s} alt="select th13" />
        </div>
        <div className="select_th__single_card--left">
          <h2>TH 14</h2>
          <img src={th14s} alt="select th14" />
        </div>
        <div className="select_th__single_card--right">
          <h2>TH 15</h2>
          <img src={th15s} alt="select th15" />
        </div>
      </div>
    </div>
  )
}