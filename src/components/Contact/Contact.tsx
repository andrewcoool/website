import styled from "styled-components";
import { Colors } from "../../design-system/colors";
import Email from "../../icons/Email";
import GitHub from "../../icons/GitHub";
import Linkedin from "../../icons/Linkedin";

const ContactInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
`;

const Link = styled.a`
  color: ${Colors.CherryPink};
  font-weight: 400;
`;

const IconContainer = styled.div`
  & > svg {
    width: 25px;
    height: 25px;
  }

  margin-right: 12px;
`;

const Text = styled.div`
  color: ${Colors.White};
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 20px;
  color: ${Colors.White};
  margin-bottom: 20px;
`;

export interface ContactProps { 
  /** The email address displayed */
  email: string,
  linkedin: {
    /** The linkedin username displayed */
    name: string,
    /** The url redirected to when the linkedin username is clicked (linkedin profile url) */
    url: string,
  }
  github: {
    /** The github username displayed */
    name: string,
    /** The url redirected to when the github username is clicked (github profile url) */
    url: string,
  }
}

/**
 * A component displaying contact info
 */
export function Contact({email, linkedin, github}: ContactProps) {
  return <div>
    <Description>
      Reach out to me!
    </Description>
    <ContactInfoContainer>
    <Item>
      <IconContainer>
        <Email />
      </IconContainer>
      <Text>
        Email: {" "}
        <Link href={"mailto:" + email}>{email}</Link>
      </Text>
    </Item>
    <Item>
      <IconContainer>
        <Linkedin />
      </IconContainer>
      <Text>
        LinkedIn: {" "}
        <Link href={linkedin.url}>{linkedin.name}</Link>
      </Text>
    </Item>
    <Item>
      <IconContainer><GitHub /></IconContainer>
      <Text>
        GitHub: {" "}
        <Link href={github.url} target="_blank">{github.name}</Link>
      </Text>
    </Item>
  </ContactInfoContainer>
  </div>
}