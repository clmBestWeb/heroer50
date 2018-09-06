<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add">Add</a> -->
        <router-link class='btn btn-success' to="/heroes/add">Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr 
              v-for="(item,index) in list"
              :key="item.id">
                <td>{{ index + 1}}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="javascript:;" @click.prevent="handleDelete(item.id)">delete</a>
                </td>
              </tr>
              <tr>
                <td v-if="list.length == 0" colspan="4">暂无数据</td>
              </tr>
            </tbody>
          </table>
    </div>
    </div>
</template>

<script>
// 导入axios
import axios from 'axios';


// export default {
//     data(){
//       return {
//         list:[]
//       };
//      },
// mounted() {
//   this.loadData();
// },
// methods:{
//   // 加载数据
//   loadData(){
//     axios
//         .get('http://localhost:3001/heroes')
//         .then((response) => {
//           if(response.status === 200){
//             this.list = response.data;
//           }
//         })
//         .catch((err) =>{
//           console.log(err);
          
//         })
//   }
// }
// }
export default{
  data(){
    return {
      list:[]
    }
  },
  mounted(){ 
      this.ListData();
  },
  methods:{
    ListData(){
      axios
          .get('http://localhost:3001/heroes')
          .then((Response)=>{
            if(Response.status === 200){
              this.list = Response.data;
            }
          })
          .catch((err)=>{
            console.log(err);
            
          })
    },
    handleDelete(id){
      //删除提示
      if(!confirm('您确定删除吗')){
        return;
      }
      // id为何要用模板字符串
      axios
          .delete(`http://localhost:3001/heroes/${id}`)
          .then((response)=>{
            if(response.status === 200){
              alert('删除成功');
              this.ListData();
            } else {
              alert('删除失败')
            }
          })
          .catch((err)=>{
            console.log(err);
            
          })
    }
  }
}
</script>

<style>

</style>
