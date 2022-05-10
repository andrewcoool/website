import styled from "styled-components";
import { Colors } from "../../design-system/colors";
import Email from "../../icons/Email";
import Code from "../../icons/Code";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
`;

const Link = styled.a`
  color: ${Colors.CherryPink};
`;

const IconContainer = styled.div`
  & > svg {
    width: 30px;
    height: 30px;
  }

  margin-right: 12px;
`;

const Text = styled.div`
  color: ${Colors.White};
  font-size: 20px;
  font-weight: bold;
`;

export interface ContactProps { 
  email: string,
  github: {
    name: string,
    url: string,
  }
}

export function Contact({email, github}: ContactProps) {
  return <Container>
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
  </Container>
}