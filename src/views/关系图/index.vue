<template>
    <div class="test">
        <div class="box" @scroll="scrollHandle">
            <template v-for="(item,index)  in data5" :key="index">
                <div class="item" :style="{marginLeft:'120px'}">
                    <div class="secItem" v-for="secItem in item" :key="secItem.value" >
                        <el-popover>
                            <template #reference>
                                <div class="title" :ref="(el)=>getDivDom(el,secItem)" @click="clickHandle">
                                    test{{ secItem.label }}
                                </div>
                            </template>
                            <div>
                                value:{{ secItem.value }}
                                label:{{ secItem.label }}
                            </div>
                        </el-popover>
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
import { taransform }  from './dfs'
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
let data1 = {
    name: '1',
    key: '1',
    children: [
        {
            name: '2',
            key: '2',
            children: [
                {
                    name: '6',
                    key: '6',
                    children: [
                        {
                            name: '7',
                            key: '7',
                            children: [
                                {
                                    name: '8',
                                    key: '8',
                                },
                                {
                                    name: '20',
                                    key: '20',
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: '3',
            key: '3'
        },
        {
            name: '4',
            key: '4'
        }
    ]
}
let data2 = {
    name: '9',
    key: '9',
    children: [
        {
            name: '7',
            key: '7',
            children: [
                {
                    name: '8',
                    key: '8'
                },
                {
                    name: '20',
                    key: '20'
                }
            ]
        },
        {
            name: '10',
            key: '10',
            children: [
                {
                    name: '11',
                    key: '11',
                    children: [
                        {
                            name: '12',
                            key: '12',
                            children: [
                                {
                                    name: '13',
                                    key: '13',
                                    children: [
                                        {
                                            name: '14',
                                            key: '14',
                                            children: [
                                                {
                                                    name: '15',
                                                    key: '15',
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
let data3 = {
    key: '5',
    name: '5',
    children: [
        {
            name: '6',
            key: '6',
            children: [
                {
                    name: '7',
                    key: '7',
                    children: [
                        {
                            name: '8',
                            key: '8',
                        },
                        {
                            name: '20',
                            key: '20',
                        }
                    ]
                }
            ]
        }
    ]
}
let data4 = [data1,data2,data3]
let data5 = taransform(data4)
console.log(data5,'data5')
const scrollLeft = ref(0)
const scrollHandle = (e) =>{
    scrollLeft.value = e.target.scrollLeft
}
const divDomList = ref({});
// console.log(divDomList,'divDomList')
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
    data5.forEach(item=>{
        item.forEach(secItem=>{
            if(Object.values(divDomList.value).length) {
                let { value } = secItem
                let x2,y2
                if(positionMap[value]) {
                    x2 = positionMap[value].x 
                    y2 = positionMap[value].y
                }else {
                    console.log(value,'divDomList')
                    console.log(divDomList,'divDomList')
                    console.log(divDomList.value[value],'divDomList')
                    let prev = divDomList.value[value].getBoundingClientRect()
                    x2 = prev.left
                    y2 = prev.top
                    positionMap.value[value] = { x:x2,y:y2 }
                }
                if(secItem?.parent?.length) {
                    secItem.parent.forEach(tirItem=>{
                        if(tirItem==null){
                            return
                        }
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
const clickHandle= () =>{
    console.log('这里执行')
}
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
                    cursor: pointer;
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