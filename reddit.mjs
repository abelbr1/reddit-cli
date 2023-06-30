#! /usr/bin/env node

import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// parse env vars
const { argv } = yargs(process.argv)
// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
const children = data.data.children
// get random post from reddit api response of all posts on front page
const randomPost = children[Math.floor(Math.random() * children.length)]

// log if --print flag is passed
if (argv.print) {
  console.log(`
    Title: ${randomPost.data.title}\n
    Link: ${randomPost.data.permalink}
  `)
} else {
  // open in browser if not
  open(`https://reddit.com${randomPost.data.permalink}`)
}