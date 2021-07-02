const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"; // crickbuzz home page
const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const allMatchobj = require("./Allmatch");

const iplPath = path.join(__dirname, "ipl");
dirCreater(iplPath);
request(url , cb);

function cb(err, response ,html){
    if(err){
        console.log(error);
    }
    else {
        extractLink(html);
    }
}
function extractLink(html){
    let $ = cheerio.load(html);
    let elem = $("a[data-hover='View All Results']")

    let link = elem.attr("href")
    let fullLink = "https://www.espncricinfo.com" + link;

    console.log(fullLink);
    allMatchobj.gAlmatches(fullLink);
}
function dirCreater(filePath){
    if (fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath)
    }
}