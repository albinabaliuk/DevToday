import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as Actions from '../redux/actions/posts'

import Spinner from '../components/Spinner'
import Post from '../components/Post'

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
`

const Wrapper = styled.div``

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

const PostsWrapper = styled.div`
  padding: 0 10%;
  overflow-y: auto;
`

const CreateNewPostWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const CreateNewPostTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 24px;
  cursor: pointer;
  opacity: .7;
  transition: all .2s ease;

  &:hover {
    opacity: 1;
  }
`

function Home(props: any) {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  return <Wrapper>
    <CreateNewPostWrapper>
      <Link href='/posts/new'>
        <CreateNewPostTitle>
          Create a new post
        </CreateNewPostTitle>
      </Link>
    </CreateNewPostWrapper>

    <Title>List of posts</Title>

    <PostsWrapper>
      {props.isLoading === true && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
      )}

      {props.posts.length > 0 && props.posts.map((item: any, index: number) => {
        console.log(item, index)
        return <Post key={index} {...item} />
      })}
    </PostsWrapper>
  </Wrapper>
}

const mapStateToProps = (state: any) => ({
  isLoading: state.posts.isLoading,
  error: state.posts.error,
  posts: state.posts.posts
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchPosts: () => dispatch(Actions.fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
