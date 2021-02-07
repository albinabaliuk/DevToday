import * as Types from './types'
import axios from 'axios'

export const fetchPostRequest = () => ({
    type: Types.FETCH_POST_REQUEST
})

export const fetchPostSuccess = (post: any) => ({
    type: Types.FETCH_POST_SUCCESS,
    payload: {
        post
    }
})

export const fetchPostFail = (error?: string) => ({
    type: Types.FETCH_POST_FAIL,
    payload: {
        error
    }
})

export const fetchPost = (postId: number) => {
    return (dispatch: any) => {
        dispatch(fetchPostRequest())

        axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
            .then(res => {
                dispatch(fetchPostSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchPostFail(err.message))
            })
    }
}
