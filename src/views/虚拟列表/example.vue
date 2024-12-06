<script setup lang="ts">
import index from './index.vue'
const tableData = [
    {
        name: '11',
        age: '1'
    },
    {
        name: '11',
        age: '2'
    },
    {
        name: '11',
        age: '3'
    },
    {
        name: '11',
        age: '4'
    },
    {
        name: '11',
        age: '5'
    },
    {
        name: '11',
        age: '6'
    }
]
</script>

<template>
    <div class="box">
        <index :data="tableData">
            <template #default="slotScope">
                <div style="height: 100px; margin: 20px; background-color: darkorange">
                    {{ slotScope }}
                </div>
            </template>
        </index>
    </div>
</template>

<style scoped lang="less">
.box {
    // margin: 20px;
    height: 400px;
}
</style>
