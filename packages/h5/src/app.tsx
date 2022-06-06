import HomeGary from '@/assets/demoIcon/home.png';
import HomeBlue from '@/assets/demoIcon/home1.png';
import SetGary from '@/assets/demoIcon/setting.png';
import SetBlue from '@/assets/demoIcon/setting1.png';

import type { NavBarListItem, NavBarProps, TabBarListItem, TabBarProps, TitleListItem } from 'alita';
import { history } from 'alita';

// 页面标题，也可以通过页面级别修改
const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '首页',
  },
  {
    pagePath: '/my',
    title: '我的',
  },
];
const navList: NavBarListItem[] = [];
const navBar: NavBarProps = {
  navList,
  fixed: false,
  onLeftClick: () => {
    history.back();
  },
};
const tabList: TabBarListItem[] = [
  {
    pagePath: '/',
    text: '首页',
    iconPath: HomeGary,
    selectedIconPath: HomeBlue,
    title: '首页',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/my',
    text: '我的',
    iconPath: SetGary,
    selectedIconPath: SetBlue,
    title: '我的',
    iconSize: '',
    badge: '',
  },
];

const tabBar: TabBarProps = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
