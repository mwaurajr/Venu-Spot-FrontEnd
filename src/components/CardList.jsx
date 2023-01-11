import SingleVenueCard from "./SingleVenueCard";

const venues = [
    {
      "id": 1,
      "name": "Venue Arena",
      "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "description": "this is the description"
    },
    {
      "id": 2,
      "name": "Venue Arena 2",
      "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "description": "this is the description"
    },
    {
      "id": 3,
      "name": "Venue Arena 3",
      "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
      "price": "434",
      "description": "this is the description"
    }
  ]

const CardList = () => (
    <>
    <h1 className='text-bold text-3xl pl-3 pt-10 text-blue-500'>Our Venues</h1>
    <ul className="cards">
      {venues.map((venue) => {
        return <SingleVenueCard key={venue.id} venue={venue} />;
      })}
    </ul>
  </>
);

export default CardList
