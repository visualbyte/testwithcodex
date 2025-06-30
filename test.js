const assert = require('assert');
const { getPosts } = require('./data/posts');
const posts = getPosts();

assert(Array.isArray(posts), 'posts should be an array');
assert(posts.length > 0, 'posts should not be empty');
for (const post of posts) {
  assert(post.id && post.title && post.content, 'post must have id, title, and content');
}
console.log('All tests passed');
