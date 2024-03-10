import React from "react";
import "../App.css";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, category }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{category}</p>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;
