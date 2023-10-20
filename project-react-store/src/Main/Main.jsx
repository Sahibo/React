import { Routes, Route } from "react-router-dom";
import { Catalog } from "./Catalog";
import { MyBag } from "./MyBag";

export function Main() {

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/myBag" element={<MyBag />} />
      </Routes>
    </div>
  );
}
