import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import AppCard from "../components/AppCard";
import ActivityIndicator from '../components/ActivityIndicator';
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getListingsApi.request();
  }, []);
 
  return (
    <>
    <ActivityIndicator animating={getListingsApi.loading} />
    <Screen style={styles.screen}>
      {getListingsApi.error && <>
        <AppText>Couldn't retrieve the listings.</AppText>
        <AppButton title="Retry" onPress={getListingsApi.request()}/>
      </>}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => getListingsApi.request()}
      />
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
