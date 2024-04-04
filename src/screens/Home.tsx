import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import React, { useContext } from 'react';
import { AuthStackParamList } from '../routes/AuthStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppwriteContext } from '../appwrite/AppwriteContext';
import Separator from '../components/Separator';
import ProductItem from '../components/ProductItem';
import { PRODUCTS_LIST } from '../data/constants';
import Snackbar from 'react-native-snackbar';
import { StackActions } from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Home'>;

const Home = ({ navigation }: HomeScreenProps) => {
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

  return (<>
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  logoutButton: {
    backgroundColor: '#f02e65',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default Home;
