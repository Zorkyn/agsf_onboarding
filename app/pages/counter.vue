<template>
  <div>
    <h1 class="text-xl font-bold m-5">This is useCounter page</h1>
    <div class="m-2">Counter value: {{ counter }}</div>
    <div class="flex flex-col max-w-prose">
      <button @click="increment" class="button m-2">Increment</button>
      <button @click="decrement" class="button m-2">Decrement</button>
      <button @click="reset" class="button m-2">Reset</button>
    </div>
  </div>
</template>

<script setup>
const { counter, increment, decrement, reset } = useCounter()
</script>
