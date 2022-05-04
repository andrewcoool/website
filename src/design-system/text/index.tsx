import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
  color: white;
`;

export const H2 = styled.h2`
  color: white;
`;

export const H3 = styled.h3`
  color: white;
`;

export const P = styled.p`
  color: white;
`;

export enum TextVariant {
  P,
  H1,
  H2,
  H3,
}

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: TextVariant
}

export function Text({variant=TextVariant.P, ...props} : TextProps) {
  switch (variant) {
    case TextVariant.P:
      return <P {...props}></P>
    case TextVariant.H1:
      return <H1 {...props}></H1>
    case TextVariant.H2:
      return <H2 {...props}></H2>
    case TextVariant.H3:
      return <H3 {...props}></H3>
  }
}