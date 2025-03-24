<script setup lang="ts">
import WsRequest from '@/api'
import { reactive } from 'vue'
import { ElButton } from 'element-plus'

const request = (params: any) => {
    return new Promise((resolve, reject) => {
        WsRequest.post({ ...params })
            .then((res: any) => {
                resolve(res)
            })
            .catch((err: any) => {
                reject(err)
            })
    })
}
const columns = [
    {
        label: 'id',
        prop: 'id'
    },
    {
        label: 'firstname',
        prop: 'firstname'
    },
    {
        label: 'lastname',
        prop: 'lastname'
    },
    {
        label: 'tesst',
        render: (params, h) => {
            console.log(params, 'params')
            return h(ElButton, {}, '按钮')
        }
    }
]
const batchDel = (value: any) => {
    console.log(value, 'test')
}
const operateData = [
    {
        name: '批量删除任务',
        operate: batchDel
    },
    {
        name: '批量删除任务',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    },
    {
        main: true,
        name: '批量删除任务',
        opcode: 'batchDel',
        operate: batchDel
    }
]

const searchFilterData = reactive([
    {
        label: '哈哈哈哈哈哈哈',
        type: 'input',
        key: 'aaa'
    },
    {
        label: '2',
        type: 'select',
        key: 'bbb',
        selectList: [
            {
                label: '测试1',
                key: '1'
            }
        ]
    },
    {
        label: '3',
        type: 'datePicker',
        key: 'ccc'
    },
    {
        label: '4',
        type: 'treeSelect',
        key: 'ddd'
    },
    {
        label: '5',
        type: 'datePicker',
        key: 'eee'
    },
    {
        label: '6',
        type: 'treeSelect',
        key: 'fff',
        data: [
            {
                value: '1',
                label: 'Level one 1',
                children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        children: [
                            {
                                value: '1-1-1',
                                label: 'Level three 1-1-1'
                            }
                        ]
                    }
                ]
            },
            {
                value: '2',
                label: 'Level one 2',
                children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                            {
                                value: '2-1-1',
                                label: 'Level three 2-1-1'
                            }
                        ]
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                            {
                                value: '2-2-1',
                                label: 'Level three 2-2-1'
                            }
                        ]
                    }
                ]
            },
            {
                value: '3',
                label: 'Level one 3',
                children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                            {
                                value: '3-1-1',
                                label: 'Level three 3-1-1'
                            }
                        ]
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                            {
                                value: '3-2-1',
                                label: 'Level three 3-2-1'
                            }
                        ]
                    }
                ]
            }
        ]
    }
])
</script>

<template>
    <SearchTableBase
        :columns="columns"
        :searchFilterData="searchFilterData"
        :request="request"
        :operateData="operateData"
        dataUrl="/test"
    />
</template>

<style scoped>
.box {
    /* width: 1000px; */
    height: 400px;
}
</style>
