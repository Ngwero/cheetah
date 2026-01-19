'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0c0f2b' }}>
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff'
        }}>
          <h2 style={{ color: '#ff8d03', marginBottom: '1rem' }}>Something went wrong!</h2>
          <p style={{ marginBottom: '1rem', color: '#ffffff' }}>
            {error?.message || 'A global error occurred'}
          </p>
          <button 
            onClick={() => reset()}
            style={{
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              backgroundColor: '#ff8d03',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

