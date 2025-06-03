import React from 'react'
import Logo from "../assets/Contactus image .png"

const Contact = () => {
  return (
  <>

  <div className="min-h-screen bg-[#eaf6fb] flex items-center justify-center p-4 mt-20">
    <div>
      <img src="https://advisorhtml.websitelayout.net/img/banner/page-title.jpg" alt="" />
    </div>
      <div className="bg-[#eaf6fb] w-full max-w-6xl rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-md">
        
        {/* Left: Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Write Us Something</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Your Name *</label>
                <input type="text" placeholder="Your name here" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">Your Email *</label>
                <input type="email" placeholder="Your email here" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">Your Subject *</label>
                <input type="text" placeholder="Your subject here" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">Contact Number</label>
                <input type="text" placeholder="Your phone here" className="w-full p-3 border rounded-md" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea placeholder="Tell us a few words" className="w-full p-3 border rounded-md" rows="4" />
            </div>

            <div>
              <input type="text" placeholder="Type the below word" className="w-full p-3 border rounded-md" />
              <img src="https://dummyimage.com/100x40/ccc/000&text=catch" alt="captcha" className="mt-2" />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 bg-[#0f2239] text-white rounded-lg p-6 md:p-8 space-y-6">
          <div>
            <h4 className="text-yellow-400 text-sm font-semibold">CONTACT</h4>
            <h2 className="text-2xl font-bold">Our Contact Information</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-700 p-2 rounded">
                📧
              </div>
              <div>
                <p className="font-semibold">Send E-Mail</p>
                <p className="text-sm">info@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-700 p-2 rounded">
                📞
              </div>
              <div>
                <p className="font-semibold">Call Anytime</p>
                <p className="text-sm">+44 205-658-1823</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-700 p-2 rounded">
                📍
              </div>
              <div>
                <p className="font-semibold">Locations</p>
                <p className="text-sm">66 Guild Street 512B, Great North Town.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <div className="bg-gray-600 p-2 rounded-full">🌐</div>
            <div className="bg-gray-600 p-2 rounded-full">💼</div>
            <div className="bg-gray-600 p-2 rounded-full">📍</div>
            <div className="bg-gray-600 p-2 rounded-full">📌</div>
          </div>
        </div>
      </div>
    </div>
     
  </>
  )
}

export default Contact