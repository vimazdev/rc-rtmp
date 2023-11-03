import React from 'react';
import { styled, Container, Grid } from '@mui/material';
import  items  from "../../../../utils/data/itemsServices";
import ItemContainerGrid from '../../../../components/Item-container-grid/ItemContainerGrid'

// Multimedia
import RC from '@assets/ID/foto.png';

// Styles
import './AboutMe.scss';
import PlayerYoutube from '@components/player-youtube/PlayerYoutube';

// Constantes
const embed: string = "https://www.youtube.com/embed/UYNv-E9MglI?si=AUXaeo_7_roaSY-3";
interface AboutMeProps {
}

const AboutMe: React.FC<AboutMeProps> = () => {

    return (
        <Content className='root_AboutMe'>
            <h3>El Primer Canal Online desde Villa Hermosa, La Romana, República Dominicana</h3>
            <h2 className="custom-heading">¡Conócenos!</h2>

            <ContentInfo>
                <div className="contentImage">
                    <img src={RC} alt="Rodolfo Cordones" />
                </div>
                <div className="contentDetails">
                    <p>¡Bienvenidos a nuestro innovador canal online! Este proyecto se hace realidad gracias al incansable esfuerzo y dedicación de Rodolfo Cordones, un destacado locutor, comunicador y respetado líder político de la ciudad de La Romana.</p>
                    <p>Sintonícenos y únase a esta emocionante travesía informativa. ¡Estamos aquí para servirles con integridad, pasión y profesionalismo!</p>
                </div>
            </ContentInfo>

            <h2 className="custom-heading">Parte de nosotros</h2>

            <ContentDetails>
                <PlayerYoutube embed={embed} />
            </ContentDetails>


            <h2 className="custom-heading">Servicios</h2>

            <Container>
                <Grid container spacing={2} justifyContent="center">
                    {items.map((item:any, index:number) => (
                        <Grid item key={index}>
                            <ItemContainerGrid imgSrc={item.imgSrc} description={item.description} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Content>
    )
}

export default AboutMe;


const Content = styled('div')`
    width:100%;
    padding:10px;
`
const ContentInfo = styled('div')`
    width:100%;
    height: max-content;
    padding:10px;
    margin-bottom:30px;

    display: grid;
    grid-template-columns:50% 50%;

    @media (max-width: 550px) {
        grid-template-columns:100%;
        grid-template-rows:auto auto;
        gap:20px;

        .contentImage{
            height:300px;
            img{
                width:auto !important;
                height:100%;
            }
        }

        .contentDetails{
            text-align:center;
        }
    }
`
const ContentDetails = styled('div')`
    width: 100%;
    padding:20px;
    min-width: 280px;
`
