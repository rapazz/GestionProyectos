/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Listas = require('../api/listas/listas.model')
var Menu = require('../api/menu/menu.model')

Menu.find({}).remove(function() {
  Menu.create({
id:1,
  nombre: 'Dashboard',
  url: '#/dashboard',
  css: 'fa fa-dashboard',
  active: true,
  subMenu:[]
  },
  {
id:2,
  nombre: 'Proyectos',
  url: '',
  css: 'fa fa-file-text-o',
  active: true,
  subMenu:[{id:1, nombre:'Crear Iniciativa', url:'#/pages/crearIniciativa', rolId:[1,2]},
  {id:2, nombre:'Mis Proyectos', url:'#/pages/misProyectos', rolId:[1]}
  ]
  },
  {
id:3,
  nombre: 'Aprobaciones',
  url: '',
  css: 'fa fa-file-text-o',
  active: true,
  subMenu:[{id:1, nombre:'Mis Aprobaciones', url:'#/pages/misAprobaciones', rolId:[2]},
  {id:2, nombre:'Ejemploos', url:'#/pages/misProyectos', rolId:[3]}
  ]
  },
   function() {
      console.log('finished populating Menu');
    })
});


/*
Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});


Listas.find({}).remove(function(){
  
  Listas.create(
    {tipo:'Empresa',idPadre:'',id:'76080246-8',nombre:'KOMATSU HOLDING SOUTH AMERICA LTDA.'},
{tipo:'Empresa',idPadre:'',id:'76492400-2',nombre:'KOMATSU REMAN CENTER CHILE S.A.'},
{tipo:'Empresa',idPadre:'',id:'77260520-K',nombre:'KOMATSU CUMMINS CHILE LTDA.'},
{tipo:'Empresa',idPadre:'',id:'96711100-7',nombre:'KCC TRAINING S.A.'},
{tipo:'Empresa',idPadre:'',id:'96843130-7',nombre:'KOMATSU CHILE S.A.'},
{tipo:'Empresa',idPadre:'',id:'96843140-4',nombre:'DISTRIBUIDORA CUMMINS CHILE S.A.'},
{tipo:'Empresa',idPadre:'',id:'99532160-2',nombre:'KOMATSU CUMMINS CHILE ARRIENDA S.A.'},
{tipo:'Departamento',idPadre:'76080246-8',id:'10',nombre:'KCC PSG'},
{tipo:'Departamento',idPadre:'76080246-8',id:'11',nombre:'Gcia General'},
{tipo:'Departamento',idPadre:'76080246-8',id:'14',nombre:'KCH Vta Equipos Construcción'},
{tipo:'Departamento',idPadre:'76080246-8',id:'4',nombre:'KCC Auditoría'},
{tipo:'Departamento',idPadre:'76080246-8',id:'62',nombre:'KHSA MEIT'},
{tipo:'Departamento',idPadre:'76080246-8',id:'65',nombre:'KHSA Administración y Finanzas'},
{tipo:'Departamento',idPadre:'76080246-8',id:'66',nombre:'KHSA Marketing'},
{tipo:'Departamento',idPadre:'76080246-8',id:'67',nombre:'KHSA Negocios y Proyectos'},
{tipo:'Departamento',idPadre:'76080246-8',id:'68',nombre:'KHSA Repuestos y Equipos Construcción'},
{tipo:'Departamento',idPadre:'76080246-8',id:'69',nombre:'KHSA PSG'},
{tipo:'Departamento',idPadre:'76080246-8',id:'8',nombre:'KHSA MBU'},
{tipo:'Departamento',idPadre:'76492400-2',id:'11',nombre:'Gcia General'},
{tipo:'Departamento',idPadre:'76492400-2',id:'12',nombre:'Gcia Zonal'},
{tipo:'Departamento',idPadre:'76492400-2',id:'40',nombre:'Gcia Comercial'},
{tipo:'Departamento',idPadre:'76492400-2',id:'41',nombre:'KRCC Gcia Zonal Norte'},
{tipo:'Departamento',idPadre:'76492400-2',id:'46',nombre:'KRCC Gcia Zonal Sur'},
{tipo:'Departamento',idPadre:'76492400-2',id:'47',nombre:'KRCC Gcia Ingeniería'},
{tipo:'Departamento',idPadre:'76492400-2',id:'53',nombre:'KRCC Gcia. Zonal Iquique'},
{tipo:'Departamento',idPadre:'76492400-2',id:'54',nombre:'KRCC Gcia. Electrónica'},
{tipo:'Departamento',idPadre:'77260520-K',id:'1',nombre:'KCC Presidencia'},
{tipo:'Departamento',idPadre:'77260520-K',id:'10',nombre:'KCC PSG'},
{tipo:'Departamento',idPadre:'77260520-K',id:'2',nombre:'KCC Finanzas'},
{tipo:'Departamento',idPadre:'77260520-K',id:'3',nombre:'KCC RRHH'},
{tipo:'Departamento',idPadre:'77260520-K',id:'5',nombre:'KCC Sistemas'},
{tipo:'Departamento',idPadre:'77260520-K',id:'51',nombre:'KCC Control Gestión'},
{tipo:'Departamento',idPadre:'77260520-K',id:'55',nombre:'KCC Contabilidad'},
{tipo:'Departamento',idPadre:'77260520-K',id:'59',nombre:'KCC Infraestructura'},
{tipo:'Departamento',idPadre:'77260520-K',id:'6',nombre:'KCC Legal'},
{tipo:'Departamento',idPadre:'77260520-K',id:'60',nombre:'RSE'},
{tipo:'Departamento',idPadre:'77260520-K',id:'7',nombre:'KCC Supply Chain'},
{tipo:'Departamento',idPadre:'77260520-K',id:'70',nombre:'KCC Gcia de Asuntos Corporativos'},
{tipo:'Departamento',idPadre:'96711100-7',id:'3',nombre:'KCC RRHH'},
{tipo:'Departamento',idPadre:'96843130-7',id:'11',nombre:'Gcia General'},
{tipo:'Departamento',idPadre:'96843130-7',id:'12',nombre:'Gcia Zonal'},
{tipo:'Departamento',idPadre:'96843130-7',id:'13',nombre:'KCH Vta Equipos Mineros'},
{tipo:'Departamento',idPadre:'96843130-7',id:'14',nombre:'KCH Vta Equipos Construcción'},
{tipo:'Departamento',idPadre:'96843130-7',id:'15',nombre:'KCH Vta Equipos Forestal'},
{tipo:'Departamento',idPadre:'96843130-7',id:'19',nombre:'KCH Vta Repuestos'},
{tipo:'Departamento',idPadre:'96843130-7',id:'20',nombre:'KCH Servicio Terreno'},
{tipo:'Departamento',idPadre:'96843130-7',id:'21',nombre:'KCH Operaciones'},
{tipo:'Departamento',idPadre:'96843130-7',id:'22',nombre:'KCH Clasif. Chancado'},
{tipo:'Departamento',idPadre:'96843130-7',id:'45',nombre:'Adm & Control Gestión'},
{tipo:'Departamento',idPadre:'96843130-7',id:'71',nombre:'KCH Repuestos Mineria'},
{tipo:'Departamento',idPadre:'96843130-7',id:'72',nombre:'KCH Vta Equipos Constratismo'},
{tipo:'Departamento',idPadre:'96843140-4',id:'11',nombre:'Gcia General'},
{tipo:'Departamento',idPadre:'96843140-4',id:'12',nombre:'Gcia Zonal'},
{tipo:'Departamento',idPadre:'96843140-4',id:'23',nombre:'DCC Repuestos'},
{tipo:'Departamento',idPadre:'96843140-4',id:'24',nombre:'DCC Filtros'},
{tipo:'Departamento',idPadre:'96843140-4',id:'25',nombre:'DCC Venta Motores'},
{tipo:'Departamento',idPadre:'96843140-4',id:'26',nombre:'DCC Contratos Marc'},
{tipo:'Departamento',idPadre:'96843140-4',id:'27',nombre:'DCC Soporte'},
{tipo:'Departamento',idPadre:'96843140-4',id:'28',nombre:'DCC Servicios'},
{tipo:'Departamento',idPadre:'96843140-4',id:'29',nombre:'DCC Generadores y Arriendo'},
{tipo:'Departamento',idPadre:'96843140-4',id:'49',nombre:'DCC Six Sigma'},
{tipo:'Departamento',idPadre:'99532160-2',id:'11',nombre:'Gcia General'},
{tipo:'Departamento',idPadre:'99532160-2',id:'17',nombre:'KCCA Vta Equipos Usados'},
{tipo:'Departamento',idPadre:'99532160-2',id:'43',nombre:'KCCA Taller Mecanico'},
{tipo:'Departamento',idPadre:'99532160-2',id:'44',nombre:'KCCA Arriendos'},
{tipo:'Departamento',idPadre:'99532160-2',id:'45',nombre:'Adm & Control Gestión'},
{tipo:'Departamento',idPadre:'99532160-2',id:'50',nombre:'KCCA Finance'},
{tipo:'Departamento',idPadre:'99532160-2',id:'64',nombre:'KCCA Transporte'}


    
    );
});
*/



