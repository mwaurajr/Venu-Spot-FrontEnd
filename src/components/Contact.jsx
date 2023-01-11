import React from "react"

function Contact() {
    return (
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-green-800 hover:bg-green-500500 text-gray-100 p-3 rounded-xl w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
    )
}

export default Contact