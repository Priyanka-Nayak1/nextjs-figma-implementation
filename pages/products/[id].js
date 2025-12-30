import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import review1 from "../../public/review-1.1.svg"
import review2 from "../../public/review-2.1.svg"
import review3 from "../../public/review-3.1.svg"
import review4 from "../../public/review-4.svg"
import review5 from "../../public/review-5.svg"
import review6 from "../../public/review-6.svg"
import { NewArrivals, ProductSection } from "../home";
import Products from '@/components/Products'

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const allProds = await fetch(`https://dummyjson.com/products/category/tops?limit=4`);

      const data = await res.json();
      const all = await allProds.json();

      setProducts(all.products);
      setProduct(data);
      setImages(data.images);
      setActiveImage(data.thumbnail || data.images[0]);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
    <Container>
      {/* LEFT */}
      <ImageSection>
        <ThumbnailList>
          {images.map((img, i) => (
            <Thumb
              key={i}
              onClick={() => setActiveImage(img)}
            >
              <Image src={img} alt="thumb" width={70} height={70} />
            </Thumb>
          ))}
        </ThumbnailList>

        <MainImage>
          <Image src={activeImage} alt={product.title} width={420} height={420} />
        </MainImage>
      </ImageSection>

      {/* RIGHT */}
      <InfoSection>
        <Title>{product.title}</Title>

        <Rating>
          ⭐⭐⭐⭐☆ <span>{product.rating}/5</span>
        </Rating>

        <Price>
          <Current>${product.price}</Current>
          <Old>${(product.price * 1.4).toFixed(0)}</Old>
          <Discount>-40%</Discount>
        </Price>

        <Description>{product.description}</Description>

        {/* COLORS */}
        <Block>
          <Label>Select Colors</Label>
          <ColorRow>
            <Color bg="#6b6a2f" />
            <Color bg="#1f1f1f" />
            <Color bg="#1d2b5f" />
          </ColorRow>
        </Block>

        {/* SIZES */}
        <Block>
          <Label>Choose Size</Label>
          <SizeRow>
            <SizeBtn>Small</SizeBtn>
            <SizeBtn>Medium</SizeBtn>
            <SizeBtn active>Large</SizeBtn>
            <SizeBtn>X-Large</SizeBtn>
          </SizeRow>
        </Block>

        {/* CART */}
        <CartRow>
          <Qty>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </Qty>

          <AddToCart>Add to Cart</AddToCart>
        </CartRow>
      </InfoSection>
    </Container>

    <div>
      <StyleReviewHead><h2>All Reviews</h2></StyleReviewHead>
      <StyleReviews>
      <Image src={review1}/>
      <Image src={review2}/>
      <Image src={review3}/>
      <Image src={review4}/>
      <Image src={review5}/>
      <Image src={review6}/>
      </StyleReviews>
    </div>

    <NewArrivals>YOU MIGHT ALSO LIKE</NewArrivals>
    <ProductSection>
        {products.map(p => (
          <Products key={p.id} product={p} />
        ))}
    </ProductSection>
    </>
  );
};

export default ProductDetail;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  display: flex;
  gap: 20px;
`;

const ThumbnailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Thumb = styled.div`
  border-radius: 10px;
  border: 1px solid #eee;
  cursor: pointer;
  overflow: hidden;
`;

const MainImage = styled.div`
  img {
    border-radius: 16px;
  }
`;

const InfoSection = styled.div``;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
`;

const Rating = styled.div`
  margin: 10px 0;
  color: #f5a623;

  span {
    color: #666;
    margin-left: 6px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
`;

const Current = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

const Old = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const Discount = styled.span`
  color: #ff4d4f;
  font-weight: 600;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 24px;
`;

const Block = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

const ColorRow = styled.div`
  display: flex;
  gap: 12px;
`;

const Color = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  cursor: pointer;
`;

const SizeRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeBtn = styled.button`
  padding: 8px 18px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
`;

const CartRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #ddd;
  padding: 10px 16px;
  border-radius: 30px;

  button {
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

const AddToCart = styled.button`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 14px;
  font-size: 16px;
  cursor: pointer;
`;
const StyleReviewHead = styled.div`
margin-left: 5px;
`;

const StyleReviews = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
margin-left: 5px;
margin-right: 5px;
margin-bottom: 20px;
`;
