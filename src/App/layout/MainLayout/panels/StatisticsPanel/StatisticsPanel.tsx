/* eslint-disable no-unused-vars */
// todo: need contact with value
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useStores } from '../../../../../hooks/useStores';
import { actualAttributes } from '../../../../common/form-config';
import { Attribute } from '../../../../common/interface';
import { AttributesCode } from '../../../../common/type-code';
import NormalFrame from '../../../../components/NormalFrame/NormalFrame';
import { fontSize1 } from '../../style/common.style';
import { GridContainer } from '../../style/index.style';

export default observer(function StatisticsPanel() {
  const { attributesStore } = useStores();
  const { actualAttributesList } = attributesStore;
  console.log(actualAttributes);
  const listItems: Array<any> = [];
  actualAttributesList.forEach((value: Attribute, key: AttributesCode) =>
    listItems.push(
      <ValueBox key={key}>
        <ValueBoxTitle>{value.title}</ValueBoxTitle>
        <ValueBoxValue>{value.extra.value}</ValueBoxValue>
      </ValueBox>,
    ),
  );
  return (
    <NormalFrame
      mainTitle="实际属性面板"
      describe="根据配置自动计算的实际属性面板（不包括 Buff）"
      content={
        <GridContainer minWidth="100px" gridGap="20px">
          {listItems}
        </GridContainer>
      }></NormalFrame>
  );
});

const ValueBox = styled.div`
  display: flex;
`;
const ValueBoxTitle = styled.div`
  font-size: ${fontSize1};
  font-weight: bold;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ValueBoxValue = styled.div`
  font-size: ${fontSize1};
  font-weight: bold;
  width: 40%;
  text-align: center;
`;
