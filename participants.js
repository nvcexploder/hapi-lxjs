var fs = require('fs');
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
  'nihildacta',
  'trenpixster'
];

// var saturday = [
// 	'joaquimserafim',
// 	'nunoveloso',
// 	'satazor',
// 	'johnbrett',
// 	'andrefs',
// 	'davecocoa',
// 	'pedrocarrico',
// 	'paulovieira',
// 	'taterbase',
// 	'filipediasferreira',
// 	'KidkArolis',
// 	'dymonaz',
// 	'marcooliveira',
// 	'rjsmelo',
// 	'miguelampereira',
// 	'zkiiito',
// 	'balazsgabor',
// 	'hugomota',
// 	'pvhee',
// 	'marcelombc',
// 	'jamgomes',
// 	'baldasman',
// 	'antoniocapelo',
// 	'ana-rodrigues',
// 	'suprememoocow',
// 	'davidfoliveira',
// 	'pmarques',
// 	'gergelyke',
// 	'anarcastanho'
// ];

// var friday = [
// 	"danielfdsilva",
// 	"nelsonic",
// 	"iteles",
// 	"robertkowalski",
// 	"DJCordhose",
// 	"axfcampos",
// 	"yarcub",
// 	"peeofive",
// 	"trodrigues",
// 	"tomcartwrightuk",
// 	"cajadas",
// 	"xtravanta",
// 	"rdquintas",
// 	"lukebond",
// 	"phuu",
// 	"sandromaio",
// 	"JoaoCasalNovo",
// 	"sgtcarneiro",
// 	"jvpereira",
// 	"a-c-m",
// 	"MMendes999",
// 	"BrunoAssuncao",
// 	"bmmrodrigues",
// 	"davidfoliveira",
// 	"sugendran",
// 	"catarinamoura",
// 	"yrezgui",
// 	"pmiguelrn",
// 	"nihildacta"
// ];

//create lib/plugins
for( var i=0, il=participants.length; i<il; ++i ) {

	try {
		fs.mkdirSync('./lib/plugins/'+friday[i]);
	} catch (e) {

	}
}

//create test/plugins
for( var i=0, il=participants.length; i<il; ++i ) {

	try {
		fs.mkdirSync('./test/plugins/'+friday[i]);
	} catch (e) {

	}
}
