import { Platform, Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const normalWidth = 360;

const NormalizeSize = (size: number) => {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    let sum = SCREEN_WIDTH;
    sum = (size * sum) / normalWidth;
    return Math.round(PixelRatio.roundToNearestPixel(sum));
  } else {
    return size;
  }
};

export default NormalizeSize;
