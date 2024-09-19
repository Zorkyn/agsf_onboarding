export const useCounter = () => {
  // standard use of counter without caching
  const counter = ref(0)

  // save the counter value between page navigations
  // const counter = useState('counter', () => 0)

  const increment = () => counter.value++
  const decrement = () => counter.value--
  const reset = () => (counter.value = 0)

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
