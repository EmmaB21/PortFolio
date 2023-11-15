// import React, { useState, useEffect } from "react";
import EditProjectForm from "../EditProjectForm/EditProjectForm";
import EditSkillForm from "../EditSkillForm/EditSkillForm";

const EditModal = ({ data, type, onClose,}) => {

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        {type === "project" && (
          <EditProjectForm projectData={data} />
        )}
        {type === "skill" && (
          <EditSkillForm skillData={data} />
        )}
        <button className="close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default EditModal;
