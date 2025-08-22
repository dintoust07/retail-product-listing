function debounce<T extends (...args: string[]) => void>(
  func: T, 
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: string[]) => {
    clearTimeout(timeout);

    timeout = setTimeout(()=> {
        func(...args)
    }, delay)
  }
}

export default debounce;
 