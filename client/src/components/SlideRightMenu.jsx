import React from "react"
import { letterStub } from "./utils/stubs"
import FilterMenu from "./FilterMenu"

const SlideRightMenu = () => {
    const properties = ["type", "size", "font"]
  return (
    <div className="fixed z-[1] h-[calc(100vh-5.125rem)] flex flex-col gap-24 w-5/6 md:w-1/2 lg:w-1/3 overflow-hidden hover:overflow-y-scroll group-focus-within:overflow-y-auto pb-24 bg-slate-100 -translate-x-[90%] transition ease-in-out duration-700 hover:translate-x-0 group-focus-within:translate-x-0 ">
      <h2 className="mt-3 text-2xl text-orange-600 justify-self-start self-center">
        Filter Options
      </h2>
      {properties.map((property) => (
        <FilterMenu
          key={property}
          allLetters={letterStub}
          property={property}
          position="self-center"
          />
      ))}
      <button className="bg-orange-700 hover:bg-orange-500 text-white self-center py-1 px-2 rounded font-bold drop-shadow-xl active:drop-shadow-sm active:bg-orange-400 transition-all duration-200">
        Apply Filter
      </button>
    </div>
  )
}

export default SlideRightMenu
