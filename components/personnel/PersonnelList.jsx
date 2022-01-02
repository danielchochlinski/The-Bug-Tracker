import Box from "../ui/Box";
import classes from "./PersonnelList.module.css";
import PersonnelCard from "./PersonnelCard";
import { Fragment, useState, useEffect } from "react";
import AddPersonnelForm from "./AddPersonnelForm";
import Image from "next/image";

function PersonnelList() {
  const [showAddPersonnel, setShowAddPersonnel] = useState(false);
  const [personnel, setPersonnel] = useState([]);

  const addPersonnelHaandler = () => {
    setShowAddPersonnel(true);
  };
  const hideAddPersonnelHandler = () => {
    setShowAddPersonnel(false);
  };

  async function addPersonnelHandler(enteredPersonnelData) {
    const response = await fetch("/api/postPersonnel", {
      method: "POST",
      body: JSON.stringify(enteredPersonnelData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setShowAddPersonnel(false);
  }

  useEffect(() => {
    async function fetchPersonnel() {
      const response = await fetch("/api/fetchPersonnel");
      const data = await response.json();
      setPersonnel(data);
    }
    fetchPersonnel();
  }, []);
  console.log(personnel);

  return (
    <Fragment>
      <Box>
        <header className={classes.header}>
          <h1>Personnel</h1>
        </header>
         <div className={classes.box}>
        {personnel.map((person) => (
         
            <PersonnelCard
              key={person.id}
              image={person.image}
              name={person.name}
              title={person.title}
              description={person.description}
              languages={person.languages}
            />
        ))}
        </div>
        <div>
          <button onClick={addPersonnelHaandler}>Add Personel</button>
        </div>
      </Box>
      {showAddPersonnel && (
        <AddPersonnelForm
          onClose={hideAddPersonnelHandler}
          onAddPersonnel={addPersonnelHandler}
        />
      )}
    </Fragment>
  );
}
export default PersonnelList;
