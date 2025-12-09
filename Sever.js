const http = require('http')

const server = http.createServer(function(req,res)
{
    if(req.url==='/screctData')
    {
        res.end('HELLO VAISHNAVI')
    }
    res.end('HELLO LIKHITH')
})
server.listen(3456)