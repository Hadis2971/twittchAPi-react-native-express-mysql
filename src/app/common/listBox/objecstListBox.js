import React from 'react';
import { Text, FlatList } from 'react-native';

const ObjectsListBox = (props) => {
  const { data, itemStyle } = props;
  let helpObj = {};
  const listData = [];
  let i = 0;
  for (let prop in data) {
    ++i;
    helpObj = {};
    helpObj.name = prop;
    helpObj.prop = data[prop];
    helpObj.key = (i + '');
    listData.push(helpObj);
  }
  return (
    <FlatList
      data={listData}
      renderItem={({ item }) => <Text style={{ ...itemStyle }}>{`${item.name}:`}  {item.prop}</Text>}
    />
  );
};

export default ObjectsListBox;
