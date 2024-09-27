<template>
    <div class="test">
        <div class="box" @scroll="scrollHandle">
            <template v-for="(item,index)  in data" :key="index">
                <div class="item" :style="{marginLeft:'120px'}">
                    <div class="secItem" v-for="secItem in item" :key="secItem.value" >
                        <div class="title" :ref="(el)=>getDivDom(el,secItem)">
                            test{{ secItem.label }}
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <svg class="svg" pointer-events="none" :style="{transform:`translateX(-${scrollLeft}px)`}">
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="black"/>
                </marker>
            </defs>
            <line v-for="(item,index) in lineArr" :key="index" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" stroke="black" stroke-width="2" marker-end="url(#arrow)" />  
        </svg>
    </div>

  </template>
<script setup>
import { computed, onMounted, ref } from 'vue';
const data = [
    [
        {
            label:'1',
            value:'1'
        },
    ],
    [
        {
            label:'2',
            value:'2',
            parent:['1']
        },
        {
            label:'3',
            value:'3',
            parent:['1']
        },
        {
            label:'4',
            value:'4'
        },
        {
            label:'6',
            value:'6',
            parent:['1']
        }
    ],
    [
        {
            label:'5',
            value:'5',
            parent:['2','3','4']
        },
        {
            label:'8',
            value:'8',
            parent:['6']
        }
    ],    
    [
        {
            label:'7',
            value:'7',
            parent:['5']
        }
    ],
    [
        {
            label:'9',
            value:'9',
            parent:['7']
        },
        {
            label:'13',
            value:'13',
            parent:['7']
        }
    ],
    [
        {
            label:'10',
            value:'10',
            parent:['13']

        }
    ],
    [
        {
            label:'11',
            value:'11',
            parent:['13']

        }
    ],
    [
        {
            label:'12',
            value:'12',
            parent:['11']

        }
    ]
]
const scrollLeft = ref(0)
const scrollHandle = (e) =>{
    scrollLeft.value = e.target.scrollLeft
}
const divDomList = ref({});
const getDivDom = (el,item) =>{
    if(el){
        let copy = divDomList.value
        copy[item.value] = el
        divDomList.value = copy 
    }
}
const getTanDeg=(tan)=> {
    var result = Math.atan(tan) / (Math.PI / 180);
    result = Math.round(result);
    return result;
}
const positionMap = ref({})
const getPosition = (x1,y1,x2,y2) =>{
    let tan1 = (y2-y1)/(x2-x1)
    let a1 = getTanDeg(tan1)
    y1 = y1+25+Math.sin(a1*Math.PI/180)*25
    y2 = y2+25-Math.sin(a1*Math.PI/180)*25-15*Math.sin(a1*Math.PI/180)
    x1 = x1+Math.cos(a1*Math.PI/180)*25+25
    x2 = x2-Math.cos(a1*Math.PI/180)*25+25-15*Math.cos(a1*Math.PI/180)
    return {x1,y1,x2,y2}
}
const lineArr = computed(()=>{
    let arr = []
    data.forEach(item=>{
        item.forEach(secItem=>{
            if(Object.values(divDomList.value).length) {
                let { value } = secItem
                let x2,y2
                if(positionMap[value]) {
                    x2 = positionMap[value].x 
                    y2 = positionMap[value].y
                }else {
                    let prev = divDomList.value[value].getBoundingClientRect()
                    x2 = prev.left
                    y2 = prev.top
                    positionMap.value[value] = { x:x2,y:y2 }
                }
                if(secItem?.parent?.length) {
                    secItem.parent.forEach(tirItem=>{
                        let x1,y1
                        if(positionMap[tirItem]) {
                            x1 = positionMap[tirItem].x
                            y1 = positionMap[tirItem].y
                        }else {
                            let prev =divDomList.value[tirItem].getBoundingClientRect()
                            x1 = prev.left
                            y1 = prev.top
                            positionMap.value[tirItem] = { x:x1,y:y1 }
                        }
                        arr.push(getPosition(x1,y1,x2,y2))
                    })
                }
            }
        })
    })
    return arr
})
</script>
<style scoped lang="less">
.test {
    overflow: hidden;
    position: relative;
    width: 1000px;
    .box {
        position: relative;
        width: 1000px;
        overflow: auto;
        display: flex;
        align-items: center;
        .item {
            position: relative;
            .secItem {
                position: relative;
                .title {
                    margin: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    color: white;
                    background:linear-gradient(135deg, #367ee8 0%, #3650e8 100%);
                }
                .connect {
                    top: 0;
                    position: absolute;
                }
            }
        }
    }
    .svg {
        width: 2000px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
}
</style>