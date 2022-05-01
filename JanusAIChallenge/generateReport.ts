import * as fs from 'fs';

const generateReport = (data: any[], testName?: string) => {

  let csv: string = "";
  for (let i = 0; i < 3; i++) {
    let currentItem = data[i];
    csv += `"${currentItem.title}", "${currentItem.url}", "${currentItem.date}",` + '\n'
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
