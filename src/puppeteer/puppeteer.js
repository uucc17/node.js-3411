const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless : false //작업과정 확인
      }); //브라우저 열기
    const page = await browser.newPage(); // 새창 열기
    await page.goto('https://www.naver.com', { //옵션 pdf로 인해 추가
        waitUntil: 'networkidle2',
      }); //페이지 이동
    page.setViewport({ //기본 800 * 600 px
        width: 1920,
        height:1080,
        deviceScaleFactor: 1,
      });
  
    await page.screenshot({path:'example2.png'}); 

        
    await page.pdf({
        path: 'examplePDF2.pdf',
        format: 'A4',
    });


    await browser.close(); // 브러우저 닫기 (종료)
  })();
