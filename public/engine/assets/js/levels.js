// ==== START OF APP PARAMETERS ====
function getConstant(cO0){
  if(cO0=='engine')return'VirtuCities'
}
// ==== START OF LEVEL DESIGN PARAMETERS ====
function allLevels(library){
  if(library=='theisland'){
    var levelassets=[
      /* PAY KIOSK */
      {
        name:'pay kiosk',type:'object',loader:'glb',
        x:[
          315.9,315.9,315.9,315.9,315.9,
          320.39,323.49,334.49,337.59,
          344.1,344.1,344.1,344.1,344.1
        ],
        y:[
          69,69,69,69,69,
          69,69,69,69,
          69,69,69,69,69
        ],z:[
          91.54,94.34,97.14,99.94,102.74,
          109.1,109.1,109.1,109.1,
          93.56,96.36,99.16,101.96,104.76
        ],o:[
          {x:0,y:150,z:0},{x:0,y:150,z:0},{x:0,y:150,z:0},{x:0,y:150,z:0},{x:0,y:150,z:0},
          {x:0,y:-120,z:0},{x:0,y:-120,z:0},{x:0,y:-120,z:0},{x:0,y:-120,z:0},
          {x:0,y:-30,z:0},{x:0,y:-30,z:0},{x:0,y:-30,z:0},{x:0,y:-30,z:0},{x:0,y:-30,z:0}
        ],
        s:[
          1,1,1,1,1,
          1,1,1,1,
          1,1,1,1,1
        ],
        kg:[
          80,80,80,80,80,
          80,80,80,80,
          80,80,80,80,80
        ],si:0,sl:null,sh:['lidhit'],ds:4,zone:{name:'zoned1'},select:'movable'
      },

      /* HOSPITAL BED */
      {
        name:'hospital bed matrice',type:'object',loader:'glb',
        x:
        [
          316.6,316.6,316.6,316.6,316.6,
          321.4,324.5,335.5,338.6,
          343.4,343.4,343.4,343.4,343.4
        ],
        y:[
          69.3,69.3,69.3,69.3,69.3,
          69.3,69.3,69.3,69.3,
          69.3,69.3,69.3,69.3,69.3
        ],z:[
          92.55,95.35,98.15,100.95,103.75,
          108.4,108.4,108.4,108.4,
          92.55,95.35,98.15,100.95,103.75
        ],o:[
          {x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},
          {x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0},
          {x:0,y:-90,z:0},{x:0,y:-90,z:0},{x:0,y:-90,z:0},{x:0,y:-90,z:0},{x:0,y:-90,z:0}
        ],
        s:[
          1,1,1,1,1,
          1,1,1,1,
          1,1,1,1,1
        ],
        kg:[
          10,10,10,10,10,
          10,10,10,10,
          10,10,10,10,10
        ],si:0,sl:null,sh:['punching'],ds:4,zone:{name:'zoned1'},select:'movable'
      },

      {
        name:'hospital bed base',type:'object',loader:'glb',
        x:[
          316.6,316.6,316.6,316.6,316.6,
          321.4,324.5,335.5,338.6,
          343.4,343.4,343.4,343.4,343.4
        ],
        y:[
          68.7,68.7,68.7,68.7,68.7,
          68.7,68.7,68.7,68.7,68.7,68.7,
          68.7,68.7,68.7,68.7,68.7
        ],z:[
          92.55,95.35,98.15,100.95,103.75,
          108.4,108.4,108.4,108.4,
          92.55,95.35,98.15,100.95,103.75
        ],o:[
          {x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},
          {x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0},
          {x:0,y:-90,z:0},{x:0,y:-90,z:0},{x:0,y:-90,z:0},{x:0,y:-90,z:0},{x:0,y:-90,z:0}
        ],
        s:[
          1,1,1,1,1,
          1,1,1,1,
          1,1,1,1,1
        ],
        kg:[
          100,100,100,100,100,
          100,100,100,100,
          100,100,100,100,100
        ],si:0,sl:null,sh:['metalpole'],
        activity:{
          containerID:['actionRightIconB',null],
          type:['payIT','sleep'],
          amountID:['objectPrice',null],
          description:['Health insurance...',null],
          amountRange:['3-9',null],
          animation:[{act:['LookAround','LookingBehind']},null],
          duration:['5-13',null],
          continue:[0,0],
          sleep:[null,{heal:'200-500',charge:'200-500',speed:6}],
          color:['red',null],
        },
        px:1.2,ds:4,zone:{name:'zoned1'},select:'movable'
      },

      /* DOORS */
      {
        name:'elevator door',
        type:'object',
        loader:'glb',
        x:[
          328.035,328.035,
          331.965,331.965
        ],
        y:[
          69.35,69.35,
          69.35,69.35
        ],
        z:[
          96.66,98.34,
          96.66,98.34
        ],
        o:[
          {x:0,y:90,z:0},
          {x:0,y:90,z:0},
          {x:0,y:-90,z:0},
          {x:0,y:-90,z:0}
        ],
        s:[
          1,1,1,1
        ],
        kg:[
          0,0,0,0
        ],si:0,sl:null,sh:['metalpole'],
        lo:[
          {x:258.4,y:3.1,z:25.6,o:225,s:.5},
          {x:258.4,y:3.1,z:25.6,o:225,s:.5},
          {x:258.4,y:3.1,z:25.6,o:225,s:.5},
          {x:258.4,y:3.1,z:25.6,o:225,s:.5},
        ],
        rm:false,exp:getIndoorExposure().outdoor,
        px:1.2,ds:9,zone:{name:'zoned1'}
      },

      /* HOSPITAL DOOR */
      {
        name:'building corporate door',type:'object',loader:'glb',
        x:[259.06],
        y:[4.5],
        z:[26.232],
        o:[{x:0,y:45.05,z:0}],
        s:[1],
        kg:[0],
        lo:[
          {x:330,y:68.35,z:97.5,o:0,s:.5}
        ],
        si:0,sl:'twilightfeelings',sh:['tappingwood'],
        rm:true,exp:getIndoorExposure().indoor,
        px:3.2,ds:50,zone:{name:'zoneb1'}
      },

      /* HOSPITAL UNITS */
      {name:'hospital glass window',type:'object',loader:'glb',x:[330,330,315,345],y:[69.85,69.85,69.85,69.85],z:[80,110,95,95],o:[{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0}],s:[1,1,1,1],kg:[0,0,0,0],si:0,sl:null,sh:['heavyimpact'],ds:15},

      {name:'hospital partition',type:'object',loader:'glb',
      x:[
        316.6,316.6,316.6,316.6,316.6,
        319.85,322.95,326.05,
        333.95,337.05,340.15,
        343.4,343.4,343.4,343.4,343.4
      ],
      y:[
        69.6,69.6,69.6,69.6,69.6,
        69.6,69.6,69.6,
        69.6,69.6,69.6,
        69.6,69.6,69.6,69.6,69.6
      ],
      z:[
        93.95,96.75,99.55,102.35,105.15,
        108.4,108.4,108.4,
        108.4,108.4,108.4,
        93.95,96.75,99.55,102.35,105.15
      ],
      o:[
        {x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},
        {x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},
        {x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:90,z:0},
        {x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}
      ],
      s:[
        1,1,1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,1,1
      ],
      kg:[
        0,0,0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,0,0
      ],si:0,sl:null,sh:['tappingwood'],ds:15,zone:{name:'zoned1'}},

      {name:'hospital wall',type:'object',loader:'glb',x:[317.55,342.45],y:[69.85,69.85],z:[91.1,91.1],o:[{x:0,y:0,z:0},{x:0,y:180,z:0}],s:[1,1],kg:[0,0],si:0,sl:null,sh:['heavyimpact'],ds:30,zone:{name:'zoned1'}},

      {name:'hospital elevator core body',type:'trimesh',loader:'glb',x:[324.5,335.5],y:[69.85,69.85],z:[97.5,97.5],o:[{x:0,y:0,z:0},{x:0,y:180,z:0}],s:[1,1],kg:[0,0],si:0,ds:18,zone:{name:'zoned1'}},

      {name:'hospital elevator core',type:'objectmesh',loader:'glb',x:[324.5,335.5],y:[69.85,69.85],z:[97.5,97.5],o:[{x:0,y:0,z:0},{x:0,y:180,z:0}],s:[1,1],kg:[0,0],si:0,ds:25,zone:{name:'zoned1'}},

      {name:'hospital roofing',type:'object',loader:'glb',x:[330],y:[72.1],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:20,zone:{name:'zoned1'}},

      {
        name:'hospital floor',type:'object',loader:'glb',x:[330],y:[68.25],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:160,
        zone:{name:'ZONED1',elevation:67.75,height:4,corners:[[311.065,77.059],[351.065,77.059],[351.065,114.059],[311.065,114.059]]},select:'navigatable'
      },

      /* CORPORATE BUILDING DOORS */
      {
        name:'building corporate door',type:'objectmesh',loader:'glb',
        x:[
          253.591,253.591,
          284.537,311.77,
          337.697,
          356.103,
          358.82,358.82,
          318.964,286.603
        ],
        y:[
          4.5,4.5,
          4.5,4.5,
          4.5,
          4.5,
          4.5,4.5,
          4.5,4.5
        ],
        z:[
          89.23,56.869,
          20.581,20.581,
          23.633,
          47.757,
          79.933,112.294,
          122.266,122.266
        ],
        o:[
          {x:0,y:90,z:0},{x:0,y:90,z:0},
          {x:0,y:0,z:0},{x:0,y:0,z:0},
          {x:0,y:-29.6,z:0},
          {x:0,y:-75.1,z:0},
          {x:0,y:-90,z:0},{x:0,y:-90,z:0},
          {x:0,y:180,z:0},{x:0,y:180,z:0}
        ],
        s:[
          1,1,
          1,1,
          1,
          1,
          1,1,
          1,1
        ],
        kg:[
          0,0,
          0,0,
          0,
          0,
          0,0,
          0,0
        ],si:0,sl:'musicbox',sh:['tappingwood'],ds:50,zone:{name:'zoneb1'}
      },

      /* BUILDING DOORS A */
      {
        name:'building typical door',type:'objectmesh',loader:'glb',
        x:[
          -428.78,
          -406.9,-386.02,-365.15,
          -358.88,-370.939,-382.9,-395.05,
          -427.89,-448.67,-469.46,-490.24,-511.02,
          -515.55,-504.2,
          -486.55,-463.44,
          -445.81
        ],
        y:[
          4.5,
          4.5,4.5,4.5,
          4.5,4.5,4.5,4.5,
          4.5,4.5,4.5,4.5,4.5,
          4.5,4.5,
          4.5,4.5,
          4.5
        ],
        z:[
          138.04,
          133.91,122.22,110.53,
          77.47,56.8,36.13,15.47,
          6.65,18.51,30.36,42.22,54.07,
          70.59,91.65,
          104.75,110.92,
          -124.15
        ],
        o:[
          {x:0,y:165.93,z:0},
          {x:0,y:-150.75,z:0},{x:0,y:-150.75,z:0},{x:0,y:-150.75,z:0},
          {x:0,y:-59.74,z:0},{x:0,y:-59.74,z:0},{x:0,y:-59.74,z:0},{x:0,y:-59.74,z:0},
          {x:0,y:29.7,z:0},{x:0,y:29.7,z:0},{x:0,y:29.7,z:0},{x:0,y:29.7,z:0},{x:0,y:29.7,z:0},
          {x:0,y:118.33,z:0},{x:0,y:118.33,z:0},
          {x:0,y:165.06,z:0},{x:0,y:165.06,z:0},
          {x:0,y:119.2,z:0},
        ],
        s:[
          1,
          1,1,
          1,1,1,1,
          1,1,1,1,1,
          1,1,
          1,1,
          1
        ],
        kg:[
          0,
          0,0,0,
          0,0,0,0,
          0,0,0,0,0,
          0,0,
          0,0,
          0
        ],si:0,sl:'musicbox',sh:['tappingwood'],ds:50,zone:{name:'zonea1'}
      },

      /* BUILDING DOORS B */
      {
        name:'building typical door',type:'objectmesh',loader:'glb',
        x:[
          -539.92,
          -570.51,
          -557.76,-515.46,-473.16,
          -392.8,-355.15,
          -306.79,
          -285.69,-296.64,
          -310.69,
          -330.2,-349.09,-367.97,-386.88,
          -427.73,-449.1,
          -469.35,
          -488.98,-510.03
        ],
        y:[
          4.5,
          4.5,
          4.5,4.5,4.5,
          4.5,4.5,
          4.5,
          4.5,4.5,
          4.5,
          4.5,4.5,4.5,4.5,
          4.5,4.5,
          4.5,
          4.5,4.5
        ],
        z:[
          190.7,
          186.93,
          222.83,233.29,243.8,
          235.17,213.23,
          211.78,
          209.57,190.73,
          176.43,
          183.97,194.81,205.67,216.52,
          219.58,215.33,
          217.98,
          223.38,217.76
        ],
        o:[
          {x:0,y:-60.4,z:0},
          {x:0,y:30.62,z:0},
          {x:0,y:166.10,z:0},{x:0,y:166.10,z:0},{x:0,y:166.10,z:0},
          {x:0,y:-149.76,z:0},{x:0,y:-149.76,z:0},
          {x:0,y:120.85,z:0},
          {x:0,y:-59.83,z:0},{x:0,y:-59.83,z:0},
          {x:0,y:-8.86,z:0},
          {x:0,y:29.872,z:0},{x:0,y:29.872,z:0},{x:0,y:29.872,z:0},{x:0,y:29.872,z:0},
          {x:0,y:-11.25,z:0},{x:0,y:-11.25,z:0},
          {x:0,y:29.65,z:0},
          {x:0,y:-14.94,z:0},{x:0,y:-14.94,z:0}
        ],
        s:[
          1,
          1,
          1,1,1,
          1,1,
          1,
          1,1,
          1,
          1,1,1,1,
          1,1,
          1,
          1,1
        ],
        kg:[
          0,
          0,
          0,0,0,
          0,0,
          0,
          0,0,
          0,
          0,0,0,0,
          0,0,
          0,
          0,0
        ],si:0,sl:'musicbox',sh:['tappingwood'],ds:50,zone:{name:'zonea1'}
      },

      /* BUILDING VERTICAL BODY */
      {name:'building corporate body',type:'polyhedron',loader:'glb',x:[305],y:[4],z:[75],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:120,zone:{name:'zoneb1'}},

      /* BUILDING VERTICAL MESH */
      {name:'building corporate',type:'objectmesh',loader:'glb',x:[305],y:[3],z:[75],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:250,zone:{name:'zoneb1'}},

      /* ROADS HORIZONTAL ELEMENTS */
      {name:'totemstation',type:'object',loader:'glb',x:[250.2],y:[7],z:[19.8],o:[{x:0,y:0,z:0}],s:[1],kg:[1000],si:0,sl:null,sh:['hitrim'],ds:350,zone:{name:'zoneb1'},select:'movable'},

      {name:'pierbroadsbody',type:'trimesh',loader:'glb',x:[290],y:[3.01],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:250,zone:{name:'zoneb1'}},
      {name:'pierbroads',type:'objectmesh',loader:'glb',x:[290],y:[3.01],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:350,zone:{name:'zoneb1'},select:'navigatable'},

      {name:'pierbridgewalkbody',type:'trimesh',loader:'glb',x:[0],y:[16],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:150,zone:{name:'zonec1'}},
      {name:'pierbridgebody',type:'trimesh',loader:'glb',x:[0],y:[16],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:260,zone:{name:'zonec1'}},
      {
        name:'pierbridge',type:'objectmesh',loader:'glb',x:[0],y:[3.01],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:320,
        zone:{
          name:'ZONEC1',elevation:2.5,height:20,
          corners:[
            [-62.825,-10.06],[57.187,-35.595],[62.825,10.06],[-57.186,35.595]
          ],
          properties:{
            MAINBD01:{
              type:'property',
              url:'assets/documents/mainbridge.pdf',
              thumb:'assets/merchandise/mainbridge.png',
              color:'skyblue',
              tag:'For Rent',
              title:'Main Bridge',
              description:'This is the main bridge and is offered for rent to associate with brand name, which the new owner can rename at an agreed duration not exceeding 300 years.',
              price:'125.00',
              serial:'MAINBD01',
              corners:[
                [-96,-5.42],[96,-34.511],[96,5.42],[-96,34.511]
              ]
            }
          }
        },select:'navigatable'
      },

      {name:'flyoverrightbody',type:'trimesh',loader:'glb',x:[-210.991],y:[3.01],z:[40.818],o:[{x:0,y:30,z:0}],s:[1],kg:[0],si:0,ds:55,zone:{name:'zonea1'}},
      {name:'flyoverrightunderbody',type:'polyhedron',loader:'glb',x:[-210.991],y:[3.01],z:[40.818],o:[{x:0,y:30,z:0}],s:[1],kg:[0],si:0,ds:55,zone:{name:'zonea1'}},
      {name:'flyoverleftbody',type:'trimesh',loader:'glb',x:[-184.991],y:[3.01],z:[85.852],o:[{x:0,y:30,z:0}],s:[1],kg:[0],si:0,ds:55,zone:{name:'zonea1'}},
      {name:'flyoverleftunderbody',type:'polyhedron',loader:'glb',x:[-184.991],y:[3.01],z:[85.852],o:[{x:0,y:30,z:0}],s:[1],kg:[0],si:0,ds:55,zone:{name:'zonea1'}},

      {name:'pieraroadsbody',type:'trimesh',loader:'glb',x:[-335],y:[3.01],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:300,zone:{name:'zonea1'}},
      {name:'pieraroads',type:'objectmesh',loader:'glb',x:[-335],y:[3.01],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:400,zone:{name:'zonea1'},select:'navigatable'},

      /* PLATFORM */
      {type:'box',x:290,y:2,z:0,o:0,l:200,h:1,w:75,kg:0}, // Island B
      {name:'pierbbody',type:'polyhedron',loader:'glb',x:[290],y:[-.45],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:250,zone:{name:'zoneb1'}},
      {
        name:'pierb',type:'objectmesh',loader:'glb',x:[290],y:[-.45],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:450,
        zone:{
          name:'ZONEB1',elevation:2.5,height:4,
          corners:[
            [59.651,-76.351],[115.071,-131.331],[407.851,-131.31],[490.798,-79.78],[520.34,30.124],[461.392,131.155],[127.427,131.331],[69.091,73.283]
          ],
          properties:{
            CORBLD01:{
              type:'property',
              url:'assets/documents/corporatebuilding.pdf',
              thumb:'assets/merchandise/corporatebuilding.png',
              color:'skyblue',
              tag:'For Sale',
              title:'Corporate Building',
              description:'This is the corporate building and is offered for sale the land it covers, which the new owner can replace with a new virtual structure.',
              price:'225.00',
              serial:'CORBLD01',
              corners:[
                [252.241,31.152],[264.141,19.231],[332.673,19.231],[352.973,30.745],[360.17,57.792],[360.17,123.632],[252.241,123.591]
              ]
            },
            EXHALL01:{
              type:'property',
              url:'assets/documents/exhibitionhall.pdf',
              thumb:'assets/merchandise/exhibitionhall.png',
              color:'darkblue',
              tag:'Private',
              title:'Exhibition Hall',
              description:'This is where exhibitions are held and this property is owned by an anonymous owner.',
              serial:'EXHALL01',
              corners:[
                [177,-120],[247,-120],[247,-50],[177,-50]
              ]
            },
            CHASTN01:{
              type:'property',
              url:'assets/documents/chargingstation.pdf',
              thumb:'assets/merchandise/chargingstation.png',
              color:'skyblue',
              tag:'For Sale',
              title:'Charging Station',
              description:'This is the charging station and is offered for sale the land it covers, which the new owner can replace with a new virtual structure.',
              price:'125.00',
              serial:'CHASTN01',
              corners:[
                [176.4,20.4],[249.6,20.4],[249.6,74],[176.4,74]
              ]
            },
            MAINRD01:{
              type:'property',
              url:'assets/documents/mainroad.pdf',
              thumb:'assets/merchandise/mainroad.png',
              color:'skyblue',
              tag:'For Rent',
              title:'West Main Road',
              description:'This is the west main road and is offered for rent to associate with brand name, which the new owner can rename at an agreed duration not exceeding 300 years.',
              price:'325.00',
              serial:'MAINRD01',
              corners:[
                [99,-35],[327,-35],[327,5],[99,5]
              ]
            }
          }
        },select:'navigatable'
      },

      {name:'pierplatformbody',type:'trimesh',loader:'glb',x:[212,212],y:[.7,.7],z:[-164,164],o:[{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1],kg:[0,0],sl:null,sh:['fryingpan'],ds:70,zone:{name:'zonee1'}},
      {
        name:'pierplatform',type:'objectmesh',loader:'glb',x:[212,212],y:[0,0],z:[-164,164],o:[{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1],kg:[0,0],si:0,ds:90,
        zone:{
          name:'ZONEE1',elevation:.7,height:4,
          corners:[
            [174.5,-195],[249.5,-195],[249.5,-135],[174.5,-135],[174.5,135],[249.5,135],[249.5,195],[174.5,195]
          ],
          properties:{
            PPLATF01:{
              type:'property',
              url:'assets/documents/pierplatform.pdf',
              thumb:'assets/merchandise/pierplatform.png',
              color:'skyblue',
              tag:'For Rent',
              title:'Pier Platform Ariva',
              description:'This is the pier platform ariva and is offered for rent for commercial usage, which the new owner can rent for tenants to place their shops or stands',
              price:'1020.00',
              serial:'PPLATF01',
              corners:[
                [174.5,-195],[249.5,-195],[249.5,-135],[174.5,-135]
              ]
            },
            PPLATF02:{
              type:'property',
              url:'assets/documents/pierplatform.pdf',
              thumb:'assets/merchandise/pierplatform.png',
              color:'skyblue',
              tag:'For Rent',
              title:'Pier Platform Exodus',
              description:'This is the pier platform exodus and is offered for rent for commercial usage, which the new owner can rent for tenants to place their shops or stands',
              price:'525.00',
              serial:'PPLATF02',
              corners:[
                [174.5,135],[249.5,135],[249.5,195],[174.5,195]
              ]
            }
          }
        },select:'navigatable'
      },

      {name:'yachtbody',type:'trimesh',loader:'glb',x:[212,212],y:[0,0],z:[-209,209],o:[{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1],kg:[0,0],sl:null,sh:['fryingpan'],ds:70,zone:{name:'zonef1'}},

      {name:'yacht',type:'objectmesh',loader:'glb',x:[212,212],y:[0,0],z:[-209,209],o:[{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1],kg:[0,0],si:0,ds:140,zone:{name:'ZONEF1'},select:'navigatable'},

      {type:'box',x:212,y:2,z:-86,o:0,l:35,h:1,w:37,kg:0}, // Real congress
      {type:'box',x:-260,y:2,z:175,o:30,l:40,h:1,w:32,kg:0}, // Parking area
      {type:'box',x:-320,y:2,z:85,o:30,l:250,h:1,w:75,kg:0}, // Island A
      {name:'pierabody',type:'polyhedron',loader:'glb',x:[-335],y:[-.45],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:300,zone:{name:'zonea1'}},
      {
        name:'piera',type:'objectmesh',loader:'glb',x:[-335],y:[-.45],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:500,
        zone:{
          name:'ZONEA1',elevation:2.5,height:4,
          corners:[
            [-611.225,181.708],[-585.936,83.085],[-244.73,-111.001],[-123.692,-111.232],[-67.029,-54.317],[-58.767,100.753],[-407.49,301.22],[-561.015,267.298]
          ],
          properties:{
            MAINRD02:{
              type:'property',
              url:'assets/documents/mainroad.pdf',
              thumb:'assets/merchandise/mainroad.png',
              color:'skyblue',
              tag:'For Rent',
              title:'East Main Road',
              description:'This is the east main road and is offered for rent to associate with brand name, which the new owner can rename at an agreed duration not exceeding 300 years.',
              price:'250.00',
              serial:'MAINRD02',
              corners:[
                [-400.772,157.316],[-137.5,5.316],[-117.5,39.957],[-380.772,191.957]
              ]
            },
            PARKEA01:{
              type:'property',
              url:'assets/documents/parkingarea.pdf',
              thumb:'assets/merchandise/parkingarea.png',
              color:'skyblue',
              tag:'For Sale',
              title:'Parking Area',
              description:'This is the parking area and is offered for sale the land it covers, which the new owner can replace with a new virtual structure.',
              price:'75.00',
              serial:'PARKEA01',
              corners:[
                [-306.041,166.594],[-242.648,129.994],[-215.848,176.413],[-279.241,213.013]
              ]
            },
            // MARKET01:{
            //   type:'property',
            //   url:'assets/documents/dinomarket.pdf',
            //   thumb:'assets/merchandise/dinomarket.png',
            //   color:'skyblue',
            //   tag:'For Sale',
            //   title:'Dino Market',
            //   description:'This is the dino market and is offered for sale the land it covers, which the new owner can replace with a new virtual structure.',
            //   price:'375.00',
            //   serial:'MARKET01',
            //   corners:[
            //     [-378.651,16.519],[-335.349,-8.481],[-305.349,43.481],[-348.651,68.481]
            //   ]
            // }
          }
        },select:'navigatable'
      },

      /* GROUND */
      {type:'ground',x:0,y:-4,z:0},
      {name:'seabed',type:'objectmesh',loader:'glb',x:[0],y:[-4],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0},
    ]

    if(!isMobile||true){
      var levelassets=[
        /* DYNAMIC ITEMS ZONE B1 */
        {name:'trashbin',type:'object',loader:'glb',
        x:[
          430.197,448.108,381.262,
          249.1,213.0,176.9,
          288.95,288.95,213.0,
        ],
        y:[
          3.58,3.58,3.58,
          3.58,3.58,3.58,
          3.58,3.58,3.58,
        ],
        z:[
          -20.742,46.104,64.015,
          47.2,73.6,47.2,
          17.0,-47,-47,
        ],
        o:[
          {x:0,y:150,z:0},{x:0,y:60,z:0},{x:0,y:330,z:0},
          {x:0,y:90,z:0},{x:0,y:0,z:0},{x:0,y:270,z:0},
          {x:0,y:0,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0},
        ],
        s:[
          1,1,1,
          1,1,1,
          1,1,1,
        ],
        kg:[
          0,0,0,
          0,0,0,
          0,0,0,
        ],si:0,sl:null,sh:['hittincan'],ds:80,zone:{name:'zoneb1'},select:'movable'},

        /* DYNAMIC ITEMS ZONE A1 */
        {name:'trashbin',type:'object',loader:'glb',
        x:[
          -477.383,-537.315,-502.713,
          -229.681,-247.745,-292.208,
          -210.27,-242.27,-341.819,-373.819
        ],
        y:[
          3.58,3.58,3.58,
          3.58,3.58,3.58,
          3.58,3.58,3.58,3.58
        ],
        z:[
          118.052,152.654,212.586,
          153.453,194.366,189.553,
          107.374,51.949,183.324,127.899
        ],
        o:[
          {x:0,y:165,z:0},{x:0,y:255,z:0},{x:0,y:345,z:0},
          {x:0,y:120,z:0},{x:0,y:30,z:0},{x:0,y:300,z:0},
          {x:0,y:30,z:0},{x:0,y:210,z:0},{x:0,y:30,z:0},{x:0,y:210,z:0}
        ],
        s:[
          1,1,1,
          1,1,1,
          1,1,1,1
        ],
        kg:[
          0,0,0,
          0,0,0,
          0,0,0,0
        ],si:0,sl:null,sh:['hittincan'],ds:80,zone:{name:'zonea1'},select:'movable'},

        /* TREE VERTICAL BODIES ZONE B1 */
        {name:'treebody',type:'polyhedron',loader:'glb',
        x:[
          419.199,441.065,454.19,441.939,392.174,370.308,
          248.898,249.11,232.02,194.107,177.101,176.89,
          348.816,293.95,231.893,193.98,293.95,
        ],
        y:[
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1,
        ],
        z:[
          -27.141,-14.715,35.197,56.762,70.165,57.74,
          28.18,66.092,73.398,73.61,66.22,28.307,
          -39.418,-44,-47.01,-46.799,14,
        ],o:[
          {x:0,y:120,z:0},{x:0,y:0,z:0},{x:0,y:150,z:0},{x:0,y:330,z:0},{x:0,y:300,z:0},{x:0,y:180,z:0},
          {x:0,y:60,z:0},{x:0,y:240,z:0},{x:0,y:45,z:0},{x:0,y:270,z:0},{x:0,y:120,z:0},{x:0,y:90,z:0},
          {x:0,y:60,z:0},{x:0,y:0,z:0},{x:0,y:60,z:0},{x:0,y:270,z:0},{x:0,y:180,z:0},
        ],s:[
          1,1,1,1,1,1,
          1,1,1,1,1,1,
          1,1,1,1,1,
        ],
        kg:[
          0,0,0,0,0,0,
          0,0,0,0,0,0,
          0,0,0,0,0,
        ],si:0,sl:null,sh:['woodhit'],ds:40,zone:{name:'zoneb1'}},

        /* TREE VERTICAL BODIES ZONE A1 */
        {name:'treebody',type:'polyhedron',loader:'glb',
        x:[
          -490.434,-514.771,-540.367,-534.115,-489.514,-465.178,
          -239.366,-220.226,-231.374,-264.101,-282.524,-301.664,
          -408.054,-347.65,-376.65,-207.44,-236.44
        ],
        y:[
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1
        ],
        z:[
          215.921,209.578,164.763,140.763,114.935,121.27,
          137.082,169.81,184.682,203.821,205.924,173.197,
          210.479,183.226,132.997,102.276,52.047
        ],o:[
          {x:0,y:315,z:0},{x:0,y:195,z:0},{x:0,y:345,z:0},{x:0,y:165,z:0},{x:0,y:135,z:0},{x:0,y:15,z:0},
          {x:0,y:90,z:0},{x:0,y:270,z:0},{x:0,y:75,z:0},{x:0,y:300,z:0},{x:0,y:150,z:0},{x:0,y:120,z:0},
          {x:0,y:270,z:0},{x:0,y:210,z:0},{x:0,y:30,z:0},{x:0,y:210,z:0},{x:0,y:30,z:0}
        ],s:[
          1,1,1,1,1,1,
          1,1,1,1,1,1,
          1,1,1,1,1
        ],
        kg:[
          0,0,0,0,0,0,
          0,0,0,0,0,0,
          0,0,0,0,0
        ],si:0,sl:null,sh:['woodhit'],ds:40,zone:{name:'zonea1'}},

        /* TREES ZONE B1 */
        {name:'tree',type:'objectmesh',loader:'glb',
        x:[
          419.199,441.065,454.19,441.939,392.174,370.308,
          248.898,249.11,232.02,194.107,177.101,176.89,
          348.816,293.95,231.893,193.98,293.95,
        ],
        y:[
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1,
        ],
        z:[
          -27.141,-14.715,35.197,56.762,70.165,57.74,
          28.18,66.092,73.398,73.61,66.22,28.307,
          -39.418,-44,-47.01,-46.799,14,
        ],o:[
          {x:0,y:120,z:0},{x:0,y:0,z:0},{x:0,y:150,z:0},{x:0,y:330,z:0},{x:0,y:300,z:0},{x:0,y:180,z:0},
          {x:0,y:60,z:0},{x:0,y:240,z:0},{x:0,y:45,z:0},{x:0,y:270,z:0},{x:0,y:120,z:0},{x:0,y:90,z:0},
          {x:0,y:60,z:0},{x:0,y:0,z:0},{x:0,y:60,z:0},{x:0,y:270,z:0},{x:0,y:180,z:0},
        ],s:[
          1,1,1,1,1,1,
          1,1,1,1,1,1,
          1,1,1,1,1,
        ],
        kg:[
          0,0,0,0,0,0,
          0,0,0,0,0,0,
          0,0,0,0,0,
        ],si:0,ds:50,zone:{name:'zoneb1'},select:'movable'},

        /* TREES ZONE A1 */
        {name:'tree',type:'objectmesh',loader:'glb',
        x:[
          -490.434,-514.771,-540.367,-534.115,-489.514,-465.178,
          -239.366,-220.226,-231.374,-264.101,-282.524,-301.664,
          -408.054,-347.65,-376.65,-207.44,-236.44
        ],
        y:[
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1,3.1,
          3.1,3.1,3.1,3.1,3.1
        ],
        z:[
          215.921,209.578,164.763,140.763,114.935,121.27,
          137.082,169.81,184.682,203.821,205.924,173.197,
          210.479,183.226,132.997,102.276,52.047
        ],o:[
          {x:0,y:315,z:0},{x:0,y:195,z:0},{x:0,y:345,z:0},{x:0,y:165,z:0},{x:0,y:135,z:0},{x:0,y:15,z:0},
          {x:0,y:90,z:0},{x:0,y:270,z:0},{x:0,y:75,z:0},{x:0,y:300,z:0},{x:0,y:150,z:0},{x:0,y:120,z:0},
          {x:0,y:270,z:0},{x:0,y:210,z:0},{x:0,y:30,z:0},{x:0,y:210,z:0},{x:0,y:30,z:0}
        ],s:[
          1,1,1,1,1,1,
          1,1,1,1,1,1,
          1,1,1,1,1
        ],
        kg:[
          0,0,0,0,0,0,
          0,0,0,0,0,0,
          0,0,0,0,0
        ],si:0,ds:50,zone:{name:'zonea1'},select:'movable'},

        /* BUILDING VERTICAL BODY */
        // Zone A
        {name:'typical building body 001',type:'polyhedron',loader:'glb',x:[-558],y:[4],z:[200],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:70,zone:{name:'zonea1'}},

        {name:'typical building body 002',type:'polyhedron',loader:'glb',x:[-511],y:[4],z:[220],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zonea1'}},

        {name:'typical building body 003',type:'polyhedron',loader:'glb',x:[-441],y:[4],z:[234],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:75,zone:{name:'zonea1'}},

        {name:'typical building body 004',type:'polyhedron',loader:'glb',x:[-358],y:[4],z:[207],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:80,zone:{name:'zonea1'}},

        {name:'typical building body 005',type:'polyhedron',loader:'glb',x:[-300],y:[4],z:[200],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zonea1'}},

        {name:'typical building body 006',type:'polyhedron',loader:'glb',x:[-464],y:[4],z:[54],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:100,zone:{name:'zonea1'}},

        {name:'typical building body 007',type:'polyhedron',loader:'glb',x:[-398],y:[4],z:[67],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:110,zone:{name:'zonea1'}},

        {name:'typical building body 008',type:'polyhedron',loader:'glb',x:[-214],y:[4],z:[151],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zonea1'}},

        {name:'typical building body 009',type:'polyhedron',loader:'glb',x:[-191],y:[4],z:[103],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:70,zone:{name:'zonea1'}},

        {name:'typical building body 010',type:'polyhedron',loader:'glb',x:[-130],y:[4],z:[69],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:55,zone:{name:'zonea1'}},

        {name:'typical building body 011',type:'polyhedron',loader:'glb',x:[-95],y:[4],z:[58],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zonea1'}},

        {name:'typical building body 012',type:'polyhedron',loader:'glb',x:[-302],y:[4],z:[1.5],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:100,zone:{name:'zonea1'}},

        {name:'typical building body 013',type:'polyhedron',loader:'glb',x:[-244],y:[4],z:[30],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:75,zone:{name:'zonea1'}},

        {name:'typical building body 014',type:'polyhedron',loader:'glb',x:[-188],y:[4],z:[-2],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zonea1'}},

        {name:'typical building body 015',type:'polyhedron',loader:'glb',x:[-142],y:[4],z:[-34],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zonea1'}},

        {name:'typical building body 016',type:'polyhedron',loader:'glb',x:[-97],y:[4],z:[-44],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:75,zone:{name:'zonea1'}},

        // Zone B
        {name:'typical building body 017',type:'polyhedron',loader:'glb',x:[119],y:[4],z:[30],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:75,zone:{name:'zoneb1'}},

        {name:'typical building body 018',type:'polyhedron',loader:'glb',x:[147],y:[4],z:[47],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:55,zone:{name:'zoneb1'}},

        {name:'typical building body 019',type:'polyhedron',loader:'glb',x:[159],y:[4],z:[76],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:75,zone:{name:'zoneb1'}},

        {name:'typical building body 020',type:'polyhedron',loader:'glb',x:[90],y:[4],z:[-50],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:45,zone:{name:'zoneb1'}},

        {name:'typical building body 021',type:'polyhedron',loader:'glb',x:[128],y:[4],z:[-53],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:45,zone:{name:'zoneb1'}},

        {name:'typical building body 022',type:'polyhedron',loader:'glb',x:[156],y:[4],z:[-62],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:45,zone:{name:'zoneb1'}},

        {name:'typical building body 023',type:'polyhedron',loader:'glb',x:[160],y:[4],z:[-90],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:60,zone:{name:'zoneb1'}},

        {name:'typical building body 024',type:'polyhedron',loader:'glb',x:[262],y:[4],z:[-86],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:65,zone:{name:'zoneb1'}},

        {name:'typical building body 025',type:'polyhedron',loader:'glb',x:[309],y:[4],z:[-63],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:70,zone:{name:'zoneb1'}},

        {name:'typical building body 026',type:'polyhedron',loader:'glb',x:[382],y:[4],z:[-53],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:55,zone:{name:'zoneb1'}},

        {name:'typical building body 027',type:'polyhedron',loader:'glb',x:[426],y:[4],z:[-73],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:55,zone:{name:'zoneb1'}},

        {name:'typical building body 028',type:'polyhedron',loader:'glb',x:[460],y:[4],z:[-72],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:40,zone:{name:'zoneb1'}},

        {name:'typical building body 029',type:'polyhedron',loader:'glb',x:[481],y:[4],z:[-46],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:40,zone:{name:'zoneb1'}},

        {name:'typical building body 030',type:'polyhedron',loader:'glb',x:[481],y:[4],z:[3],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:55,zone:{name:'zoneb1'}},

        {name:'typical building body 031',type:'polyhedron',loader:'glb',x:[476],y:[4],z:[62],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:60,zone:{name:'zoneb1'}},

        {name:'typical building body 032',type:'polyhedron',loader:'glb',x:[444],y:[4],z:[83],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:45,zone:{name:'zoneb1'}},

        {name:'typical building body 033',type:'polyhedron',loader:'glb',x:[410],y:[4],z:[90],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:40,zone:{name:'zoneb1'}},

        {name:'typical building body 034',type:'polyhedron',loader:'glb',x:[406],y:[4],z:[101],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,sl:null,sh:['heavyimpact'],ds:45,zone:{name:'zoneb1'}},

        /* ROADS VERTICAL MESH */
        {name:'buildingsb',type:'objectmesh',loader:'glb',x:[290],y:[3],z:[0],o:[{x:0,y:0,z:0}],s:[1],si:0,kg:[0],ds:350,zone:{name:'zoneb1'}},
        {name:'buildingsa',type:'objectmesh',loader:'glb',x:[-335],y:[3],z:[95],o:[{x:0,y:0,z:0}],s:[1],si:0,kg:[0],ds:400,zone:{name:'zonea1'}},

        /* ROADS ZONE B1 VERTICAL BODIES */
        {name:'streetlightbody',type:'polyhedron',loader:'glb',
        x:[
          442.32,426.856,384.605,
          247.45,247.45,238,213,188,178.55,178.55,
          368.491,341.752,307.95,269.95,232,194,156,118.05,
        ],
        y:[
          3,3,3,
          3,3,3,3,3,3,3,
          3,3,3,3,3,3,3,3,
        ],
        z:[
          42.762,-14.952,58.226,
          35,55,72.05,72.05,72.05,55,35,
          .137,-13.058,-15,-15,-15,-15,-15,-15,
        ],o:[
          {x:0,y:60,z:0},{x:0,y:150,z:0},{x:0,y:330,z:0},
          {x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:270,z:0},{x:0,y:270,z:0},
          {x:0,y:150,z:0},{x:0,y:165,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},
        ],s:[
          1,1,1,
          1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,
        ],
        kg:[
          0,0,0,
          0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,
        ],si:0,sl:null,sh:['metalpole'],ds:55,zone:{name:'zoneb1'}},

        /* ROADS ZONE B1 VERTICAL MESHES */
        {name:'streetlight',type:'objectmesh',loader:'glb',
        x:[
          368.491,341.752,307.95,269.95,232,194,156,118.05,
        ],
        y:[
          3,3,3,3,3,3,3,3,
        ],
        z:[
          .137,-13.058,-15,-15,-15,-15,-15,-15,
        ],o:[
          {x:0,y:150,z:0},{x:0,y:165,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},
        ],s:[
          1,1,1,1,1,1,1,1,
        ],
        kg:[
          0,0,0,0,0,0,0,0,
        ],si:0,ds:100,zone:{name:'zoneb1'}},

        /* ROADS ZONE B1 VERTICAL MESHES */
        {name:'streetlightsingle',type:'objectmesh',loader:'glb',
        x:[
          442.32,426.856,384.605,
          247.45,247.45,238,213,188,178.55,178.55,
        ],
        y:[
          3,3,3,
          3,3,3,3,3,3,3,
        ],
        z:[
          42.762,-14.952,58.226,
          35,55,72.05,72.05,72.05,55,35,
        ],o:[
          {x:0,y:60,z:0},{x:0,y:150,z:0},{x:0,y:330,z:0},
          {x:0,y:90,z:0},{x:0,y:90,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:270,z:0},{x:0,y:270,z:0},
        ],s:[
          1,1,1,
          1,1,1,1,1,1,1,
        ],
        kg:[
          0,0,0,
          0,0,0,0,0,0,0,
        ],si:0,ds:100,zone:{name:'zoneb1'}},

        /* BRIDGE ZONE C1 VERTICAL BODIES */
        {name:'streetlightbody',type:'polyhedron',loader:'glb',
        x:[
          73.676,24.563,-24.563,-73.676,
        ],
        y:[
          5.181,15.838,15.838,5.181,
        ],
        z:[
          -14.117,-6.248,6.248,14.116,
        ],o:[
          {x:0,y:4.2,z:0},{x:0,y:13.2,z:0},{x:0,y:13.2,z:0},{x:0,y:4.2,z:0},
        ],s:[
          1,1,1,1,
        ],
        kg:[
          0,0,0,0,
        ],si:0,sl:null,sh:['metalpole'],ds:55,zone:{name:'zonec1'}},

        /* BRIDGE ZONE C1 VERTICAL MESHES */
        {name:'streetlight',type:'objectmesh',loader:'glb',
        x:[
          73.676,24.563,-24.563,-73.676,
        ],
        y:[
          5.181,15.838,15.838,5.181,
        ],
        z:[
          -14.117,-6.248,6.248,14.116,
        ],o:[
          {x:0,y:4.2,z:0},{x:0,y:13.2,z:0},{x:0,y:13.2,z:0},{x:0,y:4.2,z:0},
        ],s:[
          1,1,1,1,
        ],
        kg:[
          0,0,0,0,
        ],si:0,ds:100,zone:{name:'zonec1'}},

        /* ROADS ZONE A1 VERTICAL BODIES */
        {name:'streetlightbody',type:'polyhedron',loader:'glb',
        x:[
          -215.221,-223.439,-210.049,-193.663,
          -530.859,-479.114,-500.985,
          -237.21,-227.21,-226.869,-248.52,-270.17,-286.879,-296.879,
          -448.514,-411.832,-374.274,-341.365,-308.499,-275.59,-242.725,-209.816,-176.907,-143.998,-113.753
        ],
        y:[
          6.318,10.799,10.799,6.318,
          3,3,3,
          3,3,3,3,3,3,3,
          3,3,3,3,3,3,3,3,3,3,3
        ],
        z:[
          48.38,62.566,85.758,85.72,
          154.384,124.509,206.129,
          143.713,161.033,180.524,193.024,205.524,195.483,178.163,
          176.449,181.785,165.112,146.112,127.137,108.137,89.162,70.162,51.162,32.162,16.942
        ],o:[
          {x:0,y:30,z:0},{x:0,y:120,z:0},{x:0,y:120,z:0},{x:0,y:210,z:0},
          {x:0,y:255,z:0},{x:0,y:165,z:0},{x:0,y:345,z:0},
          {x:0,y:120,z:0},{x:0,y:120,z:0},{x:0,y:30,z:0},{x:0,y:30,z:0},{x:0,y:30,z:0},{x:0,y:300,z:0},{x:0,y:300,z:0},
          {x:0,y:165,z:0},{x:0,y:7.5,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:195,z:0}
        ],s:[
          1,1,1,1,
          1,1,1,
          1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,1
        ],
        kg:[
          0,0,0,0,
          0,0,0,
          0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0
        ],si:0,sl:null,sh:['metalpole'],ds:55,zone:{name:'zonea1'}},

        /* ROADS ZONE A1 VERTICAL MESHES */
        {name:'streetlight',type:'objectmesh',loader:'glb',
        x:[
          -448.514,-411.832,-374.274,-341.365,-308.499,-275.59,-242.725,-209.816,-176.907,-143.998,-113.753
        ],
        y:[
          3,3,3,3,3,3,3,3,3,3,3
        ],
        z:[
          176.449,181.785,165.112,146.112,127.137,108.137,89.162,70.162,51.162,32.162,16.942
        ],o:[
          {x:0,y:165,z:0},{x:0,y:7.5,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:210,z:0},{x:0,y:195,z:0}
        ],s:[
          1,1,1,1,1,1,1,1,1,1,1
        ],
        kg:[
          0,0,0,0,0,0,0,0,0,0,0
        ],si:0,ds:100,zone:{name:'zonea1'}},

        /* ROADS ZONE A1 VERTICAL MESHES */
        {name:'streetlightsingle',type:'objectmesh',loader:'glb',
        x:[
          -215.221,-223.439,-210.049,-193.663,
          -530.859,-479.114,-500.985,
          -237.21,-227.21,-226.869,-248.52,-270.17,-286.879,-296.879,
        ],
        y:[
          6.318,10.799,10.799,6.318,
          3,3,3,
          3,3,3,3,3,3,3,
        ],
        z:[
          48.38,62.566,85.758,85.72,
          154.384,124.509,206.129,
          143.713,161.033,180.524,193.024,205.524,195.483,178.163,
        ],o:[
          {x:0,y:30,z:0},{x:0,y:120,z:0},{x:0,y:120,z:0},{x:0,y:210,z:0},
          {x:0,y:255,z:0},{x:0,y:165,z:0},{x:0,y:345,z:0},
          {x:0,y:120,z:0},{x:0,y:120,z:0},{x:0,y:30,z:0},{x:0,y:30,z:0},{x:0,y:30,z:0},{x:0,y:300,z:0},{x:0,y:300,z:0},
        ],s:[
          1,1,1,1,
          1,1,1,
          1,1,1,1,1,1,1,
        ],
        kg:[
          0,0,0,0,
          0,0,0,
          0,0,0,0,0,0,0,
        ],si:0,ds:100,zone:{name:'zonea1'}},

        {name:'parkingkioskbody',type:'polyhedron',loader:'glb',x:[-232.553,-292.536],y:[3.01,3.01],z:[151.416,186.048],o:[{x:0,y:30,z:0},{x:0,y:210,z:0}],s:[1,1],kg:[0,0],si:0,sl:null,sh:['metalimpact'],pc:'.5-1',px:1.2,ds:40,zone:{name:'zonea1'}},

        {name:'flyovercolumnbody',type:'polyhedron',loader:'glb',x:[-220.6,-228.291,-204.591],y:[9.988,9.613,9.613],z:[76.382,53.457,94.508],o:[{x:0,y:75,z:0},{x:0,y:23,z:0},{x:0,y:37,z:0}],s:[1,1,1],kg:[0,0,0],si:0,sl:null,sh:['heavyimpact'],ds:50,zone:{name:'zonea1'}},

        {name:'bridgecolumnbody',type:'polyhedron',loader:'glb',x:[0,28,-28],y:[13.65,12.6,12.6],z:[0,-7,7],o:[{x:0,y:195,z:0},{x:0,y:105,z:0},{x:0,y:105,z:0}],s:[1,1,1],kg:[0,0,0],si:0,ds:40,zone:{name:'zonec1'}},

        {name:'roadsignbody',type:'polyhedron',loader:'glb',x:[-316.143,-267.947,-202.129,173.05,252.95],y:[3.01,3.01,3.01,3.01,3.01],z:[155.798,79.475,41.475,6,-36],o:[{x:0,y:-150,z:0},{x:0,y:30,z:0},{x:0,y:30,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1,1,1,1],si:0,kg:[0,0,0,0,0],sl:null,sh:['fryingpan'],ds:55},

        {name:'billboardbody',type:'polyhedron',loader:'glb',x:[346.117,213,-276.545,-429.685],y:[3.01,3.01,3.01,3.01],z:[10.89,16,144.483,160.27],o:[{x:0,y:150,z:0},{x:0,y:180,z:0},{x:0,y:-150,z:0},{x:0,y:-15,z:0}],s:[1,.85,.85,1],si:0,kg:[0,0,0,0],sl:null,sh:['panhit'],ds:55},

        /* BILLBOARDS VERTICAL MESH */
        {name:'billboardsb',type:'objectmesh',loader:'glb',x:[290],y:[3.01],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],videos:[
          {name:'Billboard tower (ads3)',url:'assets/videos/Umbawa billboard.mp4',flipY:true,flipY:false},
          {name:'Billboard tower (ads4)',url:'assets/videos/billboard.mp4',flipY:true,flipY:false}
        ],
        si:0,ds:350,zone:{name:'zoneb1'}},

        {name:'billboardsa',type:'objectmesh',loader:'glb',x:[-335],y:[3.01],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],videos:[
          {name:'Billboard tower (ads1)',url:'assets/videos/Umbawa billboard.mp4',flipY:true,flipY:false},
          {name:'Billboard tower (ads2)',url:'assets/videos/3D Promoter.mp4',flipY:true,flipY:false},
        ],
        si:0,ds:400,zone:{name:'zonea1'}},

        /* ROADS VERTICAL MESH */
        {name:'pierbridgevertical',type:'objectmesh',loader:'glb',x:[0],y:[3.01],z:[0],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:240,zone:{name:'zonec1'}},
        {name:'pieraroadsvertical',type:'objectmesh',loader:'glb',x:[-335],y:[3.01],z:[95],o:[{x:0,y:0,z:0}],s:[1],kg:[0],si:0,ds:400,zone:{name:'zonea1'}},

        {name:'hallwallbody',type:'trimesh',loader:'glb',x:[212,212],y:[16.463,16.463],z:[-57.959,-112.041],o:[{x:0,y:90,z:0},{x:0,y:-90,z:0}],s:[1,1],kg:[0,0],sl:null,sh:['fryingpan'],ds:36,zone:{name:'zoneb1'}},

        {name:'hallglasspanelbody',type:'trimesh',loader:'glb',x:[212,212,212,212,212,212],y:[9.05,15.05,21.05,9.05,15.05,21.05],z:[-64.745,-68.02,-64.895,-105.255,-101.98,-105.105],o:[{x:0,y:180,z:0},{x:0,y:0,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1,1,1,1,1],kg:[0,0,0,0,0,0],sl:null,sh:['fryingpan'],ds:36,zone:{name:'zoneb1'}},

        {name:'hallplatformbody',type:'trimesh',loader:'glb',x:[212,212,212,212,212,212],y:[9.05,15.05,21.05,9.05,15.05,21.05],z:[-64.745,-68.02,-64.895,-105.255,-101.98,-105.105],o:[{x:0,y:180,z:0},{x:0,y:0,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1,1,1,1,1],kg:[0,0,0,0,0,0],sl:null,sh:['fryingpan'],ds:36,zone:{name:'zoneb1'}},

        {name:'hallrampbody',type:'trimesh',loader:'glb',x:[213,211,211,213],y:[11.5,17.5,11.5,17.5],z:[-61.52,-71.245,-108.48,-98.755],o:[{x:0,y:0,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1,1,1],kg:[0,0,0,0],sl:null,sh:['fryingpan'],ds:42,zone:{name:'zoneb1'}},

        {name:'hallrampbody',type:'polyhedron',loader:'glb',x:[211,213],y:[5.5,5.5],z:[-71.245,-98.755],o:[{x:0,y:180,z:0},{x:0,y:0,z:0}],s:[1,1],kg:[0,0],sl:null,sh:['fryingpan'],ds:42,zone:{name:'zoneb1'}},

        {name:'hallcolumnbody',type:'polyhedron',loader:'glb',x:[189.5,234.5,189.5,234.5],y:[8,8,8,8],z:[-60,-60,-110,-110],o:[{x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}],s:[1,1,1,1],kg:[0,0,0,0],sl:null,sh:['fryingpan'],ds:55,zone:{name:'zoneb1'}},

        {name:'hallfloorbody',type:'trimesh',loader:'glb',x:[212],y:[3.01],z:[-85],o:[{x:0,y:0,z:0}],s:[1],kg:[0],sl:null,sh:['fryingpan'],ds:70,zone:{name:'zoneb1'}},

        /* HALL MESH */
        {name:'hall',type:'objectmesh',loader:'glb',x:[212],y:[3.01],z:[-85],o:[{x:0,y:0,z:0}],s:[1],kg:[0],videos:[
          {name:'Hall Billboard 1',url:'assets/videos/Umbawa billboard.mp4',flipY:true,flipY:false},
          {name:'Hall Billboard 2',url:'assets/videos/closer you & i.mp4',flipY:true,flipY:false}
        ],si:0,sl:'closer you & i',ds:200,zone:{name:'zoneb1'},select:'navigatable'},

        /* CHESS BOARD */
        // {name:'chessboard',type:'object',loader:'glb',x:[-319,-365],y:[2.85,2.85],z:[70,-10],o:[{x:0,y:30,z:0},{x:0,y:30,z:0}],s:[1,1],kg:[0,0],si:0,ds:60,zone:{name:'zonea1'},select:'navigatable'},

        /* DINO MARKET */
        // {name:'dinomarket',type:'objectmesh',loader:'glb',x:[-342],y:[7.04],z:[30],o:[{x:0,y:30,z:0}],s:[1],kg:[0],si:0,ds:160,zone:{name:'zonea1'},select:'navigatable'},

        /* ROADS VERTICAL BODIES */
        {name:'chargingstationbody',type:'polyhedron',loader:'glb',x:[231.9,231.9,213,213,194.1,194.1],y:[3.01,3.01,3.01,3.01,3.01,3.01],z:[46,36,46,36,46,36],o:[{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}],s:[1,1,1,1,1,1],kg:[0,0,0,0,0,0],si:0,sl:null,sh:['hitdrum'],
        activity:{
          containerID:['actionRightIconB'],
          type:['payIT'],
          amountID:['objectPrice'],
          description:['Pay vehicle charge...'],
          amountRange:['.25-3'],
          animation:[{act:['LookAround','LookingBehind']}],
          duration:['100-500'],
          continue:[0],
          color:['cyan'],
        },
        px:1.2,ds:50,zone:{name:'zoneb1'}},

        /* ROADS VERTICAL MESH */
        {name:'pierchargingstationvertical',type:'objectmesh',loader:'glb',x:[213.0],y:[3.01],z:[41],o:[{x:0,y:0,z:0}],s:[1],kg:[0],videos:[
          {name:'Charging Station Interface GREEN',url:'assets/videos/Charging Station Interface GREEN.mp4',flipY:true,flipY:false},
          {name:'Charging Station Interface BLUE',url:'assets/videos/Charging Station Interface BLUE.mp4',flipY:true,flipY:false}
        ],si:0,ds:200,zone:{name:'zoneb1'}},
      ].concat(levelassets)
    }

    var marker1=[
      /* NAVIGATION */
      {
        type:'pin',
        pin:{
          uitype:[
            'navtarget'
          ],
          content:[
            {
              icon:'move_here',
              size:'96px'
            }
          ],
          x:[0],
          y:[0],
          z:[0]
        }
      },

      /* NODES */
      {
        type:'node',
        node:{
          src:['node indicator down.gif','node indicator down.gif','node indicator down.gif'],
          color:[0xffff00,0xffff00,0xffff00],
          w:[1,1,2.5],
          h:[1,1,2.5],
          x:[-260,-234,-240.5],
          y:[5,5,7],
          z:[204,189,128.5],
          o:[0,0,0],
          po:[{x:0,y:0},{x:0,y:0},{x:0,y:0}],
          dSide:[false,false,false],
          follows:[true,true,true],
          map:[false,false,false],
          message:[
            `Pay your visit visa in this interface kiosk, if you have no money go to the tellermachine first.`,
            `Pay your visit visa in this interface kiosk, if you have no money go to the tellermachine first.`,
            `Take your money from this tellermachine and pay your visit visa at one of the interface kiosk.`
          ]
        },
        ds:20
      },

      /* PINS */
      {
        type:'pin',
        pin:{
          uitype:[
            'addtoprocure',
          ],
          content:[
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/Umbawa (profile).pdf',
              back:'darkblue',
              thumb:'assets/merchandise/billboard.png',
              tag:`Profile`,
              item:`Eng'r Umbawa`,
              title:`Eng'r Umbawa`,
              description:`Contact Eng'r Umbawa`,
              button:'Contact',
              function:`window.open('https://umbawa.web.app')`,
              texture:'',
              style:'max-width:200px',
              serial:'RH2024BL000'
            }
          ],
          x:[212],y:[3.6],z:[-85]
        },
        px:3,
        ds:24
      },


      /* PINS */
      {
        type:'pin',
        pin:{
          uitype:[
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure'
          ],
          content:[
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/billboard.pdf',
              back:'gray',
              thumb:'assets/merchandise/billboard.png',
              tag:'Asset',
              item:'Billboard',
              title:'Billboard 4',
              price:'2.25',
              description:'Graphics, photos or videos can be displayed on this billboard 4 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Billboard 4','Billboard tower (ads4)')`,
              texture:'Billboard tower (ads4)',
              style:'max-width:200px',
              serial:'AD2023BL004'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/billboard.pdf',
              back:'gray',
              thumb:'assets/merchandise/billboard.png',
              tag:'Asset',
              item:'Billboard',
              title:'Billboard 3',
              price:'2.50',
              description:'Graphics, photos or videos can be displayed on this billboard 3 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Billboard 3','Billboard tower (ads3)')`,
              texture:'Billboard tower (ads3)',
              style:'max-width:200px',
              serial:'AD2023BL003'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/billboard.pdf',
              back:'gray',
              thumb:'assets/merchandise/billboard.png',
              tag:'Asset',
              item:'Billboard',
              title:'Billboard 2',
              price:'2.50',
              description:'Graphics, photos or videos can be displayed on this billboard 2 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Billboard 2','Billboard tower (ads2)')`,
              texture:'Billboard tower (ads2)',
              style:'max-width:200px',
              serial:'AD2023BL002'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/billboard.pdf',
              back:'gray',
              thumb:'assets/merchandise/billboard.png',
              tag:'Asset',
              item:'Billboard',
              title:'Billboard 1',
              price:'2.25',
              description:'Graphics, photos or videos can be displayed on this billboard 1 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Billboard 1','Billboard tower (ads1)')`,
              texture:'Billboard tower (ads1)',
              style:'max-width:200px',
              serial:'AD2023BL001'
            }
          ],
          x:[346.117,213,-276.545,-429.685],y:[3.01,3.01,3.01,3.01],z:[10.89,16,144.483,160.27]
        },
        px:3,
        ds:7
      },
      {
        type:'pin',
        pin:{
          uitype:[
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure'
          ],
          content:[
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/roadsign.pdf',
              back:'gray',
              thumb:'assets/merchandise/roadsign.png',
              tag:'Asset',
              item:'Road Sign',
              title:'Road Sign 1',
              price:'2.15',
              description:'Graphics, photos or videos road sign or ads can be displayed on this road signage 1 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Road Sign 1','Billboard (road sign 1)')`,
              texture:'Billboard (road sign 1)',
              style:'max-width:100px',
              serial:'AD2023RS001'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/roadsign.pdf',
              back:'gray',
              thumb:'assets/merchandise/roadsign.png',
              tag:'Asset',
              item:'Road Sign',
              title:'Road Sign 2',
              price:'0.20',
              description:'Graphics, photos or videos road sign or ads can be displayed on this road signage 2 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Road Sign 2','Billboard (road sign 2)')`,
              texture:'Billboard (road sign 2)',
              style:'max-width:100px',
              serial:'AD2023RS002'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/roadsign.pdf',
              back:'gray',
              thumb:'assets/merchandise/roadsign.png',
              tag:'Asset',
              item:'Road Sign',
              title:'Road Sign 3',
              price:'0.20',
              description:'Graphics, photos or videos road sign or ads can be displayed on this road signage 3 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Road Sign 3','Billboard (road sign 3)')`,
              texture:'Billboard (road sign 3)',
              style:'max-width:100px',
              serial:'AD2023RS003'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/roadsign.pdf',
              back:'gray',
              thumb:'assets/merchandise/roadsign.png',
              tag:'Asset',
              item:'Road Sign',
              title:'Road Sign 4',
              price:'0.20',
              description:'Graphics, photos or videos road sign or ads can be displayed on this road signage 4 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Road Sign 4','Billboard (road sign 4)')`,
              texture:'Billboard (road sign 4)',
              style:'max-width:100px',
              serial:'AD2023RS004'
            },
            {
              icon:'marker',
              size:'96px',
              url:'assets/documents/roadsign.pdf',
              back:'gray',
              thumb:'assets/merchandise/roadsign.png',
              tag:'Asset',
              item:'Road Sign',
              title:'Road Sign 5',
              price:'2.15',
              description:'Graphics, photos or videos road sign or ads can be displayed on this road signage 5 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Road Sign 5','Billboard (road sign 5)')`,
              texture:'Billboard (road sign 5)',
              style:'max-width:100px',
              serial:'AD2023RS005'
            },
          ],
          x:[-316.143,-267.947,-202.129,173.05,252.95],y:[3.01,3.01,3.01,3.01,3.01],z:[155.798,79.475,41.475,6,-36]
        },
        px:3,
        ds:7
      },
      {
        type:'pin',
        pin:{
          uitype:[
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure'
          ],
          content:[
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 1',
              price:'0.75',
              description:'Custom door can replace this facade door 1 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 1',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD001'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 2',
              price:'0.75',
              description:'Custom door can replace this facade door 2 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 2',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD002'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 3',
              price:'0.75',
              description:'Custom door can replace this facade door 3 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 3',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD003'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 4',
              price:'0.75',
              description:'Custom door can replace this facade door 4 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 4',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD004'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 5',
              price:'0.75',
              description:'Custom door can replace this facade door 5 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 5',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD005'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 6',
              price:'0.75',
              description:'Custom door can replace this facade door 6 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 6',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD006'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 7',
              price:'0.75',
              description:'Custom door can replace this facade door 7 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 7',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD007'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 8',
              price:'0.75',
              description:'Custom door can replace this facade door 8 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 8',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD008'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 9',
              price:'0.75',
              description:'Custom door can replace this facade door 9 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 9',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD009'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 10',
              price:'0.75',
              description:'Custom door can replace this facade door 10 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 10',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FD010'
            }
          ],
          x:[
            253.591,253.591,
            284.537,311.77,
            337.697,
            356.103,
            358.82,358.82,
            318.964,286.603
          ],
          y:[
            4.5,4.5,
            4.5,4.5,
            4.5,
            4.5,
            4.5,4.5,
            4.5,4.5
          ],
          z:[
            89.23,56.869,
            20.581,20.581,
            23.633,
            47.757,
            79.933,112.294,
            122.266,122.266
          ],
        },
        px:3,
        ds:7
      },
      {
        type:'pin',
        pin:{
          uitype:[
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure'
          ],
          content:[
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 1',
              price:'0.75',
              description:'Custom door can replace this facade door 1 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 1',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA01'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 2',
              price:'0.75',
              description:'Custom door can replace this facade door 2 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 2',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA02'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 3',
              price:'0.75',
              description:'Custom door can replace this facade door 3 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 3',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA03'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 4',
              price:'0.75',
              description:'Custom door can replace this facade door 4 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 4',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA04'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 5',
              price:'0.75',
              description:'Custom door can replace this facade door 5 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 5',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA05'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 6',
              price:'0.75',
              description:'Custom door can replace this facade door 6 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 6',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA06'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 7',
              price:'0.75',
              description:'Custom door can replace this facade door 7 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 7',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA07'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 8',
              price:'0.75',
              description:'Custom door can replace this facade door 8 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 8',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA08'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 9',
              price:'0.75',
              description:'Custom door can replace this facade door 9 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 9',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA09'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 10',
              price:'0.75',
              description:'Custom door can replace this facade door 10 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 10',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA10'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 11',
              price:'0.75',
              description:'Custom door can replace this facade door 11 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 11',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA11'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 12',
              price:'0.75',
              description:'Custom door can replace this facade door 12 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 12',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA12'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 13',
              price:'0.75',
              description:'Custom door can replace this facade door 13 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 13',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA13'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 14',
              price:'0.75',
              description:'Custom door can replace this facade door 14 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 14',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA14'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 15',
              price:'0.75',
              description:'Custom door can replace this facade door 15 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 15',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA15'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 16',
              price:'0.75',
              description:'Custom door can replace this facade door 16 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 16',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA16'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 17',
              price:'0.75',
              description:'Custom door can replace this facade door 17 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 17',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA17'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 18',
              price:'0.75',
              description:'Custom door can replace this facade door 18 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 18',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDA18'
            },
          ],
          x:[
            -428.78,
            -406.9,-386.02,-365.15,
            -358.88,-370.939,-382.9,-395.05,
            -427.89,-448.67,-469.46,-490.24,-511.02,
            -515.55,-504.2,
            -486.55,-463.44,
            -445.81
          ],
          y:[
            4.5,
            4.5,4.5,4.5,
            4.5,4.5,4.5,4.5,
            4.5,4.5,4.5,4.5,4.5,
            4.5,4.5,
            4.5,4.5,
            4.5
          ],
          z:[
            138.04,
            133.91,122.22,110.53,
            77.47,56.8,36.13,15.47,
            6.65,18.51,30.36,42.22,54.07,
            70.59,91.65,
            104.75,110.92,
            -124.15
          ],
        },
        px:3,
        ds:7
      },
      {
        type:'pin',
        pin:{
          uitype:[
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure',
            'addtoprocure'
          ],
          content:[
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 1',
              price:'0.75',
              description:'Custom door can replace this facade door 1 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 1',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB01'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 2',
              price:'0.75',
              description:'Custom door can replace this facade door 2 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 2',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB02'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 3',
              price:'0.75',
              description:'Custom door can replace this facade door 3 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 3',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB03'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 4',
              price:'0.75',
              description:'Custom door can replace this facade door 4 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 4',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB04'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 5',
              price:'0.75',
              description:'Custom door can replace this facade door 5 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 5',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB05'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 6',
              price:'0.75',
              description:'Custom door can replace this facade door 6 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 6',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB06'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 7',
              price:'0.75',
              description:'Custom door can replace this facade door 7 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 7',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB07'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 8',
              price:'0.75',
              description:'Custom door can replace this facade door 8 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 8',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB08'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 9',
              price:'0.75',
              description:'Custom door can replace this facade door 9 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 9',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB09'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 10',
              price:'0.75',
              description:'Custom door can replace this facade door 10 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 10',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB10'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 11',
              price:'0.75',
              description:'Custom door can replace this facade door 11 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 11',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB11'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 12',
              price:'0.75',
              description:'Custom door can replace this facade door 12 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 12',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB12'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 13',
              price:'0.75',
              description:'Custom door can replace this facade door 13 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 13',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB13'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 14',
              price:'0.75',
              description:'Custom door can replace this facade door 14 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 14',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB14'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 15',
              price:'0.75',
              description:'Custom door can replace this facade door 15 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 15',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB15'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 16',
              price:'0.75',
              description:'Custom door can replace this facade door 16 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 16',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB16'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 17',
              price:'0.75',
              description:'Custom door can replace this facade door 17 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 17',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB17'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 18',
              price:'0.75',
              description:'Custom door can replace this facade door 18 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 18',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB18'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 19',
              price:'0.75',
              description:'Custom door can replace this facade door 19 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 19',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB19'
            },
            {
              icon:'offer',
              backing:'flames.gif',
              size:'42px',
              url:'assets/documents/facadedoor.pdf',
              back:'gray',
              thumb:'assets/merchandise/facadedoor.png',
              tag:'Asset',
              item:'Facade Door',
              title:'Facade Door 20',
              price:'0.75',
              description:'Custom door can replace this facade door 20 by this asset owner',
              button:'Add to Procurement',
              function:`addToProcure('texture','Facade Door 20',null)`,
              texture:null,
              style:'max-width:100px',
              serial:'AD202FDB20'
            },
          ],
          x:[
            -539.92,
            -570.51,
            -557.76,-515.46,-473.16,
            -392.8,-355.15,
            -306.79,
            -285.69,-296.64,
            -310.69,
            -330.2,-349.09,-367.97,-386.88,
            -427.73,-449.1,
            -469.35,
            -488.98,-510.03
          ],
          y:[
            4.5,
            4.5,
            4.5,4.5,4.5,
            4.5,4.5,
            4.5,
            4.5,4.5,
            4.5,
            4.5,4.5,4.5,4.5,
            4.5,4.5,
            4.5,
            4.5,4.5
          ],
          z:[
            190.7,
            186.93,
            222.83,233.29,243.8,
            235.17,213.23,
            211.78,
            209.57,190.73,
            176.43,
            183.97,194.81,205.67,216.52,
            219.58,215.33,
            217.98,
            223.38,217.76
          ]
        },
        px:3,
        ds:7
      },
    ].concat(levelassets)

    var marker2=[
      /* NODES */
      {
        type:'node',
        node:{
          src:['node indicator down.gif','node indicator down.gif'],
          color:[0xffff00,0xffff00],
          w:[2.5,2.5],
          h:[2.5,2.5],
          x:[-283.5,174],
          y:[7,7],
          z:[161,20],
          o:[0,0],
          po:[{x:0,y:0},{x:0,y:0}],
          dSide:[false,false],
          follows:[true,true],
          map:[false,false],
          message:[
            `Drive this car across the bridge, find the tellermachine at the charging station and take your salary at the tellermachine.`,
            `Take your salary from this tellermachine.`
          ]
        },
        ds:20
      }
    ].concat(levelassets)
    var marker3=[
      /* NODES */
      {
        type:'node',
        node:{
          src:['node indicator down.gif','node indicator down.gif','node indicator down.gif','node indicator down.gif'],
          color:[0xffff00,0xffff00,0xffff00,0xffff00],
          w:[3.5,2.5,2.5,2.5],
          h:[3.5,2.5,2.5,2.5],
          x:[-328.5,-240.5,-244.8,-229],
          y:[7,7,4.5,4.5],
          z:[102.5,128.5,134.7,179.5],
          o:[0,0,0,0],
          po:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],
          dSide:[false,false,false,false],
          follows:[true,true,true,true],
          map:[false,false,false,false],
          message:[
            `Drive this car to the marked parking spot for the disabled client and pay the parking spot at the tellermachine.`,
            `Bring a car at the marked parking spot for the disabled client and pay the parking spot at the tellermachine.`,
            `Bring a car at the marked parking spot for the disabled client and pay the parking spot at the tellermachine.`,
            `Pay the parking spot at this tellermachine after you have parked the car on the marked parking spot for the disabled client.`
          ]
        },
        ds:20
      }
    ].concat(levelassets)
    var marker4=[
      /* NODES */
      {
        type:'node',
        node:{
          src:['node indicator down.gif'],
          color:[0xffff00],
          w:[2.5],
          h:[2.5],
          x:[-240.5],
          y:[7],
          z:[128.5],
          o:[0],
          po:[{x:0,y:0}],
          dSide:[false],
          follows:[true],
          map:[false],
          message:[
            `Take your money from this tellermachine.`
          ]
        },
        ds:20
      }
    ].concat(levelassets)

    // furnariscafatigt causing error
    _pz.cR0=allVehicles('furnariscafatigt',{x:[-240,180.5],y:[4.05,4.05],z:[143,28],o:[{x:0,y:300,z:0},{x:0,y:90,z:0}]},{
      type:['driveVehicle'],
    },[randomString(_mz.colors),randomString(_mz.colors)],86)

    // furnariscafatigt causing error
    _pz.cR1=allVehicles('furnariscafatigt',{x:[-283.5,-495,213,410],y:[4.05,4.05,4.05,4.05],z:[161,127,70,-17],o:[{x:0,y:210,z:0},{x:0,y:8,z:0},{x:0,y:180,z:0},{x:0,y:-7.4,z:0}]},{
      type:['driveVehicle'],
    },[randomString(_mz.colors),randomString(_mz.colors),randomString(_mz.colors),randomString(_mz.colors)],86)

    _pz.cR2=allVehicles('muscle',{x:[-296],y:[4.05],z:[175.3],o:[{x:0,y:120,z:0}]},{
      type:['driveVehicle'],
    },[randomString(_mz.colors)],86)

    _pz.cR3=allVehicles('sedan',{x:[-287],y:[4.05],z:[192],o:[{x:0,y:120,z:0}]},{
      type:['driveVehicle'],
    },[randomString(_mz.colors)],86)

    _pz.cR4=allVehicles('coupe',{x:[-256.8],y:[4.05],z:[178.8],o:[{x:0,y:210,z:0}]},{
      type:['driveVehicle'],
    },[randomString(_mz.colors)],86)

    _pz.cR5=allVehicles('muscle',{x:[-228.3],y:[4.05],z:[163.6],o:[{x:0,y:300,z:0}]},{
      type:['driveVehicle'],
    },[randomString(_mz.colors)],86)

    mission1=[
      {
        name:'interfacekiosk',type:'object',loader:'glb',x:[-260,-234],y:[3.7,3.7],z:[204,189],o:[{x:0,y:30,z:0},{x:0,y:30,z:0}],s:[1,1],si:[0,0],kg:[200,200],
        activity:{
          containerID:['actionRightIconB'],
          type:['payIT'],
          amountID:['objectPrice'],
          description:['Processing visa...'],
          amountRange:['3-10'],
          animation:[{act:['LookAround','LookingBehind']},null],
          duration:['100-500'],
          continue:[0],
          color:['cyan'],
        },
        px:1.2,sl:null,sh:['lidhit'],ds:24,zone:{name:'zonea1'},select:'movable'
      },

      /* UMBAWA KIOSK */
      {
        name:'umbawakiosk',type:'object',loader:'glb',x:[192,212,232],y:[3.7,3.7,3.7],z:[-120,-120,-120],o:[{x:0,y:180,z:0},{x:0,y:180,z:0},{x:0,y:180,z:0}],s:[1,1,1],si:[0,0,0],kg:[200,200,200],videos:[
          {name:'umbawascreen',url:'assets/videos/closer you & i.mp4',flipY:true,flipY:false}
        ],
        activity:{
          containerID:['actionRightIconB'],
          type:['payIT'],
          amountID:['objectPrice'],
          description:['Processing registration...'],
          amountRange:['3-10'],
          animation:[{act:['LookAround','LookingBehind']},null],
          duration:['100-500'],
          continue:[0],
          color:['cyan'],
        },
        px:1.2,sl:'closer you & i',sh:['lidhit'],ds:24,zone:{name:'zoneb1'},select:'movable'
      },

      /* UMBAWA KIOSK */
      // {name:'exhibitionstand',type:'object',loader:'glb',x:[212],y:[3.05],z:[-85],o:[{x:0,y:-135,z:0}],s:[1000],kg:[0],videos:[
      //   {name:'exhibitionstand poster 1',url:'assets/videos/Charging Station Interface BLUE.mp4',flipY:true,flipY:false},
      //   {name:'exhibitionstand poster 2',url:'assets/videos/Charging Station Interface GREEN.mp4',flipY:true,flipY:false},
      //   {name:'exhibitionstand poster 3',url:'assets/videos/Charging Station Interface BLUE 2.mp4',flipY:true,flipY:false},
      //   {name:'exhibitionstand poster 4',url:'assets/videos/Charging Station Interface BLUE.mp4',flipY:true,flipY:false},
      //   {name:'exhibitionstand poster 5',url:'assets/videos/Charging Station Interface GREEN.mp4',flipY:true,flipY:false},
      //   {name:'exhibitionstand poster 6',url:'assets/videos/Charging Station Interface BLUE 2.mp4',flipY:true,flipY:false},
      //   {name:'exhibitionstandtv',url:'assets/videos/Umbawa billboard.mp4',flipY:true,flipY:false}
      // ],si:0,ds:90,zone:{name:'zoneb1'},select:'navigatable'},

      /* BANK */
      {
        name:'tellermachine',type:'object',loader:'glb',x:[-240.5,174],y:[4.05,4.05],z:[128.5,20],o:[{x:0,y:300,z:0},{x:0,y:90,z:0}],s:[1,1],kg:[1000,1000],
        activity:{
          containerID:['actionRightIconA'],
          type:['widrawal'],
          amountID:['objectReward'],
          description:['Cash widrawal...'],
          animation:[{act:['SearchingFilesHigh','Pointing','ButtonPushing']}],
          duration:['100-200'],
          continue:[0,0],
          color:'black',
        },
        px:1.5,sl:null,sh:['hittincan'],ds:24,select:'movable'
      },
      _pz.cR0[0],_pz.cR0[1],_pz.cR0[2],
      _pz.cR1[0],_pz.cR1[1],_pz.cR1[2],
      _pz.cR2[0],_pz.cR2[1],_pz.cR2[2],
      _pz.cR3[0],_pz.cR3[1],_pz.cR3[2],
      _pz.cR4[0],_pz.cR4[1],_pz.cR4[2],
      _pz.cR5[0],_pz.cR5[1],_pz.cR5[2],
    ].concat(marker1)

    _pz.cR0=allVehicles('coupe',{x:[-240,180.5],y:[4.05,4.05],z:[143,28],o:[{x:0,y:300,z:0},{x:0,y:90,z:0}]},{
      containerID:['actionRightIconB',null],
      type:['payIT','driveVehicle'],
      amountID:['objectPrice',null],
      description:['Dodger bank loan...',null],
      amountRange:['5000-9000',null],
      animation:[{act:['SearchingFilesHigh','Pointing','ButtonPushing']},null],
      duration:['100-300',null],
      continue:[0,0],
      color:['yellow'],
    },[randomString(_mz.colors),randomString(_mz.colors)],86)

    _pz.cR1=allVehicles('sedan',{x:[-283.5,-495,213,410],y:[4.05,4.05,4.05,4.05],z:[161,127,70,-17],o:[{x:0,y:210,z:0},{x:0,y:8,z:0},{x:0,y:180,z:0},{x:0,y:-7.4,z:0}]},{
      containerID:['actionRightIconB',null],
      type:['payIT','driveVehicle'],
      amountID:['objectPrice',null],
      description:['Approving car loan...',null],
      amountRange:['300-700',null],
      animation:[{act:['SearchingFilesHigh','Pointing','ButtonPushing']},null],
      duration:['200-500',null],
      continue:[0,0],
      color:['orange'],
    },[randomString(_mz.colors),randomString(_mz.colors),randomString(_mz.colors),randomString(_mz.colors)],86)

    mission2=[
      /* BANK */
      {
        name:'tellermachine',type:'object',loader:'glb',x:[174],y:[4.05],z:[20],o:[{x:0,y:90,z:0}],s:[1],kg:[0],
        activity:{
          containerID:['actionRightIconA'],
          type:['widrawal'],
          amountID:['objectReward'],
          description:['Cash widrawal...'],
          animation:[{act:['SearchingFilesHigh','Pointing','ButtonPushing']}],
          duration:['300-500'],
          continue:[0,0],
          color:'black',
        },
        px:1.5,sl:null,sh:['hittincan'],ds:24,select:'movable'
      },
      _pz.cR0[0],_pz.cR0[1],_pz.cR0[2],
      _pz.cR1[0],_pz.cR1[1],_pz.cR1[2],
      _pz.cR2[0],_pz.cR2[1],_pz.cR2[2],
      _pz.cR3[0],_pz.cR3[1],_pz.cR3[2],
      _pz.cR4[0],_pz.cR4[1],_pz.cR4[2],
      _pz.cR5[0],_pz.cR5[1],_pz.cR5[2],
    ].concat(marker2)

    _pz.cR6=allVehicles('coupe',{x:[-328.5],y:[4.05],z:[102.5],o:[{x:0,y:30,z:0}]},{
      type:['driveVehicle'],
    },['black'],86)

    mission3=[
      /* BANK */
      {
        name:'tellermachine',type:'object',loader:'glb',x:[-240.5],y:[4.05],z:[128.5],o:[{x:0,y:300,z:0}],s:[1],kg:[0],
        activity:{
          containerID:['actionRightIconB'],
          type:['payIT'],
          amountID:['objectPrice'],
          description:['Paying parking spot...'],
          amountRange:['3-5'],
          animation:[{act:['LookAround','LookingBehind']},null],
          duration:['100-500'],
          continue:[0],
          color:['cyan'],
        },
        px:1.5,sl:null,sh:['hittincan'],ds:24,select:'movable'
      },
      _pz.cR0[0],_pz.cR0[1],_pz.cR0[2],
      _pz.cR1[0],_pz.cR1[1],_pz.cR1[2],
      _pz.cR2[0],_pz.cR2[1],_pz.cR2[2],
      _pz.cR3[0],_pz.cR3[1],_pz.cR3[2],
      _pz.cR4[0],_pz.cR4[1],_pz.cR4[2],
      _pz.cR5[0],_pz.cR5[1],_pz.cR5[2],
      _pz.cR6[0],_pz.cR6[1],_pz.cR6[2]
    ].concat(marker3)

    mission4=[
      /* BANK */
      {
        name:'tellermachine',type:'object',loader:'glb',x:[-240.5],y:[4.05],z:[128.5],o:[{x:0,y:300,z:0}],s:[1],kg:[0],
        activity:{
          containerID:['actionRightIconA'],
          type:['widrawal'],
          amountID:['objectReward'],
          description:['Cash widrawal...'],
          animation:[{act:['SearchingFilesHigh','Pointing','ButtonPushing']}],
          duration:['100-200'],
          continue:[0,0],
          color:'black',
        },
        px:1.5,sl:null,sh:['hitmetalvibrate'],ds:24,select:'movable'
      },
      _pz.cR0[0],_pz.cR0[1],_pz.cR0[2],
      _pz.cR1[0],_pz.cR1[1],_pz.cR1[2],
      _pz.cR2[0],_pz.cR2[1],_pz.cR2[2],
      _pz.cR3[0],_pz.cR3[1],_pz.cR3[2],
      _pz.cR4[0],_pz.cR4[1],_pz.cR4[2],
      _pz.cR5[0],_pz.cR5[1],_pz.cR5[2],
    ].concat(marker4)

    // ARTIFICIAL CROWD
    crowdParam={
      type:['crowd','walker','runner'],
      activity:{
        task:['wandering'],
        dialog:[null]
      },
      animations:isMobile?['halt','wave','jump']:['drivevehicle','horn','halt','wave','jump'],
      position:[
        {target:'me',of:.7,o:0,s:6},
        {x:185,y:1.2,z:-182,o:0,s:10},
        {x:212,y:1.2,z:-182,o:0,s:10},
        {x:239,y:1.2,z:-182,o:0,s:10},
        {x:212,y:3.1,z:-85,o:0,s:25},
        {x:-265,y:3.1,z:165,o:0,s:6},
        {x:-330,y:3.1,z:50,o:0,s:6},
        {x:450,y:3.1,z:-35,o:0,s:6},
      ],
      destinyIndex:[0,0],
      destiny:[
        {x:-243,y:3.1,z:130,o:0,s:1,ds:2},
        {x:-150,y:3.1,z:70,o:0,s:1,ds:2},
        {x:-100,y:3.1,z:36,o:0,s:1,ds:2},
        {x:5,y:18,z:20,o:0,s:1,ds:2},
        {x:100,y:3.1,z:-10,o:0,s:1,ds:2},
        {x:177,y:3.1,z:20,o:0,s:1,ds:2},
        {x:257,y:3.1,z:-24,o:0,s:1,ds:2},
        {x:335,y:3.1,z:10,o:0,s:1,ds:2},
        {x:470,y:3.1,z:-28,o:0,s:1,ds:2},
      ],
      rallyIndex:[0,0],
      rally:[
        {x:-280,y:3.1,z:124,o:0,s:2,ds:5},
        {x:-128,y:3.1,z:36,o:0,s:2,ds:5},
        {x:3,y:18.1,z:12,o:0,s:2,ds:5},
        {x:100,y:3.1,z:-4,o:0,s:2,ds:5},
        {x:183,y:3.1,z:11,o:0,s:2,ds:5},
        {x:243,y:3.1,z:11,o:0,s:2,ds:5},
        {x:320,y:3.1,z:-4,o:0,s:2,ds:5},
        {x:375,y:3.1,z:20,o:0,s:2,ds:5},
        {x:390,y:3.1,z:45,o:0,s:2,ds:5},
        {x:430,y:3.1,z:40,o:0,s:2,ds:5},
        {x:428,y:3.1,z:0,o:0,s:2,ds:5},
        {x:320,y:3.1,z:-25,o:0,s:2,ds:5},
        {x:100,y:3.1,z:-25,o:0,s:2,ds:5},
        {x:-115,y:3.1,z:5,o:0,s:2,ds:5},
        {x:-390,y:3.1,z:162,o:0,s:2,ds:5},
        {x:-430,y:3.1,z:170,o:0,s:2,ds:5},
        {x:-480,y:3.1,z:135,o:0,s:2,ds:5},
        {x:-520,y:3.1,z:155,o:0,s:2,ds:5},
        {x:-500,y:3.1,z:195,o:0,s:2,ds:5},
        {x:-435,y:3.1,z:190,o:0,s:2,ds:5},
        {x:-380,y:3.1,z:181,o:0,s:2,ds:5},
      ]
    }
    artificialCrowd={
      interval:{delay:5,loaded:false},
      spawn:[
        Object.assign({},{
          uid:[getUUID(),getUUID()],
          names:[randomString(_mz.maleNames),randomString(_mz.maleNames)],
          models:['generic male basic mesh','generic male basic mesh'],
          indexes:[null,null],
          isAlive:[false,false],
          isDriving:[false,false],
        },crowdParam),
        Object.assign({},{
          uid:[getUUID(),getUUID()],
          names:[randomString(_mz.femaleNames),randomString(_mz.femaleNames)],
          models:['generic female basic mesh','generic female basic mesh'],
          indexes:[null,null],
          isAlive:[false,false],
          isDriving:[false,false],
        },crowdParam),
        Object.assign({},{
          uid:[getUUID(),getUUID(),getUUID(),getUUID(),getUUID()],
          names:[randomString(_mz.maleNames),randomString(_mz.maleNames),randomString(_mz.maleNames),randomString(_mz.maleNames),randomString(_mz.maleNames)],
          models:['amareekon','eadiedavies','mariamoore','marlonkabilin','umbawa'],
          indexes:[null,null,null,null,null],
          isAlive:[false,false,false,false,false],
          isDriving:[false,false,false,false,false],
        },crowdParam)
      ]
    }
    // artificialCrowd=false

    // Set resolution
    if(lsRd('myCamera'+myUserID.uid)){
      res=JSON.parse(lsRd('myCamera'+myUserID.uid))
      res.pixelRatio=parseFloat(res.pixelRatio)
    }else res={index:0,pixelRatio:isMobile?4.8:5.4,max:6}

    return[
      createMission(Object.assign({},{
        nm:'arrivalincity',
        tle:'Arrival in the City',
        msn:`<strong>REGISTRATION</strong><br><br>Arrival in the city, You have just arrived in the island city, pay visit visa and get acquinted to the controls and environment<br>`,
        tsk:`<strong>Tasks:</strong><br><br>
          1. Widraw virtual credits from the tellermachine and pay visit visa`,
        rqs:null,
        inf:{ceiling:9.6,floor:.96}, // Inflation factor
        req:['pay'],
        am:[5],
        obj:['interfacekiosk'],
        px:86,
        mis:mission1,
        vmg:`Registration<br><span id="centerTagMsg">Completed<span>`,
        dmg:`Registration<br><span id="centerTagMsg">Failed!<span>`,
        rep:3, // Replay distance
        spn:[ // Spawn
          {x:185,y:1.2,z:-182,o:0,s:10},
          {x:212,y:1.2,z:-182,o:0,s:10},
          {x:239,y:1.2,z:-182,o:0,s:10}
          // {x:-584.5,y:3.1,z:84.2,o:52,s:1},
          // {x:-609.5,y:3.1,z:181.5,o:98,s:1},
          // {x:-568,y:3.1,z:75,o:30,s:1},
          // {x:-597.5,y:3.1,z:135,o:76,s:1},
          // {x:472,y:3.1,z:-28.3,o:285,s:1},
          // {x:467,y:3.1,z:-47.2,o:285,s:1},
          // {x:454.5,y:3.1,z:-58.3,o:330,s:1},
          // {x:466.2,y:3.1,z:-19,o:195,s:1},
        ],
        rsp:[ // Respawn
          {x:316.6,y:69.048,z:103.75,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:100.95,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:98.15,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:95.35,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:92.55,o:90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:103.75,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:100.95,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:98.15,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:95.35,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:92.55,o:-90,s:.5,cost:'10-500'},
          {x:321.4,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:324.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:335.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:338.6,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
        ],
        // sva:{
        //   ZONEA1:{type:'savezone',elevation:2.5,height:4,corners:[[-611.225,181.708],[-585.936,83.085],[-244.73,-111.001],[-123.692,-111.232],[-67.029,-54.317],[-58.767,100.753],[-407.49,301.22],[-561.015,267.298]]},
        //   ZONEB1:{type:'savezone',elevation:2.5,height:4,corners:[[59.651,-76.351],[115.071,-131.331],[407.851,-131.31],[490.798,-79.78],[520.34,30.124],[461.392,131.155],[127.427,131.331],[69.091,73.283]]},
        //   ZONEC1:{type:'savezone',elevation:2.5,height:20,corners:[[-62.825,-10.06],[57.187,-35.595],[62.825,10.06],[-57.186,35.595]]},
        //   ZONED1:{type:'savezone',elevation:67.75,height:4,corners:[[311.065,77.059],[351.065,77.059],[351.065,114.059],[311.065,114.059]]},
        //   ZONEE1:{type:'savezone',elevation:.7,height:4,corners:[[174.5,-195],[249.5,-195],[249.5,-135],[174.5,-135],[174.5,135],[249.5,135],[249.5,195],[174.5,195]]}
        // },
        acs:artificialCrowd,
        ste:null,
        col:0xffffff,
        wtr:{color:0x001e0f,tSize:1}, // Water
        cam:{fov:isMobile?64:42,vertical:1.4,select:6,max:142,min:15,overview:{distance:4,height:isMobile?3:5,delay:0,duration:86,follow:true}}, // Camera
        elv:45,
        azm:45,
        spd:.036,
        ain:{max:4,min:2},
        cin:{max:4.2,min:2.4},
        emt:{glowing:5,luminance:2.4,light:96}, // Lights
        jmp:1.25, // Max jump
        upd:{avatar:7,driving:21}, // Update distance
        ods:{avatar:1,driving:3.6}, // Orbit distance
        cpx:7 // Custom model proximity
      },getSceneSettings(res))),
      createMission(Object.assign({},{
        nm:'claimsalary',
        tle:'Claim your salary',
        msn:`<strong>CASH WIDRAWAL</strong><br><br>You have been in the city for some times now, claim your salaries from the teller machine at the charging station<br>`,
        tsk:`<strong>Tasks:</strong><br><br>
          1. Go to the charging station and make a widrawal from the tellermachine`,
        rqs:'arrivalincity',
        inf:{ceiling:9.6,floor:.96}, // Inflation factor
        req:['claim'],
        am:[1000],
        obj:['tellermachine'],
        px:24,
        mis:mission2,
        vmg:`Claim Salary<br><span id="centerTagMsg">Completed<span>`,
        dmg:`Claim Salary<br><span id="centerTagMsg">Failed!<span>`,
        rep:3, // Replay distance
        spn:[ // Spawn
          {x:-263,y:3.1,z:170,o:210,s:10},
        ],
        rsp:[ // Respawn
          {x:316.6,y:69.048,z:103.75,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:100.95,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:98.15,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:95.35,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:92.55,o:90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:103.75,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:100.95,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:98.15,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:95.35,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:92.55,o:-90,s:.5,cost:'10-500'},
          {x:321.4,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:324.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:335.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:338.6,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
        ],
        acs:artificialCrowd,
        ste:null,
        col:0xffffff,
        wtr:{color:0x001e0f,tSize:1}, // Water
        cam:{fov:isMobile?64:42,vertical:1.4,select:6,max:142,min:15,overview:{distance:4,height:isMobile?3:5,delay:0,duration:86,follow:true}}, // Camera
        elv:45,
        azm:45,
        spd:.036,
        ain:{max:4,min:2},
        cin:{max:4.2,min:2.4},
        emt:{glowing:5,luminance:2.4,light:96}, // Lights
        jmp:1.25, // Max jump
        upd:{avatar:7,driving:21}, // Update distance
        ods:{avatar:1,driving:3.6}, // Orbit distance
        cpx:7 // Custom model proximity
      },getSceneSettings(res))),
      createMission(Object.assign({},{
        nm:'parkblackcar',
        tle:'Park the black car',
        msn:`<strong>THE PARKING</strong><br><br>You are new in the island city and you need a work. Go drive the car and park in the parking area<br>`,
        tsk:`<strong>Tasks:</strong><br><br>
          1. Retrieve and drive the car to the marked parking area and pay the tellermachine`,
        rqs:'arrivalincity',
        inf:{ceiling:9.6,floor:.96}, // Inflation factor
        req:['deliver','pay'],
        am:['100-500',.75],
        obj:['coupevehiclebody','tellermachine'],
        px:24,
        mis:mission3,
        vmg:`The Parking<br><span id="centerTagMsg">Completed<span>`,
        dmg:`The Parkingy<br><span id="centerTagMsg">Failed!<span>`,
        rep:3, // Replay distance
        spn:[ // Spawn
          {x:-263,y:3.1,z:170,o:210,s:10},
        ],
        rsp:[ // Respawn
          {x:316.6,y:69.048,z:103.75,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:100.95,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:98.15,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:95.35,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:92.55,o:90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:103.75,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:100.95,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:98.15,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:95.35,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:92.55,o:-90,s:.5,cost:'10-500'},
          {x:321.4,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:324.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:335.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:338.6,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
        ],
        acs:artificialCrowd,
        ste:[
          {x:-244.8,y:3.1,z:134.7,o:210,s:3.5},
          {x:-229,y:3.1,z:179.5,o:210,s:3.5},
        ],
        col:0xffffff,
        wtr:{color:0x001e0f,tSize:1}, // Water
        cam:{fov:isMobile?64:42,vertical:1.4,select:6,max:142,min:15,overview:{distance:4,height:isMobile?3:5,delay:0,duration:86,follow:true}}, // Camera
        elv:45,
        azm:45,
        spd:.036,
        ain:{max:4,min:2},
        cin:{max:4.2,min:2.4},
        emt:{glowing:5,luminance:2.4,light:96}, // Lights
        jmp:1.25, // Max jump
        upd:{avatar:7,driving:21}, // Update distance
        ods:{avatar:1,driving:3.6}, // Orbit distance
        cpx:7 // Custom model proximity
      },getSceneSettings(res))),
      createMission(Object.assign({},{
        nm:'explorecity',
        tle:'Explore the city',
        msn:`<strong>THE BEGINING</strong><br><br>Seek out opportunities in the city and learn where luck and efforts will take you<br>`,
        tsk:`<strong>Tasks:</strong><br><br>
          1. Earn at least υς1,000.00`,
        rqs:'arrivalincity',
        inf:{ceiling:9.6,floor:.96}, // Inflation factor
        req:['amount'],
        am:[1000],
        obj:[null],
        px:24,
        mis:mission4,
        vmg:`The Begining<br><span id="centerTagMsg">Completed<span>`,
        dmg:`The Begining<br><span id="centerTagMsg">Failed!<span>`,
        rep:3, // Replay distance
        spn:[ // Spawn
          {x:190.5,y:3.1,z:60,o:180,s:10},
          {x:213,y:3.1,z:60,o:180,s:10},
          {x:235.5,y:3.1,z:60,o:180,s:10}
        ],
        rsp:[ // Respawn
          {x:316.6,y:69.048,z:103.75,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:100.95,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:98.15,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:95.35,o:90,s:.5,cost:'10-500'},
          {x:316.6,y:69.048,z:92.55,o:90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:103.75,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:100.95,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:98.15,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:95.35,o:-90,s:.5,cost:'10-500'},
          {x:343.4,y:69.048,z:92.55,o:-90,s:.5,cost:'10-500'},
          {x:321.4,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:324.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:335.5,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
          {x:338.6,y:69.048,z:108.4,o:0,s:.5,cost:'10-500'},
        ],
        acs:artificialCrowd,
        ste:null,
        col:0xffffff,
        wtr:{color:0x001e0f,tSize:1}, // Water
        cam:{fov:isMobile?64:42,vertical:1.4,select:6,max:142,min:15,overview:{distance:4,height:isMobile?3:5,delay:0,duration:86,follow:true}}, // Camera
        elv:45,
        azm:45,
        spd:.036,
        ain:{max:4,min:2},
        cin:{max:4.2,min:2.4},
        emt:{glowing:5,luminance:2.4,light:96}, // Lights
        jmp:1.25, // Max jump
        upd:{avatar:7,driving:21}, // Update distance
        ods:{avatar:1,driving:3.6}, // Orbit distance
        cpx:7 // Custom model proximity
      },getSceneSettings(res))),
    ]
  }

  if(!library){

    var items=lsRd('externalAssets'+lsRd('levelname'))?JSON.parse(lsRd('externalAssets'+lsRd('levelname'))):[]
    var origin=lsRd('spawnposition')?JSON.parse(lsRd('spawnposition').replace(/%22/g,'\"')):[{x:0,y:0,z:0,o:0,s:1}]

    items=[
      /* NAVIGATION */
      {
        type:'pin',
        pin:{
          uitype:[
            'navtarget'
          ],
          content:[
            {
              icon:'move_here',
              size:'96px'
            }
          ],
          x:[0],
          y:[0],
          z:[0]
        }
      },

      /* GROUND */
      {type:'ground',x:0,y:0,z:0},
    ].concat(items)

    // Set resolution
    if(lsRd('myCamera'+myUserID.uid)){
      res=JSON.parse(lsRd('myCamera'+myUserID.uid))
      res.pixelRatio=parseFloat(res.pixelRatio)
    }else res={index:0,pixelRatio:isMobile?3.2:3.4,max:4}

    return[
      createMission(Object.assign({},{
        nm:'external'+lsRd('levelname'),
        tle:'Mission',
        msn:`<strong>MISSION</strong><br><br>Explore and meet people inside the mission.<br>`,
        tsk:`<strong>Tasks:</strong><br><br>
          1. Meet and chat with other mission guests.`,
        rqs:null,
        inf:{ceiling:9.6,floor:.96}, // Inflation factor
        req:['pay'],
        am:[5],
        obj:['interfacekiosk'],
        px:86,
        mis:items,
        vmg:`Mission<br><span id="centerTagMsg">Completed<span>`,
        dmg:`Mission<br><span id="centerTagMsg">Failed!<span>`,
        rep:3, // Replay distance
        spn:origin.spawn, // Spawn
        rsp:origin.respawn, // Respawn
        sva:origin.savezone, // Save zone
        par:origin.placezone, // Save zone
        acs:false,
        ste:null,
        col:0xffffff,
        wtr:false, // {color:0x001e0f,tSize:1}, // Water
        cam:{fov:isMobile?64:42,vertical:1.4,select:6,max:142,min:15,overview:{distance:4,height:isMobile?3:5,delay:0,duration:86,follow:true}}, // Camera
        elv:45,
        azm:45,
        spd:.036,
        ain:{max:4,min:2},
        cin:{max:4.2,min:2.4},
        emt:{glowing:5,luminance:2.4,light:96}, // Lights
        jmp:1.25, // Max jump
        upd:{avatar:7,driving:21}, // Update distance
        ods:{avatar:1,driving:3.6}, // Orbit distance
        cpx:5 // Custom model proximity
      },getSceneSettings(res)))
    ]
  }
}
// Create mission
function createMission(cM0){
  return{
    uid:myUserID.uid,
    levelName:cM0.nm,
    getUserName:false,
    title:cM0.tle,
    mission:cM0.msn,
    task:cM0.tsk,
    prerequisite:cM0.rqs,
    required:cM0.req,
    amount:cM0.am,
    object:cM0.obj,
    proximity:cM0.px,
    talkRange:5, // Messaging range
    victorymessage:cM0.vmg,
    defeatmessage:cM0.dmg,
    maxLeaderBoard:7,
    replayDistance:cM0.rep,
    index:0,
    sphereCapsule:true,
    avatarInfo:{width:152,height:152,font:'Monaco',fontHeight:28,offset:9},
    inflationFactor:cM0.inf,
    parameters:cM0.mis,
    spawn:cM0.spn,
    reSpawn:cM0.rsp,
    saveArea:cM0.sva,
    placeArea:cM0.par,
    artificialCrowd:cM0.acs,
    site:cM0.ste,
    online:true,
    population:{mo:meAndF?100:1000,pc:10000},
    size:10000,
    background:cM0.col,
    elevation:cM0.elv,
    azimuth:cM0.azm,
    ambientLight:cM0.amb,
    hemisphere:cM0.hml,
    directlight:cM0.drl,
    csm:cM0.csm,
    cameraCSM:cM0.ccm,
    shadows:cM0.sdw,
    flatShading:cM0.flt,
    sky:cM0.sky,
    sunSpeed:cM0.spd,
    water:cM0.wtr,
    fog:cM0.fog,
    waterSize:3.7,
    waterTurbulence:1/40,
    worldStep:1/40,//1/60,//1/20,
    compensateForce:.012,//.008,//.025,
    gravity:-9.82,
    room:cM0.rme,
    pbr:cM0.pbr,
    vray:cM0.vray, // Old vray
    postprocessing:cM0.psg,
    camera:cM0.cam,
    exposure:cM0.xpo,
    exposureAR:cM0.axp,
    dePixelation:cM0.dpx,
    cube:cM0.cbe, // Sky texture
    envTexture:cM0.ent, // Environment texture
    envMap:cM0.etx, // Environment texture
    crtScr:cM0.crt, // Enable crt screen
    anisotropy:false,
    ambientIntensity:cM0.ain,
    csmIntensity:cM0.cin,
    emissiveIntensity:cM0.emt,
    videos:cM0.vid,
    alphaMaps:[{name:'Leaves',map:'leaves.jpg',test:.15}],
    vehicleSignal:{brake:'brakesignal',light:'headlamp'},
    nameTexture:['avatarrear'], //'avatarfront',
    faceTexture:['avatarface'],
    updateInterval:{driving:2.4,walking:2,loadModels:9,unloadModels:3},
    maxJump:cM0.jmp,
    updateDistance:cM0.upd,
    updateModels:true,
    updateDelay:{reload:256,loading:64}, // Reload after 1 sec update delay
    maxDeadLoop:1024,
    orbitDistance:cM0.ods,
    customProximity:cM0.cpx,
    proxDistanceAdjust:50,
    veloProxRate:30,
    gameRules:{
      bankAccount:{savings:Math.floor(Math.random()*30)*7.36},
      salary:{timer:0,cycle:60*15},
      salaryChance:{floor:256,ceiling:512},
      dividen:{timer:0,cycle:60*7},
      liability:{timer:0,cycle:60*24},
      interest:{timer:0,cycle:60*28},
      payOutAmount:0,
      sellOutAmount:0,
      sellOutChance:{floor:64,ceiling:128},
      rewardAds:'ready',
    },
    walkSpeed:{ // Walk speed
      carRate:{
        stopRadius:1.8,
        near:17,
        far:29,
        slow:5,
        accelerate:23,
        cruise:11,
        backAngle:120,
        forward:1.8,
        reverse:2
      },
      forwardRate:{
        s1:17,
        s2:23,
        s3:37
      },
      backRate:{
        s1:11,
        s2:17,
        s3:29
      },
      sideRate:{
        s1:7,
        s2:13,
        s3:31,
        s4:43
      },
      flyRate:{
        s1:64
      },
      pc:.47,
      mob:.42
    },
    dynamicJoy:true, // Dynamic joystick
    fatalFall:{soft:-15,normal:-20,hard:-25,extreme:-30},
    drag:{rate:-.24},
    virtualCam:{
      focalLength:isMobile?16:14,
  		// jsDepthCalculation: true,
  		// shaderFocus: false,
  		//
  		fstop:7,
  		// maxblur: 1.0,
  		//
  		showFocus:false,
  		focalDepth:14,
  		// manualdof: false,
  		// vignetting: false,
  		// depthblur: false,
  		//
  		// threshold: 0.5,
  		// gain: 2.0,
  		// bias: 0.5,
  		// fringe: 0.7,
  		//
  		// noise: true,
  		// pentagon: false,
  		//
  		// dithering: 0.0001
  	},
    globaEMapIntensity:1.08,
    gSettings:{
      powerPreference:'high-performance',
      premultipliedAlpha:false,
      stencil:true,
      antialias:true,
      alpha:true,
      preserveDrawingBuffer:true
    },
    iCubeMap:[
      '1.jpg','2.jpg',
      '3.jpg','4.jpg',
      '5.jpg','6.jpg'
    ],
    loadingFillColor:'#1BAFFF',
    pageScale:pageScale(),
    stickSense:.86,
    renderRate:isMobile?50:100,
    simplify:42,
    tolerance:false, // SimplifyModifier tolerance 5
    debug:false,
    gui:false,
    checkout:false,
  }
}
// Page scale
function pageScale(){
  return{landscape:1.4,portrait:$(window).width()>(orientation==0?900:1800)?3:1.2} // pageScale:{landscape:1.6,portrait:1.25},
}
// Get scene settings
function getSceneSettings(res){
  return lsRd('hdLow')?
  {
    /* ==== */
    sky:false, // Sky - requires ambient light
    amb:false, // {color:0x404040,intensity:.42},
    hml:false, // {skyColor:0x96d2ff,groundColor:0x002244,intensity:.42}, // Hemisphere light
    drl:false, // {color:0xffffff,intensity:.36,distance:512,shadow:32,mapSize:1024,radius:4,bias:-.00006}, // Directional light
    csm:false, // {enabled:true,maxFar:256,cascades:3,shadowMapSize:isMobile?768:1024},
    ccm:isMobile?[2,6,1,8,5,4,6,4]:[2,6,1,8,5,4,6,4],
    sdw:{avatar:false,vehicle:false,object:false,dynamic:false,animated:false}, //Shadows
    flt:false, // flatShading
    fog:{day:0x001e0f,night:0xaeb1b2,under:.04,above:.0016},
    rme:{opacity:.04}, // Room environment
    pbr:false,
    xpo:getIndoorExposure().outdoor, // Exposure outdoor=1.2 / indoor=.86
    axp:.64, // AR exposure
    dpx:{init:res.pixelRatio,max:res.max,mo:meAndF?res.max/res.pixelRatio:res.max/res.pixelRatio,pc:res.max/res.pixelRatio}, // Depixelation
    cbe:{
      intensity:.36,
      texture:[
        'skypx.jpg',
        'skynx.jpg',
        'skypy.jpg',
        'skyny.jpg',
        'skypz.jpg',
        'skynz.jpg'
      ]
    },
    etx:false,//{intensity:.075,resolution:256,texture:'envsky.jpg'},
    /* ==== */
  }:{
    /* ==== */
    sky:false, // Sky - requires ambient light
    amb:false, // {color:0x404040,intensity:.42},
    hml:false, // {skyColor:0x96d2ff,groundColor:0x002244,intensity:.42}, // Hemisphere light
    drl:false, // {color:0xffffff,intensity:.86,distance:512,shadow:32,mapSize:1024,radius:4,bias:-.00006}, // Directional light
    csm:{enabled:true,maxFar:256,cascades:3,lightIntensity:4.2,shadowMapSize:isMobile?768:1024},
    ccm:isMobile?[2,6,1,8,5,4,6,4]:[2,6,1,8,5,4,6,4],
    sdw:{avatar:true,vehicle:true,object:true,dynamic:true,animated:true}, //Shadows
    flt:false, // flatShading
    fog:{day:0x001e0f,night:0xaeb1b2,under:.04,above:.0016},
    rme:{opacity:.04}, // Room environment
    pbr:{
      correctLights:false,
      transmission:{ // PBR transmission
        color:0xffffff,
        transmission:1,
        opacity:1,
        metalness:0,
        roughness:0,
        ior:1.5,
        thickness:0.01,
        specularIntensity:1,
        specularColor:0xffffff,
        envMapIntensity:1,
        lightIntensity:1,
        exposure:1
      }
    },
    vray:false, // Obsolete vray
    psg:{ // Postprocessing
      // saturation:.36,
      // vignette:{
      //   eskil:false,
      //   offset:.42,
      //   darkness:.4,
      // },
      // outline:{
      //   edgeStrength:2.5,
      //   pulseSpeed:.25,
      //   visibleEdgeColor:0x00ffff,
      //   hiddenEdgeColor:0x22090a,
      //   height:480,
      //   blur:false,
      //   xRay:true
      // },
      // bloom:{
      //   enabled:true,
      //   option:{
      //     intensity:.24,
      //     mipmapBlur:true,
      //     radius:.36,
      //     levels:.2,
      //     dithering:true,
      // 		luminanceThreshold:.64,
      // 		luminanceSmoothing:1.28,
      // 		width:256,
      // 		height:256,
      //     resolutionScale:.8
      //   }
      // },
      // lens:{
      //   defines:{
      //     BAND_MODE:2, // 0: NONE, 1: RGB, 2: RYGCBV
      //     CHROMA_SAMPLES:8,
      //   },
      //   uniforms:{
      //     tDiffuse:{value:null},
      //     baseIor:{value:.976}, // Lower value will distort markers
      //     bandOffset:{value:.00037},
      //     jitterIntensity:{value:4.096},
      //     jitterOffset:{value:.96}
      //   }
      // },
      // ssao:{ // VERY SLOW
      //   distanceScaling:true,
      //   depthAwareUpsampling:true,
      //   samples:24,
      //   rings:7,
      //   distanceThreshold:.02,
      //   distanceFalloff:.0025,
      //   rangeThreshold:.0003,
      //   rangeFalloff:.0001,
      //   luminanceInfluence:.7,
      //   minRadiusScale:.024,
      //   radius:.42,
      //   intensity:.96,
      //   bias:.025,
      //   fade:.01,
      //   color:null,
      //   resolutionScale:1
      // },
      // toneMapping:{
      //   mode:'REINHARD',
      //   option:{
      //     resolution:256,
      //     whitePoint:16,
      //     middleGrey:.6,
      //     minLuminance:.01,
      //     averageLuminance:.01,
      //     adaptationRate:1
      //   }
      // },
      // gamma:.93,
      // compress:true, // Compressed VHS Effect "VERY SLOW" - used for extreme realism
      // antialias:true, // SMAA - used for photo realistic
      // lut:'assets/models/textures/cinematic.3dl'
    },
    xpo:getIndoorExposure().outdoor, // Exposure outdoor=1.2 / indoor=.86
    axp:.19, // AR exposure
    dpx:{init:res.pixelRatio,max:res.max,mo:meAndF?res.max/res.pixelRatio:res.max/res.pixelRatio,pc:res.max/res.pixelRatio}, // Depixelation
    cbe:{
      intensity:.36,
      texture:[ // Sky and default environment map texture
        'skypx.jpg',
        'skynx.jpg',
        'skypy.jpg',
        'skyny.jpg',
        'skypz.jpg',
        'skynz.jpg'
      ]
    },
    ent:{ // Environment map texture
      intensity:.4,
      texture:[
        'envpx.jpg',
        'envnx.jpg',
        'envpy.jpg',
        'envny.jpg',
        'envpz.jpg',
        'envnz.jpg'
      ]
    },
    etx:false,//{intensity:.075,resolution:256,texture:'envsky.jpg'},
    crt:!0,
    /* ==== */
  }
}
// Get indoor exposure
function getIndoorExposure(){
  return lsRd('hdLow')?{outdoor:.6,indoor:.7}:{outdoor:.72,indoor:.96}
}
// ==== START OF LEVEL DESIGN PARAMETERS ====
