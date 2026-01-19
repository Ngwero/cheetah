'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
      <h2 style={{ color: '#ff8d03', marginBottom: '1rem' }}>Something went wrong!</h2>
      <p style={{ margin: '1rem 0', color: '#ffffff' }}>
        {error?.message || 'An unexpected error occurred'}
      </p>
      <button 
        onClick={() => reset()}
        style={{ 
          padding: '0.75rem 1.5rem', 
          marginTop: '1rem', 
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
  )
}

