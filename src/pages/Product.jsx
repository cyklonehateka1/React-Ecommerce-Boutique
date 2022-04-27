import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.img``;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Desc = styled.p``;

const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            ipsam quos voluptatem voluptatum culpa eveniet porro aspernatur
            commodi maiores, quia expedita blanditiis rem ea sed magnam beatae
            dolor ut. Dignissimos expedita quos ullam eveniet perspiciatis
            debitis molestias earum quis iusto nobis magni, odit quas quod
            excepturi nulla necessitatibus eaque quia doloremque dolorem veniam
            incidunt in maiores. Facilis ea aspernatur eveniet ipsam asperiores
            harum soluta inventore minus voluptatum.
          </Desc>
          <Price>$20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
