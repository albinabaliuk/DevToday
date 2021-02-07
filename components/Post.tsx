import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  margin-bottom: 30px;
  
  cursor: pointer;
  transition: all .2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, .1);
  }
`
const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`
const Body = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
`

const Post = (props: any) => {
    return (
        <Link href={`/posts/${props.id}`}>
            <Wrapper>
                <Title>{ props.title }</Title>
                <Body>{ props.body }</Body>
            </Wrapper>
        </Link>
    )
}

export default Post
