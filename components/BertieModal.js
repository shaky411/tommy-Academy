import React from "react";
import { InlineWidget } from "react-calendly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faXmarkCircle
} from "@fortawesome/free-solid-svg-icons";

export default function BertieModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-slate-500 cursor-pointer hover:bg-slate-800 duration-300 w-full text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-20 h-full"
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
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmarkCircle} className="bg-rose-100 dark:bg-indigo-500 rounded-full w-6 h-6 p-1 text-rose-500 dark:text-slate-200"/>
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