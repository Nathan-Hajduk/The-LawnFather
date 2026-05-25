import { readFileSync } from 'fs';
import path from 'path';
import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64
};

export const contentType = 'image/png';

export default function Icon() {
  const logoPath = path.join(process.cwd(), 'public', 'media', 'logo.png');
  const logoBase64 = readFileSync(logoPath).toString('base64');
  const logoDataUri = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #dcfce7 100%)'
        }}
      >
        <div
          style={{
            width: '84%',
            height: '84%',
            borderRadius: '18px',
            backgroundColor: '#ffffff',
            backgroundImage: `url(${logoDataUri})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            boxShadow: '0 6px 18px rgba(15, 23, 42, 0.16)',
            border: '1px solid rgba(16, 185, 129, 0.18)'
          }}
        />
      </div>
    ),
    size
  );
}