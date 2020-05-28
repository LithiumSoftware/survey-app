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

export const MessageBulletedOff = ({
  height,
  width,
  fill = "#ffb900",
}: IconProps) => (
  <Icon
    height={height}
    width={width}
    fill={fill}
    path="M1.27,1.73L0,3L2,5V22L6,18H15L20.73,23.73L22,22.46L1.27,1.73M8,14H6V12H8V14M6,11V9L8,11H6M20,2H4.08L10,7.92V6H18V8H10.08L11.08,9H18V11H13.08L20.07,18C21.14,17.95 22,17.08 22,16V4A2,2 0 0,0 20,2Z"
  />
);

export const NotConnected = ({
  height,
  width,
  fill = "#FF0C3E",
}: IconProps) => (
  <Icon
    height={height}
    width={width}
    fill={fill}
    path="M3.27,1.44L2,2.72L4.05,4.77C2.75,5.37 1.5,6.11 0.38,7C4.41,12.06 12,21.5 12,21.5L15.91,16.63L19.23,19.95L20.5,18.68M12,3C10.6,3 9.21,3.17 7.86,3.5L18.18,13.81C20,11.5 22.05,9 23.65,7C20.32,4.41 16.22,3 12,3Z"
  />
);
