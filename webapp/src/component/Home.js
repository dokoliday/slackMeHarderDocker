import React from 'react';
import Channels from './Channels';
import styled from 'styled-components';


const Wrapper = styled.div`
  background: black
`;
const Home = () => (
    <Wrapper>
        <Channels />
    </Wrapper>
);

export default Home;