var Mustache = require('mustache');
var Fs = require("fs");

// var participants = [
//     'joaquimserafim',
//     'nunoveloso',
//     'satazor',
//     'johnbrett',
//     'andrefs',
//     'davecocoa',
//     'pedrocarrico',
//     'paulovieira',
//     'taterbase',
//     'filipediasferreira',
//     'KidkArolis',
//     'dymonaz',
//     'marcooliveira',
//     'rjsmelo',
//     'miguelampereira',
//     'zkiiito',
//     'balazsgabor',
//     'hugomota',
//     'pvhee',
//     'marcelombc',
//     'jamgomes',
//     'baldasman',
//     'antoniocapelo',
//     'ana-rodrigues',
//     'suprememoocow',
//     'davidfoliveira',
//     'pmarques',
//     'gergelyke',
//     'anarcastanho'
// ];

var participants = [ 
  'joaquimserafim',
  'nunoveloso',
  'satazor',
  'johnbrett',
  'andrefs',
  'davecocoa',
  'pedrocarrico',
  'paulovieira',
  'taterbase',
  'filipediasferreira',
  'KidkArolis',
  'dymonaz',
  'marcooliveira',
  'rjsmelo',
  'miguelampereira',
  'zkiiito',
  'balazsgabor',
  'hugomota',
  'pvhee',
  'marcelombc',
  'jamgomes',
  'baldasman',
  'antoniocapelo',
  'ana-rodrigues',
  'suprememoocow',
  'davidfoliveira',
  'pmarques',
  'gergelyke',
  'anarcastanho',
  'danielfdsilva',
  'nelsonic',
  'iteles',
  'robertkowalski',
  'DJCordhose',
  'axfcampos',
  'yarcub',
  'peeofive',
  'trodrigues',
  'tomcartwrightuk',
  'cajadas',
  'xtravanta',
  'rdquintas',
  'lukebond',
  'phuu',
  'sandromaio',
  'JoaoCasalNovo',
  'sgtcarneiro',
  'jvpereira',
  'a-c-m',
  'MMendes999',
  'BrunoAssuncao',
  'bmmrodrigues',
  'sugendran',
  'catarinamoura',
  'yrezgui',
  'pmiguelrn',
  'nihildacta'
];


for(var i in participants) {
    var username = participants[i];
    var outputpath = './lib/plugins/' + username;
    
    var indexTmpl = Fs.readFileSync(__dirname + '/tmpl/index.js').toString();
    var indexOutput = Mustache.render(indexTmpl, {username: username});
    
    var testTmpl = Fs.readFileSync(__dirname + '/tmpl/test.js').toString();
    var testOutput = Mustache.render(testTmpl, {username: username});
    
    Fs.writeFileSync(outputpath + '/index.js', indexOutput);
    try {
        Fs.mkdirSync('./test/plugins');
    } catch (e) {
        // ignore
    }
    Fs.writeFileSync('./test/plugins/' + username + '/index.js', testOutput);
}