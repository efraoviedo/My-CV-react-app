import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PersonData from "./components/PersonData";
import LiveData from "./components/LiveData.js";

function App() {
  let [isPrintCV, setIsPrintCV] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    summary: "",
  });
  const [skillHighlights, setSkillHighlights] = useState(["", "", ""]);
  const [experiences, setExperiences] = useState([
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" },
  ]);
  const [educations, setEducations] = useState([
    { education: "", year: "" },
    { education: "", year: "" },
    { education: "", year: "" },
  ]);

  const handleSubmit = (values) => {
    setPersonalDetails(values.personalDetails);
    setSkillHighlights(
      values.skillHighlights.filter(
        (skill, index) => index < skillHighlights.length
      )
    );
    setExperiences(
      values.experiences.filter((exp, index) => index < experiences.length)
    );
    setEducations(
      values.educations.filter((educ, index) => index < educations.length)
    );

    setIsPrintCV(true);
  };

  const addAttribute = (attribute) => {
    switch (attribute) {
      case "skillHighlights":
        setSkillHighlights([...skillHighlights, ""]);
        break;
      case "experiences":
        setExperiences([...experiences, { title: "", value: "" }]);
        break;
      case "educations":
        setEducations([...educations, { educ: "", year: "" }]);
        break;
      default:
        console.warn("addAttribute wrong attribute:", attribute);
    }
  };

  const deleteAttribute = (attribute) => {
    switch (attribute) {
      case "skillHighlights":
        setSkillHighlights(
          skillHighlights.filter(
            (val, index) => index !== skillHighlights.length - 1
          )
        );
        break;
      case "experiences":
        setExperiences(
          experiences.filter((val, index) => index !== experiences.length - 1)
        );
        break;
      case "educations":
        setEducations(
          educations.filter((val, index) => index !== educations.length - 1)
        );
        break;
      default:
        console.warn("deleteAttribute wrong attribute:", attribute);
    }
  };

  return (
    <>
      <Header />
      <main className="container d-flex">
        <PersonData
          personalDetails={personalDetails}
          skillHighlights={skillHighlights}
          experiences={experiences}
          educations={educations}
          onSubmit={handleSubmit}
          addAttribute={addAttribute}
          deleteAttribute={deleteAttribute}
        />
        {isPrintCV ? (
          <LiveData
            personalDetails={personalDetails}
            skillHighlights={skillHighlights}
            experiences={experiences}
            educations={educations}
          />
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default App;
