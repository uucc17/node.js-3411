const puppeteer = require('puppeteer');

async function getData(){
    try{

        const browser = await puppeteer.launch({
            headless : false //작업과정 확인
          }); //브라우저 열기
        const page = await browser.newPage();
        await page.goto('https://www.yes24.com/Product/category/bestseller?CategoryNumber=001&sumgb=06');
/*
        await Promise.all([
            page.select("select#pg_size","120"),
            page.waitForNavigation({waitUntil:"networkidle0",
                timeout: 0})
        ]);
*/
        const bookList = await page.evaluate(() => {
            let books=[];
            let elements = document.querySelectorAll('#yesBestList > li');
            elements.forEach(elem => {
                //books.push(elem.querySelector("div.item_info > div.info_row.info_name > a.gd_name").innerText);
                const book = {
                    rank:   elem.querySelector(".ico.rank").innerText,
                    img:    elem.querySelector("em.img_bdr > img").getAttribute('src'),
                    title:  elem.querySelector("div.item_info > div.info_row.info_name > a.gd_name").innerText,
                    auth:   elem.querySelector("div.item_info > div.info_row.info_pubGrp > span.info_auth").innerText,
                    pub:    elem.querySelector("div.item_info > div.info_row.info_pubGrp > span.info_pub").innerText,
                }
                books.push(book);
            });
            return books;
        });
        console.log("FINAL",bookList); 

        await browser.close();
    }catch(error){
        console.error(error);
    }
  }
  getData();