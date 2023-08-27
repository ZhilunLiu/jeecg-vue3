import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '机构名称',
    align: "center",
    dataIndex: 'agencyName'
  },
  {
    title: '机构地址',
    align: "center",
    dataIndex: 'agencyAddress'
  },
  {
    title: '管辖区域',
    align: "center",
    dataIndex: 'area_dictText'
  },
  {
    title: '联系人',
    align: "center",
    dataIndex: 'contact'
  },
  {
    title: '电话',
    align: "center",
    dataIndex: 'phonenum'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '机构名称',
    field: 'agencyName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入机构名称!'},
             ];
    },
  },
  {
    label: '机构地址',
    field: 'agencyAddress',
    component: 'Input',
  },
  {
    label: '管辖区域',
    field: 'area',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
  },
  {
    label: '联系人',
    field: 'contact',
    component: 'Input',
  },
  {
    label: '电话',
    field: 'phonenum',
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
