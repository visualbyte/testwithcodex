const fs = require('fs');
const path = require('path');

// Use process.cwd() to get the project root directory
const postsDir = path.join(process.cwd(), 'posts');

function parsePost(content) {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(content);
  let meta = {};
  if (match) {
    const lines = match[1].split(/\n/);
    for (const line of lines) {
      const [key, ...rest] = line.split(':');
      meta[key.trim()] = rest.join(':').trim();
    }
    content = match[2].trim();
  }
  return { ...meta, content };
}

function getPosts() {
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const file = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const data = parsePost(file);
      const id = data.id || filename.replace(/\.md$/, '');
      const tags = data.tags ? data.tags.split(',').map(t => t.trim()) : [];
      return {
        id,
        title: data.title || id,
        excerpt: data.excerpt || '',
        content: data.content || '',
        tags,
      };
    });
}

module.exports = {
  getPosts,
};
