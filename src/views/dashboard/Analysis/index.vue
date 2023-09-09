<template>
  <a-layout>
    <a-layout-content :style="{minHeight: '800px'}">
      <BMap ref = "map" height="100%" center="长沙市" zooom="12" enableScrollWheelZoom="true" @initd="handleInitd">
        <BMarker :position="point" @click="show=!show" icon="simple_red"></BMarker>
        <BInfoWindow v-model:show="show" :position="point" :title="addrText" enableAutoPan :enableCloseOnClick="false" />
      </BMap>
    </a-layout-content>
    <a-layout-sider width="400" style="padding-left: 5px">
      <a-layout-content :style="contentStyle" >
        <a-table :columns="columns" :data-source="data" bordered showHeader="false" size="small">
          <template #bodyCell="{column, record}">
            <template v-if="column.key=='name'">
              <a @click="clickButton(record.name)">
                {{record.name}}
              </a>
            </template>
          </template>
        </a-table>
      </a-layout-content>
      <a-layout-content :style="contentStyle">

      </a-layout-content>
    </a-layout-sider>
  </a-layout>
</template>
<script lang="ts" setup>
  import {CSSProperties, ref, watch} from 'vue';
  import {UploadChangeParam} from "ant-design-vue";
  import { useAddressGeocoder, Point } from 'vue3-baidu-map-gl'
  import {defHttp} from "/@/utils/http/axios";
  import {list} from "/@/views/system/dict/dict.api";
 const handleChange = (info: UploadChangeParam) => {
   if(info.file.status=='done'){

   }
 };

 const fileList = ref([]);


  const map = ref()

  const { get, point, isLoading, isEmpty } = useAddressGeocoder<Point>(() => {
    map.value.resetCenter()
  })

  function handleInitd() {
    get("长沙市岳麓区中海阅江府","长沙市")
    map.value.resetCenter()
  }



  const show = ref<boolean>(false)
  const text = 'XXXXX'
  const addrText = '长沙市岳麓区中海阅江府'

  const columns = [
    {
      title: 'Name',
      name: 'Name',
      dataIndex: 'name',
      key: 'name',
    }
  ];

 const data = [
   {
     key:'1',
     name:'绿地梅溪里一期',
     address:'XXXX'
   },
   {
     key:'2',
     name:'新城科技园',
     address:'XXX'
   }
 ];

 function clickButton(key){

 }

 const contentStyle: CSSProperties ={
   height:'500px',
   color:'#fff',
   background:'#fff',
   padding: '5px',
 }

</script>

<style lang="less">
.map {
  width:80%;
  height: 100%;
}
</style>
