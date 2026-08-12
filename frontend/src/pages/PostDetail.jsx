import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ArrowLeft, Edit3, Trash2, Send, MessageSquare, User, Calendar, Sparkles, Terminal } from 'lucide-react';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      toast.error('Failed to load article details.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      toast.success('Article deleted successfully.');
      navigate('/');
    } catch (err) {
      toast.error('Failed to delete article.');
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) {
      toast.error('Comment cannot be empty.');
      return;
    }
    setSubmittingComment(true);
    try {
      const res = await axios.post(`/api/posts/${id}/comments`, {
        author: authorName.trim() || 'Anonymous Developer',
        content: commentText.trim()
      });
      setPost(res.data);
      setCommentText('');
      setAuthorName('');
      toast.success('Comment posted successfully!');
    } catch (err) {
      toast.error('Failed to post comment.');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '5rem', color: '#a78bfa', fontSize: '1.2rem' }}>Loading innovation canvas...</div>;
  }

  if (!post) {
    return <div style={{ textAlign: 'center', padding: '5rem', color: '#f87171' }}>Article not found.</div>;
  }

  return (
    <div style={{ maxWidth: '850px', margin: '2.5rem auto', padding: '0 1.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
      
      {/* Back button */}
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', textDecoration: 'none', marginBottom: '1.5rem', fontWeight: '500' }}>
        <ArrowLeft size={18} /> Back to feed
      </Link>

      {/* Inspiring Banner / Hero Graphic */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        borderRadius: '20px',
        padding: '2.5rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1, pointerEvents: 'none' }}>
          <Terminal size={180} color="#a855f7" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c084fc', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> ENGINEERING & ARCHITECTURE INSIGHTS
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.2' }}>
          {post.title}
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', color: '#94a3b8', fontSize: '0.95rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <User size={16} color="#a855f7" /> {post.author}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={16} color="#a855f7" /> {new Date(post.createdAt || Date.now()).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
        <Link to={`/edit/${id}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          backgroundColor: '#1e293b', color: '#e2e8f0', padding: '0.6rem 1.25rem',
          borderRadius: '10px', textDecoration: 'none', fontWeight: '600', border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          <Edit3 size={16} color="#60a5fa" /> Edit Article
        </Link>
        <button onClick={() => setShowDeleteModal(true)} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171', padding: '0.6rem 1.25rem',
          borderRadius: '10px', fontWeight: '600', border: '1px solid rgba(239, 68, 68, 0.3)', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          <Trash2 size={16} /> Delete Article
        </button>
      </div>

      {/* Content Box */}
      <div style={{
        background: '#1e293b',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '2.5rem',
        color: '#e2e8f0',
        fontSize: '1.1rem',
        lineHeight: '1.7',
        marginBottom: '3rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        whiteSpace: 'pre-wrap'
      }}>
        {post.content}
      </div>

      {/* Comments Section (Expanded Full Width) */}
      <div style={{ background: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>
          <MessageSquare size={22} color="#c084fc" /> Comments ({post.comments ? post.comments.length : 0})
        </h3>

        {/* Comment Input Form */}
        <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          <input
            type="text"
            placeholder="Your name or handle (optional)"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1.2rem',
              backgroundColor: '#0f172a',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <textarea
            rows="4"
            placeholder="Drop your thoughts, review notes, or feedback here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.2rem',
              backgroundColor: '#0f172a',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical',
              minHeight: '120px'
            }}
          />
          <button
            type="submit"
            disabled={submittingComment}
            style={{
              alignSelf: 'flex-end',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: '#ffffff',
              padding: '0.75rem 1.75rem',
              borderRadius: '12px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
              transition: 'transform 0.1s ease'
            }}
          >
            <Send size={18} /> {submittingComment ? 'Sending...' : 'Post Comment'}
          </button>
        </form>

        {/* Existing Comments Listing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(!post.comments || post.comments.length === 0) ? (
            <p style={{ color: '#94a3b8', fontStyle: 'italic', textAlign: 'center', padding: '1rem 0' }}>No comments yet. Be the first to spark the conversation! ✨</p>
          ) : (
            post.comments.map((comment, index) => (
              <div key={index} style={{ backgroundColor: '#0f172a', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '700', color: '#c084fc' }}>{comment.author}</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{new Date(comment.createdAt || Date.now()).toLocaleDateString()}</span>
                </div>
                <p style={{ color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>{comment.content}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#1e293b', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '20px', padding: '2.5rem', width: '100%', maxWidth: '420px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.75rem' }}>Delete this article?</h3>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>This action is permanent and cannot be undone from the repository.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => setShowDeleteModal(false)} style={{
                padding: '0.75rem 1.5rem', borderRadius: '12px', backgroundColor: '#334155', color: '#ffffff', fontWeight: '600', border: 'none', cursor: 'pointer'
              }}>
                Nah, keep it
              </button>
              <button onClick={handleDelete} style={{
                padding: '0.75rem 1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: '#ffffff', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)'
              }}>
                Yes, delete it
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}