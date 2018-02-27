import test from 'ava'
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<!DOCTYPE html><html><form action="" id='addBook' class='col-4'><form></html>`)
const window = dom.window
const document = dom.window.document

test('something', t => {
  console.log(window, document)
})

/* const { myLibrary, Book, addBookToLibrary } = require('../app/index.js')

console.log(window, document)

test('testing exports', t => {
  t.true(typeof myLibrary === 'object')
  t.true(typeof Book === 'function')
  t.true(typeof addBookToLibrary === 'function')
})

test('add a new book to myLibrary', t => {
  t.deepEqual(addBookToLibrary('testing', 'test ing', 42, true), [{title: 'testing', author: 'test ing', pages: 42, read: true}])
})
*/
