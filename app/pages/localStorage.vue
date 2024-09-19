<template>
  <div>
    <h1 class="text-xl font-bold m-5">This is useLocalStorage page</h1>
    <div class="flex flex-col w-96 m-2">
      <input
        type="text"
        v-model="myInput"
        class="block bg-whit border border-black rounded-md py-2 pl-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 mb-2"
        placeholder="Input text for saving in Local Storage..."
      />
      <button @click="setValue" class="button">
        Set data to Local Storage
      </button>
    </div>
    <div class="flex-col w-96 mx-2 my-10">
      <button @click="getValue" class="button w-96">
        Read data from Local Storage
      </button>
      <div class="block bg-whit border border-black p-4 mt-2">
        {{ dataFromStorage }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { getItem, setItem } = useLocalStorage()
const myInput = ref("")
const dataFromStorage = ref("")

const getValue = () => {
  dataFromStorage.value = getItem("my-counter")
  console.log("dataFromStorage=" + dataFromStorage.value)
}

const setValue = () => {
  setItem("my-counter", myInput.value)
}
</script>
