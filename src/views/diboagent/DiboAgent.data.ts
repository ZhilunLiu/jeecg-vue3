import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '姓名',
    align: "center",
    dataIndex: 'name'
  },
  {
    title: '手机',
    align: "center",
    dataIndex: 'phone'
  },
  {
    title: '角色',
    align: "center",
    dataIndex: 'role'
  },
  {
    title: '部门',
    align: "center",
    dataIndex: 'department_dictText'
  },
  {
    title: '邮箱',
    align: "center",
    dataIndex: 'mail'
  },
  {
    title: '职务',
    align: "center",
    dataIndex: 'job'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "姓名",
    field: 'name',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "手机",
    field: 'phone',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "角色",
    field: 'role',
    component: 'Input',
    colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入姓名!'},
             ];
    },
  },
  {
    label: '手机',
    field: 'phone',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入手机!'},
             ];
    },
  },
  {
    label: '角色',
    field: 'role',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入角色!'},
             ];
    },
  },
  {
    label: '部门',
    field: 'department',
    component: 'JSelectDept',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入部门!'},
             ];
    },
  },
  {
    label: '邮箱',
    field: 'mail',
    component: 'Input',
  },
  {
    label: '职务',
    field: 'job',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];
