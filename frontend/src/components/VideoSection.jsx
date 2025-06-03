'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { RxCross2 } from "react-icons/rx";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative py-20 px-4 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://advisorhtml.websitelayout.net/img/bg/bg-04.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Whether you are looking for answers,<br />
          would like to solve a any business problem
        </h2>

        <button onClick={() => setIsOpen(true)} className="inline-flex items-center gap-4 mt-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg relative">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <div className="absolute w-full h-full rounded-full border-2 border-white animate-ping"></div>
          </div>
          <span className="text-yellow-400 font-medium text-lg">Video Presentation</span>
        </button>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 flex items-center justify-center p-4 bg-black bg-opacity-70">
        <div className="max-w-3xl w-full">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white mt-4 text-sm underline block mx-auto">
            <RxCross2 />
          </button>
        </div>
      </Dialog>
    </div>
  )
}
