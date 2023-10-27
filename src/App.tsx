import React from "react"
import HelmetComponent from '@components/helmet/helmetComponent'
import { styled } from "@mui/material"

// 
import logo from './assets/rc.png'
import PlayerComponent from "@components/player-multimedia/PlayerComponent"

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <HelmetComponent/>

      <Container className="app_content">
        <ContainerHeader className="header">
          <div className="caja_gradient">
            <img src={logo} alt="logo" />
            {/* Player */}
            <PlayerComponent/>
          </div>
        </ContainerHeader>
      </Container>

    </>
  )
}

export default App

const Container = styled('div')`
  width:100%;
  position:relative;
  min-height: calc(100vh - 160px);
`

// 
const ContainerHeader = styled('div')`
  width:100%;
  position:relative;
  min-height: 320px;

  .caja_gradient{
    position:absolute;
    width:100%;
    height:100%;
    background-color: rgba(35, 51, 140, 0.6);

    img{
      position:relative;
      margin-left:50%;
      margin-top:20px;
      margin-bottom: 20px;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
      .caja_gradient{
        img{
          margin-top:75px;
        }
      }
  }
`

