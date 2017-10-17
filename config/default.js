module.exports = {
    port : 3000,
    session : {
        secret: 'markmarkmark',
        key: 'xiaoshidaimark',
        maxAge: 43200000 //过期时间
    },
    mongodb: 'mongodb://localhost:27017/Bill',
    cryptoSecret : 'woshizhu'
}