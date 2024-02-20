import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import "../sobremim.css";
import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaServer,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { MdOutlineDraw } from "react-icons/md";
import { Container, ProgressBar, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
function Servicos() {
  const servicosData = [
    {
      titulo: "Frontend",
      icon: CgWebsite,
      default: true,
      servicos: [
        {
          titulo: "HTML",
          porcentagem: 80,
          icon: FaHtml5,
        },
        {
          titulo: "CSS",
          porcentagem: 75,
          icon: FaCss3,
        },
        {
          titulo: "JavaScript",
          porcentagem: 69,
          icon: FaJs,
        },
        {
          titulo: "React",
          porcentagem: 30,
          icon: FaReact,
        },
      ],
    },
    {
      titulo: "Backend",
      icon: FaServer,
      default: false,
      servicos: [
        {
          titulo: "Python",
          porcentagem: 20,
          icon: FaPython,
        },
        {
          titulo: "NodeJS",
          porcentagem: 50,
          icon: FaNodeJs,
        },
      ],
    },
    {
      titulo: "Design",
      icon: MdOutlineDraw,
      servicos: [
        {
          titulo: "Photoshop",
          porcentagem: 65,
          icon: SiAdobephotoshop,
        },
        {
          titulo: "Figma",
          porcentagem: 70,
          icon: FaFigma,
        },
      ],
    },
  ];
  return (
    <Container>
      <h1 className="text-center" style={{ color: "white" }}>
        Habilidades
      </h1>{" "}
      {servicosData.map((item, i) => {
        return (
          <Stack gap={3} className="bg-white">
            <Accordion
              defaultActiveKey="0"
              style={{ backgroundColor: "transparent", color: "black" }}
            >
              {React.createElement(
                item.icon,
                { size: 25 },
                { className: "m-0 p-0 bg-transparent" }
              )}
              <Accordion.Header>{item.titulo}</Accordion.Header>
              {item.servicos.map((subitem, subi) => {
                return (
                  <div className="mb-5">
                    <Accordion.Body>
                      <ProgressBar
                        now={subitem.porcentagem}
                        label={`${subitem.porcentagem}%`}
                      />
                      <h6>{subitem.titulo}</h6>
                      {React.createElement(subitem.icon, { size: 25 })}
                    </Accordion.Body>
                  </div>
                );
              })}
            </Accordion>
          </Stack>
        );
      })}
    </Container>
  );
}

export default Servicos;
