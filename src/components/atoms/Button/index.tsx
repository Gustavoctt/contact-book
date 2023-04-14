import styled, { css } from "styled-components";

type ButtonProps = {
  textColor?: string;
  variant?: "solid" | "icon";
  backgroundColor?: string;
  size?: "large" | "small";
};

const buttonModifier = {
  icon: (size: string) => css`
    border-radius: 50%;
    width: ${size === "large" ? "40px" : "30px"};
    height: ${size === "large" ? "40px" : "30px"};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${size === "small" && "0.25rem 0.5rem"};

    svg {
      line-height: 100%;
      height: 16px;
      width: auto;
    }
  `,
};

const Button = styled.button<ButtonProps>`
  ${({
    textColor = "var(--white)",
    variant = "solid",
    backgroundColor = "var(--orange)",
    size = "large",
  }) =>
    css`
      display: flex;
      align-items: center;
      padding: 0.5rem 0.75rem;
      border: none;
      border-radius: 8px;
      gap: 0.5rem;
      cursor: pointer;
      background-color: ${backgroundColor};
      transition: all 0.4s;

      ${variant === "icon" && buttonModifier[variant](size)}

      svg {
        color: ${textColor};
      }

      :hover {
        filter: brightness(0.8);
      }
    `}
`;

export default Button;
