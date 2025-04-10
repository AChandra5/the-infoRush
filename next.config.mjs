// next.config.mjs
import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // if you're statically exporting
};

export default withMDXConfig(nextConfig);
