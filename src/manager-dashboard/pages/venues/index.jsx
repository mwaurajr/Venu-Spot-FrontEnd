import React from "react";
import { useState } from "react";
import { Pagination } from "react-bootstrap";

export default function MyVenues() {
const [activePage, setActivePage] = useState(1);
const itemsPerPage = 6;
const pages = Math.ceil(items.length / itemsPerPage);
const itemsOnCurrentPage = items.slice(
(activePage - 1) * itemsPerPage,
activePage * itemsPerPage
);

return (
<div className="content-wrapper">
<div className="content-header">
<div className="container-fluid">
<div className="row mb-2">
<div className="col-sm-6">
<h1 className="m-0">About</h1>
</div>
<div className="col-sm-6">
<ol className="breadcrumb float-sm-right">
<li className="breadcrumb-item">
<a href="#">Home</a>
</li>
<li className="breadcrumb-item active">About</li>
</ol>
</div>
</div>
</div>
</div>
<div className="content">
<div className="container-fluid">
<div className="row">
<div className="col-lg-12">
{itemsOnCurrentPage.map((item) => (
<div className="card" style={{ width: "18rem" }}>
<img
                 className="card-img-top"
                 src={item.imgSrc}
                 alt="Card image cap"
               />
<div className="card-body">
<p className="card-text">{item.text}</p>
</div>
</div>
))}
<Pagination
className="my-3"
activePage={activePage}
items={pages}
onSelect={(page) => setActivePage(page)}
/>
</div>
</div>
</div>
</div>
</div>
);
}

const items = [
{
imgSrc: "...",
text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
},
{
imgSrc: "...",
text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
},
{
imgSrc: "...",
text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
},
{
imgSrc: "...",
text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
},
{
imgSrc: "...",
text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
},
{
imgSrc: "...",
text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
},
// add more items as needed
];

