import React, { useState } from "react";
import styled from "styled-components";
import Sevimli from "../Image/sevimli-unicorn-boyama.jpg";
import Player from "../Image/video-icon-8032.png";
import Office from "../video/officeloop_Trim.mp4";
import Film from "../Image/film.png";
import Sosyal from "../Image/sosyal.png";
import Seo from "../Image/seo.png";

import CardItem from "./CardItem";

const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 30%;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 70%;
    margin-top: 10px;
  }
`;

const Cardcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
`;

const Image = styled.img`
  width: 600px;
  object-fit: contain;
  display: ${(props) => props.open && "none"};

  @media only screen and (max-width: 480px) {
    width: 480px;
    height: 200px;
  }
`;

const Video = styled.video`
  width: 400px;
  margin: 100px;
  display: ${(props) => !props.open && "none"};

  @media only screen and (max-width: 480px) {
    position: absolute;
    margin-top: 0;
    margin-left: 0;
    margin: 10px;
  }
`;

const Play = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Title = styled.span`
  font-size: 45px;
  font-weight: bold;
`;
const Desc = styled.p`
  font-size: 18px;
`;
const Button = styled.button`
  width: 150px;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  background-color: crimson;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;
const Hizmetler = [
  {
    resim: Film,
    baslik: "Medya & Tanıtım",
    aciklama: "Tanıtım Filmi | Drone Çekimi | Ürün Tanıtımı",
  },
  {
    resim: Seo,
    baslik: "SEO",
    aciklama: "Arama Motoru Optimizasyonu",
  },
  {
    resim: Sosyal,
    baslik: "Sosyal Medya ",
    aciklama: "Sosyal Medya Yönetimi ve Reklamları",
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} Src={Sevimli} />
        <Video open={open} autoPlay loop controls Src={Office} />
      </Left>
      <Right>
        <Title>Hizmetlerimiz</Title>
        <Desc>Dijital Reklam Ajansı ile çalışmanın ayrıcalığını yaşayın.</Desc>
        <Cardcontainer>
          <CardItem
            resim={Hizmetler[0].resim}
            baslik={Hizmetler[0].baslik}
            aciklama={Hizmetler[0].aciklama}
          />
          <CardItem
            resim={Hizmetler[1].resim}
            baslik={Hizmetler[1].baslik}
            aciklama={Hizmetler[1].aciklama}
          />
          <CardItem
            resim={Hizmetler[2].resim}
            baslik={Hizmetler[2].baslik}
            aciklama={Hizmetler[2].aciklama}
          />
        </Cardcontainer>
        <Button onClick={(toggleImage) => setOpen(true)}>
          <Play src={Player} /> Tıkla İzle
        </Button>
      </Right>
    </Container>
  );
};

export default Services;
