import React from 'react';
import {Select, SelectItem, Text} from '@ui-kitten/components';
import {Countrys} from '../../data/countrys';

interface Props {
  selectedIndex: any;
  setSelectIndex(value: any): void;
}

const CountrySelect: React.FC<Props> = ({selectedIndex, setSelectIndex}) => (
  <Select
    label={(props) => (
      <Text {...props} style={{fontSize: 20}}>
        País de Origem
      </Text>
    )}
    onSelect={(index) => setSelectIndex(index)}
    selectedIndex={selectedIndex}
    value={Countrys[selectedIndex.row]}>
    {Countrys.map((country) => (
      <SelectItem title={country} key={country} />
    ))}
  </Select>
);

export default CountrySelect;
