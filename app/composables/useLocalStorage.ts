export const useLocalStorage = (key: string, initialValue: string) => {
  const getItem = (key: string) => {
    const value = localStorage.getItem(key)
    try {
      return value ? JSON.parse(value) : ""
    } catch (e) {
      console.error(`Error parsing localStorage value for key "${key}":`, e)
      return ""
    }
  }

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return { getItem, setItem }
}
