import * as Types from './types'
import axios from 'axios'

export const fetchPostsRequest = () => ({
    type: Types.FETCH_POSTS_REQUEST
})

export const fetchPostsSuccess = (posts: any) => ({
    type: Types.FETCH_POSTS_SUCCESS,
    payload: {
        posts
    }
})

export const fetchPostsFail = (error?: string) => ({
    type: Types.FETCH_POSTS_FAIL,
    payload: {
        error
    }
})

export const fetchPosts = () => {
    return (dispatch: any) => {
        dispatch(fetchPostsRequest())

        axios.get('https://simple-blog-api.crew.red/posts')
            .then(res => {
                dispatch(fetchPostsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchPostsFail(err.message))
            })
    }
}
