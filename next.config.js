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
            {
                protocol:'https',
                hostname:'i.pinimg.com',
                port:'',
                pathname:'/originals/4d/b6/05/4db60516b56012a72882efdcd04d54bf.jpg'
            }

        ],
 
    },
}

module.exports = nextConfig
