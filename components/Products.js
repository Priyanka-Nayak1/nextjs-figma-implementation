import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div style={{ cursor: 'pointer' }}>
        <ProductCard><Image
          src={product.thumbnail}
          alt={product.title}
          width={267}
          height={270}
        /></ProductCard>
        <p>{product.title}</p>
        <p style={{ fontWeight: "bold" }}>${product.price}</p>
      </div>
    </Link>
  );
};

export default Product;

const ProductCard = styled.div`
 height: 270px;
 width: 267px;
 background-color: #F0EEED;
 border-radius: 15px;
 margin-bottom: 15px;
`;


