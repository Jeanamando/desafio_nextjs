/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'hitsite.com.br',
                port:'',
                pathname:'/wp-content/uploads/2022/05/one-piece-mugiwara.jpg',
            },
        ],
    },
}

module.exports = nextConfig
