
import styled from 'styled-components'

export const Form = styled.form`
padding-left: 25px;
padding-top: 40px;
`


 export const Button = styled.button`
    margin: 10px 0;
    font-size: 17px;
    padding: .5rem;
    border: solid 1px #636262;
    border-radius: 4px;
    font-weight: bold;
    background-color: #f6bea5;
    color: teal;
    cursor: pointer;
    /* :disabled {
      background: #636262;
  color: #cbced0;
    } */
    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
 
 
   
`

 
 
 


export const FormInput = styled.input`
display: flex;
justify-content: space-between;
font-size: 15px;
display: block;
width: 300px;
background-color: #f9fafb;
padding: 0.5rem; 
border-radius: 4px;
border: 1px solid #6a4feb2e;
font-size: 16px;

`

export const Title = styled.h4`
  color: #f6bea5;
  margin-bottom: 10px;
  font-size: 20px;
`



  


export const SuccessState = styled.p`
  color: aquamarine;
`
export const ErrorState = styled.p`
  color: #b00020;
`