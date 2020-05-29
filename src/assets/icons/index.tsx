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

export const AnswerSuccess = ({
  height,
  width,
  fill = "#27AE60",
}: IconProps) => (
  <Icon
    height={height}
    width={width}
    fill={fill}
    path="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,15L18,7L16.59,5.58L10,12.17L7.41,9.59L6,11L10,15Z"
  />
);

// Password Icons
export const Eye = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
  />
);

export const EyeOff = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"
  />
);

// Header
export const ExitToApp = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  />
);
