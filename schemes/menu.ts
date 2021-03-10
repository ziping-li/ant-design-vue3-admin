export default {
  'en-US': [
    {
      id: 1,
      name: 'Dashboard',
      icon: 'SlidersOutlined',
      permissionCode: 'view:dashboard',
      children: [
        {
          id: 2,
          name: 'Overview',
          path: '/dashboard/overview',
          permissionCode: 'view:dashboard_overview',
        },
        {
          id: 3,
          name: 'Workplace',
          path: '/dashboard/workplace',
          permissionCode: 'view:dashboard_workplace',
        },
      ],
    },
    {
      id: 4,
      name: 'Form',
      icon: 'FormOutlined',
      permissionCode: 'view:form',
      children: [
        {
          id: 5,
          name: 'Basic Form',
          path: '/form/basic',
          permissionCode: 'view:form_basic',
        },
        {
          id: 6,
          name: 'Step Form',
          path: '/form/step',
          permissionCode: 'view:form_step',
        },
        {
          id: 7,
          name: 'Advanced Form',
          path: '/form/advanced',
          permissionCode: 'view:form_advanced',
        },
      ],
    },
    {
      id: 8,
      name: 'List',
      icon: 'TableOutlined',
      permissionCode: 'view:list',
      children: [
        {
          id: 9,
          name: 'Search Table',
          path: '/list/search',
          permissionCode: 'view:list_search',
        },
        {
          id: 10,
          name: 'Card List',
          path: '/list/card',
          permissionCode: 'view:list_card',
        },
      ],
    },
    {
      id: 11,
      name: 'Profile',
      icon: 'ProfileOutlined',
      permissionCode: 'view:profile',
      children: [
        {
          id: 12,
          name: 'Basic Profile',
          path: '/profile/basic',
          permissionCode: 'view:profile_basic',
        }
      ],
    },
    {
      id: 13,
      name: 'Result',
      icon: 'CheckSquareOutlined',
      permissionCode: 'view:result',
      children: [
        {
          id: 14,
          name: 'Success',
          path: '/result/success',
          permissionCode: 'view:result_success',
        },
        {
          id: 15,
          name: 'Fail',
          path: '/result/fail',
          permissionCode: 'view:result_fail',
        },
      ],
    },
    {
      id: 16,
      name: 'Exception',
      icon: 'WarningOutlined',
      children: [
        {
          id: 17,
          name: '403',
          path: '/403',
          permissionCode: 'view:403',
        },
        {
          id: 18,
          name: '404',
          path: '/404',
          permissionCode: 'view:404',
        },
      ],
    },
  ],
  'zh-CN': [
    {
      id: 1,
      name: '仪表盘',
      icon: 'SlidersOutlined',
      permissionCode: 'view:dashboard',
      children: [
        {
          id: 2,
          name: '总览',
          path: '/dashboard/overview',
          permissionCode: 'view:dashboard_overview',
        },
        {
          id: 3,
          name: '工作台',
          path: '/dashboard/workplace',
          permissionCode: 'view:dashboard_workplace',
        },
      ],
    },
    {
      id: 4,
      name: '表单页',
      icon: 'FormOutlined',
      permissionCode: 'view:form',
      children: [
        {
          id: 5,
          name: '基础表单',
          path: '/form/basic',
          permissionCode: 'view:form_basic',
        },
        {
          id: 6,
          name: '分步表单',
          path: '/form/step',
          permissionCode: 'view:form_step',
        },
        {
          id: 7,
          name: '复杂表单',
          path: '/form/advanced',
          permissionCode: 'view:form_advanced',
        },
      ],
    },
    {
      id: 8,
      name: '列表页',
      icon: 'TableOutlined',
      permissionCode: 'view:list',
      children: [
        {
          id: 9,
          name: '查询表格',
          path: '/list/search',
          permissionCode: 'view:list_search',
        },
        {
          id: 10,
          name: '卡片列表',
          path: '/list/card',
          permissionCode: 'view:list_card',
        },
      ],
    },
    {
      id: 11,
      name: '详情页',
      icon: 'ProfileOutlined',
      permissionCode: 'view:profile',
      children: [
        {
          id: 12,
          name: '基础详情页',
          path: '/profile/basic',
          permissionCode: 'view:profile_basic',
        }
      ],
    },
    {
      id: 13,
      name: '结果页',
      icon: 'CheckSquareOutlined',
      permissionCode: 'view:result',
      children: [
        {
          id: 14,
          name: '成功页',
          path: '/result/success',
          permissionCode: 'view:result_success',
        },
        {
          id: 15,
          name: '失败页',
          path: '/result/fail',
          permissionCode: 'view:result_fail',
        },
      ],
    },
    {
      id: 16,
      name: '异常页',
      icon: 'WarningOutlined',
      children: [
        {
          id: 17,
          name: '403',
          path: '/403',
          permissionCode: 'view:403',
        },
        {
          id: 18,
          name: '404',
          path: '/404',
          permissionCode: 'view:404',
        },
      ],
    },
  ],
};
