import * as Types from '../actions/types'

interface Comment {
    id: number
    postId: number
    body: string
}

interface Post {
    id: number
    title: string
    body: string
    comments?: Comment[]
}

interface PostRequestSuccess {
    post: Post
}

interface PostRequestFail {
    error: string
}

interface Action {
    type: string,
    payload: PostRequestSuccess | PostRequestFail
}

interface State {
    post: Post | null
    isLoading: boolean
    error?: string | null
}


const initialState: State = {
    post: null,
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Types.FETCH_POST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                post: null
            }
        }

        case Types.FETCH_POST_SUCCESS: {
            const payload = <PostRequestSuccess>action.payload

            return {
                ...state,
                isLoading: false,
                post: payload.post
            }
        }

        case Types.FETCH_POST_FAIL: {
            const payload = <PostRequestFail>action.payload

            return {
                ...state,
                isLoading: false,
                error: payload.error,
                post: null
            }
        }

        default: {
            return { ...state }
        }
    }
}

export default reducer
