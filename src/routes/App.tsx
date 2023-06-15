import { Header } from "../components/Header/Header";
import { NotFound } from "../components/NotFound/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SelectTh } from "../pages/SelectTh/SelectTh";
import { WarBases } from "../pages/WarBases/WarBases";
import { FarmingBases } from "../pages/FarmingBases/FarmingBases";
import { Attacks } from "../pages/Attacks/Attacks";
import { Guides } from "../pages/Guides/Guides";

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug/select-th" element={<SelectTh />} />
        <Route path="bases-guerra/:slug" element={<WarBases />} />
        <Route path="bases-farming/:slug" element={<FarmingBases />} />
        <Route path="ataques/:slug" element={<Attacks />} />
        <Route path="guias/:slug" element={<Guides />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
