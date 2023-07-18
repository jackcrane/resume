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

    "education/high-school",
    "education/college",
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
            <Column>
              <Skills>
                <SkillTitle>
                  UI Design/graphic design{" "}
                  <SkillDescription>Figma</SkillDescription>
                </SkillTitle>
                <SkillTitle>
                  Software Development
                  <Skills>
                    <SkillTitle>
                      Frontend{" "}
                      <SkillDescription>React, HTML, CSS, JS</SkillDescription>
                    </SkillTitle>
                    <SkillTitle>
                      Backend{" "}
                      <SkillDescription>Node.js, Express, PHP</SkillDescription>
                    </SkillTitle>
                    <SkillTitle>
                      Native{" "}
                      <SkillDescription>React Native (Expo)</SkillDescription>
                    </SkillTitle>
                  </Skills>
                </SkillTitle>
                <SkillTitle>
                  Data{" "}
                  <SkillDescription>
                    Matlab, Python, MySQL, MongoDB, Prisma
                  </SkillDescription>
                </SkillTitle>
              </Skills>
            </Column>
            <Column>
              <Skills>
                <SkillTitle>
                  Developer Ops{" "}
                  <SkillDescription>
                    Git, Github, Kubernetes, Jira
                  </SkillDescription>
                </SkillTitle>
                <SkillTitle>
                  Embedded Computing{" "}
                  <SkillDescription>Arduino, Raspberry Pi</SkillDescription>
                </SkillTitle>
                <SkillTitle>
                  Fabrication{" "}
                  <SkillDescription>
                    Makerbot ecosystem, Cura, Prusa Slicer, Glowforge, SLA & FDM
                    Technologies
                  </SkillDescription>
                </SkillTitle>
                <SkillTitle>
                  3D Modelling{" "}
                  <SkillDescription>
                    Rhinocerous, OnShape, Solidworks
                  </SkillDescription>
                </SkillTitle>
              </Skills>
            </Column>
          </Row>
        </>
      )}
      {match("primatives/experience") && (
        <>
          {/* EXPERIENCE */}
          <Spacer />
          <Subtitle>Experience</Subtitle>
          <Hr />
          <Ispace />
          <Spacer />
          <Perfect />
          <Spacer />
          <AdventureCrew />
          <Spacer />
          <Myers />
        </>
      )}
      {match("primatives/projects") && (
        <>
          {/* PROJECTS */}
          <Spacer />
          <Subtitle>Projects</Subtitle>
          <Hr />
          <OgImage />
          <Spacer />
          <AppleMusicPresence />
          <Spacer />
          <DigitalOceanController />
          <Spacer />
          <OneWheel />
          <Spacer />
          <Robotics />
          <Spacer />
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
