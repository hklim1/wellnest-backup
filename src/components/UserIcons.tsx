import smallBearCircle from "../../assets/smallProfileIcons/smallBearCircle.png";
import { Image, ImageSourcePropType } from "react-native";

const NAME_TO_PNGS: { [_: string]: ImageSourcePropType } = {
  smallBearCircle: smallBearCircle,
};

interface UserIconProps {
  name: string;
  height?: number;
  width?: number;
}

export const UserIcon = ({ name, height, width }: UserIconProps) => {
  const imageHeight = height ? height : 24;
  const imageWidth = width ? width : 24;
  return (
    <Image
      source={NAME_TO_PNGS[name]}
      style={{ height: imageHeight, width: imageWidth }}
    />
  );
};
