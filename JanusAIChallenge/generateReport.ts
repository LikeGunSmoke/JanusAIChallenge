import * as fs from 'fs';

const generateReport = (data: {title: string, url: string, date: string}[], testName?: string) => {

  let csv: string = "";
  for (let i = 0; i < 3; i++) {
    let currentItem = data[i];
    csv += `"${currentItem.title}", "https://amazon.com/${currentItem.url}", "${currentItem.date}",` + '\n'
  };

  fs.writeFile(`${testName}_BestPrice.csv`, csv, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File saved succesfully!');
    };
  });

};

export default generateReport;
