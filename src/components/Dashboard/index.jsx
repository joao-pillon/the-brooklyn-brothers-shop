import Header from "../Header";
import ProductsList from "../ProductsList/";
import About from "../About/";
import Footer from "../Footer/";
import { useState } from "react";
import {Container} from "./styles";


const Dashboard = () => {
  const [filtered, setFiltered] = useState();

  return (
    <Container>
      <Header filtered={filtered} setFiltered={setFiltered} />
      <ProductsList filtered={filtered} />
      <About />
      <Footer />
    </Container>
  );
};

export default Dashboard;
