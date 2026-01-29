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
  Differential,
  SLUCAM,
  ORW,
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
  JobDescription,
  B,
} from "./Kit";
import { CV } from "./CV";
import { Name } from "./Name";
import data from "./resume.json";
import {
  SiAmazons3,
  SiAndroid,
  SiApollographql,
  SiArduino,
  SiCloudflare,
  SiDassaultsystemes,
  SiDigitalocean,
  SiExpo,
  SiExpress,
  SiFirst,
  SiGraphql,
  SiHeroku,
  SiIos,
  SiMakerbot,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiScratch,
  SiSequelize,
  SiStripe,
  SiStyledcomponents,
} from "@icons-pack/react-simple-icons";

const switchForIcon = (icon) => {
  const config = {
    size: 12,
    color: "#646464",
  };
  if (icon === "react") {
    return <SiReact {...config} />;
  }
  if (icon === "express") {
    return <SiExpress {...config} />;
  }
  if (icon === "mysql") {
    return <SiMysql {...config} />;
  }
  if (icon === "ios") {
    return <SiIos {...config} />;
  }
  if (icon === "s3") {
    return <SiAmazons3 {...config} />;
  }
  if (icon === "nodejs") {
    return <SiNodedotjs {...config} />;
  }
  if (icon === "graphql") {
    return <SiGraphql {...config} />;
  }
  if (icon === "apollographql") {
    return <SiApollographql {...config} />;
  }
  if (icon === "heroku") {
    return <SiHeroku {...config} />;
  }
  if (icon === "android") {
    return <SiAndroid {...config} />;
  }
  if (icon === "sequelize") {
    return <SiSequelize {...config} />;
  }
  if (icon === "expo") {
    return <SiExpo {...config} />;
  }
  if (icon === "nextjs") {
    return <SiNextdotjs {...config} />;
  }
  if (icon === "prisma") {
    return <SiPrisma {...config} />;
  }
  if (icon === "makerbot") {
    return <SiMakerbot {...config} />;
  }
  if (icon === "arduino") {
    return <SiArduino {...config} />;
  }
  if (icon === "digitalocean") {
    return <SiDigitalocean {...config} />;
  }
  if (icon === "cloudflare") {
    return <SiCloudflare {...config} />;
  }
  if (icon === "first") {
    return <SiFirst {...config} />;
  }
  if (icon === "solidworks") {
    return <SiDassaultsystemes {...config} />;
  }
  if (icon === "python") {
    return <SiPython {...config} />;
  }
  if (icon === "scratch") {
    return <SiScratch {...config} />;
  }
  if (icon === "styledcomponents") {
    return <SiStyledcomponents {...config} />;
  }
  if (icon === "stripe") {
    return <SiStripe {...config} />;
  }
  if (icon === "postgres") {
    return <SiPostgresql {...config} />;
  }
};

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

const App = () => {
  useEffect(() => {
    if (window.innerWidth < 780) {
      window.location.href = "/resume.pdf";
    }
  }, []);

  const f = (items) => {
    return items.filter((item) => (item.show === false ? false : true));
  };

  // Order by .sort key
  const o = (items) => {
    return items.sort((a, b) => {
      if (a.sort < b.sort) {
        return -1;
      }
      if (a.sort > b.sort) {
        return 1;
      }
      return 0;
    });
  };

  const [useLongText, setUseLongText] = useState(false);
  const [bulletPreference, setBulletPreference] = useState("bullet");
  return (
    <Page>
      {/* <CV /> */}
      <Name headerLinks={data.headerLinks} useLongText={useLongText} />
      {/* EDUCATION */}
      <>
        <Spacer />
        <Subtitle>Education</Subtitle>
        <Hr />
        {f(data.education).map((edu, i) => (
          <Row key={i}>
            <RowItem>
              <SansSubtitle>{edu.school}</SansSubtitle>
              <Label>{edu.location}</Label>
            </RowItem>
            <Label>{useLongText ? edu.degree : edu.shortDegree}</Label>
            <Date>{edu.date}</Date>
          </Row>
        ))}
      </>
      <Row align="flex-start" gap={10}>
        {/* SKILLS */}
        <div style={{ flex: 1 }}>
          <Spacer />
          <Subtitle>Skills</Subtitle>
          <Hr />
          <Row style={{ alignItems: "flex-start" }}>
            <SkillContainer>
              {o(f(data.skills))
                .slice(0, Math.ceil(data.skills.length / 2))
                .map((skill, i) => (
                  <Skills key={i}>
                    <SkillTitle>{skill.title}</SkillTitle>{" "}
                    <SkillDescription>
                      {skill.fields.join(", ")}
                    </SkillDescription>
                  </Skills>
                ))}
            </SkillContainer>
            <SkillContainer>
              {o(f(data.skills))
                .slice(Math.ceil(data.skills.length / 2))
                .map((skill, i) => (
                  <Skills key={i}>
                    <SkillTitle>{skill.title}</SkillTitle>{" "}
                    <SkillDescription>
                      {skill.fields.join(", ")}
                    </SkillDescription>
                  </Skills>
                ))}
            </SkillContainer>
          </Row>
        </div>
        {/* AWARDS */}
        <div style={{ maxWidth: "25%" }}>
          <Spacer />
          <Subtitle>Awards & Certifications</Subtitle>
          <Hr />
          <BodyText style={{ marginTop: 0 }}>
            {f(data.awards).map((award, i) => (
              <SkillTitle style={{ display: "block" }}>{award}</SkillTitle>
            ))}
          </BodyText>
        </div>
      </Row>
      {/* EXPERIENCE */}
      <>
        <Spacer />
        <Subtitle>Experience</Subtitle>
        <Hr />
        {f(data.experience).map((exp, i) => (
          <div key={i}>
            <Row>
              <RowItem>
                <SansSubtitle>
                  {exp.company} <JobDescription>{exp.position}</JobDescription>
                </SansSubtitle>
              </RowItem>
              <Date>{exp.date}</Date>
            </Row>
            {exp.projects &&
              exp.projects.map((proj, i) => (
                <BodyText
                  key={i}
                  style={{
                    marginTop:
                      bulletPreference === "bullet" ||
                      bulletPreference === "both"
                        ? 5
                        : 0,
                  }}
                >
                  {bulletPreference === "both" ||
                  bulletPreference === "bullet" ? (
                    <Row gap={5}>
                      <BodyText style={{ margin: 0 }}>
                        <B>{proj.title} </B>
                      </BodyText>
                      {proj?.icons?.map((icon, i) => (
                        <>{switchForIcon(icon)}</>
                      ))}
                      {/* <Hr
                        style={{
                          height: 2,
                          background:
                            "linear-gradient(270deg, transparent 0%, transparent 50px, rgb(170, 170, 170) 200px, rgb(170, 170, 170) 50%, rgb(170, 170, 170) 100%)",
                        }}
                      /> */}
                      <div style={{ flex: 1 }} />
                    </Row>
                  ) : (
                    ""
                  )}
                  <Row
                    gap={bulletPreference === "both" ? 10 : 0}
                    align={"flex-start"}
                  >
                    <BodyText
                      style={{
                        width: bulletPreference === "both" ? "50%" : null,
                      }}
                    >
                      {bulletPreference === "bullet" ||
                      bulletPreference === "both" ? (
                        <BodyText style={{ marginTop: 0 }}>
                          {proj.bullets.map((bullet, i) => (
                            <SkillTitle key={i} style={{ display: "block" }}>
                              {bullet}
                            </SkillTitle>
                          ))}
                        </BodyText>
                      ) : (
                        ""
                      )}
                    </BodyText>
                    <BodyText
                      style={{
                        width: bulletPreference === "both" ? "50%" : null,
                      }}
                    >
                      {bulletPreference === "text" ||
                      bulletPreference === "both" ? (
                        <>
                          <B>
                            {bulletPreference === "text"
                              ? proj.title + " - "
                              : ""}
                          </B>
                          <BodyText style={{ textAlign: "justify", margin: 0 }}>
                            {proj.description}
                          </BodyText>
                        </>
                      ) : (
                        ""
                      )}
                    </BodyText>
                  </Row>
                </BodyText>
              ))}
            <Spacer />
          </div>
        ))}
      </>
      {/* PROJECTS */}
      <>
        <Spacer />
        <Subtitle>Passion Projects</Subtitle>
        <Hr />
        {f(data.projects).map((project, i) => (
          <>
            <Row gap={5}>
              <RowItem>
                <SansSubtitle>{project.title}</SansSubtitle>
                {project?.icons?.map((icon) => {
                  return switchForIcon(icon);
                })}
                {project?.links?.map((link) => (
                  <BodyText style={{ margin: 0 }}>
                    [ <A href={link.href}>{link.text}</A> ]
                  </BodyText>
                ))}
              </RowItem>
              <Date>{project.date}</Date>
            </Row>
            <Row
              gap={bulletPreference === "both" ? 10 : 0}
              align={"flex-start"}
            >
              <BodyText
                style={{
                  width: bulletPreference === "both" ? "50%" : null,
                }}
              >
                {bulletPreference === "both" ||
                bulletPreference === "bullet" ? (
                  <BodyText style={{ marginTop: 0 }}>
                    {project.bullets.map((bullet, i) => (
                      <SkillTitle key={i} style={{ display: "block" }}>
                        {bullet}
                      </SkillTitle>
                    ))}
                  </BodyText>
                ) : (
                  <></>
                )}
              </BodyText>
              <BodyText
                style={{
                  width: bulletPreference === "both" ? "50%" : null,
                }}
              >
                {bulletPreference === "both" || bulletPreference === "text" ? (
                  <BodyText style={{ marginTop: 0, textAlign: "justify" }}>
                    {project.description}
                  </BodyText>
                ) : (
                  <></>
                )}
              </BodyText>
            </Row>
            <Spacer />
          </>
        ))}
      </>
      {/* PROJECTS */}
      <>
        <Spacer />
        <Subtitle>Publications</Subtitle>
        <Hr />
        {data.publications.map((pub, i) => (
          <>
            <Row gap={5}>
              <RowItem>
                <SansSubtitle>{pub.title}</SansSubtitle>
                {pub?.icons?.map((icon) => {
                  return switchForIcon(icon);
                })}
                {pub?.links?.map((link) => (
                  <BodyText style={{ margin: 0 }}>
                    [ <A href={link.href}>{link.text}</A> ]
                  </BodyText>
                ))}
              </RowItem>
              <Date>{pub.date}</Date>
            </Row>
            <Row
              gap={bulletPreference === "both" ? 10 : 0}
              align={"flex-start"}
            >
              <BodyText
                style={{
                  width: bulletPreference === "both" ? "50%" : null,
                }}
              >
                <BodyText style={{ marginTop: 0, textAlign: "justify" }}>
                  {pub.description}
                </BodyText>
              </BodyText>
            </Row>
            <Spacer />
          </>
        ))}
      </>
      <Hr />
      <BodyText style={{ textAlign: "center", fontStyle: "italic" }}>
        This resume has been truncated for brevity and relevance. You can access
        my full general resume at{" "}
        <A href="https://resume.jackcrane.rocks">resume.jackcrane.rocks</A>
      </BodyText>
      <Spacer />
    </Page>
  );
};

export default App;
