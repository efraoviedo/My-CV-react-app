import React from "react";
import PropTypes from "prop-types";
import "../styles/Person.css";

function LiveData({
  personalDetails,
  skillHighlights,
  experiences,
  educations,
}) {
  return (
    <section className="CVOutput my-5 ms-3 shadow-sm rounded-3">
      <div className="details">
        <div className="personal-info">
          <h4 className="name">{personalDetails.name}</h4>
          <p className="job-title">{personalDetails.jobTitle}</p>
        </div>

        <p className="badge">Contact</p>
        <div>
          <h5 className="title">Address</h5>
          <hr />
          <p className="details-item">{personalDetails.address}</p>
        </div>
        <div>
          <h5 className="title">Phone</h5>
          <hr />
          <p className="details-item">{personalDetails.phone}</p>
        </div>
        <div>
          <h5 className="title">Email</h5>
          <hr />
          <p className="details-item">{personalDetails.email}</p>
        </div>
        <div>
          <h5 className="title">Website</h5>
          <hr />
          <p className="details-item">{personalDetails.website}</p>
        </div>
      </div>

      <div className="info">
        <div>
          <h4 className="title">Summary</h4>
          <hr />
          <p className="summary">{personalDetails.summary}</p>
        </div>
        <div>
          <h4 className="title">Skill Highlights</h4>
          <hr />
          <ul>
            {skillHighlights.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="title">Experiences</h4>
          <hr />
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              <h5 className="title">{exp.title}</h5>
              <p className="description">{exp.description}</p>
            </React.Fragment>
          ))}
        </div>
        <div>
          <h4 className="title">Education</h4>
          <hr />
          {educations.map((educ, index) => (
            <div className="d-flex m-0 justify-content-between" key={index}>
              <p className="education">{educ.education}</p>
              <p className="education-year text-danger">{educ.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

LiveData.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  skillHighlights: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
};

export default LiveData;
