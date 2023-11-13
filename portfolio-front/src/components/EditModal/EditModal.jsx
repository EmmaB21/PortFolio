import React, { useState, useEffect } from "react";
import EditProjectForm from "./EditProjectForm/EditProjectForm";
import EditSkillForm from "./EditSkillForm/EditSkillForm";

const EditModal = ({ data, mode, onClose, onDeleteProject, onUpdateProject, onUpdateSkill, onDeleteSkill }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (mode === "edit") {
      // Pré-remplir le formulaire avec les données existantes
      setFormData(data);
    }
  }, [data, mode]);

  const handleEdit = () => {
    // En fonction du type (project ou skill), appeler la fonction onUpdate
    if (data.type === "project") {
      onUpdateProject(formData, data.id);
    } else if (data.type === "skill") {
      // Appeler la fonction correspondante pour la mise à jour des compétences
      onUpdateSkill(formData, data.id);
    }
    onClose();
  };

  const handleDelete = async () => {
  // En fonction du type (project ou skill), appeler la fonction onDelete
  if (data.type === "project") {
    onDeleteProject(formData, data.id);
  } else if (data.type === "skill") {
    // Appeler la fonction correspondante pour la mise à jour des compétences
    onDeleteSkill(formData, data.id);
  }
    onClose();
  };

  return (
    <div className="edit-modal">
      {mode === "edit" && (
        <>
          {data.type === "project" && (
            <EditProjectForm formData={formData} onChange={setFormData} />
          )}
          {data.type === "skill" && (
            <EditSkillForm formData={formData} onChange={setFormData} />
          )}
           <button onClick={handleEdit}>Enregistrer</button>
        </>
      )}
      {mode === "delete" && (
        <>
          <p>
            {data.type === "project"
              ? "Voulez-vous vraiment supprimer ce projet ?"
              : "Voulez-vous vraiment supprimer cette compétence ?"}
          </p>
          <button onClick={handleDelete}>Confirmer</button>
        </>
      )}
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default EditModal;
