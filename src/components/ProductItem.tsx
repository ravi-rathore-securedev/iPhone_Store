import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductItemProps = PropsWithChildren<{
  product: Product;
}>;

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />

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
        </View>
        <View>
          <Text style={styles.offerPercentage}>
            %{product.offerPercentage} off
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  image: {
    marginTop:-35,
    width: 130,
    height: 220,
    resizeMode: 'cover',
    marginRight: 12,
    borderRadius:12,
    marginRight:18
  },
  name: {
    marginBottom: 4,
    marginTop:10,
    fontSize: 15,
    fontWeight: 'bold',
    right:8,
    width:'55%',
    color:'#fff'
  },
  ratingContainer: {
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 12,
  },
  rating: {
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',

    marginRight: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingCount: {
    color: '#878787',
  },
  originalPrice: {
    fontSize: 16,
    marginRight: 4,
    fontWeight: '600',

    color: '#fff',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 16,
    marginRight: 4,
    fontWeight: '600',
    color: '#fff',

  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',
  },
});
