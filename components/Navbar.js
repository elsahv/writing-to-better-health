 
import Link from "next/link";
import styled from 'styled-components'

//STYLES
const Wrapper = styled.div`
display: flex;
justify-content: center;
background: teal;
padding: 30px;
margin-top: 30px;
margin-left: 150px;
margin-right: 150px;
border: solid 2px black;

ul {
    display: flex;  
    list-style: none;
}    
li {
    margin: 0 50px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
`


//END STYLES

const Navbar = () => {
  return (
    <Wrapper>
        <ul>
            <Link href="/cooking-notes">
            <li>Cooking Notes</li>
            </Link>

            <Link href="/biochemistry">
            <li>Biochemistry</li>
            </Link>

            <Link href="/#blog">
            <li>Blog</li>
            </Link>

        </ul>
    </Wrapper>
  )
}

export default Navbar