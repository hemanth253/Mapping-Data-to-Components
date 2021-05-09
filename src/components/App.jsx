import React from "react";

import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";

const createCard = function (contact) {
  return <Card details={contact} key={contact.id} />;
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
