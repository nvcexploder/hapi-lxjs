var fs = require('fs');
var friday = [
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
	'anarcastanho'
];

//create lib/plugins
for( var i=0, il=friday.length; i<il; ++i ) {

	fs.mkdirSync('./lib/plugins/'+friday[i]);
}

//create test/plugins
for( var i=0, il=friday.length; i<il; ++i ) {

	fs.mkdirSync('./test/plugins/'+friday[i]);
}
