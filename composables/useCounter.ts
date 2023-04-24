export default function (initValue: number = 0) {
  const counter = ref(initValue)

  const increase = () => {
    counter.value++
  }

  return {
    counter,
    increase,
  }
}
