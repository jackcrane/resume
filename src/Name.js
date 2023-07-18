import { Row, Title, RowItem, RowImage, RowLink } from "./Kit";

export const Name = () => (
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
