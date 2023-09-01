import { Row, Title, RowItem, RowImage, RowLink, Hr, Spacer } from "./Kit";

export const Name = ({ headerLinks, useLongText }) => (
  <>
    <Title>Jack Crane</Title>
    <Row>
      {headerLinks &&
        headerLinks.map((link, i) => (
          <RowItem key={i}>
            <RowImage src={link.icon} alt={link.icon} />
            <RowLink href={link.href}>
              {useLongText ? link.longText : link.text}
            </RowLink>
          </RowItem>
        ))}
    </Row>
  </>
);
