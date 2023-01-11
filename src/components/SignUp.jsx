import React from "react";

function SignUp() {
    return (
        <div class="flex items-center justify-center">
            <form action="" class="lg:w-3/4 md:w-3/4 sm:w-3/4 bg-white rounded-lg items-center">
                <div class="px-12 py-32 pb-10">
                    <div class="w-full mb-2">
                        <div class="flex justify-center">
                            <input type="text" placeholder="Username"
                                class="px-8 w-96 border rounded-xl py-2 text-gray-700
        focus:outline-none items-center" />
                        </div>
                    </div>
                    <div class="w-full mb-2">
                        <div class="flex justify-center">
                            <input type="password" placeholder="Password"
                                class="px-8 w-96 border rounded-xl py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div class="w-full mb-2">
                        <div class="flex justify-center">
                            <input type="password" placeholder="Confirm Password"
                                class="px-8 w-96 border rounded-xl py-2 text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <button class="w-40 mt-6 py-2 rounded-xl bg-green-800 text-gray-100 focus:outline-none">
                        Create Account
                    </button>
                    <a href="#"
                        class="text-sm text-opacity-200 float-right mt-6 mb-4 hover:text-black text-gray-500">
                                Forgot Password?
                    </a>
                    <a href="/login"
                    class="text-sm text-opacity-100 float-left mt-6 mb-8 hover:text-black text-gray-500">
                        Sign In
                    </a>
                </div>
            </form>
        </div>
    )
}

export default SignUp