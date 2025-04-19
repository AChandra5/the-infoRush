// components/BuyTable.tsx
'use client';

import React from 'react';

type Product = {
  name: string;
  amazonLink: string;
  flipkartLink: string;
};

export default function BuyTable({ products }: { products: Product[] }) {
  return (
    <div style={{ overflowX: 'auto', marginTop: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Product</th>
            <th style={{ padding: '12px' }}>Amazon</th>
            <th style={{ padding: '12px' }}>Flipkart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px' }}>{product.name}</td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FF9900',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                  }}
                >
                  Buy
                </a>
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <a
                  href={product.flipkartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#2874F0',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                  }}
                >
                  Buy
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
