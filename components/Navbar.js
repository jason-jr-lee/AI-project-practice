import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${props => props.active ? '#ff0000' : '#fff'};
  text-decoration: none;
  font-weight: 500;
`;

const Button = styled.button`
  background: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>Jason's big picture to Rich</Logo>
      <NavLinks>
        <StyledLink href="/" active="true">HOME</StyledLink>
        <StyledLink href="/demos">DEMOS</StyledLink>
        <StyledLink href="/inner-pages">INNER PAGES</StyledLink>
        <StyledLink href="/utility-pages">UTILITY PAGES</StyledLink>
        <StyledLink href="/authentications">AUTHENTICATIONS</StyledLink>
      </NavLinks>
      <Button>BUY THIS TEMPLATE</Button>
    </Nav>
  );
}
