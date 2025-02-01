'use client'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { CardWrapper, CardContainer, CardContent, CardTitle, CardText } from '../styles/CardStyles';
import Navbar from '../components/Navbar';

// Swiper 스타일
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// 새로 추가된 스타일 컴포넌트
const HeroSection = styled.div`
  width: 100%;
  height: 33vh;
  position: relative;
  margin-bottom: 2rem;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/house-image.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeroText = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const cardData = [
  {
    id: 1,
    title: "오늘의 뉴스",
    content: "첫 번째 카드 뉴스 내용입니다.",
    image: "/images/news1.jpg"
  },
  {
    id: 2,
    title: "주간 하이라이트",
    content: "두 번째 카드 뉴스 내용입니다.",
    image: "/images/news2.jpg"
  },
];

const Hero = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  span {
    font-family: serif;
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #888;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
  &.primary {
    background: #333;
    color: white;
  }
  
  &.secondary {
    background: transparent;
    border: 1px solid #333;
    color: white;
  }
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection>
        <HeroImage />
      </HeroSection>
      <CardWrapper>
        <Swiper
          modules={[Navigation, Pagination, EffectCards]}
          effect="cards"
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
        >
          <AnimatePresence>
            {cardData.map((card) => (
              <SwiperSlide key={card.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardContainer>
                    <CardContent>
                      <div>
                        <CardTitle>{card.title}</CardTitle>
                        <CardText>{card.content}</CardText>
                      </div>
                    </CardContent>
                  </CardContainer>
                </motion.div>
              </SwiperSlide>
            ))}
          </AnimatePresence>
        </Swiper>
      </CardWrapper>
    </>
  );
}
