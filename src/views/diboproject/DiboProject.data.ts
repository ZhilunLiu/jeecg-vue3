import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '项目编号',
    align: "center",
    dataIndex: 'projectNumber'
  },
  {
    title: '负责人',
    align: "center",
    dataIndex: 'projectAgent_dictText'
  },
  {
    title: '项目类别',
    align: "center",
    dataIndex: 'projectType_dictText'
  },
  {
    title: '项目名称',
    align: "center",
    dataIndex: 'projectName'
  },
  {
    title: '项目地址',
    align: "center",
    dataIndex: 'projectAddress'
  },
  {
    title: '所属部门',
    align: "center",
    dataIndex: 'projectDepartment_dictText'
  },
  {
    title: '状态',
    align: "center",
    dataIndex: 'status'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "项目编号",
    field: 'projectNumber',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "创建日期",
    field: 'createTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    colProps: {span: 6},
  },
  {
    label: "所属部门",
    field: 'sysOrgCode',
    component: 'JSelectDept',
    colProps: {span: 6},
  },
  {
    label: "项目类别",
    field: 'projectType',
    component: 'JDictSelectTag',
    componentProps:{
    },
    colProps: {span: 6},
  },
  {
    label: "项目名称",
    field: 'projectName',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "所属部门",
    field: 'projectDepartment',
    component: 'JSelectDept',
    colProps: {span: 6},
  },
  {
    label: "状态",
    field: 'status',
    component: 'Input',
    colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '负责人',
    field: 'projectAgent',
    component: 'JSelectUserByDept',
    componentProps:{
      labelKey: 'realname',
    },
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入负责人!'},
             ];
    },
  },
  {
    label: '项目类别',
    field: 'projectType',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入项目类别!'},
             ];
    },
  },
  {
    label: '项目名称',
    field: 'projectName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入项目名称!'},
             ];
    },
  },
  {
    label: '项目地址',
    field: 'projectAddress',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入项目地址!'},
             ];
    },
  },
  {
    label: '所属部门',
    field: 'projectDepartment',
    component: 'JSelectDept',
  },
  {
    label: '开始时间',
    field: 'starttime',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入开始时间!'},
             ];
    },
  },
  {
    label: '预计结束时间',
    field: 'endtime',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入预计结束时间!'},
             ];
    },
  },
	// TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];
