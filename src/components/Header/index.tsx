import React from 'react';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li>
              <a href="/">Pagina Inicial</a>
            </li>
            <li>
              <a href="#como-funciona">Como Funciona</a>
            </li>
            <li>
              <a href="#como-somos">Quem Somos</a>
            </li>
            <li>
              <a href="/auth">Area do Lojista</a>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
