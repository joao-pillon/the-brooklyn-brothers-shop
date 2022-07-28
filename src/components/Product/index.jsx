import { Card, ProductImg, Img, Font, Button, Container } from "./style";

const Product = ({ product }) => {
  return (
    <Card>
      <ProductImg>
        <Img src={product.images[0].asset.url} alt={product.images.alt} />
      </ProductImg>
      <Button>Add to cart</Button>
      <Container>
        <Font>
          <h3>{product.category.name}</h3>
        </Font>
        <Font>{product.name}</Font>
      </Container>
    </Card>
  );
};

export default Product;
