import styled from "styled-components";
import "./App.css";

const Page = styled.div``;
const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 32pt;
  font-weight: 900;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RowImage = styled.img`
  width: 12pt;
  height: 12pt;
`;

const RowLink = styled.a`
  color: inherit;
  font-size: 10pt;
  text-decoration-color: #646464;
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5pt;
`;

const Subtitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 20pt;
  font-weight: 900;
  margin: 0;
`;

const Spacer = styled.div`
  height: 10pt;
`;

const Hr = styled.hr`
  border: 0;
  height: 3px;
  background: #646464;
`;

const SansSubtitle = styled.h2`
  font-size: 14pt;
  font-weight: 900;
  margin: 0;
`;

const Label = styled.span`
  font-size: 10pt;
`;

const Date = styled.span`
  font-size: 14pt;
  color: #646464;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Skills = styled.ul`
  margin: 0;
  padding-left: 15pt;
`;

const SkillTitle = styled.li`
  font-size: 12pt;
  margin: 0;
`;

const SkillDescription = styled.span`
  font-size: 10pt;
  color: #646464;
  font-style: italic;
`;

const JobDescription = styled.span`
  color: #646464;
  font-weight: 500;
`;

const BodyText = styled.p`
  font-size: 12pt;
  color: #646464;
  margin: 0;
  margin-top: 5pt;
`;

const B = styled.span`
  font-weight: 900;
  color: inherit;
`;

const A = styled.a`
  color: inherit;
  text-decoration-color: #646464;
  font-style: italic;
`;

const Ispace = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>
          iSPACE STEM{" "}
          <JobDescription>Teacher & Curriculum Author</JobDescription>
        </SansSubtitle>
      </RowItem>
      <Date>Cincinnati, Summers 2016 - Present</Date>
    </Row>
    <BodyText>
      <B>Camp teacher</B> - Taught week-long day-camps to students ages K-12,
      all focused around STEM, including LEGO Robotics, Scratch & Python
      programming, Chemistry, and Physics. Over six years of both volunteer and
      paid positions, I taught over 35 weeks of camp, teaching an estimated 700
      students. I was awarded the Presidential Volunteer Service Award five
      times because of my volunteer work at iSPACE.
    </BodyText>
  </>
);

const Perfect = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>
          Perfect North Slopes <JobDescription>Instructor</JobDescription>
        </SansSubtitle>
      </RowItem>
      <Date>Lawrenceburg, Winters 2020 - Present</Date>
    </Row>
    <BodyText>
      <B>Kids ski instructor</B> - Taught ski lessons for kids ages 5-12. This
      job refined my teaching skills over my experience of taking over 300 kids
      who have never been on the snow before to their first chairlift ride and
      farther. I learned invaluable leadership and education skills while
      teaching kids my passion.
    </BodyText>
  </>
);

const AdventureCrew = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>
          Adventure Crew <JobDescription>Freelance developer</JobDescription>
        </SansSubtitle>
      </RowItem>
      <Date>Cincinnati, Apr 2022 - Present</Date>
    </Row>
    <BodyText>
      <B>Paddlefest App</B> - Created a mobile app (React Native) and the
      supporting Express and MongoDB data modeling for use by participants in
      the fundraiser “Ohio River Paddlefest” (raising funds to help inner-city
      kids get out into nature). Roughly half of all participants (2000)
      downloaded and interacted with the app, viewing a live map of attractions,
      sharing photos, and receiving time-critical notifications for safety and
      logistical issues. We plan to expand the app’s capabilities and marketing
      effort next year after hearing excellent reviews.
    </BodyText>
    <BodyText>
      <B>Volunteer Management System</B> - Built a web app (Next.js) and the
      backend (Express) and database (MongoDB) to allow over 130 volunteers to
      register, and allowing Paddlefest leadership to view, manage, edit, and
      check in volunteers before and on the days of the event. The Paddlefest
      VMS led to a more consistent and complete registration process for
      volunteers, and allowed for unprecedented management for the leadership
      team.
    </BodyText>
  </>
);

const Myers = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>
          Myers Industries <JobDescription>Freelance developer</JobDescription>
        </SansSubtitle>
      </RowItem>
      <Date>Akron, Jul 2021 - Nov 2021</Date>
    </Row>
    <BodyText>
      <B>MTS Express</B> - Developed a mobile app and the corresponding backend
      and database for internal use by Myers sales reps to easily and quickly
      order and re-order consumable hardware. In tests, MTS Express tangibly
      improved efficiency by reducing lag time between a customer running out of
      hardware and the replacement order being placed. This immediately reduced
      downtime and improved sales rep workload.
    </BodyText>
  </>
);

const OgImage = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>OG Image Generator</SansSubtitle>
      </RowItem>
      <Date>Aug 2021 - Present</Date>
    </Row>
    <BodyText>
      This open source project with over 100,000 monthy hits dynamically
      generates social media preview images for over 6,000 different websites.
      Node JS, MongoDB, Cloudflare.{" "}
      <A href="https://blog.jackcrane.rocks/2021/08/20/og-image.html">
        https://blog.jackcrane.rocks/2021/08/20/og-image.html
      </A>
    </BodyText>
  </>
);

const AppleMusicPresence = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>Apple Music Presence</SansSubtitle>
      </RowItem>
      <Date>Mar 2022 - Present</Date>
    </Row>
    <BodyText>
      This project integrates with Apple Music and Discord on Macs, allowing you
      to share the music you are listening to with your friends! This project
      has 37 GitHub stars and roughly 200 new users per month. JS, S3, Node JS.
      <A href="https://blog.jackcrane.rocks/2022/05/02/apple-music-presence.html">
        https://blog.jackcrane.rocks/2022/05/02/apple-music-presence.html
      </A>
    </BodyText>
  </>
);

const DigitalOceanController = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>DigitalOcean Controller</SansSubtitle>
      </RowItem>
      <Date>Jul 2021 - May 2022</Date>
    </Row>
    <BodyText>
      Although never released, this mobile app allows DigitalOcean customers to
      control their accounts. This project caught the attention of DigitalOcean
      and I got to meet some of their engineers. React Native (Expo), Cloudflare
      Functions.{" "}
      <A href="https://blog.jackcrane.rocks/2022/03/19/digitalocean-app.html">
        https://blog.jackcrane.rocks/2022/03/19/digitalocean-app.html
      </A>
    </BodyText>
  </>
);

const OneWheel = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>OneWheel</SansSubtitle>
      </RowItem>
      <Date>Aug 2022 - Present</Date>
    </Row>
    <BodyText>
      This project, my first individual exploration into mechanical engineering,
      is a clone of a OneWheel self-balancing skateboard. This project is still
      in progress and is 100% originally designed. OnShape, Arduino.{" "}
      <A href="https://blog.jackcrane.rocks/2022/03/19/digitalocean-app.html">
        https://blog.jackcrane.rocks/2022/03/19/digitalocean-app.html
      </A>
    </BodyText>
  </>
);

const Robotics = () => (
  <>
    <Row>
      <RowItem>
        <SansSubtitle>FIRST Robotics</SansSubtitle>
      </RowItem>
      <Date>2012 - Present</Date>
    </Row>
    <BodyText>
      Throught over a decade, I have been involved in FIRST robotics, allowing
      me to participate in the world championship and to found and captain my
      high school team to the state championship 3 times, winning awards for
      teamwork, sportsmanship, documentation, software, and hardware design, as
      well as I earned the highest individual leadership award in the state.{" "}
      <A href="https://blog.jackcrane.rocks/2022/11/22/robot.html">
        https://blog.jackcrane.rocks/2022/11/22/robot.html
      </A>
    </BodyText>
  </>
);

const Name = () => (
  <>
    <Title>Jack Crane</Title>
    <Row>
      <RowItem>
        <RowImage src="icons/web.svg" alt="web" />
        <RowLink href="https://jackcrane.rocks">
          https://jackcrane.rocks
        </RowLink>
      </RowItem>
      <RowItem>
        <RowImage src="icons/web.svg" alt="web" />
        <RowLink href="https://blog.jackcrane.rocks">
          blog.jackcrane.rocks
        </RowLink>
      </RowItem>
      <RowItem>
        <RowImage src="icons/github.svg" alt="github" />
        <RowLink href="https://github.com/jackcrane">jackcrane</RowLink>
      </RowItem>
      <RowItem>
        <RowImage src="icons/phone.svg" alt="phone" />
        <RowLink href="tel:5136289360">513-628-9360</RowLink>
      </RowItem>
      <RowItem>
        <RowImage src="icons/email.svg" alt="email" />
        <RowLink href="mailto:jack@jackcrane.rocks">
          jack@jackcrane.rocks
        </RowLink>
      </RowItem>
    </Row>
  </>
);

const CvParent = styled.div`
  page-break-after: always;
  padding-bottom: 1in;
`;

const CvText = styled(BodyText)`
  margin-left: 0.5in;
  margin-right: 0.5in;
  margin-top: 0.25in;
`;

const CV = () => (
  <CvParent>
    <Name />
    <Hr />
    <CvText>
      April 28, 2023
      <Spacer />
      To Whom It May Concern:
      <Spacer />I am writing to express my strong interest in pursuing a career
      in software development and mechanical engineering. I am currently a
      student at Saint Louis University pursuing a Bachelor of Science in
      Mechanical Engineering & Computer Science, and I am eager to apply my
      skills and enthusiasm for robotics in a challenging and rewarding work
      environment.
      <Spacer />
      I also have experience leading and communicating within an engineering
      setting as I founded and led my high school robotics team from nothing to
      a formidable competitor over the span of a few years. I learned how to
      lead a team as well as how to create, conform to, and manage deadlines and
      progress of several hardware and software components. Furthermore I thrive
      in challenging situations and love standing up to hard tasks, which is
      reflected in my achievement of earning a pilot's license at the age of 18,
      and in various freelance and personal projects, including the development
      of mobile and web apps for a huge local event to a massive national
      company.
      <Spacer />
      As a lifelong self-proclaimed robot nerd, I am particularly drawn to the
      field of robotics and the opportunity to contribute to the development of
      cutting-edge technology. My personal projects, such as my OneWheel clone
      project, which I designed and built myself, reflect my strong passion for
      and curiosity in STEM.
      <Spacer />I appreciate the opportunity to get this in front of you, and I
      am eager to discuss how we can further our connection and look forward to
      hearing from you.
      <Spacer />
      Sincerely, Jack Crane
    </CvText>
  </CvParent>
);

function App() {
  return (
    <Page>
      <CV />
      <Name />
      {/* EDUCATION */}
      <Spacer />
      <Subtitle>Education</Subtitle>
      <Hr />
      <Row>
        <RowItem>
          <SansSubtitle>Saint Louis University</SansSubtitle>
          <Label>St. Louis, Missouri</Label>
        </RowItem>
        <Label>B.S. Mechanical Engineering & Computer Science</Label>
        <Date>May 2026</Date>
      </Row>
      <Row>
        <RowItem>
          <SansSubtitle>Summit Country Day School</SansSubtitle>
          <Label>Cincinnati, Ohio</Label>
        </RowItem>
        <Label>High School Diploma</Label>
        <Date>May 2022</Date>
      </Row>
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
              <SkillDescription>Git, Github, Kubernetes, Jira</SkillDescription>
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
      <Spacer />
      <Hr />
      <Spacer />
      <BodyText style={{ textAlign: "center", fontStyle: "italic" }}>
        This resume has been truncated for brevity and relevance. You can access
        my full general resume at{" "}
        <A href="https://resume.jackcrane.rocks">resume.jackcrane.rocks</A>
      </BodyText>
    </Page>
  );
}

export default App;
