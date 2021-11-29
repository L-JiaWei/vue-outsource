<template>
    <div class="app-exper">
        <div class="top">
            <span>Experice</span>
            <div>
                <el-button type="primary" round size='small'>Add</el-button>
                <el-button type="primary" round size='small'>Manage</el-button>
            </div>
        </div>
        <div class="box">
            <el-card shadow="hover">
                <div class="card">
                    <div class="text">Active physical learning - RL assisted World Modeling(item name)</div>
                    <div class="text1">Mar 2019 - Aug 2019(from to time)</div>
                    <div class="text1">(education facility/company name)</div>
                    <div><el-link type="primary">item link</el-link></div>
                    <div class="text1">project description</div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="card">
                    <div class="text">Active physical learning - RL assisted World Modeling(item name)</div>
                    <div class="text1">Mar 2019 - Aug 2019(from to time)</div>
                    <div class="text1">(education facility/company name)</div>
                    <div><el-link type="primary">item link</el-link></div>
                    <div class="text1">project description</div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="card">
                    <div class="text">Active physical learning - RL assisted World Modeling(item name)</div>
                    <div class="text1">Mar 2019 - Aug 2019(from to time)</div>
                    <div class="text1">(education facility/company name)</div>
                    <div><el-link type="primary">item link</el-link></div>
                    <div class="text1">project description</div>
                </div>
            </el-card>
        </div>
        <div class="foot">
            <el-pagination background layout="prev, pager, next" :total="100" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less">
.app-exper{
    width: 60%;
    height: 650px;
    margin: auto;
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
    }
    .el-card{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .card{
        text-align: left;
        line-height: 25px;
    }
    .text{
        font-size: 20px;
        font-weight: bold;
    }
    .text1{
        font-size: 15px;
    }
    .foot{
        margin-top: 20px;
    }
}
</style>