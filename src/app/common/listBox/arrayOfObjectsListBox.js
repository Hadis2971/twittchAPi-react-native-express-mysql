import React from 'react';
import { Text, FlatList } from 'react-native';

const ArrayOfObjectsListBox = (props) => {
  const { data } = props;
  let helpObj = {};
  let i = 0;
  const listData = [];
  for (let obj of data) {
    ++i;
    helpObj = {};
    let prop = Object.keys(obj);
    helpObj.prop = obj[prop];
    helpObj.key = (i + '');
    listData.push(helpObj);
  }
  return (
    <FlatList
      data={listData}
      renderItem={({ item }) => <Text>{item.prop}</Text>}
    />
  );
};

export default ArrayOfObjectsListBox;
