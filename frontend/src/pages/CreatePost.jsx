import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ArrowLeft, Send, Sparkles, Terminal } from 'lucide-react';

export default function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error('Title and content are required.');
      return;
    }
    setSubmitting(true);
    try {
      await axios.post('/api/posts', {
        title: title.trim(),
        author: author.trim() || 'Anonymous Developer',
        content: content.trim()
      });
      toast.success('Article published successfully!');
      navigate('/');
    } catch (err) {
      toast.error('Failed to publish article.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '850px', margin: '2.5rem auto', padding: '0 1.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', textDecoration: 'none', marginBottom: '1.5rem', fontWeight: '500' }}>
        <ArrowLeft size={18} /> Back to Repository
      </Link>

      <div style={{ background: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '3rem', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c084fc', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> KNOWLEDGE BASE PUBLISHER
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>Publish Technical Article</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>Draft and publish documentation, runbooks, or architecture decisions to the team repository.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>ARTICLE TITLE</label>
            <input
              type="text"
              placeholder="e.g., Implementing Blue-Green Deployments with Kubernetes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%', padding: '0.9rem 1.25rem', backgroundColor: '#0f172a', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px', color: '#ffffff', fontSize: '1rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>AUTHOR / TEAM</label>
            <input
              type="text"
              placeholder="e.g., DevOps Engineering Unit"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{ width: '100%', padding: '0.9rem 1.25rem', backgroundColor: '#0f172a', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px', color: '#ffffff', fontSize: '1rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>DOCUMENTATION CONTENT (MARKDOWN SUPPORTED)</label>
            <textarea
              rows="10"
              placeholder="Write your technical breakdown here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: '100%', padding: '1.25rem', backgroundColor: '#0f172a', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px', color: '#ffffff', fontSize: '1rem', outline: 'none', resize: 'vertical', minHeight: '280px', fontFamily: 'monospace' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <Link to="/" style={{ padding: '0.85rem 1.5rem', borderRadius: '12px', backgroundColor: '#334155', color: '#ffffff', fontWeight: '600', textDecoration: 'none' }}>
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                color: '#ffffff', padding: '0.85rem 2rem', borderRadius: '12px',
                fontWeight: '700', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
              }}
            >
              <Send size={18} /> {submitting ? 'Publishing...' : 'Publish Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}