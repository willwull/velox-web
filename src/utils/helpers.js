/**
 * Takes multiple arguments and joins them together to a string
 * if they're truthy.
 * Example: classnames("container", false && "dark") -> "container"
 * @param  {...any} args
 */
export function classnames(...args) {
  const classes = args.filter(arg => arg != null && arg !== false)
  return classes.join(" ")
}

export default function createDebouncedFunc(fn, time = 100) {
  let timeout

  return function() {
    const functionCall = () => fn.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}
