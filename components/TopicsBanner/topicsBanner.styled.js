import styled from "styled-components";



export const Wrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  // background: teal;
  
  @media only screen and (max-width: 1024px) {
   margin-top: 40px; 
 }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
}
`;

export const TopicWrapper = styled.div`
  // background: maroon;
`;

export const ImageWrapper = styled.div`
cursor: pointer;
  background: maroon;
  width: 440px;
  height: 330px;
  position: relative;
  border: solid 2px black;

  @media only screen and (max-width: 1024px) {
    width: 320px;
    height: 270px;
  }

  @media only screen and (max-width: 834px) {
    width: 240px;
    height: 210px;
  }

`;

export const TopicTitle = styled.h2`
  text-align: center;
  background: teal;
  border-top: solid 2px black;
  border-left: solid 2px black;
  border-right: solid 2px black;
  padding: 5px 10px;
  color: #fff;

  @media only screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
