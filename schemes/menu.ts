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
      ],
    },
    {
      id: 7,
      name: 'Result',
      icon: 'CheckSquareOutlined',
      permissionCode: 'view:result',
      children: [
        {
          id: 8,
          name: 'Success',
          path: '/result/success',
          permissionCode: 'view:result_success',
        },
        {
          id: 9,
          name: 'Fail',
          path: '/result/fail',
          permissionCode: 'view:result_fail',
        },
      ],
    },
    {
      id: 10,
      name: 'Component',
      icon: 'ControlOutlined',
      permissionCode: 'view:components',
      children: [
        {
          id: 11,
          name: 'Phone',
          path: '/components/phone',
          permissionCode: 'view:components_phone',
        },
        {
          id: 12,
          name: 'Send code',
          path: '/components/otp-send',
          permissionCode: 'view:components_otp-send',
        },
        {
          id: 13,
          name: 'Enter code',
          path: '/components/otp-input',
          permissionCode: 'view:components_otp-input',
        },
        {
          id: 14,
          name: 'Formatted',
          path: '/components/formatted-input',
          permissionCode: 'view:components_formatted',
        },
        {
          id: 15,
          name: 'Scroll',
          path: '/components/scroll',
          permissionCode: 'view:components_scroll',
        },
        {
          id: 16,
          name: 'Rich Text',
          path: '/components/wangeditor',
          permissionCode: 'view:componentsr_wangeditor',
        },
        {
          id: 17,
          name: 'Markdown',
          path: '/components/markdown',
          permissionCode: 'view:components_markdown',
        },
      ],
    },
    {
      id: 18,
      name: 'Authority',
      icon: 'ControlOutlined',
      permissionCode: 'view:authority',
      children: [
        {
          id: 19,
          name: 'Route',
          path: '/authority/route',
          permissionCode: 'view:authority_route',
        },
        {
          id: 20,
          name: 'Menu',
          path: '/authority/menu',
          permissionCode: 'view:authority_route',
        },
        {
          id: 21,
          name: 'Operate',
          path: '/authority/operate',
          permissionCode: 'view:authority_operate',
        },
      ],
    },
    {
      id: 22,
      name: 'Exception',
      icon: 'WarningOutlined',
      children: [
        {
          id: 23,
          name: '403',
          path: '/403',
          permissionCode: 'view:403',
        },
        {
          id: 24,
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
      ],
    },
    {
      id: 7,
      name: '结果页',
      icon: 'CheckSquareOutlined',
      permissionCode: 'view:result',
      children: [
        {
          id: 8,
          name: '成功页',
          path: '/result/success',
          permissionCode: 'view:result_success',
        },
        {
          id: 9,
          name: '失败页',
          path: '/result/fail',
          permissionCode: 'view:result_fail',
        },
      ],
    },
    {
      id: 10,
      name: '组件',
      icon: 'ControlOutlined',
      permissionCode: 'view:components',
      children: [
        {
          id: 11,
          name: '电话',
          path: '/components/phone',
          permissionCode: 'view:components_phone',
        },
        {
          id: 12,
          name: '发送验证码',
          path: '/components/otp-send',
          permissionCode: 'view:components_otp-send',
        },
        {
          id: 13,
          name: '输入验证码',
          path: '/components/otp-input',
          permissionCode: 'view:components_otp-input',
        },
        {
          id: 14,
          name: '格式化输入',
          path: '/components/formatted-input',
          permissionCode: 'view:components_formatted',
        },
        {
          id: 15,
          name: '滚动',
          path: '/components/scroll',
          permissionCode: 'view:components_scroll',
        },
        {
          id: 16,
          name: '富文本',
          path: '/components/wangeditor',
          permissionCode: 'view:components_wangeditor',
        },
        {
          id: 17,
          name: 'Markdown',
          path: '/components/markdown',
          permissionCode: 'view:components_markdown',
        },
      ],
    },
    {
      id: 18,
      name: '权限',
      icon: 'ControlOutlined',
      permissionCode: 'view:authority',
      children: [
        {
          id: 19,
          name: '路由权限',
          path: '/authority/route',
          permissionCode: 'view:authority_route',
        },
        {
          id: 20,
          name: '菜单权限',
          path: '/authority/menu',
          permissionCode: 'view:authority_route',
        },
        {
          id: 21,
          name: '操作权限',
          path: '/authority/operate',
          permissionCode: 'view:authority_operate',
        },
      ],
    },
    {
      id: 22,
      name: '异常页',
      icon: 'WarningOutlined',
      children: [
        {
          id: 23,
          name: '403',
          path: '/403',
          permissionCode: 'view:403',
        },
        {
          id: 24,
          name: '404',
          path: '/404',
          permissionCode: 'view:404',
        },
      ],
    },
  ],
};
