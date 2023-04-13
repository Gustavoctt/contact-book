import styled, { css } from "styled-components";

type H2Props = {
  color: string;
  size?: "large" | "medium" | "small";
};

const TitleModifier = {
  small: () => css`
    font-size: 1.25rem;
  `,
  medium: () => css`
    font-size: 1.5rem;
  `,
  large: () => css`
    font-size: 1.75rem;
  `,
};

const Title = styled.h2<H2Props>`
  ${({ color, size = "large" }) => css`
    color: ${color};
    ${TitleModifier[size]()};
  `}
`;

export default Title;
