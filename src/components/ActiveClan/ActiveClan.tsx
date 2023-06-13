import clanWarsLeagueBronze from "../../assets/clanWarsLeagueBronze.png"
import leagueOfClans from "../../assets/leagueOfClans.png"
import airShip from "../../assets/airShip.png"
import "./ActiveClan.css"

export const ActiveClan = () => {
  return (
    <div className="active_clan">
      <div className="active_clan__title">
        <h2>Clan Activo</h2>
        <div className="active_clan__circle"></div>
      </div>
      <div className="active_clan__benefits">
        <div className="benefits__wars">
          <div className="circle__benefits war__circle">
            <img src={clanWarsLeagueBronze} alt="" />
            <p className="benefit__name">Guerras</p>
          </div>

          <div className="circle__benefits war__circle">
            <img src={leagueOfClans} alt="" />
            <p className="benefit__name">Liga</p>
          </div>

          <div className="circle__benefits war__circle">
            <img src={airShip} alt="" />
            <p className="benefit__name">Capital</p>
          </div>
        </div>
      </div>
    </div>
  )
}