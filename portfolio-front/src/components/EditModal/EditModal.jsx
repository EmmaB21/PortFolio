import EditProjectForm from "../EditProjectForm/EditProjectForm";
import EditSkillForm from "../EditSkillForm/EditSkillForm";

const EditModal = ({ data, type, onClose, updateProjects, updateSkills}) => {

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        {type === "project" && (
          <EditProjectForm 
          projectData={data}
          updateProjects={updateProjects} />
        )}
        {type === "skill" && (
          <EditSkillForm skillData={data}
          updateSkills={updateSkills} />
        )}
        <button className="close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default EditModal;