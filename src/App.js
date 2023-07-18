import "./App.css";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from "react";
import { useEffect } from "react";
import {
  Ispace,
  Perfect,
  AdventureCrew,
  Myers,
  OgImage,
  AppleMusicPresence,
  DigitalOceanController,
  OneWheel,
  Robotics,
} from "./Experiences";
import {
  AdminRowContainer,
  Row,
  Modal,
  Title,
  Hr,
  Subtitle,
  RowItem,
  Spacer,
  Page,
  SansSubtitle,
  Label,
  Date,
  Column,
  Skills,
  SkillTitle,
  SkillDescription,
  BodyText,
  A,
  SkillContainer,
} from "./Kit";
import { CV } from "./CV";
import { Name } from "./Name";

const AdminRow = ({ value, onChange, label }) => {
  const inputRef = useRef(null);
  return (
    <AdminRowContainer
      onClick={() => onChange({ target: { checked: !value } })}
      selected={value}
    >
      <Row>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          ref={inputRef}
        />
        <span>{label}</span>
      </Row>
    </AdminRowContainer>
  );
};

const Admin = ({
  selections: _selections,
  setSelections: _setSelections,
  setAdminOpen: _setAdminOpen,
}) => {
  const [adminOpen, setAdminOpen] = useState(false);
  useEffect(() => {
    _setAdminOpen(adminOpen);
  }, [adminOpen]);
  const toggleAdmin = () => setAdminOpen(!adminOpen);
  useHotkeys("a", toggleAdmin, { filterPreventDefault: true }, [adminOpen]);
  const [selections, setSelections] = useState(_selections);
  const setSelection = (selection) => {
    return (e) => {
      const value = e.target.checked;
      if (value) {
        setSelections([...selections, selection]);
      }
      if (!value) {
        setSelections(selections.filter((s) => s !== selection));
      }
    };
  };
  useEffect(() => {
    if (adminOpen) {
      _setSelections(selections);
    }
  }, [selections]);

  if (!adminOpen) return <></>;
  return (
    <Modal>
      <Title>Resume Configurator</Title>
      <BodyText>Press "a" to close</BodyText>
      <Hr />
      <Subtitle>Primatives</Subtitle>
      <AdminRow
        label="CV"
        value={selections.includes("primatives/cv")}
        onChange={setSelection("primatives/cv")}
      />
      <AdminRow
        label="Education"
        value={selections.includes("primatives/education")}
        onChange={setSelection("primatives/education")}
      />
      <AdminRow
        label="Skills"
        value={selections.includes("primatives/skills")}
        onChange={setSelection("primatives/skills")}
      />
      <AdminRow
        label="Experience"
        value={selections.includes("primatives/experience")}
        onChange={setSelection("primatives/experience")}
      />
      <AdminRow
        label="Projects"
        value={selections.includes("primatives/projects")}
        onChange={setSelection("primatives/projects")}
      />
      <AdminRow
        label="Truncation Notice"
        value={selections.includes("primatives/truncation")}
        onChange={setSelection("primatives/truncation")}
      />
      <Subtitle>Education</Subtitle>
      <AdminRow
        label="College"
        value={selections.includes("education/college")}
        onChange={setSelection("education/college")}
      />
      <AdminRow
        label="High School"
        value={selections.includes("education/high-school")}
        onChange={setSelection("education/high-school")}
      />
      <Subtitle>Skills</Subtitle>
      <AdminRow
        label="UI Design/Graphic Design"
        value={selections.includes("skills/ui-design")}
        onChange={setSelection("skills/ui-design")}
      />
      <AdminRow
        label="Software Development (Frontend)"
        value={selections.includes("skills/software-development-frontend")}
        onChange={setSelection("skills/software-development-frontend")}
      />
      <AdminRow
        label="Software Development (Backend)"
        value={selections.includes("skills/software-development-backend")}
        onChange={setSelection("skills/software-development-backend")}
      />
      <AdminRow
        label="Software Development (Native)"
        value={selections.includes("skills/software-development-native")}
        onChange={setSelection("skills/software-development-native")}
      />
      <AdminRow
        label="Data"
        value={selections.includes("skills/data")}
        onChange={setSelection("skills/data")}
      />
      <AdminRow
        label="Developer Ops"
        value={selections.includes("skills/developer-ops")}
        onChange={setSelection("skills/developer-ops")}
      />
      <AdminRow
        label="Embedded Computing"
        value={selections.includes("skills/embedded-computing")}
        onChange={setSelection("skills/embedded-computing")}
      />
      <AdminRow
        label="Fabrication"
        value={selections.includes("skills/fabrication")}
        onChange={setSelection("skills/fabrication")}
      />
      <AdminRow
        label="3D Modelling"
        value={selections.includes("skills/3d-modelling")}
        onChange={setSelection("skills/3d-modelling")}
      />
      <Subtitle>Experience</Subtitle>
      <AdminRow
        label="Ispace"
        value={selections.includes("experience/ispace")}
        onChange={setSelection("experience/ispace")}
      />
      <AdminRow
        label="Perfect"
        value={selections.includes("experience/perfect")}
        onChange={setSelection("experience/perfect")}
      />
      <AdminRow
        label="Adventure Crew"
        value={selections.includes("experience/adventure-crew")}
        onChange={setSelection("experience/adventure-crew")}
      />
      <AdminRow
        label="Myers"
        value={selections.includes("experience/myers")}
        onChange={setSelection("experience/myers")}
      />
      <Subtitle>Projects</Subtitle>
      <AdminRow
        label="OgImage"
        value={selections.includes("projects/og-image")}
        onChange={setSelection("projects/og-image")}
      />
      <AdminRow
        label="Apple Music Presence"
        value={selections.includes("projects/apple-music-presence")}
        onChange={setSelection("projects/apple-music-presence")}
      />
      <AdminRow
        label="DigitalOcean Controller"
        value={selections.includes("projects/digitalocean-controller")}
        onChange={setSelection("projects/digitalocean-controller")}
      />
      <AdminRow
        label="OneWheel"
        value={selections.includes("projects/onewheel")}
        onChange={setSelection("projects/onewheel")}
      />
      <AdminRow
        label="Robotics"
        value={selections.includes("projects/robotics")}
        onChange={setSelection("projects/robotics")}
      />
    </Modal>
  );
};

function App() {
  const [selections, setSelections] = useState([
    "primatives/cv",
    "primatives/education",
    "primatives/skills",
    "primatives/experience",
    "primatives/projects",
    "primatives/truncation",

    "skills/ui-design",
    "skills/software-development-frontend",
    "skills/software-development-backend",
    "skills/software-development-native",
    "skills/data",
    "skills/developer-ops",
    "skills/embedded-computing",
    "skills/fabrication",
    "skills/3d-modelling",

    "education/high-school",
    "education/college",

    "experience/ispace",
    "experience/perfect",
    "experience/adventure-crew",
    "experience/myers",

    "projects/og-image",
    "projects/apple-music-presence",
    "projects/digitalocean-controller",
    "projects/onewheel",
    "projects/robotics",
  ]);
  const match = (path) => selections.includes(path);
  const [adminOpen, setAdminOpen] = useState(false);
  return (
    <Page adminOpen={adminOpen}>
      <Admin
        selections={selections}
        setSelections={setSelections}
        setAdminOpen={setAdminOpen}
      />
      {match("primatives/cv") && <CV />}
      <Name />
      {match("primatives/education") && (
        <>
          {/* EDUCATION */}
          <Spacer />
          <Subtitle>Education</Subtitle>
          <Hr />
          {match("education/college") && (
            <Row>
              <RowItem>
                <SansSubtitle>Saint Louis University</SansSubtitle>
                <Label>St. Louis, Missouri</Label>
              </RowItem>
              <Label>B.S. Mechanical Engineering & Computer Science</Label>
              <Date>May 2026</Date>
            </Row>
          )}
          {match("education/high-school") && (
            <Row>
              <RowItem>
                <SansSubtitle>Summit Country Day School</SansSubtitle>
                <Label>Cincinnati, Ohio</Label>
              </RowItem>
              <Label>High School Diploma</Label>
              <Date>May 2022</Date>
            </Row>
          )}
        </>
      )}
      {match("primatives/skills") && (
        <>
          {/* SKILLS */}
          <Spacer />
          <Subtitle>Skills</Subtitle>
          <Hr />
          <Row style={{ alignItems: "flex-start" }}>
            <SkillContainer>
              {match("skills/ui-design") && (
                <SkillTitle>
                  UI Design/graphic design{" "}
                  <SkillDescription>Figma</SkillDescription>
                </SkillTitle>
              )}
              {match("skills/software-development-frontend") && (
                <SkillTitle>
                  Frontend software development{" "}
                  <SkillDescription>React, HTML, CSS, JS</SkillDescription>
                </SkillTitle>
              )}
              {match("skills/software-development-backend") && (
                <SkillTitle>
                  Backend software development{" "}
                  <SkillDescription>Node.js, Express, PHP</SkillDescription>
                </SkillTitle>
              )}
              {match("skills/software-development-native") && (
                <SkillTitle>
                  Native software development{" "}
                  <SkillDescription>React Native (Expo)</SkillDescription>
                </SkillTitle>
              )}
              {match("skills/data") && (
                <SkillTitle>
                  Data{" "}
                  <SkillDescription>
                    Matlab, Python, MySQL, MongoDB, Prisma
                  </SkillDescription>
                </SkillTitle>
              )}
              {match("skills/developer-ops") && (
                <SkillTitle>
                  Developer Ops{" "}
                  <SkillDescription>
                    Git, Github, Kubernetes, Jira
                  </SkillDescription>
                </SkillTitle>
              )}
              {match("skills/embedded-computing") && (
                <SkillTitle>
                  Embedded Computing{" "}
                  <SkillDescription>Arduino, Raspberry Pi</SkillDescription>
                </SkillTitle>
              )}
              {match("skills/3d-modelling") && (
                <SkillTitle>
                  3D Modelling{" "}
                  <SkillDescription>
                    Rhinocerous, OnShape, Solidworks
                  </SkillDescription>
                </SkillTitle>
              )}
              {match("skills/fabrication") && (
                <SkillTitle>
                  Fabrication{" "}
                  <SkillDescription>
                    Makerbot ecosystem, Cura, Prusa Slicer, Glowforge, SLA & FDM
                    Technologies
                  </SkillDescription>
                </SkillTitle>
              )}
            </SkillContainer>
          </Row>
        </>
      )}
      {match("primatives/experience") && (
        <>
          {/* EXPERIENCE */}
          <Spacer />
          <Subtitle>Experience</Subtitle>
          <Hr />
          {match("experience/ispace") && (
            <>
              <Ispace />
              <Spacer />
            </>
          )}
          {match("experience/perfect") && (
            <>
              <Perfect />
              <Spacer />
            </>
          )}
          {match("experience/adventure-crew") && (
            <>
              <AdventureCrew />
              <Spacer />
            </>
          )}
          {match("experience/myers") && (
            <>
              <Myers />
              <Spacer />
            </>
          )}
        </>
      )}
      {match("primatives/projects") && (
        <>
          {/* PROJECTS */}
          <Spacer />
          <Subtitle>Projects</Subtitle>
          <Hr />
          {match("projects/og-image") && (
            <>
              <OgImage />
              <Spacer />
            </>
          )}
          {match("projects/apple-music-presence") && (
            <>
              <AppleMusicPresence />
              <Spacer />
            </>
          )}
          {match("projects/digitalocean-controller") && (
            <>
              <DigitalOceanController />
              <Spacer />
            </>
          )}
          {match("projects/onewheel") && (
            <>
              <OneWheel />
              <Spacer />
            </>
          )}
          {match("projects/robotics") && (
            <>
              <Robotics />
              <Spacer />
            </>
          )}
        </>
      )}
      {/* TRUNCATION */}
      {match("primatives/truncation") && (
        <>
          <Spacer />
          <Hr />
          <Spacer />
          <BodyText style={{ textAlign: "center", fontStyle: "italic" }}>
            This resume has been truncated for brevity and relevance. You can
            access my full general resume at{" "}
            <A href="https://resume.jackcrane.rocks">resume.jackcrane.rocks</A>
          </BodyText>
        </>
      )}
    </Page>
  );
}

export default App;
