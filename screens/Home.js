import { useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { COLORS, NFTData } from "../constants";
import { FocusStatusBar, HomeHeader, NftCard } from "../components";

const Home = () => {
  const [nftData, setnftData] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value) {
      return setnftData(NFTData);
    }
    const filtered = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filtered.length > 0) {
      setnftData(filtered);
    } else {
      setnftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NftCard data={item} />}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <View style={{ backgroundColor: COLORS.primary, height: 300 }} />
          <View style={{ backgroundColor: COLORS.white, flex: 1 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
