import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PlusCircle, Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2.5rem',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <div style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          padding: '0.6rem',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
        }}>
          <Terminal size={26} color="#ffffff" />
        </div>
        <span style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, #ffffff 30%, #c084fc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          ThoughtCanvas
        </span>
      </Link>

      <Link to="/create" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        color: '#ffffff',
        padding: '0.75rem 1.25rem',
        borderRadius: '12px',
        fontWeight: '600',
        textDecoration: 'none',
        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
        transition: 'all 0.2s ease-in-out',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <PlusCircle size={20} />
        <span>New Article</span>
      </Link>
    </nav>
  );
}