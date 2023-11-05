import React from "react"
import SlideRightMenu from "../components/SlideRightMenu"
import { Link } from "react-router-dom"

export default function Home() {
  let buttonClass =
    "text-[#e1341e] text-base font-bold  py-1 px-2 rounded transition-all uppercase duration-200 hover:drop-shadow-lg active:drop-shadow-sm hover:bg-orange-700 hover:text-white"
  return (
    <div className="w-full min-h-screen justify-between">
      {/*
      leave this here for now
      <div className="group">
        <SlideRightMenu />
      </div> pl-[calc((50%-33%)-10%)]*/}
      <div className="w-full h-screen  flex flex-col items-center justify-center">
        <div className="p-4">
          <h1 className="text-2xl font-semibold block py-4 md:text-4xl lg:text-6xl">
            Welcome to <span className="text-[#e1341e]">S</span>imply{" "}
            <span className="text-[#1ecbe1]">L</span>it
          </h1>
          <div className="flex justify-between p-4 mt-3">
            <Link to="login" className={buttonClass}>
              Sign In
            </Link>
            <Link to="about" className={buttonClass}>
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
