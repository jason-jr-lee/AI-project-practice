import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const CardContainer = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  height: 250px;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 27, 107, 0.2);

    &::before {
      background: linear-gradient(135deg, 
        rgba(255, 27, 107, 0.4), 
        rgba(69, 202, 255, 0.4)
      );
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 27, 107, 0.6), 
      rgba(69, 202, 255, 0.6)
    );
    transition: background 0.3s ease;
    z-index: 1;
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
