import styled from "styled-components";

export const Page = styled.div`
  transition: margin-left 0.3s;
  @media screen {
    max-width: 8.5in;
    margin-left: ${(props) => (props.adminOpen ? "0" : "auto")};
    margin-right: auto;
  }
`;
export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 24pt;
  font-weight: 900;
  margin: 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || 0}pt;
`;
export const RowImage = styled.img`
  width: 8pt;
  height: 8pt;
`;
export const RowLink = styled.a`
  color: inherit;
  font-size: 8pt;
  text-decoration-color: #646464;
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5pt;
`;
export const Subtitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 12pt;
  font-weight: 900;
  margin: 0;
`;
export const Spacer = styled.div`
  height: 4pt;
`;
export const Hr = styled.hr`
  border: 0;
  width: 100%;
  height: 3px;
  background: #646464;
  flex: 1;
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const SansSubtitle = styled.h2`
  font-size: 10pt;
  font-weight: 900;
  margin: 0;
`;
export const Label = styled.span`
  font-size: 8pt;
`;

export const Date = styled.span`
  font-size: 8pt;
  color: #646464;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Skills = styled.div`
  margin: 0;
  line-height: 1;
`;
export const SkillTitle = styled.span`
  font-size: 8pt;
  margin: 0;
  display: inline-block;
  color: inherit;
  /* bullet point */
  &:before {
    content: "•";
    display: inline-block;
    color: inherit;
    width: 1em;
  }
`;
export const SkillDescription = styled.span`
  font-size: 8pt;
  color: #646464;
  font-style: italic;
`;
export const SkillContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const JobDescription = styled.span`
  color: #646464;
  font-weight: 500;
`;

export const BodyText = styled.p`
  font-size: 8pt;
  color: #646464;
  margin: 0;
  margin-top: 5pt;
`;

export const B = styled.span`
  font-weight: 900;
  color: inherit;
`;

export const A = styled.a`
  color: inherit;
  text-decoration-color: #646464;
  color: #646464;
  font-size: 12px;
  font-style: italic;
`;
export const Modal = styled.div`
  position: fixed;
  top: 10px;
  bottom: 10px;
  width: 40%;
  right: 10px;
  border: 1px solid black;
  background-color: white;
  z-index: 100;
  padding: 10px;
  overflow: scroll;
  opacity: 0.5;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  @media print {
    display: none;
  }
`;
export const CvParent = styled.div`
  page-break-after: always;
  padding-bottom: 1in;
`;
export const CvText = styled(BodyText)`
  margin-left: 0.5in;
  margin-right: 0.5in;
  margin-top: 0.25in;
  font-size: 10pt;
`;
export const AdminRowContainer = styled.div`
  border: 1px solid #f0f0f0;
  padding: 5px;
  user-select: none;
  background-color: ${(props) => (props.selected ? "#aaccff" : "white")};
  margin-top: 5px;
`;
