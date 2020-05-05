import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoPechinxai from '../../assets/logo.svg';

const LeftMenu: React.FC = () => (
  <Container>
    <img src={LogoPechinxai} alt="Logo Pechinxai" />

    <hr />

    <Navigation>
      {/* replace a for link react-router-dom  */}
      <Link to="/merchant">Página Inicial</Link>
      <Link to="/profile">Editar perfil</Link>
      <Link to="#">Pedidos</Link>
      <Link to="#">Produtos</Link>
      <Link to="/suppliers">Fonercedores parceiros</Link>
      <Link to="/auth">Sair</Link>

    </Navigation>
  </Container>
);


export default LeftMenu;


const Container = styled.div<any>`
  width: 315px; 
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;



  background: #A487CA;
  opacity: 0.7;

  img {
    width: 100px;
    height: 141px;
  }

  hr {
    width: 100%;
    margin-top: 28px;
  }
`
const Navigation = styled.nav<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin-top: 120px;

    text-decoration: none;
    color: #EFDCDC;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 21px;
  }

  a + a {
    margin-top: 52px;
  }
`;
