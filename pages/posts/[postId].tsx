import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions/post'

import Spinner from '../../components/Spinner'
import GoBack from '../../components/GoBack'

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
`

const Wrapper = styled.div`
`

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

const PostWrapper = styled.div`
  padding: 0 20%;
`

const PostTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`
const PostBody = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  
  margin-top: 10px;
`

const CommentsTitle = styled.div`
  font-size: 36px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  margin-top: 30px;
`

const CommentWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 15px;
  
  display: flex;
  flex-direction: row;
`

const CommentIdentifier = styled.div`
  font-weight: 600;
  margin-right: 10px;
`

const CommentBody = styled.div``


function Post(props: any) {
    const router = useRouter()
    const postId = Number(router.query.postId)

    useEffect(() => {
        if(!isNaN(postId)) {
            props.fetchPost(postId)
        }
    }, [postId])

    console.log(props.post)
    return <Wrapper>
        <GoBack />

        <Title>Post info</Title>

        {props.isLoading === true && (
            <SpinnerWrapper>
                <Spinner />
            </SpinnerWrapper>
        )}

        {props.post && (
            <PostWrapper>
                <PostTitle>
                    {props.post.title}
                </PostTitle>

                <PostBody>
                    {props.post.body}
                </PostBody>

                <CommentsTitle>
                    Comments
                </CommentsTitle>

                {props.post.comments?.map((item: any, index: number) => {
                    return (
                        <CommentWrapper key={index}>
                            <CommentIdentifier>
                                {`Comment #${index + 1}:`}
                            </CommentIdentifier>

                            <CommentBody>
                                {item.body}
                            </CommentBody>
                        </CommentWrapper>
                    )
                })}
            </PostWrapper>
        )}
    </Wrapper>
}

const mapStateToProps = (state: any) => ({
    isLoading: state.post.isLoading,
    error: state.post.error,
    post: state.post.post
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchPost: (postId: number) => dispatch(Actions.fetchPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
