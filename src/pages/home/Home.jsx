import React from 'react';
import Sidebar from '../../components/sidebar';
import { ContainerHome, Navbar } from '../../styles/styles';

const Home = () => {
  return (
    <ContainerHome>
      <Sidebar />
      <Navbar>HomeContainer</Navbar>
    </ContainerHome>
  )
}

export default Home;