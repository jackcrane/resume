import { Hr, CvParent, CvText, Spacer } from "./Kit";
import { Name } from "./Name";

export const CV = () => (
  <CvParent>
    <Name />
    <Hr />
    <CvText>
      {new window.Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
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
