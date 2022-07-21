 
import Link from "next/link";
import styled from 'styled-components'

//STYLES
const Wrapper = styled.div`
ul {
    display: flex;  
    flex-direction: column;
    list-style: none;
}    
li {
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    text-decoration: none;
    color: teal;
    padding: 2px 0;
}
 a {
 }
 

`

const Title = styled.h3`
text-decoration: underline;
font-size: 25px;
padding: 5px 0;
`

//END STYLES

const Navbar = () => {
  return (
    <Wrapper>
      <Title>Categories</Title>
        <ul>
            <Link href="/cooking-notes">
            <li>Cooking Notes</li>
            </Link>

            <Link href="/biochemistry">
            <li>Biochemistry</li>
            </Link>

            <Link href="/blog">
            <li>Blog</li>
            </Link>

        </ul>
    </Wrapper>
  )
}

export default Navbar