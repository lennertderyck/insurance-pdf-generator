import styled from "styled-components";
import { IconSize, SvgProps } from "./Icon.types";

const Svg = styled.svg<SvgProps>`
    fill: ${props => props.color};
    width: ${props => props.size ? IconSize[props.size] : IconSize["base"]};
    height: ${props => props.size ? IconSize[props.size] : IconSize["base"]};
`;

export default Svg