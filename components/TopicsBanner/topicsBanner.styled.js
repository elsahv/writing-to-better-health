  import styled from "styled-components";




export const Wrapper = styled.div`
// background: green;
  display: flex;
  justify-content: center;
  // background: teal;
  margin-top: 140px;
  
  @media only screen and (max-width: 1024px) {
   margin-top: 60px; 
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
    width: 270px;
    height: 170px;
  }

  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 170px;
  }

`;

export const TopicTitle = styled.h3`
  text-align: center;
  background: teal;
  border-top: solid 2px black;
  border-left: solid 2px black;
  border-right: solid 2px black;
  padding: 10px;
  color: aquamarine;

  @media only screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
