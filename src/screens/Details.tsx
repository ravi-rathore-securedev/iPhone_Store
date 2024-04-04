import {ScrollView, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, { useContext } from 'react';

import {AppwriteContext} from '../appwrite/AppwriteContext'
// react navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../routes/AppStack';
import Snackbar from 'react-native-snackbar'
import { FAB } from '@rneui/themed'
import { StackActions } from '@react-navigation/native';
type DetailsProps = NativeStackScreenProps<AppStackParamList, 'Details'>;

const Details = ({route, navigation}: DetailsProps) => {
  const {product} = route.params;
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)

  const handleLogout = () => {
    appwrite.logout()
    .then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT
      })
      navigation.dispatch(StackActions.replace('Login'));
    })
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: product.imageUrl}} />
        <View>
          <Text style={styles.name}>{product.name}</Text>

          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>
              ({product.ratingCount.toLocaleString()})
            </Text>
          </View>

          <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={styles.originalPrice}>
              ₹{product.originalPrice.toLocaleString()}
            </Text>
            <Text style={styles.discountPrice}>
              ₹{product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.offerPercentage}>
              %{product.offerPercentage} off
            </Text>
          </View>
          {product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.tagBadge}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Logout button */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: '#0B0D32',
    paddingTop:10,
    paddingBottom:20
  },
  image: {
    width: 296,
    height: 500,
    resizeMode: 'cover',
    borderRadius:28,
    marginTop:-75
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
  },
  ratingContainer: {
    marginVertical: 12,
  },
  priceContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#deffeb',
  },
  rating: {
    marginRight: 4,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 14,
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',
    marginHorizontal:5,
    marginRight: 8,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom:8
  },
  tagBadge: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor:'#fff',
    marginBottom:5
  },
  logoutButton: {
    backgroundColor: '#f02e65',
    paddingVertical: 16, // Adjusted height
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8, // Added border radius
    marginTop: 20, // Added top margin for spacing
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default Details;
