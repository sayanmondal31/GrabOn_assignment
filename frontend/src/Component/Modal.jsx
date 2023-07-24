/* eslint-disable react/prop-types */
function Modal({
  onClickClose,
  onClickSave,
  onClickDelete,
  titleOnChange,
  bodyOnChange,
  titleValue,
  bodyValue,
  isCreate,
  isEdit,
  isDelete,
}) {
  return (
    <>
      <div
        className="absolute bg-black/50 w-screen h-screen "
        onClick={onClickClose}
      ></div>
      <div className="absolute bg-white w-1/2 h-1/2 top-1/4 left-1/4 rounded-md shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center h-12 px-4 border-b">
          {isCreate && <div className="text-lg font-medium">Create Post</div>}
          {isEdit && <div className="text-lg font-medium">Edit Post</div>}
          {isDelete && <div className="text-lg font-medium">Delete Post</div>}
          <div
            className="cursor-pointer hover:text-red-500"
            onClick={onClickClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/* Body */}
        {!isDelete && (
          <div className="flex flex-col px-4 py-2 space-y-2">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                className="input"
                onChange={titleOnChange}
                value={titleValue}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Body</label>
              <textarea
                className="input"
                onChange={bodyOnChange}
                value={bodyValue}
              ></textarea>
            </div>
          </div>
        )}
        {isDelete && (
          <div className="flex flex-col px-4 py-2 space-y-2">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">
                Are you sure you want to delete this post?
              </label>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="absolute bottom-2 right-5 space-x-4 flex ">
          <div
            className="btn border-red-500 border text-red-600"
            onClick={onClickClose}
          >
            Cancel
          </div>
          {!isDelete && (
            <div
              className="btn bg-teal-600 text-white hover:bg-teal-700"
              onClick={onClickSave}
            >
              Save
            </div>
          )}
          {isDelete && (
            <div
              className="btn bg-red-600 text-white hover:bg-red-700"
              onClick={onClickDelete}
            >
              Delete
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
