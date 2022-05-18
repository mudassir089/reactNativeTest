import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import colors from '../../components/colors/colors';
const {width, height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const [searchKitchen, setSearchKitchen] = useState('');
  const [loading, setLoading] = useState(true);
  const getResturants = async () => {
    try {
      const {data} = await axios.get('https://theotterco.ca/apitest.json');
      await setData(data?.Restaurants.slice(0, 11));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResturants();
  }, []);

  const filteredData = data.filter(item => {
    if (searchKitchen == '') {
      return item;
    } else if (item.Name.toLowerCase().includes(searchKitchen.toLowerCase())) {
      return item;
    }
  });

  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            borderWidth: 0.6,
            borderColor: colors.lights,
            width: width / 1.1,
            height: 60,
            alignSelf: 'center',
            borderRadius: 7,
            elevation: 2,
            justifyContent: 'center',
            padding: 5,
            shadowRadius: 7,
            shadowColor: colors.gray,
            marginTop: 20,
          }}>
          <TextInput
            style={{color: colors.secondary, fontSize: 18}}
            placeholder="Search Resturants by Name"
            placeholderTextColor={colors.secondary}
            onChangeText={e => setSearchKitchen(e)}
          />
        </View>
        <View
          style={{
            borderBottomColor: colors.light,
            borderBottomWidth: 0.5,
            paddingVertical: 5,
          }}
        />
        <View style={{alignSelf: 'center', paddingBottom: 250}}>
          {!loading ? (
            <FlatList
              columnWrapperStyle={{
                height: 300,
              }}
              data={filteredData}
              keyExtractor={item => item.Id.toString()}
              initialNumToRender={4}
              numColumns={2}
              ListEmptyComponent={
                <View>
                  <Text>No Resturants</Text>
                </View>
              }
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ResturantsDetails', {item: item})
                    }
                    activeOpacity={0.6}
                    style={{
                      borderWidth: 0.6,
                      borderColor: colors.lights,
                      elevation: 2,
                      margin: 7,
                      width: width / 2.2,
                      height: '80%',
                      alignSelf: 'center',
                      borderRadius: 7,
                      shadowRadius: 7,
                      shadowColor: colors.gray,
                    }}>
                    <Image
                      resizeMode="contain"
                      key={item.LogoUrl}
                      source={{uri: item.LogoUrl}}
                      style={{width: '50%', height: '50%', alignSelf: 'center'}}
                    />
                    <View
                      style={{
                        height: '50%',
                        justifyContent: 'space-evenly',
                        padding: 5,
                      }}>
                      <Text
                        style={{
                          color: colors.secondary,
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}
                        numberOfLines={2}>
                        {item.Name}
                      </Text>
                      <Text style={{color: colors.gray}} numberOfLines={2}>
                        Resturants Address: {item.Address.FirstLine}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <View alignItems="center" justifyContent="center" flex={1}>
              <ActivityIndicator
                style={{marginTop: 40}}
                size={'large'}
                color={colors.secondary}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
