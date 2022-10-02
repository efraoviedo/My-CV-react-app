import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import '../styles/LiveData.css';

function PersonData({
  skillHighlights,
  experiences,
  educations,
  onSubmit,
  addAttribute,
  deleteAttribute
}) {
  const { register, handleSubmit } = useForm();

  const container = 'CVInput my-5 me-3 border border-2 border-primary rounded-3';
  const containerTitle = 'CVI-container d-flex flex-column align-items-center';
  const addBtn = 'btn-add btn btn-primary btn-sm me-1';
  const deleteBtn = 'btn-delete btn btn-danger btn-sm';
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={container}>
      <section className={containerTitle}>
        <h3 className="CVI-title">Personal Details</h3>
        <input {...register('personalDetails.name')} type="text" placeholder="Name" />
        <input {...register('personalDetails.jobTitle')} type="text" placeholder="Job Title" />
        <input {...register('personalDetails.address')} type="text" placeholder="Address" />
        <input {...register('personalDetails.phone')} type="text" placeholder="Phone" />
        <input {...register('personalDetails.email')} type="text" placeholder="Email" />
        <input {...register('personalDetails.website')} type="text" placeholder="Website" />
        <div className="form-floating">
          <textarea
            {...register('personalDetails.summary')}
            className="form-control"
            placeholder="Summary"></textarea>
          <label htmlFor="floatingTextArea">Summary</label>
        </div>
      </section>

      <section className="CVI-container d-flex flex-column align-items-center">
        <h3 className="CVI-title">Skill Highlights</h3>
        {skillHighlights.map((sh, index) => (
          <input
            {...register(`skillHighlights.${index}`)}
            type="text"
            key={index}
            placeholder={`Skill Highlights ${index + 1}`}
          />
        ))}
        <div>
          <button type="button" className={addBtn} onClick={() => addAttribute('skillHighlights')}>
            Add
          </button>
          <button
            type="button"
            className={deleteBtn}
            onClick={() => deleteAttribute('skillHighlights')}>
            Delete
          </button>
        </div>
      </section>

      <section className="CVI-container d-flex flex-column align-items-center">
        <h3 className="CVI-title">Experiences</h3>
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <input
              {...register(`experiences.${index}.title`)}
              type="text"
              placeholder={`Title ${index + 1}`}
            />
            <input
              {...register(`experiences.${index}.description`)}
              type="text"
              placeholder={`Description ${index + 1}`}
            />
          </React.Fragment>
        ))}
        <div>
          <button
            type="button"
            className="btn-add btn btn-primary btn-sm me-1"
            onClick={() => addAttribute('experiences')}>
            Add
          </button>
          <button
            type="button"
            className="btn-delete btn btn-danger btn-sm"
            onClick={() => deleteAttribute('experiences')}>
            Delete
          </button>
        </div>
      </section>

      <section className="CVI-container d-flex flex-column align-items-center">
        <h3 className="CVI-title">Education</h3>
        {educations.map((educ, index) => (
          <React.Fragment key={index}>
            <input
              {...register(`educations.${index}.education`)}
              type="text"
              placeholder={`Education ${index + 1}`}
            />
            <input
              {...register(`educations.${index}.year`)}
              type="text"
              placeholder={`Year ${index + 1}`}
            />
          </React.Fragment>
        ))}
        <div>
          <button
            type="button"
            className="btn-add btn btn-primary btn-sm me-1"
            onClick={() => addAttribute('educations')}>
            Add
          </button>
          <button
            type="button"
            className="btn-delete btn btn-danger btn-sm"
            onClick={() => deleteAttribute('educations')}>
            Delete
          </button>
        </div>
      </section>

      <button type="submit" className="btn btn-primary align-self-end me-4 mb-4">
        Submit
      </button>
    </form>
  );
}

PersonData.propTypes = {
  skillHighlights: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addAttribute: PropTypes.func.isRequired,
  deleteAttribute: PropTypes.func.isRequired
};

export default PersonData;
