import styled from 'styled-components'




export const PageTitle = styled.div` 
text-align: center;
font-size: 25px;
padding-top: 25px;  
`



export const Wrapper = styled.div`
margin-left: 150px;
`

export const PostLinks = styled.div`

`

export const PostTitle = styled.h2`
font-size: 40px;
margin: 25px 125px;

`

export const ImgWrapper = styled.div`
.image {
    width: 1100px;
    height: 600px;
    border: solid 2px black;
}
`


export const SplicedContent = styled.div`
width: 900px;
margin: 20px 100px;
font-size: 20px;
`

export const CTA = styled.button`
 margin-left: 100px;
 margin-bottom: 45px;
 padding: 10px 20px;
 background: teal;
 color: aquamarine;
 border: none;
 cursor: pointer;
 border: solid 1px aquamarine;

 &:hover {
     transition: 2s;
     background: aquamarine; 
     color: teal;
     border: solid 1px teal;
 }
}
`