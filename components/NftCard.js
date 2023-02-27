import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { NFTTitle, SubInfo, EthPrice } from "./SubInfo";
import { CircleButton } from "./Button";
import RectButton from "./RectButton";

const NftCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.font,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />

          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.replace("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NftCard;
