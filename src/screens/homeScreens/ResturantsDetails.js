import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../components/colors/colors';
import ReadMore from 'react-native-read-more-text';
function ResturantsDetails({route, navigation}) {
  const [qty, setQty] = useState(0);

  const {width, height} = Dimensions.get('window');
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingTop: height / 20,
          alignItems: 'flex-start',
          backgroundColor: '#F7F8FB',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          width: width,
          height: height / 1.7,
          alignSelf: 'center',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 10,
          overflow: 'hidden',
          shadowColor: colors.secondary,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 50,

            padding: 7,
          }}>
          <Ionicons name="chevron-back" color="black" size={18} />
        </TouchableOpacity>
        <Image
          style={{
            width: width / 2.2,
            height: height / 2,
            borderRadius: 6,
          }}
          resizeMode="contain"
          source={{uri: item.LogoUrl}}
          key={item.LogoUrl}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 50,

            padding: 7,
          }}>
          <Ionicons name="heart" color="red" size={18} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width / 1.1,
            paddingVertical: height / 40,

            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 22,
                fontWeight: '600',

                color: colors.secondary,
                width: width / 1.6,
                textAlign: 'auto',
              }}>
              {item.Name}
            </Text>
            <Text
              style={{
                color: colors.secondary,
                fontSize: 14,
                letterSpacing: 1,
                fontWeight: 'bold',
                textAlign: 'right',
                paddingVertical: 2,
              }}>
              ⭐⭐⭐⭐⭐ {'\n'}
              {item.Rating.Average}
            </Text>
          </View>
          <View style={{marginVertical: height / 70}}>
            <Text
              numberOfLines={1}
              style={{
                color: colors.grey,
                fontSize: 13,
              }}>
              {item.Address.FirstLine}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: colors.primary,
                fontSize: 18,
                fontWeight: 'normal',
              }}>
              Description
            </Text>

            <ReadMore numberOfLines={3}>
              <Text
                style={{
                  color: colors.light,
                  textAlign: 'justify',
                  paddingTop: 5,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                dignissimos animi suscipit dolorum non totam ipsa iusto
                veritatis illo eum, explicabo alias nisi, quaerat excepturi iste
                tempore eveniet perferendis officiis? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Quas dignissimos animi
                suscipit dolorum non totam ipsa iusto veritatis illo eum,
                explicabo alias nisi, quaerat excepturi iste tempore eveniet
                perferendis officiis?
              </Text>
            </ReadMore>

            <View
              style={{
                marginVertical: height / 50,
                borderBottomColor: colors.light,
                borderBottomWidth: 0.5,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  elevation: 2,

                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',

                  padding: '3%',
                }}>
                <Ionicons
                  name="md-cart-outline"
                  color={colors.secondary}
                  size={22}
                />
              </TouchableOpacity>
              {qty < 1 ? (
                <TouchableOpacity
                  onPress={() => setQty(qty + 1)}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    height: height / 14,
                    borderRadius: 50,
                    width: width / 1.5,

                    backgroundColor: colors.secondary,
                  }}>
                  <Text style={{color: 'white'}}>Add To Cart</Text>
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',

                    justifyContent: 'space-between',

                    height: height / 14,
                    width: width / 1.5,
                  }}>
                  <TouchableOpacity onPress={() => setQty(qty + 1)}>
                    <Ionicons
                      name="add-circle-outline"
                      color={colors.primary}
                      size={40}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: colors.grey,
                    }}>
                    {qty}
                  </Text>
                  <TouchableOpacity onPress={() => setQty(qty - 1)}>
                    <Ionicons
                      name="remove-circle-outline"
                      color={colors.primary}
                      size={40}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ResturantsDetails;
