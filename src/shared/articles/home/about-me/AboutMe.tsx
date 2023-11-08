import React from 'react';
import { styled, Container, Grid } from '@mui/material';
import items from "../../../../utils/data/itemsServices";
import ItemContainerGrid from '../../../../components/Item-container-grid/ItemContainerGrid';
import itemsAbout from "../../../../utils/data/itemsAbout";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// Multimedia
import RC from '@assets/ID/foto.png';

// Styles
import './AboutMe.scss';
import CarouselVideoPlayer from '../../../../components/carousel-video-player/carouselVideoPlayer';
import ButtonIconText from '@components/button-icon-text/ButtonIconText';

interface AboutMeProps {
    itemsAbout?: { url: string }[];
}

const AboutMe: React.FC<AboutMeProps> = () => {

    return (
        <Content className='root_AboutMe'>
            {/* Radio FM */}
            <ContainerFM>
                <div className="zeno-fm-container">
                    <iframe
                        src="https://zeno.fm/player/RCMedia"
                        frameBorder={0}
                        scrolling="no"
                        title="Zeno.FM Player"
                    ></iframe>
                    <a
                        href="https://zeno.fm/"
                        target="_blank"
                        style={{ fontSize: '0.9em', lineHeight: '10px' }}
                    >
                        A Zeno.FM Station
                    </a>
                    <style>
                        {`
          .zeno-fm-container {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 110px;
          }

          .zeno-fm-container iframe {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        `}
                    </style>
                </div>
            </ContainerFM>
            {/* End Radio FM */}
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

            <ContainerSocial>
                <ButtonIconText text="Facebook" icon={<FacebookIcon/>}/>
                <ButtonIconText text="YouTube" icon={<YouTubeIcon/>}/>
                <ButtonIconText text="Instagram" icon={<InstagramIcon/>}/>
            </ContainerSocial><br />


            <h2 className="custom-heading">Parte de nosotros</h2>
            <ContentDetails>
                <CarouselVideoPlayer items={itemsAbout} />
            </ContentDetails>


            <h2 className="custom-heading">Servicios</h2>
            <Container>
                <Grid container spacing={2} justifyContent="center">
                    {items.map((item: any, index: number) => (
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

const ContainerFM = styled('div')`
    position: relative;
    width: 100%;
    padding:20px;
    height: max-content;
    min-height:110px;
    min-width: 280px;
`

const ContainerSocial = styled('div')`
    position: relative;
    width: 100%;
    padding:20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;


    button{
        border-radius: 10px !important;
        font-size:18px;
        padding: 8px 15px;
    }
`
