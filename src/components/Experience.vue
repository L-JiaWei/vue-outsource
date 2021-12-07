<template>
    <div class="app-exper">
        <div class="top">
            <span>Experice</span>
            <div>
                <el-button type="primary" round size='small' @click="Add">Add</el-button>
            </div>
        </div>
        <div class="box">
            <div v-if="showItem.length">
                <el-card
                  shadow="hover"
                    v-for="(item,index) in showItem"
                    :key="item"
                >
                  <template #header>
                    <div class="head">
                      <h3>{{item.name}}</h3>
                      <div>
                        <el-button type="text" @click="del(index)">delete</el-button>
                      </div>
                    </div>
                  </template>
                  <el-descriptions title="item" column="1">
                    <el-descriptions-item label="Time：">{{item.date}}</el-descriptions-item>
                    <el-descriptions-item label="Entity：">{{item.entity}}</el-descriptions-item>
                    <el-descriptions-item label="Link：" type="primary"><el-link>{{"Http://"+item.link}}</el-link></el-descriptions-item>
                    <el-descriptions-item label="Description：">{{item.description}}</el-descriptions-item>
                  </el-descriptions>
                </el-card>
              </div>
            <div v-else>
                <el-empty description="description"></el-empty>
            </div>
        </div>
        <footer class="foot">
            <el-pagination 
                background layout="prev, pager, next"
                :page-count="pageCount"
                :current-page="obj.currentPage"
                @current-change="currentChange"
                onUpdate:obj.currentPage
                hide-on-single-page="true"
                v-if="obj.isOpenPagination" 
            />
        </footer>
        <el-dialog
            v-model="obj.dialogVisible"
            title="Project information"
            width="40%"
            :before-close="Empty"
        >
            <el-form 
                label-width="130px"
                ref="refruleForm"
                :model="ruleForm"
                :rules="formRules"
            >
                <el-form-item label="Item Name:" prop="name">
                    <el-input placeholder="item name" v-model="ruleForm.name" />
                </el-form-item>
            </el-form>
            <el-date-picker 
              v-model="ruleForm.date" 
              type="date" 
              placeholder="Pick a day"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"  
            />
            <el-form 
                label-width="130px"
                ref="refruleForm"
                :model="ruleForm"
                :rules="formRules"
            >
                <el-form-item label="Associated Entity:" prop="entity">
                    <el-input placeholder="company name" v-model="ruleForm.entity" />
                </el-form-item>
            
                <el-form-item label="Item Link:" prop="link">
                    <el-input placeholder="Item Link" v-model="ruleForm.link">
                        <template #prepend>Http://</template>
                    </el-input>
                </el-form-item>
            
                <el-form-item label="Project Description">
                    <el-input placeholder="project description" type="textarea" :rows="3" v-model="ruleForm.description" />
                </el-form-item>
            </el-form>
            <el-button type="default" round size='small' @click="Empty">Cancel</el-button>
            <el-button type="primary" round size='small' @click="confirm">Confirm</el-button>
        </el-dialog>
    </div>
    <reviews />
</template>

<script setup>
import { reactive, ref,computed,onMounted } from 'vue'
import { useStore } from 'vuex'
import reviews from './Reviews.vue'

onMounted(() => {
	let mydata = localStorage.getItem("mydata")
	console.log(mydata)
	if(mydata){
		mydata = JSON.parse(mydata)
		store.commit("updataTasks",mydata)
		console.log(store.state.ltemLinkList)
	}
})

window.onbeforeunload = (event) => {
	let mydata = store.state.ltemLinkList
	localStorage.setItem("mydata",JSON.stringify(mydata))
}

const store = useStore()

const obj = reactive({
    dialogVisible:false,
    isOpenPagination:true,
    currentPage:1
})

const itemList = computed(() => store.state.ltemLinkList)

//监听 current-page 变更的事件（onUpdate:currentPage）
const currentChange = res => {
    obj.currentPage =res
}

const showItem = computed(() => {
    return itemList.value.slice(
        (obj.currentPage-1)*2,
        obj.currentPage*2
    )
})

let pageCount = computed(() => Math.ceil(itemList.value.length/2))

const Add = () => {
    obj.dialogVisible = true
}

const initFrom = { 
    name:"",
    entity:"",
    description:"",
    date:"",
    link:""
}

let ruleForm = ref({
  ...initFrom
})

const confirm = () => {
    store.commit("addItemLink",ruleForm.value)
    obj.dialogVisible=false
    ruleForm.value = {...initFrom}
}

const Empty = () => {
    ruleForm.value = {...initFrom}
    obj.dialogVisible=false

}

const del = (index) => {
    store.commit("deleteItem",index)
    if(itemList.value.length<1){
    }
}

</script>

<style lang="less">
.app-exper{
    width: 60%;
    height: 800px;
    margin: auto;
    margin-bottom: 20px;
    border: 1px solid var(--el-border-color-base);
    box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1) ;
    .top{
        height: 50px;
        border-bottom: 1px solid var(--el-border-color-base);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px 0px 10px;
    }
    .box{
        width: 98%;
        margin: auto;
        height: 670px;
    }
    .el-card{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .foot{
        margin-top: 20px;
    }
    .el-form-item{
        margin: auto;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .head{
      display: flex;
      justify-content: space-between;
    }
}
</style>
