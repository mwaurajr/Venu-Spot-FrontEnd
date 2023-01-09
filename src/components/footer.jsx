import React from "react"

function Footer() {
    return (       
        <footer class="fixed mx-auto width-full bottom-0 left-0 right-0 p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0">
                    <span class="ml-16 self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">VenuSpot</span>
                </a>
                <ul class="flex flex-wrap items-center mr-16 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:text-black md:mr-6 text-black">Terms of Use</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:text-black md:mr-6 text-black">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-black text-black">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm sm:text-center dark:text-gray-400 fixed left-20">
                ©<a href="#" class="hover:text-black text-black">VenuSpot™</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer