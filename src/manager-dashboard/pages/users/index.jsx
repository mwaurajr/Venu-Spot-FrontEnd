import { useState, useEffect } from 'react';

function Users() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/clients")
      .then(response => response.json())
      .then(data => {
        setClients(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {clients.map(client => (
          <div className="col-md-4" key={client.username}>
            <div className="card">
              <img
                className="card-img-top"
                src={client.image}
                alt={client.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {client.name}
                  <br />
                  {client.username}
                  <br />
                  {client.age}
                  <br />
                  {client.booking_id}
                </h5>
                <a href={`/clients/${client.username}`} className="btn btn-primary">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
