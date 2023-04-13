import styled, { css } from "styled-components";

type PProps = {
  color: string;
  size?: "large" | "medium" | "small";
};

const ParagraphModifier = {
  small: () => css`
    font-size: 0.5rem;
  `,
  medium: () => css`
    font-size: 0.75rem;
  `,
  large: () => css`
    font-size: 1rem;
  `,
};

const P = styled.p<PProps>`
  ${({ color, size = "large" }) => css`
    color: ${color};
    ${ParagraphModifier[size]()};
  `}
`;

export default P;
