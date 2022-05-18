import styled from "styled-components";
import { Colors } from "../../design-system/colors";
import Email from "../../icons/Email";
import Code from "../../icons/Code";

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
export function Contact({email, github}: ContactProps) {
  return <div>
    <Description>
      I'm always looking for new opportunities and experiences. Feel free to reach out to me below.
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
      <IconContainer><Code /></IconContainer>
      <Text>
        GitHub: {" "}
        <Link href={github.url} target="_blank">{github.name}</Link>
      </Text>
    </Item>
  </ContactInfoContainer>
  </div>
}