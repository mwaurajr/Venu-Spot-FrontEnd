import React from "react"

import SocialHandle from "./SocialHandle"

function Footer() {
    return (    
        <div className="h-80">   
            <footer class="absolute mx-auto mt-96 z-10 width-full left-0 right-0 p-4 bg-gray rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex mb-4 sm:mb-0">
                        <span class="font-semibold uppercase text-lg text-black ml-12">
                            VenuSpot
                        </span>
                    </a>
                    <SocialHandle />
                    {/* <ul class="flex flex-wrap inline-block space-x-5 mt-16 items-center mr-16 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:text-black md:mr-6 text-black">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:text-black md:mr-6 text-black">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-black text-black">Contact</a>
                        </li>
                    </ul> */}
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm sm:text-center dark:text-gray-400 absolute left-20">
                    ©<a href="#" class="hover:text-black text-black">VenuSpot™</a>. All Rights Reserved.
                    {/* <ul class="flex flex-wrap absolute bottom-5 items-center mr-16 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"> */}
                        {/* <li>
                            <a href="/terms" class="mr-4 hover:text-black md:mr-6 text-black">Terms of Use</a>
                        </li>
                        <li>
                            <a href="/privacy" class="mr-4 hover:text-black md:mr-6 text-black">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:text-black text-black">Contact</a>
                        </li> */}
                    {/* </ul> */}

                    {/* <ul class="flex flex-wrap space-x-5  items-center mr-16 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:text-black md:mr-6 text-black">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:text-black md:mr-6 text-black">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-black text-black">Contact</a>
                        </li>
                    </ul> */}
                </span>
            </footer>
        </div>
    )
}

export default Footer