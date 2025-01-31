import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: calc(100vh - 70px); // Navbar 높이만큼 빼줌
  display: flex;
  align-items: center;
  background: #000;
`;

export const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1.3;
  background-color: #111;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

export const CardContent = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16px;
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #888;
`;
