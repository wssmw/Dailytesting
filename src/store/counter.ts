import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const num = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const quadrupCount = computed(()=>doubleCount.value*2)
  const add = () => {
    num.value++
  }
  function increment(num:number) {
    count.value+=num
  }

  return { count, doubleCount,quadrupCount, increment,num,add }
})
