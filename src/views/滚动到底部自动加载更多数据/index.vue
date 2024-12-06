<template>
    <div style="height: 400px; overflow: hidden">
        <scrollLoad url="/loadMore" :pageSize="10">
            <template v-slot="{ item }">
                <div style="height: 100px; margin: 10px; background-color: cornflowerblue">
                    {{ item.title }}
                </div>
            </template>
        </scrollLoad>
    </div>
</template>
<script setup>
import scrollLoad from './scrollLoad.vue'
</script>
<style scoped lang="scss"></style>
