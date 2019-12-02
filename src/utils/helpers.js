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

/**
 * Creates a throttled version of a given function.
 * Source: https://gist.github.com/beaucharman/e46b8e4d03ef30480d7f4db5a78498ca
 *
 * @param {*} callback
 * @param {number} wait
 * @param {boolean} immediate
 */
export function throttle(callback, wait = 300, immediate = false) {
  let timeout = null
  let initialCall = true

  return function() {
    const callNow = immediate && initialCall
    const next = () => {
      callback.apply(this, arguments)
      timeout = null
    }

    if (callNow) {
      initialCall = false
      next()
    }

    if (!timeout) {
      timeout = setTimeout(next, wait)
    }
  }
}
