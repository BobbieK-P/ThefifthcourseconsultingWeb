import { marked } from 'marked';

// Every .md file in this folder is a blog post.
// To add a post: drop a new .md file here with the same frontmatter as the others.
// Posts dated in the future stay hidden until that date, so you can schedule them.
const files = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  match[1].split(/\r?\n/).forEach(line => {
    const i = line.indexOf(':');
    if (i === -1) return;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    meta[key] = value;
  });
  return { meta, body: match[2] };
};

const formatDate = (iso) => {
  const d = new Date(`${iso}T12:00:00`);
  return isNaN(d) ? '' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

const today = new Date().toISOString().slice(0, 10);

export const POSTS = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    const slug = meta.slug || path.replace('./', '').replace('.md', '');
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      dateLabel: formatDate(meta.date || ''),
      tag: meta.tag || 'Insights',
      excerpt: meta.excerpt || '',
      description: meta.meta_description || meta.excerpt || '',
      html: marked.parse(body),
    };
  })
  .filter(p => !p.date || p.date <= today)
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

export const findPost = (slug) => POSTS.find(p => p.slug === slug) || null;
