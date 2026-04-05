import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #08101f 0%, #101b31 55%, #0c4f86 100%)',
          color: '#f8faff',
          padding: '64px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '340px',
            height: '340px',
            borderRadius: '999px',
            background: 'rgba(0, 210, 255, 0.18)',
            filter: 'blur(8px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-40px',
            width: '320px',
            height: '320px',
            borderRadius: '999px',
            background: 'rgba(59, 130, 246, 0.18)',
            filter: 'blur(8px)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '32px',
            padding: '48px',
            background: 'rgba(7, 14, 23, 0.52)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '42px',
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              *
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '26px', color: '#9fdfff' }}>Snow Day Calculator</span>
              <span style={{ fontSize: '20px', color: '#b7c7e5' }}>Forecast-based closure risk for US and Canada</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '760px' }}>
            <div style={{ fontSize: '70px', fontWeight: 800, lineHeight: 1.02 }}>
              {SITE_NAME}
            </div>
            <div style={{ fontSize: '30px', lineHeight: 1.35, color: '#d7e5ff' }}>
              {SITE_TAGLINE}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            {['Snowfall', 'Temperature', 'Wind'].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  padding: '12px 20px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.08)',
                  fontSize: '22px',
                  color: '#dce9ff',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
