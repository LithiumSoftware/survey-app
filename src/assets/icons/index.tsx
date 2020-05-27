import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  fill?: string;
  path?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

const Icon = ({
  fill,
  path,
  width = 24,
  height = 24,
  viewBox = "0 0 22 22",
}: IconProps) => (
  <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
    <Path d={path} />
  </Svg>
);

export default Icon;

export const Plus = ({ fill = "#757575" }: IconProps) => (
  <Icon fill={fill} path="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
);

export const MessageBulleted = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M8,14H6V12H8V14M8,11H6V9H8V11M8,8H6V6H8V8M15,14H10V12H15V14M18,11H10V9H18V11M18,8H10V6H18V8Z"
  />
);

export const CheckCircle = ({ height, width, fill = "#27AE60" }: IconProps) => (
  <Icon
    height={height}
    width={width}
    fill={fill}
    path="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
  />
);

export const BackArrow = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
  />
);
