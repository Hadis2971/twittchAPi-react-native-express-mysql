import React from 'react';
import { Text, FlatList } from 'react-native';

const ArrayListBox = (props) => {
  const { data } = props;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};

export default ArrayListBox;
