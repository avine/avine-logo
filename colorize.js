
const colors = [
  { value: '#aaa', name: 'dark' },
  { value: '#337ab7', name: 'blue' },
  { value: '#f0ad4e', name: 'yellow' },
  { value: '#d9534f', name: 'red' }
];

const fs = require('fs');

const srcPath = './src/logo/';

const suffixes = ['logo', 'sprite', 'icon', 'ico'];

colors.forEach(color => {
  suffixes.forEach(suffix => {
    const srcFile = `${srcPath}avine-${suffix}.svg`;

    let content = fs.readFileSync(srcFile, 'utf8');

    let pattern = /#FFFFFF/g;
    if (suffix === 'ico') {
      pattern = /#444444/g;
    }

    content = content.replace(pattern, color.value);

    const targetFile = `${srcPath}colors/avine-${suffix}-${color.name}.svg`;

    console.log(targetFile);

    fs.writeFileSync(targetFile, content, 'utf8');
  });

  console.log('');
});
