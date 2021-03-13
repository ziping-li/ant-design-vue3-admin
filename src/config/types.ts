export interface LoginParams {
  username: string;
  password: string;
}

export interface UserInfo {
  id: number;
  name: string;
  nickname: string;
  password?: string;
  role: string;
  permissions: string[];
}

export interface Notification {
  id: number;
  type: number;
  title: Record<string, string>;
  time: string;
  isReaded: boolean;
}

export interface Menu {
  id: number;
  name: string;
  icon: string;
  path?: string;
  permissionCode?: string;
  children: Menu[];
}

export type Lang = 'en-US' | 'zh-CN';

export interface Overview {
  miniBar: any[];
  miniArea: any[];
  barData: any[];
  barData2: any[];
  rankList: Record<any, any>;
  searchData: Record<any, any>;
  pieData: Record<any, any>;
}
