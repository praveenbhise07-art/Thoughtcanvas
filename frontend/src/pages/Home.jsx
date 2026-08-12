import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Sparkles, Terminal, BookOpen, ArrowRight, User, Calendar, Rocket } from 'lucide-react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    } catch (err) {
      toast.error('Failed to fetch articles.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '2.5rem auto', padding: '0 1.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
      
      {/* Injecting CSS Keyframes for dynamic floating/pulsing effect */}
      <style>{`
        @keyframes floatAndPulse {
          0% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-12px) scale(1.08) rotate(5deg); opacity: 0.35; }
          100% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 0.15; }
        }
        .dynamic-hero-graphic {
          animation: floatAndPulse 6s ease-in-out infinite;
        }
      `}</style>

      {/* Inspiring Hero Banner with Dynamic Moving Graphic */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        marginBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
      }}>
        {/* Dynamic Moving Image / Graphic */}
        <div className="dynamic-hero-graphic" style={{ position: 'absolute', right: '-10px', top: '-20px', pointerEvents: 'none' }}>
          <Sparkles size={220} color="#c084fc" />
        </div>

        {/* Updated Tagline Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '0.4rem 1rem', borderRadius: '20px', marginBottom: '1rem', fontWeight: '600', fontSize: '0.85rem', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
          <Rocket size={14} /> INNOVATE. DEPLOY. EMPOWER.
        </div>

        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.1' }}>
          Architect. Document. <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scale.</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '650px', lineHeight: '1.6', marginBottom: '2rem' }}>
          Publish your deployment strategies, container runbooks, and cloud architecture notes in a high-performance developer workspace.
        </p>
        <Link to="/create" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '12px',
          fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
        }}>
          Publish New Article <ArrowRight size={18} />
        </Link>
      </div>

      {/* Feed Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={20} color="#c084fc" /> Team Technical Articles
        </h2>
        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>{posts.length} articles published</span>
      </div>

      {/* Articles Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#a78bfa' }}>Loading articles repository...</div>
      ) : posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', background: '#1e293b', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '1rem' }}>No articles published yet.</p>
          <Link to="/create" style={{ color: '#c084fc', fontWeight: '600', textDecoration: 'none' }}>Create the first article &rarr;</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post) => (
            <Link key={post.id || post._id} to={`/posts/${post.id || post._id}`} style={{
              background: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '1.75rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a855f7', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  <Terminal size={14} /> TECHNICAL DOCUMENTATION
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  {post.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  {post.content}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#cbd5e1' }}>
                  <User size={14} color="#a855f7" /> {post.author}
                </span>
                <span>{new Date(post.createdAt || Date.now()).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}