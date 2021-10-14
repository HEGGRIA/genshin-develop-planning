/* eslint-disable no-unused-vars */
import './MainLayout.css';

import { InputNumber } from 'antd';
import { Observer, useLocalStore } from 'mobx-react';
import React, { useEffect, useState } from 'react';

import store from '../../../store';
import BuffGroupStore from '../../../store/buffGroup';
import AttributeInputPanel from '../../panel/attributeInputPanel/AttributeInputPanel';
import BuffConfigPanel, {
  BuffGroup,
  BuffTypeCode,
} from '../../panel/buffConfigPanel/BuffConfigPanel';

function MainLayout() {
  const { buffGroupStore } = useLocalStore(() => store);
  const buffConfigChange = (buffGroup: BuffGroup, index: number) => {
    let { buffGroupsData } = buffGroupStore;
    buffGroupsData[index] = buffGroup;
    buffGroupStore.changeBuffGroups(buffGroupsData);
  };
  return (
    <div className="site-layout-background">
      <div className="mainLayout">
        {/* <AttributeInputPanel
          title={'人物基础面板'}
          formLiteral={[
            { title: '基础攻击力' },
            { title: '基础防御力' },
            { title: '最大生命值' },
            { title: '基础元素充能效率/%' },
            { title: '基础暴击率/%' },
            { title: '基础暴击伤害/%' },
          ]}></AttributeInputPanel>
        <AttributeInputPanel
          title={'武器基础面板'}
          formLiteral={[
            { title: '基础攻击力' },
            { title: '攻击力/%' },
            { title: '防御力/%' },
            { title: '生命值/%' },
            { title: '元素充能效率/%' },
            { title: '元素精通/+' },
            { title: '暴击率/%' },
            { title: '暴击伤害/%' },
            { title: '物理伤害加成/%' },
          ]}></AttributeInputPanel>
        <AttributeInputPanel
          title={'圣遗物配置'}
          formLiteral={[
            { title: '主词条配置' },
            { title: '添加副词条' },
          ]}></AttributeInputPanel>
        <AttributeInputPanel
          title={'多Buff配置（来源共鸣、天赋、队友、圣遗物套装等）'}
          formLiteral={[
            { title: '名称' },
            { title: '生效率' },
            { title: '添加生效词条' },
            { title: '攻击力/+' },
            { title: '攻击力/%' },
            { title: '防御力/+' },
            { title: '防御力/%' },
            { title: '生命值/+' },
            { title: '生命值/%' },
            { title: '元素充能效率/%' },
            { title: '元素精通/+' },
            { title: '暴击率/%' },
            { title: '暴击伤害/%' },
            { title: '火元素伤害加成/%' },
            { title: '草元素伤害加成/%' },
            { title: '雷元素伤害加成/%' },
            { title: '水元素伤害加成/%' },
            { title: '岩元素伤害加成/%' },
            { title: '冰元素伤害加成/%' },
            { title: '风元素伤害加成/%' },
            { title: '物理伤害加成/%' },
          ]}></AttributeInputPanel> */}
      </div>
      <div className="mainLayout">
        {buffGroupStore.buffGroupsData.map((item, index) => (
          <BuffConfigPanel
            key={index}
            buffGroup={item}
            index={0}
            buffConfigChange={buffConfigChange}></BuffConfigPanel>
        ))}
      </div>
    </div>
  );
}

export default MainLayout;