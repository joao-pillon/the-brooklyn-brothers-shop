import { HeaderMain, Hr, Nav, H2, H3, Input, Left } from "./style";
import logo from "../../assets/logo-black.png";
import Hamburger from "hamburger-react";
import { useState } from "react";
import jsonData from "../../data/productsCategory.json";

const Header = ({ filtered, setFiltered }) => {
  const data = jsonData.data.nodes;

  const filterCategory = (category) => {

    const filter = data.filter((product) => {
      console.log(product.category.name)
      for (let i = 0; i <= product.name.length; i++) {
        if (product.category.name == category) return true;
      }
      return false;
    });

    setFiltered([...filter]);
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Nav isOpen={isOpen}>
        <H3>PRODUCTS</H3>
        <H3>ABOUT US</H3>
      </Nav>

      <HeaderMain>
        <Left>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Left>
        <img src={logo} className="logo" alt="logo" />
      </HeaderMain>

      <Hr>
        <Input>
          <input type="text" onChange={(e) => filterCategory(e.target.value)} />
          <button onClick={() => filterCategory(filtered)}>Search by Category</button>
        </Input>
      </Hr>
    </>
  );
};

export default Header;
