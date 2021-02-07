import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import GoBack from '../../components/GoBack'


const Wrapper = styled.div`
`

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
`

const TitleInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 24px;
  
  height: 30px;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 7px;
`

const BodyInput = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 20px;
  
  margin-top: 20px;
  min-height: 200px;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 7px;
`

const BodyWrapper = styled.div`
  padding: 0 20%;
  display: flex;
  flex-direction: column;
`

const PublishButton = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 36px;
  text-decoration: underline;
  text-align: center;
  
  margin-top: 30px;
  cursor: pointer;
  opacity: .7;
  transition: all .2s ease;

  &:hover {
    opacity: 1;
  }
  
`

const PostCreator = () => {
    const [title, updateTitle] = useState('')
    const [body, updateBody] = useState('')

    const onPublish = () => {
        if(!title || !body) return

        axios.post('https://simple-blog-api.crew.red/posts', {
            title,
            body
        })
            .catch(err => console.error(err))

        updateTitle('')
        updateBody('')
    }

    return <Wrapper>
        <GoBack />

        <Title>Create a new post</Title>

        <BodyWrapper>
            <TitleInput
                value={title}
                onChange={e => updateTitle(e.target.value)}
            />

            <BodyInput
                value={body}
                onChange={e => updateBody(e.target.value)}
            />
        </BodyWrapper>

        <PublishButton
            onClick={onPublish}
        >
            Publish
        </PublishButton>
    </Wrapper>
}

export default PostCreator
