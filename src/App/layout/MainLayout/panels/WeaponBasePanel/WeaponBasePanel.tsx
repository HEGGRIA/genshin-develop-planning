/* eslint-disable no-unused-vars */
// todo: need contact with value
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { useStores } from '../../../../../hooks/useStores';
import { Attribute } from '../../../../common/interface';
import { AttrCode } from '../../../../common/type-code';
import InputNumberBox from '../../../../components/InputNumberBox/InputNumberBox';
import NormalFrame from '../../../../components/NormalFrame/NormalFrame';
import { GridContainer } from '../../style/index.style';

export default observer(function WeaponBasePanel() {
  const { attributesStore } = useStores();
  const { weaponBaseAttrList, setWeaponBaseAttrList } = attributesStore;

  const listItems: Array<any> = [];
  weaponBaseAttrList.forEach((value: Attribute, key: AttrCode) =>
    listItems.push(
      <InputNumberBox
        key={key}
        title={value.title}
        size={'middle'}
        onChange={(v: number) => {
          setWeaponBaseAttrList(
            new Map([
              ...weaponBaseAttrList,
              [
                key,
                {
                  ...value,
                  value: v,
                },
              ],
            ]),
          );
        }}
        type={value.valueType}
        value={value.value}></InputNumberBox>,
    ),
  );
  return (
    <NormalFrame
      mainTitle="武器属性配置"
      describe="武器的基础面板"
      content={
        <GridContainer minWidth="150px" gridGap="20px">
          {listItems}
        </GridContainer>
      }></NormalFrame>
  );
});
