'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Something went wrong!</h2>
      <p style={{ margin: '1rem 0' }}>{error?.message || 'An unexpected error occurred'}</p>
      <button 
        onClick={() => reset()}
        style={{ padding: '0.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}
      >
        Try again
      </button>
    </div>
  )
}

