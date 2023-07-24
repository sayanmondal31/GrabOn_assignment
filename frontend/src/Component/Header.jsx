import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [openModal, setopenModal] = useState(false);
  const [postBody, setpostBody] = useState({ title: "", body: "" });

  const handleCreatePost = () => {
    dispatch({ type: "CREATE_POST", payload: postBody });
    setopenModal(false);
    setpostBody({ title: "", body: "" });
  };

  return (
    <>
      {openModal && (
        <Modal
          isCreate={true}
          onClickClose={() => setopenModal(false)}
          onClickSave={handleCreatePost}
          titleOnChange={(e) => {
            setpostBody({
              ...postBody,
              title: e.target.value,
            });
          }}
          bodyOnChange={(e) => {
            setpostBody({
              ...postBody,
              body: e.target.value,
            });
          }}
        />
      )}

      <div className="bg-[#fff] w-screen h-12 shadow-md ">
        <div className="flex justify-between items-center h-full px-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                src="https://images.yourstory.com/cs/images/companies/79d7cd7d9863-GrabOn-1626106880872.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
                alt=""
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div
              onClick={() => {
                setopenModal(true);
              }}
              className="flex bg-teal-700 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded-md w-min text-white m-2"
            >
              Create
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
