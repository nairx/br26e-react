import React from "react";
export default function StudentCard({ student }) {
  return (
    <div className="border w-[300px] m-3 p-3 border-gray-500" key={student.id}>
      <img src={student.imgUrl} alt={student.imgUrl} />
      <h3>Name:{student.name}</h3>
      <h4>Skill:{student.skill}</h4>
      <h5>Location:{student.location}</h5>
    </div>
  );
}
