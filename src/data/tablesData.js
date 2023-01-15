 //Define default columns
 export const defaultColumns = [
    {
      dataField: "id",
      text: "Venue ID",
      sort: true
    },
    {
      dataField: "name",
      text: "Venue Name",
      sort: true
    },
    {
      dataField: "price",
      text: "Booking/Rental Price",
      sort: false
    },
  ];

  //Define default data
  export const defaultData = [
        {id: 0, name: "Kisumu Gardens", price: 2100},
        {id: 1, name: "LakeView Terrace", price: 2100},
        {id: 2, name: "Mombasa Villa", price: 2100},
        {id: 3, name: "Sagana Ranch", price: 2100},
     
    ];
  
//Define default columns for the users table
export const defaultUsersColumns = [
    {
      dataField: "id",
      text: "User ID",
      sort: true
    },
    {
      dataField: "username",
      text: "Username",
      sort: true
    },
    {
      dataField: "online",
      text: "Online",
      sort: false
    },
  ];

  //Define default data for the users table
  export const defaultUsersData = [
      {id: 0, username: "JohnDoel_001", online: true },
      {id: 1, username: "JohnDoel_002", online: false },
      {id: 2, username: "JohnDoel_003", online: true },
      {id: 3, username: "JohnDoel_004", online: false },
      {id: 4, username: "JohnDoel_005", online: true },
      {id: 5, username: "JohnDoel_006", online: true },
      {id: 6, username: "JohnDoel_007", online: true },
      {id: 7, username: "JohnDoel_008", online: false },
      {id: 8, username: "JohnDoel_009", online: true },
      {id: 9, username: "JohnDoel_010", online: true },
  ]
