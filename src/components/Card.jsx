import React from "react";


function Card() {
    return (
        <div class="card bg-white rounded-lg shadow-lg">
            <div class="card-body px-6 py-8">
                <h3 class="text-lg font-medium">Card Title</h3>
                <p class="text-sm mt-2">Some text about the card.</p>
                <div class="mt-4">
                <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-indigo-500 mr-4 text-center">
                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    </div>
                    <div>
                    <h4 class="font-medium">Card Subtitle</h4>
                    <p class="text-sm">Some additional data.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card