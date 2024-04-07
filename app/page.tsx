"use client"
import HomeComp from "@/components/views/Home";
import ImageAnimation from "../components/canvas/ImageAnimation"

export default function Home() {
  return (
    <>
    <div>
    <div className="absolute [z-index:0] overflow-hidden top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-100 blur-sm">
    <ImageAnimation />
    </div>
    <div className="overflow-hidden absolute [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none">
    <ImageAnimation />
    </div>
    <HomeComp />
    </div>
    </>
  );
}
