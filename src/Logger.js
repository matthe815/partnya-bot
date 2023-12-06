import fs from 'node:fs'
import chalk from 'chalk'
import path from 'node:path'

const logPath = path.resolve('logs', `${new Date().toLocaleDateString().replace(/\//g, '-')}.log`)

function writeLogFile (text) {
  fs.appendFileSync(logPath, text)
}

function info (text) {
  const logText = `[${new Date().toLocaleTimeString()}] [Info] ${text}`
  writeLogFile(logText)
  console.log(`${chalk.white()}${logText}`)
}

function debug (text) {
  const logText = `[${new Date().toLocaleTimeString()}] [Debug] ${text}`
  writeLogFile(logText)
  console.log(`${chalk.gray()}${logText}`)
}

function warn (text) {
  const logText = `[${new Date().toLocaleTimeString()}] [Warn] ${text}`
  writeLogFile(logText)
  console.log(`${chalk.yellow()}${logText}`)
}

function error (text) {
  const logText = `[${new Date().toLocaleTimeString()}] [Error] ${text}`
  writeLogFile(logText)
  console.log(`${chalk.red()}${logText}`)
}

export const Logger = {
  debug,
  info,
  warn,
  error
}
