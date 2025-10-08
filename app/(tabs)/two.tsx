import {
  Button,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Product, getProducts } from '@/utils/api';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <TouchableOpacity style={styles.productItem} testID="product-item">
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Load Products" onPress={loadProducts} />
      <FlatList
        role="list"
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});
