import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'The Beauty Edit'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1c1917',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: '#fda4af',
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: '#fafaf9',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            textAlign: 'center',
          }}
        >
          The Beauty Edit
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#a8a29e',
            marginTop: 24,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
          }}
        >
          Beauty, considered.
        </div>
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: '#fda4af',
            marginTop: 40,
          }}
        />
      </div>
    ),
    size,
  )
}
