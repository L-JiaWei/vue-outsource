<template>
    <div class="app-reviews">
        <div class="top">
            <span>reviews</span>
            <div>
                <el-button type="primary" round size='small'>Manage</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less">
.app-reviews{
    width: 60%;
    height: 300px;
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
}
</style>
