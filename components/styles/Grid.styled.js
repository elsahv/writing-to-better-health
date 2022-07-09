  import styled from 'styled-components'


export const Title = styled.div` 
text-align: center;
font-size: 25px;
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
  margin-left: 0px;
  }
`


 

export const PostTitle = styled.div` 
text-transform: capitalize;
font-size: 25px;
height: 100px;
width: 300px; 
position: absolute;
padding: 25px;
color: #fff;
text-shadow: 2px 2px 2px black;
@media only screen and (max-width: 1024px) {
  width: 200px;
}
`
 

 export const IndexPostGrid = styled.div`
 margin: 45px;
 padding-left: 25px;
display: grid;
grid-template-columns: repeat(3, 350px);
grid-gap: 1em;
.square {
  cursor: pointer;
  background: #2d6a4f;
  display: flex;
  flex-direction: column;
  border: solid 2px black;
  transition: all 0.3s ease;
  &:hover {
  transform: translate(10px, 10px) scale(0.95) rotate(1deg);
  }
  .image {
    object-fit: fill;
    height: 305px;
}
  a {
    text-decoration: none;
  }
  }


@media only screen and (max-width: 1024px) {
  padding-left: 295px;
  padding-top: 45px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-gap: 1.5em;
}


@media only screen and (max-width: 834px) {
  padding-left: 275px;
  padding-top: 45px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-gap: 1.5em;
}

@media only screen and (max-width: 768px) {
  padding-left: 245px;
  display: grid;
  grid-template-columns: repeat(2, 220px);
}


@media only screen and (max-width: 767px) {
  padding-top: 165px;
  padding-left: 0;
  display: grid;
  grid-template-columns: 300px;
  grid-gap: 1em;
  .square {
    background: #2d6a4f;
    display: flex;
    flex-direction: column;
    border: solid 2px black;
  }
  .image {
    height: 25px;
  }
}
` 


export const Wrapper = styled.div`
margin-left: 200px; 
@media only screen and (max-width: 1024px) {
 margin-left: 0px;
}
@media only screen and (max-width: 500px) {
  padding: 0;
  margin: 0;
 }
`
 