import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Domcast Training',
        short_name: 'Domcast',
        description: 'Elite Personal Training & Coaching Online',
        start_url: '/',
        display: 'standalone',
        background_color: '#221910',
        theme_color: '#f48c25',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/Logo_Domcast-4.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/Logo_Domcast-3.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/Logo_Domcast-3.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
