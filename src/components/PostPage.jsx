import { useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import { findPost } from '../posts';

const PostPage = ({ slug, setPage }) => {
  const isMobile = useIsMobile();
  const post = findPost(slug);

  useEffect(() => {
    const original = document.title;
    if (post) document.title = `${post.title} | The Fifth Course`;
    let meta = document.querySelector('meta[name="description"]');
    const originalDesc = meta ? meta.getAttribute('content') : null;
    if (post && post.description) {
      if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
      meta.setAttribute('content', post.description);
    }
    return () => {
      document.title = original;
      if (meta && originalDesc !== null) meta.setAttribute('content', originalDesc);
    };
  }, [post]);

  if (!post) {
    return (
      <div style={{ background: '#fff', padding: isMobile ? '64px 24px' : '96px 48px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 500, color: '#1A2744', margin: '0 0 16px' }}>Article not found</h1>
        <button className="btn-outline" onClick={() => setPage('Insights')} style={{ background: 'transparent', color: '#1A2744', padding: '12px 28px', borderRadius: 2, border: '1px solid #C4BAB0', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Back to Insights</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: '#1A2744', padding: isMobile ? '40px 24px 48px' : '56px 48px 72px' }}>
        <button onClick={() => setPage('Insights')} style={{ background: 'none', border: 'none', padding: 0, color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: '0.06em', marginBottom: 28 }}>← All insights</button>
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />{post.tag}
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 32 : 46, fontWeight: 500, color: '#fff', maxWidth: 680, lineHeight: 1.12, margin: 0 }}>{post.title}</h1>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 22 }}>By Kendal Pierce{post.dateLabel ? ` · ${post.dateLabel}` : ''}</div>
      </div>

      <article className="post-body" style={{ padding: isMobile ? '40px 24px 56px' : '64px 48px 80px', maxWidth: 720 }} dangerouslySetInnerHTML={{ __html: post.html }} />

      <div style={{ background: '#1A2744', padding: isMobile ? '56px 24px' : '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 34 : 44, fontWeight: 500, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>Want to talk through<br />what you've <em style={{ fontStyle: 'italic', color: '#A27021' }}>read?</em></h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: '0 0 34px' }}>The first conversation is always free. No pitch, no obligation.</p>
        <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Get in touch</button>
      </div>
    </div>
  );
};

export default PostPage;
