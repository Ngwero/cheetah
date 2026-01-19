import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0c0f2b',
      color: '#ffffff'
    }}>
      <h2 style={{ color: '#ff8d03', marginBottom: '1rem', fontSize: '2rem' }}>404 - Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#ffffff', fontSize: '1.1rem' }}>
        Could not find requested resource
      </p>
      <Link 
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#ff8d03',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: '600',
          display: 'inline-block'
        }}
      >
        Go Back Home
      </Link>
    </div>
  )
}

