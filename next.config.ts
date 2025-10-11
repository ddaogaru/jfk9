/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable standalone output for Cloud Run
	output: 'standalone',
	
	// Image optimization
	images: {
		unoptimized: true,
		domains: ["images.unsplash.com"],
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	
	// Performance optimizations
	experimental: {
		optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons'],
	},
	
	// External packages for server components
	serverExternalPackages: ['canvas-confetti'],
	
	// Compression and minification
	compress: true,
	
	// Bundle analyzer
	webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization.splitChunks.cacheGroups = {
				...config.optimization.splitChunks.cacheGroups,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			};
		}
		return config;
	},
	
	// Headers for better caching
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
			{
				source: '/static/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},
	
	// Re-enable ESLint during builds
	eslint: {
		ignoreDuringBuilds: false,
	},
};

export default nextConfig;
