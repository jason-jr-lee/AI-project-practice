'use client'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CardWrapper, CardContainer, CardContent, CardTitle, CardText, CardGrid } from '../styles/CardStyles';
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
  margin-bottom: 1rem;
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
    title: "브랜드 전략",
    content: "효과적인 브랜드 전략 수립 및 실행 방안",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80"
  },
  {
    id: 2,
    title: "디지털 마케팅",
    content: "온라인 마케팅 전략 및 실행 방안",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80"
  },
  {
    id: 3,
    title: "콘텐츠 제작",
    content: "매력적인 콘텐츠 기획 및 제작",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80"
  },
  {
    id: 4,
    title: "소셜 미디어",
    content: "소셜 미디어 운영 및 관리 전략",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80"
  },
  {
    id: 5,
    title: "광고 캠페인",
    content: "효과적인 광고 캠페인 기획 및 실행",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80"
  },
  {
    id: 6,
    title: "데이터 분석",
    content: "마케팅 데이터 분석 및 인사이트 도출",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80"
  },
  {
    id: 7,
    title: "UI/UX 디자인",
    content: "사용자 중심의 디자인 솔루션",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80"
  },
  {
    id: 8,
    title: "웹 개발",
    content: "최신 기술을 활용한 웹 서비스 개발",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80"
  },
  {
    id: 9,
    title: "모바일 앱",
    content: "사용자 친화적인 모바일 앱 개발",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80"
  },
  {
    id: 10,
    title: "컨설팅",
    content: "전문적인 디지털 전환 컨설팅",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80"
  }
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
        <CardGrid>
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.id * 0.1 }}
            >
              <CardContainer $bgImage={card.image}>
                <CardContent>
                  <div>
                    <CardTitle>{card.title}</CardTitle>
                    <CardText>{card.content}</CardText>
                  </div>
                </CardContent>
              </CardContainer>
            </motion.div>
          ))}
        </CardGrid>
      </CardWrapper>
    </>
  );
}
