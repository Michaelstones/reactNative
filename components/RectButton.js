import { View, TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
const RectButton = ({ minWidth, handlePress, fontSize, ...props }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.extraLarge,
          padding: SIZES.small,
          minWidth: minWidth,
          ...props,
        }}
        onPress={handlePress}
      >
        <Text
          style={{
            fontSize: fontSize,
            fontFamily: FONTS.semiBold,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Place a bid
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RectButton;
