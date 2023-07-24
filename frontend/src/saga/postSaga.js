import { takeEvery, call, put } from "redux-saga/effects";
import {
  createPostAction,
  deletePostAction,
  getPostsAction,
  updatepostAction,
} from "../action/postAction";
import { getPosts } from "../redux/post";
import { toast } from "react-toastify";

function* createPostSaga(actions) {
  try {
    const response = yield call(createPostAction, actions.payload);
    console.log(response, "post create");
    if (response.status === 201) {
      toast.success("Post created successfully");
      yield put({
        type: "GET_POSTS",
      });
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
}

function* fetchPostsSaga() {
  try {
    const response = yield call(getPostsAction);

    if (response.status === 200) {
      yield put(
        getPosts({
          posts: response.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* updatePostSaga(actions) {
  try {
    const response = yield call(updatepostAction, actions.payload);
    if (response.status === 200) {
      toast.success("Post updated successfully");
      yield put({
        type: "GET_POSTS",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* deletePostSaga(actions) {
  try {
    const response = yield call(deletePostAction, actions.payload);
    if (response.status === 200) {
      toast.success("Post deleted successfully");
      yield put({
        type: "GET_POSTS",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAsyncPostSaga() {
  yield takeEvery("CREATE_POST", createPostSaga);
  yield takeEvery("GET_POSTS", fetchPostsSaga);
  yield takeEvery("UPDATE_POST", updatePostSaga);
  yield takeEvery("DELETE_POST", deletePostSaga);
}
