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
