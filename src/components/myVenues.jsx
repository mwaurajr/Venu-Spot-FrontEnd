import { useState, useEffect } from 'react';
import { Pagination } from "react-bootstrap";

const MyVenues = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const imagesPerPage = 5;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setImages(data);
    };
    fetchData();
  }, []);


  return (
    <div className="container">
      <div className="row">
        {currentImages.map((image) => (
          <div className="col-md-4 mb-4" key={image.id}>
            <div className="card h-100">
              <img src={image.imgLink} className="card-img-top" alt={image.title} />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.description}</p>
                <p className="card-text">{image.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        className="my-4"
        activePage={currentPage}
        itemsCountPerPage={imagesPerPage}
        totalItemsCount={images.length}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default MyVenues;
