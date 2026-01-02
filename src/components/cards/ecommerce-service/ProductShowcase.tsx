import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  return (
    <Container>
      <UIInterface
        initial={{ y: 20, opacity: 0, rotateX: 5 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ImageArea>
           <ProductImage
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           >
              <AbstractProduct />
           </ProductImage>
           <NewBadge>NEW DROP</NewBadge>
        </ImageArea>
        
        <Details>
          <HeaderRow>
            <div>
              <Brand>ESSENTIALS</Brand>
              <ProductName>Tech Runner V2</ProductName>
            </div>
            <Rating>
               ★ 4.9
            </Rating>
          </HeaderRow>

          <SelectorLabel>Wybierz rozmiar</SelectorLabel>
          <SizeRow>
             {['40', '41', '42', '43'].map((size, i) => (
                <SizeBox key={size} $active={i === 2}>
                   {size}
                </SizeBox>
             ))}
          </SizeRow>

          <BottomRow>
             <Price>
                549 <Currency>PLN</Currency>
             </Price>
             <AddToCartBtn whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Do koszyka
             </AddToCartBtn>
          </BottomRow>
        </Details>
      </UIInterface>
    </Container>
  );
};

export default ProductShowcase;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const UIInterface = styled(motion.div)`
  width: 280px;
  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 
    0 20px 50px -10px rgba(0,0,0,0.15),
    0 0 0 1px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageArea = styled.div`
  height: 140px;
  background: #f8fafc;
  border-radius: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProductImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AbstractProduct = styled.div`
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8);
  border-radius: 20px;
  box-shadow: 
    20px 20px 40px rgba(59, 130, 246, 0.3),
    inset 2px 2px 5px rgba(255,255,255,0.4);
  transform: rotate(-15deg);
  position: relative;
  
  &::before {
    content: "LOGO";
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 10px;
    color: rgba(255,255,255,0.6);
    font-weight: 800;
  }
`;

const NewBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #111827;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
  letter-spacing: 0.5px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const Brand = styled.div`
  font-size: 10px;
  color: #9ca3af;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ProductName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
`;

const Rating = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 2px;
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 6px;
`;

const SelectorLabel = styled.div`
  font-size: 11px;
  color: #6b7280;
  margin-bottom: 6px;
  font-weight: 500;
`;

const SizeRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const SizeBox = styled.div<{ $active?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  background: ${p => p.$active ? '#111827' : '#fff'};
  color: ${p => p.$active ? '#fff' : '#374151'};
  border: 1px solid ${p => p.$active ? '#111827' : '#e5e7eb'};
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f3f4f6;
  padding-top: 12px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #111827;
`;

const Currency = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
`;

const AddToCartBtn = styled(motion.button)`
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;
