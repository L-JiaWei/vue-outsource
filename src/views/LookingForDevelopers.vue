<template>
    <div class="app-LFDevelopers">
        <el-container>
            <el-header>
                <Navigation />
            </el-header>
            <el-main>
                <el-card class="card-content">
                    <div class="content">
                        <div class="title">
                            <h3>第一步：</h3>
                            <p>你需要什么样的开发者，或是一个团队？</p>
                        </div>
                        <el-card :body-style="{ padding: '0px' }">
                            <template #header>
                                <div class="card-header">
                                    <div class="tag-border">
                                        <el-tag
                                            v-for="tag in state.vocationTags"
                                            :key="tag"
                                            closable
                                            :disable-transitions="false"
                                            @close="deleteVocationTag(tag)"
                                        >{{ tag + "|" + state.number }}</el-tag>
                                    </div>
                                </div>
                            </template>
                            <div class="bottom">
                                <el-select
                                    class="WidSelect"
                                    @change="selectStack"
                                    filterable
                                    placeholder="选择所需职业"
                                    v-model="state.vocationVal"
                                >
                                    <el-option
                                        v-for="item in OPTIONS1"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                                <el-input-number v-model="state.num" :min="1" :max="10" />
                                <el-icon
                                    class="icon-style"
                                    @click="addVocation(state.vocationVal, state.num)"
                                >
                                    <circle-plus />
                                </el-icon>
                            </div>
                        </el-card>
                    </div>
                    <div class="content">
                        <div class="title">
                            <h3>第二步：</h3>
                            <p>你需要你的开发者具备什么样的技能？或者交给我们来判断</p>
                        </div>
                        <el-card :body-style="{ padding: '0px' }">
                            <template #header>
                                <div class="card-header">
                                    <div class="tag-border">
                                        <el-tag
                                            v-for="tag in state.skillTags"
                                            :key="tag"
                                            closable
                                            :disable-transitions="false"
                                            @close="deleteSkillTags(tag)"
                                        >{{ tag }}</el-tag>
                                    </div>
                                </div>
                            </template>
                            <div class="bottom">
                                <el-select
                                    class="WidSelect2"
                                    @change="selectStack"
                                    filterable
                                    placeholder="选择所需技术栈"
                                    v-model="state.skillVal"
                                >
                                    <el-option
                                        v-for="item in OPTIONS2"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>

                                <el-icon class="icon-style" @click="addSkill(state.skillVal)">
                                    <circle-plus />
                                </el-icon>
                            </div>
                        </el-card>
                    </div>
                    <el-button type="primary" class="btn">发布</el-button>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue';
import { CirclePlus } from '@element-plus/icons';
import { reactive, ref } from 'vue'

const state = reactive({
    num: 1,
    vocationVal: "",
    skillVal: "",
    number: null,
    vocationTags: ([]),
    skillTags: ([])
})

const addVocation = (value, number) => {
    if (state.vocationTags.indexOf(value) === -1 && value !== "") {
        state.vocationTags.push(value);
        state.number = number
    }

}

const deleteVocationTag = (tag) => {
    state.vocationTags.splice(state.vocationTags.indexOf(tag), 1);
};

const addSkill = (value) => {
    if (state.skillTags.indexOf(value) === -1 && value !== "") {
        state.skillTags.push(value);
    }
}

const deleteSkillTags = (tag) => {
    state.skillTags.splice(state.skillTags.indexOf(tag), 1);
};

const OPTIONS1 = [
    {
        value: "网页前端开发者",
        label: "网页前端开发者",
    },
    {
        value: "移动端开发者",
        label: "移动端开发者",
    },
    {
        value: "后端开发者",
        label: "后端开发者",
    },
    {
        value: "游戏开发者",
        label: "游戏开发者",
    },
    {
        value: "产品策划",
        label: "产品策划",
    },
    {
        value: "网页美工",
        label: "网页美工",
    },
];

const OPTIONS2 = [
    {
        value: "Vue",
        label: "Vue",
    },
    {
        value: "Vuex",
        label: "Vuex",
    },
    {
        value: "React",
        label: "React",
    },
    {
        value: "Vue-Router",
        label: "Vue-Router",
    },
    {
        value: "Java Script",
        label: "Java Script",
    },
    {
        value: "Java",
        label: "Java",
    },
    {
        value: "C++",
        label: "C++",
    },
]
</script>

<style lang="less">
.app-LFDevelopers {
    widows: 100%;
    .card-content {
        width: 60%;
        margin: 25px auto;
        .content {
            width: 60%;
            margin: 25px auto;
            .title {
                text-align: left;
                margin-left: 20px;
            }
            .card-header {
                height: 100px;
            }
            .bottom {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .WidSelect {
                    width: 60%;
                }
                .WidSelect2 {
                    width: 92%;
                }
                .icon-style {
                    font-size: 40px;
                    color: #409eff;
                }
            }
            .el-tag {
                border-radius: 20px;
                font-size: medium;
                margin-right: 15px;
            }
            .btn {
                padding: 15px 50px;
            }
        }
    }
}
</style>