import { useEffect, useState } from 'react';
import Banner from '@/components/Banner'
import Brands from '@/components/Brands'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import casual from '../../public/casual.svg'
import formal from '../../public/formal.svg'
import party from '../../public/party.svg'
import gym from '../../public/gym.svg'
import Products from '@/components/Products'
import line from '../../public/Line.svg'
import review1 from '../../public/review-1.svg'
import review2 from '../../public/review-2.svg'
import review3 from '../../public/review-3.svg'


const index = () => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        'https://dummyjson.com/products/category/mens-shirts?limit=4'
      );
      const data = await res.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
    <Banner/>
    <Brands/>


    <NewArrivals>NEW ARRIVALS</NewArrivals>
    <ProductSection>
        {products.map(p => (
          <Products key={p.id} product={p} />
        ))}
    </ProductSection>
    
    <ViewButtonWrapper>
    <ViewButton>View All</ViewButton>
    </ViewButtonWrapper>

    <Image src={line}/>

    <NewArrivals>TOP SELLING</NewArrivals>
    <ProductSection>
        {products.map(p => (
          <Products key={p.id} product={p} />
        ))}
    </ProductSection>

    <ViewButtonWrapper>
    <ViewButton>View All</ViewButton>
    </ViewButtonWrapper>



  <StyledBrowse>
  <StyledHead>BROWSE BY DRESS STYLE</StyledHead>

  <BrowseGrid>
    
      <Link href="/Casual">
        <Image src={casual} alt="Casual" height={289} width={407}/>
      </Link>
    
      <Link href="/Formal">
        <Image src={formal} alt="Formal" height={289} width={684}/>
      </Link>
    
      <Link href="/Party">
        <Image src={party} alt="Party" height={289} width={684} />
      </Link>
 
      <Link href="/Gym">
        <Image src={gym} alt="Gym" height={289} width={407} />
      </Link>
    
  </BrowseGrid>
</StyledBrowse>


    <div>
        <ReviewHead>OUR HAPPY CUSTOMERS</ReviewHead>
        <ReviewImages>
        <Image src={review1}/>
        <Image src={review2}/>
        <Image src={review3}/>
        </ReviewImages>
    </div>
    </>
  )
}

export default index


const StyledBrowse = styled.section`
  max-width: 1239px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 40px;
  border-radius: 40px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHead = styled.h2`
  font-family: "Integral CF";
  font-weight: 700;
  font-size: 38px;
  margin-bottom: 32px;
  text-align: center;
`;

const BrowseGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(407px, 684px));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BrowserCard = styled.div`
 border-radius: 20px;
 display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;


export const NewArrivals = styled.h3`
 display: flex;
 margin-top: 25px;
 margin-bottom: 25px;
 font: normal 700 38px "Integral CF";
 justify-content: center;
`;


export const ProductSection = styled.div`
 display: flex;
 justify-content: space-between; 
 margin-left: 30px;
 margin-right: 30px;
`;

const ViewButton = styled.div`
 display: flex;
 justify-content: center;
 height: 40px;
 width: 200px;
 border: 1px solid gray;
 border-radius: 50px;
 align-items: center;
`;

const ViewButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ReviewHead = styled.div`
  font-family: "Integral CF";
  font-weight: 700;
  font-size: 38px;
  margin-bottom: 32px;
  margin-left: 20px;
`;

const ReviewImages = styled.div`
 display: flex;
 justify-content: space-between;
 margin-left: 20px;
 margin-right: 20px;
 margin-bottom: 20px;
`;
