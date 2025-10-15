const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable standalone output for Cloud Run, or static export when requested
	output: isStaticExport ? 'export' : 'standalone',
	
	// Image optimization
	images: {
		domains: ["images.unsplash.com", "i.ytimg.com"],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
			},
		],
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000,
		dangerouslyAllowSVG: true,
		unoptimized: isStaticExport,
	},
	
	// Performance optimizations
	experimental: {
		optimizePackageImports: [
			'framer-motion', 
			'lucide-react', 
			'@radix-ui/react-icons',
			'@radix-ui/react-accordion',
			'@radix-ui/react-dialog',
			'@radix-ui/react-label',
			'@radix-ui/react-separator',
			'@radix-ui/react-slot',
			'@radix-ui/react-tabs',
			'@radix-ui/react-tooltip'
		],
	},

	// Configure Turbopack without deprecated experimental.turbo flag
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	
	// External packages for server components
	serverExternalPackages: ['canvas-confetti'],
	
	// Compression and minification
	compress: true,
	
	// Bundle analyzer (disabled for Turbopack compatibility)
	// webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
	// 	// Optimize bundle size
	// 	if (!dev && !isServer) {
	// 		config.optimization.splitChunks.cacheGroups = {
	// 			...config.optimization.splitChunks.cacheGroups,
	// 			vendor: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name: 'vendors',
	// 				chunks: 'all',
	// 			},
	// 		};
	// 	}
	// 	return config;
	// },
	
	// Headers for better caching and performance
	async headers() {
		if (isStaticExport) {
			return [];
		}

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
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
				],
			},
			{
				source: '/_next/static/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/images/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/favicon.ico',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/manifest.json',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400',
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
