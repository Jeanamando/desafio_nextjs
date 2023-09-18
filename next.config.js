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
                pathname:'/564x/9e/cf/8d/9ecf8de6510431653178a56754417e23.jpg'
            }
            
        ],
 
    },
}

module.exports = nextConfig
