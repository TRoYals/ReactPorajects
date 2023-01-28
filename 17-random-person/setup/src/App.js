import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaSketch,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(defaultImage);
  const [person, setPerson] = useState(null);
  const [text, setText] = useState("random person");
  const [value, setValue] = useState("...");

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { first, last } = person.name;
    const { email } = person;
    const { large: image } = person.picture;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const { phone } = person;
    const newPerson = {
      name: `${first} ${last}`,
      email,
      image,
      age,
      location: `${number} ${name}`,
      phone,
      password: "private",
    };
    setPhoto(image);
    setPerson(newPerson);
    setLoading(false);
  };

  useEffect(() => getPerson, []);
  const handleOver = (e) => {
    if (e.target.classList.contains("icon")) {
      const newText = e.target.dataset.label;
      setText(newText);
      setValue(person[newText]);
    }
  };
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={photo} alt="" />
          <p className="user-title">{text}</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleOver}>
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleOver}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleOver}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="location"
              onMouseOver={handleOver}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleOver}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleOver}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" onClick={getPerson}>
            Random person
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
