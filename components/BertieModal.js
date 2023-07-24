import React from "react";
import { InlineWidget } from "react-calendly";

export default function BertieModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-slate-500 hover:bg-slate-800 duration-300 w-full text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[800px] max-w-3xl p-10">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                <InlineWidget url="https://calendly.com/bertranddupont/selling-with-framepoint" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}