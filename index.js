const RN = require('react-native')
const isAndroid = RN.Platform.OS === 'android'
const RNLog = isAndroid ? RN.NativeModules.RNLog : require('./rnlog')

export default {

  VERBOSE: RNLog.VERBOSE,
  DEBUG: RNLog.DEBUG,
  INFO: RNLog.INFO,
  WARN: RNLog.WARN,
  ERROR: RNLog.ERROR,
  ASSERT: RNLog.ASSERT,

  SUPPRESS: 0x7fffffff,

  setTag (tag) {
    this._tag = tag
  },

  setLevel (tag, level) {
    if (tag) {
      this._levels[tag] = level | 0
    } else {
      this._level = level | 0
    }
  },

  getLevel (tag) {
    return tag && (tag in this._levels) ? this._levels[tag] : this._level
  },

  /**
   * Send a `VERBOSE` log message.
   * @param tag Used to identify the source of a log message.  It usually identifies
   *        the class or activity where the log call occurs.
   * @param msg The message you would like logged.
   */
  v (tag, msg) {
    this.print(this.VERBOSE, tag, msg)
  },

  /**
   * Send a `DEBUG` log message.
   * @param tag Used to identify the source of a log message.  It usually identifies
   *        the class or activity where the log call occurs.
   * @param msg The message you would like logged.
   */
  d (tag, msg) {
    this.print(this.DEBUG, tag, msg)
  },

  /**
   * Send an `INFO` log message.
   * @param tag Used to identify the source of a log message.  It usually identifies
   *        the class or activity where the log call occurs.
   * @param msg The message you would like logged.
   */
  i (tag, msg) {
    this.print(this.INFO, tag, msg)
  },

  /**
   * Send a `WARN` log message.
   * @param tag Used to identify the source of a log message.  It usually identifies
   *        the class or activity where the log call occurs.
   * @param msg The message you would like logged.
   */
  w (tag, msg) {
    this.print(this.WARN, tag, msg)
  },

  /**
   * Send an `ERROR` log message.
   * @param tag Used to identify the source of a log message.  It usually identifies
   *        the class or activity where the log call occurs.
   * @param msg The message you would like logged.
   */
  e (tag, msg) {
    this.print(this.ERROR, tag, msg)
  },

  print (level, tag, msg) {
    const minAllowedLevel = tag in this._levels ? this._levels[tag] : this._level

    if (level >= minAllowedLevel) {
      if (msg === undefined) {
        msg = tag
        tag = this._tag
      }
      RNLog.print(level, tag, String(msg))
    }
  },

  _tag: 'App',
  _level: isAndroid ? (__DEV__ ? this.DEBUG : this.ERROR) : this.SUPPRESS,
  _levels: {},
}
