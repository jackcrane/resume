import { Hr, CvParent, CvText, Spacer } from "./Kit";
import { Name } from "./Name";
import data from "./resume.json";

export const CV = () => (
  <CvParent>
    <Name headerLinks={data.headerLinks} />
    <CvText>
      <a
        style={{ color: "blue" }}
        href="https://careers.stratasys.com/job/Rehovot-%28On-Site%29-Mechanical-Sustain-Engineer/1312303300/"
      >
        Stratasys Mechanical Sustain Engineer
      </a>
      <Spacer />
      <Spacer />
      <Spacer />
      {new window.Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      <Spacer />
      To Whom It May Concern:
      <Spacer />
      As you can see from my resume, I have a wealth of experience in the
      Additive Manufacturing field, including 4 years of experience in an
      academic research setting, participation in America Makes conferences and
      events including repeated visits to MMX, as well as Stratasys FDM,
      Stratasys Polyjet, and SolidWorks.
      <Spacer />
      On top of my certifications, I have years of experience in the entire
      Additive Manufacturing and Design for Additive worlds, from working with
      customers to refine and develop ideas to executing print jobs for
      industrial customers, to supporting research labs and solving unique
      problems with Additive at the core. Across hundreds of prints on Stratasys
      Polyjet and FDM printers, and thousands across consumer-grade FFF and
      various SLS printers, I have refined and developed a passion for DFAM.
      <Spacer />
      I have built my body of work around my time and experience working with 3d
      printers. Over the years, my focuses have changed, ranging from writing
      and publishing a "Design for 3D printing" document to distribute to
      students and faculty at the SLU Engineering school who have engineering
      experience but do not have Additive experience. Inspired by Stratasys' own
      2D23D application, I build a lightweight, open-source, and extensible
      alternative for our own internal use for textiles on our J735.
      <Spacer />
      Through the last 4 years and my continued exposure to the world of
      Additive and Stratasys, I have been nothing but blown away by the
      technical accomplishments of Stratasys tools, the professionalism,
      intelligence, and passion of the Stratasys team, and the culture of
      tinkering, experimentation, research, and innovation that seems to be the
      core of Stratasys, and calling myself a member of the Stratasys team would
      be a dream come true.
      <Spacer />
      I have appreciated the opportunity to work with many Stratasys
      applications and support engineers, and I hope to call them my colleagues
      in the near future.
      <Spacer />
      Sincerely, Jack Crane
    </CvText>
  </CvParent>
);
