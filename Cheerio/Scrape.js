const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const writeStream = fs.createWriteStream('post.csv')

writeStream.write(`Title,Link\n`);

request('https://www.tic.com/',(err,res,html)=>{
    if(!err && res.statusCode == 200){
        //console.log(html)
        const $ = cheerio.load(html)
        
        //const siteTitle = $('h1')
        //console.log(siteTitle)
        //console.log(siteTitle.text())

        // const navi = $('.navigation a')
        // navi.each((i,el)=>{
        //     const item = $(el).text()
        //     console.log(item)
        // })

        // const options = $('body').find('li').text()
        // console.log(options)

        $('.navigation a').each((i,el)=>{
            const title = $(el).text()
            const link = $(el).attr('href')

            writeStream.write(`${title},${link}\n`);
        })
        console.log('Scrapping Done!')

        
    }
})