import * as Types from '../actions/types'

interface Post {
    id: number
    title: string
    body: string
}

interface PostRequestSuccess {
    posts: Post[]
}

interface PostRequestFail {
    error: string
}

interface Action {
    type: string,
    payload: PostRequestSuccess | PostRequestFail
}

interface State {
    posts: Post[]
    isLoading: boolean
    error?: string | null
}


const initialState: State = {
    posts: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Types.FETCH_POSTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case Types.FETCH_POSTS_SUCCESS: {
            const payload = <PostRequestSuccess>action.payload

            return {
                ...state,
                isLoading: false,
                posts: payload.posts
            }
        }

        case Types.FETCH_POSTS_FAIL: {
            const payload = <PostRequestFail>action.payload

            return {
                ...state,
                isLoading: false,
                error: payload.error
            }
        }

        default: {
            return { ...state }
        }
    }
}

export default reducer
