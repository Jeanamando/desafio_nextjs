/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'hitsite.com.br', hostname:'i.pinimg.com',
                port:'',
                pathname:'/wp-content/uploads/2022/05/one-piece-mugiwara.jpg', pathname:'/564x/c7/16/1b/c7161b19481e22f001096a0bc341f858.jpg',
            },
        ],
        
    },
}

module.exports = nextConfig
