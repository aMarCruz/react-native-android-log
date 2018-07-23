
const VERBOSE = 2
const DEBUG = 3
const INFO = 4
const WARN = 5
const ERROR = 6
const ASSERT = 7

const _levelCode = []
_levelCode[VERBOSE] = 'V'
_levelCode[DEBUG] = 'D'
_levelCode[INFO] = 'I'
_levelCode[WARN] = 'W'
_levelCode[ERROR] = 'E'
_levelCode[ASSERT] = 'A'

var _useConsole = false

module.exports = {
  VERBOSE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  ASSERT,

  SUPPRESS: 0x7fffffff,

  print (level, tag, msg) {
    const ts = new Date().toJSON()

    console.log(`${ts.substr(5, 5)} ${ts.substr(11, 12)} ${_levelCode[level]} ${tag} : ${msg}`)
  },
}
