import { useState } from "react";

function SingleVenueCard({ venue }) {
  const { name, image, price, description } = venue;

  // const [isAvailable, setAvailable] = useState(true);
// 
  // function handleBooked() {
    // setAvailable((isAvailable) => !isAvailable);
  // }
// 
  return (
    <div className="max-w-sm overflow-hidden shadow-lg m-5 bg-main-blue-color rounded-2xl">
      <img className="rounded w-full h-[350px]" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="text-custom-gold-color font-bold text-xl mb-2">Venue name: {name}</div>
        <div className="text-custom-gold-color font-bold text-xl mb-2"> Venue price: {price}</div>
        <div className="text-custom-gold-color font-bold text-xl mb-2"> Description: {description}</div>
        {/* <p className="text-green-600 text-base"> */}
          {/* {description} */}
        {/* </p> */}
        </div>
        <div className="px-6 pt-4 pb-2">
        {/* <button className="border-[0px] rounded-full text-white primary px-8 py-2 mb-2 text-sm font-semibold bg-blue-500 hover:bg-green-500" onClick={handleBooked}> */}
          {/* CHANGE STATUS */}
         {/* </button> */}
        </div>
    </div>
  );
}

export default SingleVenueCard;
