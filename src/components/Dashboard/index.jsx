import Header from "../Header";
import ProductsList from "../ProductsList/";
import About from "../About/";
import Footer from "../Footer/";
import { useState } from "react";

const Dashboard = () => {
  const [filtered, setFiltered] = useState();

  return (
    <>
      <Header filtered={filtered} setFiltered={setFiltered} />
      <ProductsList filtered={filtered} />
      <About />
      <Footer />
    </>
  );
};

export default Dashboard;
