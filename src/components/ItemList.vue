<template>
    <div class="app-itemList">
        <div class="box">
                <el-card shadow="hover" >
                    <template #header>
                        <div class="card header">
                            <div class="card-left">
                                <p>Project Title</p>
                                <p>Project type</p>
                                <p>Required skill tags</p>
                            </div>
                            <div class="card-right">
                                <p>Client Name</p>
                                <p>Client Ratings</p>
                            </div>
                        </div>
                    </template>
                    <el-card>Specific dexcription</el-card>
                    <div class="card">
                        <div class="card-left">
                            <p>Expected time range</p>
                        </div>
                        <div class="card-right">
                            <p>Hourly rate: Expected payment range $/hour</p>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" >
                    <template #header>
                        <div class="card header">
                            <div class="card-left">
                                <p>Project Title</p>
                                <p>Project type</p>
                                <p>Required skill tags</p>
                            </div>
                            <div class="card-right">
                                <p>Client Name</p>
                                <p>Client Ratings</p>
                            </div>
                        </div>
                    </template>
                    <el-card>Specific dexcription</el-card>
                    <div class="card">
                        <div class="card-left">
                            <p>Expected time range</p>
                        </div>
                        <div class="card-right">
                            <p>Hourly rate: Expected payment range $/hour</p>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" >
                    <template #header>
                        <div class="card header">
                            <div class="card-left">
                                <p>Project Title</p>
                                <p>Project type</p>
                                <p>Required skill tags</p>
                            </div>
                            <div class="card-right">
                                <p>Client Name</p>
                                <p>Client Ratings</p>
                            </div>
                        </div>
                    </template>
                    <el-card>Specific dexcription</el-card>
                    <div class="card">
                        <div class="card-left">
                            <p>Expected time range</p>
                        </div>
                        <div class="card-right">
                            <p>Hourly rate: Expected payment range $/hour</p>
                        </div>
                    </div>
                </el-card>
                
            </div>
            <footer>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page="state.currentPage"
                    :page-count="pageCount"
                    v-if="state.isOpenPagination"
                    @current-change="currentChange"
                ></el-pagination>
            </footer>
        </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const currentChange = res => {
    state.currentPage = res
    console.log(res)
}

const state = reactive({
    currentPage: 1,
    isOpenPagination: true,
})
let pageCount = 3

</script>

<style lang="less">
.app-itemList {
    width: 100%;
    margin: 0 auto;
    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>