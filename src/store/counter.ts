import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const num = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const quadrupCount = computed(()=>doubleCount.value*2)
  const formData = reactive({
    name:'',
    age:''
  })
  const add = () => {
    num.value++
  }
  function increment(num:number) {
    count.value+=num
  }

  return { count,formData, doubleCount,quadrupCount, increment,num,add }
})
