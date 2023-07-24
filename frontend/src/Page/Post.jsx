import { useDispatch, useSelector } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from "../Component/Modal";

function Post() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [editModalopen, seteditModalopen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [post, setpost] = useState({});

  const handleEditPost = () => {
    dispatch({
      type: "UPDATE_POST",
      payload: {
        id: post?.id,
        body: {
          title: post?.title,
          body: post?.body,
        },
      },
    });
    seteditModalopen(false);
  };

  const handleDeletePost = () => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        id: post?.id,
      },
    });
    setpost({});
    setdeleteModalOpen(false);
  };

  return (
    <>
      {editModalopen && (
        <Modal
          isEdit={true}
          onClickClose={() => seteditModalopen(false)}
          onClickSave={handleEditPost}
          titleOnChange={(e) => {
            setpost({
              ...post,
              title: e.target.value,
            });
          }}
          bodyOnChange={(e) => {
            setpost({
              ...post,
              body: e.target.value,
            });
          }}
          titleValue={post?.title}
          bodyValue={post?.body}
        />
      )}
      {deleteModalOpen && (
        <Modal
          isDelete={true}
          onClickClose={() => setdeleteModalOpen(false)}
          onClickDelete={handleDeletePost}
        />
      )}
      <div className="flex flex-col bg-slate-50 h-screen">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="bg-sky-50">
                    <th scope="col" className="px-6 py-4">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      User Id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4 ">
                      Body
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr
                      key={post?.id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {post?.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {post?.userId}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {post?.title}
                      </td>
                      <td className="whitespace-nowrap text-ellipsis overflow-hidden max-w-sm  px-6 py-4 truncate ">
                        {post?.body}
                      </td>
                      <td>
                        <div className="flex space-x-2 justify-center">
                          <PencilIcon
                            onClick={() => {
                              seteditModalopen(true);
                              setpost({
                                id: post?.id,
                                title: post?.title,
                                body: post?.body,
                              });
                            }}
                            className="w-5 h-5 cursor-pointer text-green-600 hover:text-green-500 gr"
                          />

                          <TrashIcon
                            onClick={() => {
                              setdeleteModalOpen(true);
                              setpost({
                                id: post?.id,
                              });
                            }}
                            className="w-5 h-5 cursor-pointer text-red-600 hover:text-red-500"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
