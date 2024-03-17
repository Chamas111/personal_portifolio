import React from "react";
import "../App.css";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, category, linkto }) => {
  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <a href={linkto}>
            <img src={imgUrl} />

            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <p>{category}</p>
            </div>
          </a>
        </div>
      </Col>
    </>
  );
};
export default ProjectCard;
