// ==== IMPORTS ====
const THREE=await import('./three.module.js')
const CANNON=await import('./cannon-es.js')
const{CinematicCamera}=await import('./CinematicCamera.js')
const{RoomEnvironment}=await import('./RoomEnvironment.js')
const{LightProbeGenerator}=await import('./LightProbeGenerator.js')
const{Water}=await import('./Water.js')
const{Sky}=await import('./Sky.js')
const{StereoEffect}=await import('./StereoEffect.js')
const{OrbitControls}=await import('./OrbitControls.js')
const{TransformControls}=await import('./TransformControls.js')
const{DeviceOrientationControls}=await import('./DeviceOrientationControls.js')
import WebGPURenderer from './webgpu_renderer.js';
const{SoundGeneratorAudioListener,SineWaveSoundGenerator,EngineSoundGenerator}=await import('../../worklet.js')
// ==== DEBUG ====
const{GUI}=await import('./lil-gui.module.min.js')
import CannonDebugger from'./cannon-es-debugger.js'
showProgress('3%','#3DCFFF','Initializing...',false)
setTimeout(startEngine,10)
// ==== START OF ENGINE ====
// UI variables
var hideOpTm
// ==== APP ROOT ====
// Start app
window.startApp=function(id){
	establishExternalMessage()
	_ez.tCanvas=getThreeCanvasParam(id)
	if(isMobile&&orientation==90){
		showSpeed(true,.5)
		opMaximize(false)
	}
	loadSceneSettings()
	updateSun(true)
	if(_lz.gui)loadGUI(_ez.sunShadowParameters,updateSun)
	initPhysics()
	initLoadingManager()
	getSpawnPosition(_lz.spawn,true)
	loadArchivedModels()
	loadCarEngineSound()
}
// ==== WEBCAM ====
window.playWebcam=function(e,facing){
	if(_ez.webcam===undefined){
		$('#webcam-frame').html(`<video class="`+e+`" id="`+e+`" autoplay playsinline></video>`)
		_ez.webcam=document.getElementById(e)
		_ez.scene.background=returnConstant('videoTexture',_ez.webcam)
		if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
			navigator.mediaDevices.getUserMedia({
				video:{width:1280,height:720,facingMode:facing}
			}).then(function(stream){
				_ez.webcam.srcObject=stream
				_ez.webcam.play()
			}).catch(function(err){
				// Unable to access the camera/webcam
			})
		}else{
			// MediaDevices interface not available
		}
	}else _ez.webcam.play()
}
// ==== RENDERING ====
// Loop rendering
function animate(){
	if(_ez.vr){
		_ez.stereo.render(_ez.scene,_ez.camera)
	}else try{
		if(_ez.composer){
			_ez.composer.render(_ez.scene,_ez.camera)
		}else _ez.renderer.render(_ez.scene,_ez.camera)
	}catch(err){}
	if(_lz.gui)_ez.stats.update()
	if(_lz.debug&&cannonDebugRenderer)cannonDebugRenderer.update()
	playCarEngineSound()
	updateMakers(false)
	setTimeout(function(){requestAnimationFrame(animate)},1000/_lz.renderRate)
}
// ==== MODELS ====
// Reload models
function loadArchivedModels(){
	if(orientation==90&&lsRd('reset')!=null){
		createTouchButton('bounceclick','loadingTopRightIcon',{icon:'ti-fullscreen',name:'maximize'},undefined,'icon')
		$('#loadingTopRightIcon').fadeIn('slow')
	}
	_pz.lD0=lsRd('reload'+myUserID.uid+_lz.levelName)
	if(_pz.lD0!=null){
		_pz.lD0=JSON.parse(_pz.lD0)
		_lz.gameRules=JSON.parse(_pz.lD0.rules)
		_lz.mortality=_pz.lD0.mortality
		$('#healthFill').css('width',_pz.lD0.health)
		$('#staminaFill').css('width',_pz.lD0.stamina)
		if(lsRd('reset')==null){
			if(_pz.lD0.activity)_ez.objectActivity=JSON.parse(_pz.lD0.activity)
			if(_pz.lD0.parameters&&_pz.lD0.archived){
				_lz.parameters=JSON.parse(_pz.lD0.parameters)
				_ez.archive=JSON.parse(_pz.lD0.archived)
				_mz.loadMode=true
				updateModels(0,false)
			}else _pz.lD0=null
		}else _pz.lD0=null
		lsEr('reset')
	}
	// Load my car
	function loadMyCar(lMC){
		if(lMC){
			_pz.cR0=allVehicles(lMC.name,{
				x:[lMC.position.x],
				y:[lMC.position.y],
				z:[lMC.position.z],
				o:[
					{
						x:lMC.rotation.x,
						y:lMC.rotation.y,
						z:lMC.rotation.z
					}
				]
			},
			{
		    type:['driveVehicle']
		  },
			[lMC.color])
			_pz.sN0=_lz.parameters.length
			_lz.parameters=_lz.parameters.concat([
		    _pz.cR0[2],_pz.cR0[1],_pz.cR0[0]
		  ])
			_pz.gP0=genRan(charString,7)
			for(;_pz.sN0<_lz.parameters.length;_pz.sN0++){
				registerModel(_pz.sN0)
				_ez.archive[_ez.archive.length-1].position={
					x:_pz.cR0[0].x[0],
					y:_pz.cR0[0].y[0],
					z:_pz.cR0[0].z[0],
					o:_pz.cR0[0].o[0]
				}
				_ez.archive[_ez.archive.length-1].proximity=86
			}delete _lz.position.myCarState
		}
	}
	loadMyCar(_lz.position.myCarState)
	loadModels(_lz.parameters.length-1)
}
// Register models
window.registerModel=function(n){
	_lz.parameters[n].obID=[]
  _pz.cA1=_lz.parameters[n].character
	for(_pz.cA0=0;_pz.cA0<_lz.parameters[n].x.length;_pz.cA0++){
		_pz.obID=genRan(charString,9)
		_lz.parameters[n].obID.push(_pz.obID)
		_ez.archive.push({videos:_lz.parameters[n].videos,obID:_pz.obID,model:_lz.parameters[n].name,sn:n,index:_pz.cA0,loaded:false,type:_lz.parameters[n].type,proximity:_lz.parameters[n].ds,near:_lz.parameters[n].px,objectIndex:undefined,character:_pz.cA1?JSON.stringify(_pz.cA1[_pz.cA0]):undefined,select:_lz.parameters[n].select})
	}
}
// Load models
function loadModels(n){
	_pz.sF0=`_lz.parameters`
	_mz.loaded=n
	if(_lz.parameters[n]!=null&&_lz.parameters[n]!==undefined&&_lz.parameters[n]!=''){
		// Node
		if(_lz.parameters[n].type.match(/(node)/))loadNodes(n)
		// Pins
		if(_lz.parameters[n].type.match(/(pin)/))loadPins(n)
		// Player
		if(_lz.parameters[n].type.match(/(player)/)){
			if(playerModelLink===undefined){
				_pz.fp='assets/models/players/'+_lz.parameters[n].name+'/'
				_pz.fn=_lz.parameters[n].name+'.glb'
				_pz.of=_lz.parameters[n].of
				s0=lsRd('playerAvatar'+myUserID.uid)
				if(s0!=null&&s0.includes('cloudfront.net')){
					_mz.loadOnlineAvatar=JSON.parse(s0).model
					//s0=null
				}
				_lz.avatarParameterIndex=n
				if(s0!=null){
					s0=JSON.parse(s0.replace(',"character":undefined',''))
					if(s0.character)_lz.parameters[_lz.avatarParameterIndex].character=s0.character
					if(!s0.model.includes('.glb')){
						_lz.avatarIndex=s0.avatarIndex
						_pz.fp='assets/models/players/'+s0.model+'/'
						_pz.fn=s0.model+'.glb'
						_pz.of=s0.offset
					}else if(isOnL())playerModelLink=s0.model
				}
			}
			_pz.sF1=`_lz.position`
			_pz.fObj=`loadPlayerMesh('`+_pz.fp+`','`+_pz.fn+`',`+_pz.sF0+`[`+n+`].loader,`+_pz.sF1+`.x,`+_pz.sF1+`.y,`+_pz.sF1+`.z,Math.PI/180*`+_pz.sF1+`.o,`+_pz.sF0+`[`+n+`].s,`+_pz.sF0+`[`+n+`].index,`+_pz.sF0+`[`+n+`].ht,`+_pz.sF0+`[`+n+`].kg,false,`+_pz.sF0+`[`+n+`].si,`+_pz.of+`,{uid:myUserID.uid,name:myUserID.name,profile:myUserID.profile,character:`+JSON.stringify(_lz.parameters[n].character)+`})`
			if(oRyt('true',_pz.fObj))return
		}
		if(_lz.parameters[n].type.match(/(terrain|heightmap|chassis|vehiclebody|wheel|objectmesh|animesh|object|animated|trimesh|polyhedron)/)){
			objectSound(n)
			registerRules(n)
			if(_pz.lD0==null){
				registerModel(n)
				if(isOnL()&&_lz.parameters[n].name.match(/(https:|http:)/)){
					_pz.oM0=_lz.parameters[n].name
					_lz.parameters[n].name=_pz.oM0.split('/').slice(-1)
					_pz.fp=_pz.oM0.replace(_lz.parameters[n].name,'')
				}else _pz.fp='assets/models/objects/'
				if(_lz.parameters[n].type.match(/(terrain|heightmap)/)){
					_pz.sF1=`null,`+_pz.sF0+`[`+n+`].type,null,`+_pz.sF0+`[`+n+`].kg,`+_pz.sF0+`[`+n+`].pd,false,false,`+_pz.sF0+`[`+n+`].si,`+_pz.sF0+`[`+n+`].of,false,`+_pz.sF0+`[`+n+`].ds,`+_pz.sF0+`[`+n+`].obID,{index:`+n+`}` // Terrain
				}else _pz.sF1=`null,`+_pz.sF0+`[`+n+`].type,null,`+_pz.sF0+`[`+n+`].kg,false,false,false,`+_pz.sF0+`[`+n+`].si,`+_pz.sF0+`[`+n+`].of,false,`+_pz.sF0+`[`+n+`].ds,`+_pz.sF0+`[`+n+`].obID,{index:`+n+`,character:`+JSON.stringify(_lz.parameters[n].character)+`,select:`+_pz.sF0+`[`+n+`].select}` // Object
				_pz.sF0=`'`+_pz.fp+`',`+_pz.sF0+`[`+n+`].name`+(_pz.fp.match(/(https:|http:)/)?``:`+'.'+`+_pz.sF0+`[`+n+`].loader`)+`,`+_pz.sF0+`[`+n+`].x,`+_pz.sF0+`[`+n+`].y,`+_pz.sF0+`[`+n+`].z,`+_pz.sF0+`[`+n+`].o,`+_pz.sF0+`[`+n+`].s,`
				if(_lz.parameters[n].loader.toLowerCase()=='fbx'){
					_pz.fObj=`loadFBX(`+_pz.sF0+_pz.sF1+`)`
				}else _pz.fObj=`loadGlft(`+_pz.sF0+`true,`+_pz.sF1+`)`
				if(oRyt('true',_pz.fObj))return
			}else isLoaded()
		}
		// Body
		if(_lz.parameters[n].type.match(/(ground|box)/)){
			if(_lz.parameters[n].type=='ground'){
				_pz.ground=new CANNON.Body({mass:0,material:_ez.genericMaterial})
				_pz.ground.position.set(_lz.parameters[n].x,_lz.parameters[n].y,_lz.parameters[n].z)
				_pz.ground.addShape(new CANNON.Plane())
				_pz.ground.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2)
				_pz.ground.id=getObjectID()
				_ez.world.addBody(_pz.ground)
				postBody(_pz.ground,true)
				objectCollision(_pz.ground)
			}else{
				_pz.object=new CANNON.Body({mass:_lz.parameters[n].kg,material:_ez.genericMaterial})
				_pz.object.addShape(new CANNON.Box(new CANNON.Vec3(_lz.parameters[n].l,_lz.parameters[n].h,_lz.parameters[n].w)))
				_pz.object.position.set(_lz.parameters[n].x,_lz.parameters[n].y,_lz.parameters[n].z)
				_pz.object.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0),Math.PI/180*_lz.parameters[n].o)
				_pz.object.id=getObjectID()
				_ez.world.addBody(_pz.object)
				postBody(_pz.object,true)
				objectCollision(_pz.object)
			}isLoaded()
		}
	}else isLoaded()
	n=undefined
}
// Loaded pgress
window.isLoaded=function(){
	if(_mz.loaded==0){
		if(!_mz.complete){
			_mz.complete=true
			setTimeout(function(){
				try{
					loadCompleted()
					showProgress('95%','#3DCFFF',lsRd('firstPlay')?'Loaded.':'Downloaded.',false)
				}catch(err){
					showProgress('95%','#3DCFFF',lsRd('firstPlay')?'Loading..':'Downloading..',false)
					setTimeout(function(){
						_mz.loadDelay=!_mz.loadDelay?0:_mz.loadDelay+1
						if(_mz.loadDelay>10){
							lsEr('playerAvatar'+myUserID.uid)
							haltF=true;loadFailed()
						}else{
							showProgress('95%','#3DCFFF',lsRd('firstPlay')?'Loading...':'Downloading...',false)
							_mz.complete=false
							isLoaded()
						}
					},1200)
				}
			},isMobile?900:300)
			showProgress('95%','#3DCFFF',lsRd('firstPlay')?'Loading.':'Downloading.',false)
		}
	}else setTimeout(function(){
		if(_mz.loaded>0)loadModels(_mz.loaded-1)
	},10)
}
// Load completed
function loadCompleted(){
	if(_ez.scene.children[_mz.meshIndex[_lz.index]]!==undefined){
		setAvatarPosition(_lz.index,900)
		createCameras(true)
		onWindowResize()
		isVR(false)
		render()
		setTimeout(animate,10)
		setTimeout(function(){
			showProgress('100%','#3DCFFF','Starting...',false)
			$('#loadingTopRightIcon').html('')
			if(checkRequired(false)!=null||_lz.prerequisite==null){
				cameraCSM(_lz.cameraCSM)
				buildInterface()
				getWalletAmount()
				if(_lz.mortality!==undefined){
					if(['sleep','hurt','dead'].includes(_lz.mortality))opSleep(true)
					if(_lz.mortality.match(/(wakeup)/))delete _lz.mortality
				}
				lsSv('loading','complete')
				lsSv('firstPlay','done')
				lsEr('reset')
				resetMyTarget()
				if(isOnL()){
					setTimeout(function(){
						onRd(_ez.engineName.toLowerCase()+'/models/',[_lz.levelName],`loadNewModels()`)
					},100)
					setTimeout(function(){
						if(!_mz.startRulesUpdating)startRulesUpdating()
					},2400)
				}else startRulesUpdating()
			}else showDialog('myObjective.png','You have not completed the mission "'+_lz.prerequisite+'", please go back and complete the mission','history.back()','Back')
		},5)
	}else setTimeout(function(){
		_mz.loadDelay=!_mz.loadDelay?0:_mz.loadDelay+1
		if(_mz.loadDelay>10){
			lsEr('playerAvatar'+myUserID.uid)
			haltF=true;loadFailed()
		}else loadCompleted()
	},1200)
}
// Start game rules updating
function startRulesUpdating(){
	updateProximity(null)
	artificialCrowd(0,0)
	updateActivities()
	resetPositionUnderWater(false)
	if(lsRd('reload'+myUserID.uid+_lz.levelName)){
		_mz.loadMode=true
		updateModels(0,false)
	}else showTouchControls(false)
	_mz.startRulesUpdating=_ez.physicsPlayed=true
	if(_lz.getUserName){
		if(lsRd('lowSpec')&&!lsRd('hdLow')){
			showDialog('noshadow.png','Your device performance is slow, would you like to disable the <strong>graphics shadow</strong>?',`lsSv('hdLow','low');reloadLevel(_lz.levelName)`,'Disable','','Keep Shadow')
			lsEr('lowSpec')
		}else if(myUserID.name=='Noname'){
			opMyCharacter()
		}else if(lsRd('playerAvatar'+myUserID.uid)==null){
			opUserID()
		}else if(_lz.mission!==undefined){
			if($('#dialogWindow').css('display')=='none'){
				if(lsRd('mission'+myUserID.uid+_lz.levelName)==null){
					if(lsRd('instruction'+myUserID.uid+_lz.levelName)==null){
						opMyMission()
					}else if(lsRd('portfolio'+myUserID.uid+_lz.levelName)==null){
						opMyPortfolio()
					}else if(lsRd('leaderboard'+myUserID.uid+_lz.levelName)==null)opLeaderBoard()
				}else showDialog('myObjective.png','You alread have completed the mission "'+_lz.title+'"','startSounds()','Dismiss')
			}
		}else isVR(true)
	}else isVR(true)
	startSounds()
	if(isMobile&&_lz.camera.select>_ez.cameras.length-3&&!isNoOverview())setTimeout(()=>{
		if(_lz.camera.follow){
			opActionOrbit()
		}else opActionControl()
	},1200)
	if(isOnL()&&isMultiplayer()){
		onCo(_ez.engineName.toLowerCase()+'/notifications/'+myUserID.uid,'updateNotification()','notification')
		onCo(_ez.engineName.toLowerCase()+'/shoutouts/','shoutoutsNotify()','shoutouts')
		onCo(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'/','updatePlayersTarget()','player')
	}return true
}
// Reset position if under water
function resetPositionUnderWater(c0){
	if(_lz.water&&_mz.meshesData[_lz.index].position.y<0){
		if(c0){
			if(_mz.underwater){
				delete _mz.underwater
				loadFBXAnim('GettingUp.fbx',_ez.scene.children[_mz.meshIndex[_lz.index]],_lz.index,false,true)
				getSpawnPosition(_lz.spawn,_mz.respawnme)
				setMyPosition(_lz.index)
				if(_mz.meshesData[_lz.index].position.y<0){
					_mz.respawnme=null
					setTimeout(resetPositionUnderWater,2400)
				}
			}
		}else _mz.underwater=true
	}
}
// Load level new models
window.loadNewModels=function(){
	if(onRe.data[0]!=null){
		_pz.br0=lsRd('brokenurl')
		if(_pz.br0!=null){
			_mz.broken=JSON.parse(_pz.br0)
		}else _mz.broken=[]
		if(_mz.customModels){
			_mz.customModels.index=0
			_mz.customModels.model=[]
		}else _mz.customModels={index:0,model:[],loaded:[]}
		for(let[key,val]of Object.entries(onRe.data[0])){
			val.cmKey=key
			if(!_mz.broken.includes(val.model)){
				if(!_mz.customModels.loaded.includes(key)){
					if(isInRange(new THREE.Vector3(val.x,val.y,val.z),_lz.customProximity)){
						_mz.customModels.model.push(val)
						_mz.customModels.loaded.push(key)
					}
				}
			}else if(isOnL())onEr(_ez.engineName.toLowerCase()+'/models/'+_lz.levelName+'/n'+key)
		}loadCustomModels()
		lsEr('brokenurl')
	}
}
// Load custom models
window.loadCustomModels=function(){
	setTimeout(function(){
		if(_mz.customModels.index<_mz.customModels.model.length){
			loadingNewModels(_mz.customModels.model[_mz.customModels.index])
			_mz.customModels.model[_mz.customModels.index].loaded=true
			setTimeout(loadCustomModels,900)
			_mz.customModels.index++
		}else if(!_mz.customModels.initialized)_mz.customModels.initialized=startRulesUpdating()
	},600)
}
// Initialize loading manager
function initLoadingManager(){
	_ez.loadingManager=new THREE.LoadingManager()
	_ez.loadingManager.onLoad=function(){
		if(!_ez.carEngineOn){
			_ez.carEngineOn=true
			_ez.camera.add(_ez.listener)
		}else{
			if(_mz.loaded==0){
				if(_ez.physicsPlayed&&isAllUIHidden())showTouchControls(false)
				resetPositionUnderWater(true)
				if(_ez.resumeUpdateParameters!==undefined)updateModels(_ez.resumeUpdateParameters.loopCounter,true)
			}else loadModels(_mz.loaded-1)
		}
		if(_mz.customModels!==undefined)loadCustomModels()
	}
}
// Loading error message
window.loadingError=function(fn,typ){
	try {
		if(!_mz.broken.includes(fn)){
			_mz.broken.push(fn)
			lsSv('brokenurl',JSON.stringify(_mz.broken))
		}
		if(typ=='player')lsEr('playerAvatar'+myUserID.uid)			
	} catch (error) {}
	fn=typ=undefined
}
// Get spawn position
window.getSpawnPosition=function(sp0,cC0){
	if(sp0!=null&&sp0!=false&&sp0!==undefined){
		if(cC0){
			_cz.player=new THREE.Object3D()
			_lz.replayPosition=sp0
		}else if(cC0!=null)sp0=_lz.replayPosition
		_pz.sp1=Math.floor(Math.random()*sp0.length)
		getRandomPosition(sp0,_pz.sp1,true)
		if(!cC0&&cC0!=null){
			if(_mz.meshesData[_lz.index].position.distanceTo(_lz.position)>_lz.replayDistance)cC0=true
		}
		if((lsRd('leavePosition'+myUserID.uid+_lz.levelName)&&cC0)&&cC0!=null){
			_lz.position=JSON.parse(lsRd('leavePosition'+myUserID.uid+_lz.levelName))
			if(_lz.water&&_lz.position.y<0)getRandomPosition(sp0,_pz.sp1,true)
			if(_lz.position.sky){
				_ez.sunShadowParameters=_lz.position.sky
			}else _ez.sunShadowParameters={elevation:_lz.elevation,azimuth:_lz.azimuth}
		}else _lz.position.o=sp0[_pz.sp1].o
		_cz.player.position.x=_lz.position.x
		_cz.player.position.y=_lz.position.y
		_cz.player.position.z=_lz.position.z
	}
	sp0=cC0=undefined
}
// Get random position
function getRandomPosition(sp0,sp1,c0){
	if(sp1===undefined||sp1>=sp0.length||sp1<0){
		sp1=0
		sp0[sp1].target='me'
	}
	if(sp0[sp1].target=='me'){
		sp0[sp1].x=_lz.position.x
		sp0[sp1].y=_lz.position.y+sp0[sp1].of
		sp0[sp1].z=_lz.position.z
	}
	_pz.sp3={x:0,y:0,z:0}
	_pz.sp3.x=sp0[sp1].x-sp0[sp1].s+Math.floor(Math.random()*sp0[sp1].s*2)
	_pz.sp3.y=sp0[sp1].y
	_pz.sp3.z=sp0[sp1].z-sp0[sp1].s+Math.floor(Math.random()*sp0[sp1].s*2)
	if(c0){
		_lz.position.x=_pz.sp3.x
		_lz.position.y=_pz.sp3.y
		_lz.position.z=_pz.sp3.z
	}else return _pz.sp3
}
// ==== LOAD ENVIRONMENT ====
// Load scene settings
window.loadSceneSettings=function(c0){
	_ez.loadingSceneSettings=true
	loadRenderer(c0)
	loadEnvironment(c0)
	if(_lz.iCubeMap)initCubeInterior()
	if(_ez.csm==null)loadCascadedShadow(c0)
	if(c0){
		_ez.camera.position.copy(_ez.scene.children[_mz.meshIndex[_lz.index]].position)
		_ez.camera.position.y+=_cz.height[_lz.index]*.86
	}
	_ez.loadingSceneSettings=false
}
// Load renderer
function loadRenderer(c0){
	if(c0===undefined)_ez.renderer=WebGLSettings({renderer:'new WebGPURenderer({alpha:true})'})
	if(_lz.shadows){
		_ez.renderer.shadowMap.enabled=true
		// _ez.renderer.shadowMap.type=THREE.BasicShadowMap // Glitching
		_ez.renderer.shadowMap.type=THREE.PCFShadowMap
		// _ez.renderer.shadowMap.type=THREE.PCFSoftShadowMap // Slow
		// _ez.renderer.shadowMap.type=THREE.VSMShadowMap // Too slow
	}
	_ez.renderer.outputEncoding=THREE.sRGBEncoding
	_ez.renderer.setSize(_ez.tCanvas.width,_ez.tCanvas.height)
	_ez.renderer.domElement.id=_ez.tCanvas.id
	if(c0===undefined){
		document.getElementById(_ez.tCanvas.id+'-cont').appendChild(_ez.renderer.domElement)
		setScale('body','#'+_ez.renderer.domElement.id)
	}
	_ez.renderer.toneMappingExposure=setRenderSettings({toneMapping:THREE.ReinhardToneMapping}) // Vray parameters
	_ez.camera=virtualCamera(new StereoEffect(_ez.renderer))
	_ez.stereo.setSize(_ez.tCanvas.width,_ez.tCanvas.height)
}
// Create cameras
window.createCameras=function(c0){
	_ez.camera.zoom=1
	_ez.cameras=[]
	_cz.player.children=[]
	_ez.cameraIndex=c0?1:_ez.cameraIndex
	// Chase camera
	registerCamera(_mz.driveVehicleIndex[_lz.index]!=null?.65:.86,_mz.driveVehicleIndex[_lz.index]!=null?.3:setCamMaxDistance()/2.8,0)
	// First person camera
	registerCamera(_mz.driveVehicleIndex[_lz.index]!=null?.65:.86,_mz.driveVehicleIndex[_lz.index]!=null?.22:.015,1)
	// Left camera
	registerCamera(orientation==0?.76:.86,-setCamMaxDistance()/(_mz.driveVehicleIndex[_lz.index]!=null?(orientation?1.8:.96):2),2,true)
	// Front camera
	registerCamera(orientation==0?.76:.86,-setCamMaxDistance()/(_mz.driveVehicleIndex[_lz.index]!=null?(orientation?1.8:.96):(isMobile?1.6:2.4)),2)
	// Right camera
	registerCamera(orientation==0?.76:.86,setCamMaxDistance()/(_mz.driveVehicleIndex[_lz.index]!=null?(orientation?1.8:.96):2),2,true)
	// Third person camera
	registerCamera(orientation==0?.76:.86,setCamMaxDistance()/(_mz.driveVehicleIndex[_lz.index]!=null?(orientation?1.8:.96):2),2)
	// Aerial camera
	if(_lz.camera.overview)registerCamera(orientation==0?.76:.86,setCamMaxDistance()/(_mz.driveVehicleIndex[_lz.index]!=null?(orientation?1.8:.96):2)*_lz.camera.overview.distance,2)
	// Orbit camera
	registerCamera(orientation==0?.76:.86,1,2)
	if(c0)setTimeout(function(){
		_pz.cX0=lsRd('myCamera'+myUserID.uid)==null?_lz.camera.select:JSON.parse(lsRd('myCamera'+myUserID.uid)).index
		_ez.cameraIndex=_pz.cX0==_cz.player.children.length-1?_cz.player.children.length-2:_pz.cX0
		hideMyMesh()
	},900)
}
// Register camera
function registerCamera(ht0,ds0,iC0,sd0){
	_pz.cam=new THREE.Object3D()
	_pz.dM0=-_cz.height[_lz.index]*ds0
	_pz.cam.position.set(sd0?_pz.dM0:0,_cz.height[_lz.index]*ht0,sd0?0:_pz.dM0)
	_cz.player.add(_pz.cam)
	_ez.cameras.push(_pz.cam)
	ht0=ds0=iC0=undefined
}
// Set camera max distance
function setCamMaxDistance(){
	return(_mz.driveVehicleIndex[_lz.index]!=null?_lz.orbitDistance.driving:_lz.orbitDistance.avatar)*(orientation==0?1:1.6)*(isMobile?1:1.4)
}
// Load environment
function loadEnvironment(c0){
	if(c0!==undefined){
		_ez.scene.remove(_ez.scene.getObjectByName('sky'))
		_ez.scene.remove(_ez.scene.getObjectByName('water'))
		_ez.scene.remove(_ez.scene.getObjectByName('hemilight'))
		_ez.scene.remove(_ez.scene.getObjectByName('ambientLight'))
		_ez.scene.remove(_ez.scene.getObjectByName('directlightfar'))
		_ez.scene.remove(_ez.scene.getObjectByName('directlightnear'))
	}else _ez.scene=new THREE.Scene()
  _ez.sun=new THREE.Vector3()
	if(_lz.water){
		_pz.waterGeometry=new THREE.PlaneGeometry(_lz.size,_lz.size)
		_ez.water=new Water(
	    _pz.waterGeometry,{
	      textureWidth:_lz.water.tSize,
	      textureHeight:_lz.water.tSize,
	      waterNormals:new THREE.TextureLoader().load(imageuv,function(texture){ // Imagenormal
	        texture.wrapS=texture.wrapT=THREE.RepeatWrapping
					texture.dispose()
	      }),
				alpha:1.0,
	      sunDirection:new THREE.Vector3(),
	      sunColor:0xffffff,
	      waterColor:_lz.water.color,
	      distortionScale:3.7,
				side:THREE.DoubleSide,
				fog:true
	    }
	  )
		_ez.water.material.uniforms.size.value=_lz.waterSize
	  _ez.water.rotation.x=-Math.PI/2
		_ez.water.name='water'
	  _ez.scene.add(_ez.water)
	}
	_ez.scene.background=new THREE.Color(_lz.background)
	_ez.sunShadowParameters={elevation:_lz.elevation,azimuth:_lz.azimuth}
	// Ambient light
	if(_lz.ambientLight&&_ez.scene.getObjectByName('ambientLight')===undefined){
		_ez.ambientLight=new THREE.AmbientLight(_lz.ambientLight.color)
		_ez.ambientLight.intensity=_lz.ambientLight.intensity
		_ez.ambientLight.name='ambientLight'
		_ez.scene.add(_ez.ambientLight)
	}
	// Sky
	if(_lz.sky){
		_ez.sky=new Sky()
		_ez.sky.name='sky'
		_ez.sky.scale.setScalar(_lz.size)
		if(_lz.cube){
			_ez.sky.material.transparent=true
			_ez.sky.material.opacity=.5
		}
		_ez.scene.add(_ez.sky)
		_pz.skyUniforms=_ez.sky.material.uniforms
		_pz.skyUniforms.turbidity.value=8
		_pz.skyUniforms.rayleigh.value=2
		_pz.skyUniforms.mieCoefficient.value=.004
		_pz.skyUniforms.mieDirectionalG.value=.4
		_ez.pmremGenerator=new THREE.PMREMGenerator(_ez.renderer)
	}
	// Hemisphere Light
	if(_lz.hemisphere&&_ez.scene.getObjectByName('hemilight')===undefined){
		_pz.hemilight=new THREE.HemisphereLight(_lz.hemisphere.skyColor,_lz.hemisphere.groundColor,_lz.hemisphere.intensity)
		_pz.hemilight.color.setHSL(.6,1,.6)
		_pz.hemilight.groundColor.setHSL(.095,1,.75)
		_pz.hemilight.position.set(0,_lz.size,0)
		_pz.hemilight.name='hemilight'
		_ez.scene.add(_pz.hemilight)
	}
	if(_lz.directlight){
		function createDirLight(lnm,int,sz,mp){
			_pz.directlight=new THREE.DirectionalLight(_lz.directlight.color,int)
			_pz.directlight.castShadow=true
			_pz.directlight.shadow.camera.near=.01
			_pz.directlight.shadow.camera.far=_lz.directlight.distance*8
			_pz.directlight.shadow.camera.right=sz
			_pz.directlight.shadow.camera.left=-sz
			_pz.directlight.shadow.camera.top=sz
			_pz.directlight.shadow.camera.bottom=-sz
			_pz.directlight.shadow.mapSize.width=mp
			_pz.directlight.shadow.mapSize.height=mp
			_pz.directlight.shadow.radius=_lz.directlight.radius
			_pz.directlight.shadow.bias=_lz.directlight.bias
			_pz.directlight.name=lnm
			_ez.scene.add(_pz.directlight)
			lnm=int=sz=mp=undefined
		}
		createDirLight('directlightnear',_lz.directlight.intensity/2,_lz.directlight.shadow,_lz.directlight.mapSize)
		createDirLight('directlightfar',_lz.directlight.intensity,_lz.directlight.shadow*2,_lz.directlight.mapSize*2)
	}
	sceneEnvironment()
	if(c0===undefined){
		window.addEventListener('resize',onWindowResize)
		window.addEventListener('dblclick',event=>{_lz.dblClicker=true})
		if(!isMobile)window.addEventListener('wheel',event=>{mouseWheel(event)})
		_ez.renderer.domElement.addEventListener("mouseup",(event)=>{
			simplify()
		})
		_ez.renderer.domElement.addEventListener("wheel",(event)=>{
			simplify()
		})
		_ez.renderer.domElement.addEventListener("touchend",(event)=>{
			simplify()
		})
		if(lsRd('cors')==null)lsSv('cors',"'xrBY&'YiBRJ&ZJ")
		declareVariables()
	}
}
window.updateSkybox=function(c0,lI0){
	// Skybox
	if(_lz.cube.toggle!=c0){
		_lz.cube.toggle=c0
		if(_lz.cube){
			new THREE.CubeTextureLoader().setPath('assets/models/textures/cube/'+(c0?'day/':'night/')).load(_lz.cube.texture,function(texture){
				texture.encoding=THREE.sRGBEncoding
				_ez.scene.background=_ez.cubeTexture=texture
				if(!_ez.lightProbe){
					_ez.lightProbe=new THREE.LightProbe()
					_ez.lightProbe.copy(LightProbeGenerator.fromCubeTexture(texture))
					_ez.scene.add(_ez.lightProbe)
				}texture.dispose()
			})
		}else _ez.scene.background=new THREE.Color(0x000000)
	}if(_ez.lightProbe)_ez.lightProbe.intensity=_lz.cube.intensity*lI0
}
// Room environment
window.sceneEnvironment=function(){
	// Environment
	if(_lz.room){
		_ez.scene.environment=new THREE.PMREMGenerator(_ez.renderer).fromScene(new RoomEnvironment(),_lz.room.opacity).texture
	}else _ez.scene.environment=new THREE.Color(0x000000)
}
// Update sun
window.updateSun=function(c0){
	_ez.sunShadowParameters.elevation+=_lz.sunSpeed
	if(_ez.sunShadowParameters.elevation>360)_ez.sunShadowParameters.elevation=0
	_ez.sun.setFromSphericalCoords(1,THREE.MathUtils.degToRad(90-_ez.sunShadowParameters.elevation),THREE.MathUtils.degToRad(_ez.sunShadowParameters.azimuth))
	if(_lz.sky){
		_ez.sky.material.uniforms.sunPosition.value.copy(_ez.sun)
		if(_lz.water)_ez.water.material.uniforms.sunDirection.value.copy(_ez.sun).normalize()
		_ez.scene.environment=_ez.pmremGenerator.fromScene(_ez.sky).texture
	}
	_ez.sunShadow=updateSunShadow()
	if(_lz.csm.enabled){
		_ez.csm.update(_ez.camera.matrix)
		_ez.csm.lightDirection=new THREE.Vector3(-_ez.sunShadow.x,-_ez.sunShadow.y,-_ez.sunShadow.z).normalize()
	}
	if(_lz.directlight){
		if(_ez.sunShadow!==undefined){
			function dirLightPosition(lnm){
				if(_mz.meshIndex!==undefined&&_mz.meshIndex[_lz.index]!==undefined){
					_ez.scene.getObjectByName(lnm,true).position.set(
						_lz.directlight.distance*_ez.sunShadow.x+_ez.scene.children[_mz.meshIndex[_lz.index]].position.x,
						_lz.directlight.distance*_ez.sunShadow.y+_ez.scene.children[_mz.meshIndex[_lz.index]].position.y,
						_lz.directlight.distance*_ez.sunShadow.z+_ez.scene.children[_mz.meshIndex[_lz.index]].position.z,
					)
					_ez.scene.getObjectByName(lnm,true).target.position.set(
						_ez.scene.children[_mz.meshIndex[_lz.index]].position.x,
						_ez.scene.children[_mz.meshIndex[_lz.index]].position.y,
						_ez.scene.children[_mz.meshIndex[_lz.index]].position.z
					)
					_ez.scene.getObjectByName(lnm,true).target.updateMatrixWorld()
				}
				lnm=undefined
			}
			dirLightPosition('directlightnear')
			dirLightPosition('directlightfar')
		}
	}
	if(c0)setTimeout(function(){
		updateSun(true)
	},_mz.driveVehicleIndex[_lz.index]!=null?100:500)
}
// ==== CAMERA CONTROLS ====
// Load orbit controls
window.loadOrbitControl=function(x,y,z){
	if(_ez.orbitControl!=null)_ez.orbitControl.dispose()
	_ez.orbitControl=new OrbitControls(_ez.camera,_ez.renderer.domElement)
	_ez.orbitControl.enableDamping=true
	_ez.orbitControl.maxPolarAngle=Math.PI*.495
	_ez.orbitControl.minDistance=.65
	_ez.orbitControl.target.set(x,y,z)
	_ez.orbitControl.addEventListener('start',()=>_ez.orbitNavigating=true)
	_ez.orbitControl.addEventListener('end',()=>_ez.orbitNavigating=false)
	if(!isMobile){
		_ez.orbitControl.enableZoom=_ez.cameraIndex==_cz.player.children.length-1
	}else _ez.orbitControl.rotateSpeed*=_lz.drag.rate
}
// Reload orbit controls
function reloadOrbitControls(){
	loadOrbitControl(_cz.player.position.x,(_cz.player.position.y+_cz.height[_lz.index]*(_ez.cameraIndex<_cz.player.children.length-1?1:(_cz.alive[_lz.index]?_ez.lookElevation:0))),_cz.player.position.z)
}
// Enable gyro
window.enableGyro=function(c0){
  if(isMobile){
    if(!_ez.enableGyro){
      window.addEventListener('deviceorientation',setOrientationControls,true)
    }else if(!c0){
      _ez.orbitControl.disconnect()
			_ez.enableGyro=false
			reloadOrbitControls()
    }
		$('#loadingTopRightIcon').hide()
		if(c0){
			createTouchButton('menubuttonclick','loadingTopRightIcon',{icon:'ti-layout-slider',name:'onAR'},undefined,'icon')
			hideMenu()
			$('#contactICON').fadeOut('slow')
			$('#loadingTopRightIcon').fadeIn('slow')
		}else opOffAR(false)
  }
}
// Set orientation controls
function setOrientationControls(e){
  if(!e.alpha)return
  _ez.orbitControl=new DeviceOrientationControls(_ez.camera,true)
  _ez.orbitControl.connect()
  _ez.enableGyro=true
  window.removeEventListener('deviceorientation',setOrientationControls,true)
}
// Get three canvas size
window.getThreeCanvasParam=function(id){
	return{
		id:id,
		width:$('#'+id+'-cont').width()*getScale(id),
		height:$('#'+id+'-cont').height()*getScale(id)
	}
}
// Window resize
window.onWindowResize=function(){
	setScale('body','#'+_ez.renderer.domElement.id)
	getOrientation()
	if(orientation==0){
		if(_ez.vr){
			lsEr('goVR')
			isVR(true)
			_ez.vr=false
			showDialog('cpuram.png',`VR is disabled, because `+(meAndF?'your device':`the `+naviName())+` screen has been resized`,``,'Dismiss')
		}$('#topRightNextDIconMENU').html('')
	}else createTouchButton('shortclick','topRightNextDIconMENU',{icon:'ti-download',name:'loadAsset'},undefined,'icon')
	_ez.tCanvas=getThreeCanvasParam(_ez.tCanvas.id)
	_ez.camera.aspect=_ez.tCanvas.width/_ez.tCanvas.height
	_ez.renderer.setSize(_ez.tCanvas.width,_ez.tCanvas.height)
	if(isMobile)_ez.camera.fov=getFOV()
	_ez.camera.updateProjectionMatrix()
	loadKeyControls()
	closeMobileScreen()
}
// Set fov
function setFOV(){
	_ez.camera.fov=_lz.camera.fov
	_ez.camera.fov=getFOV()
	_ez.camera.updateProjectionMatrix()
}
// Get fov
window.getFOV=function(){
	return orientation==90?_lz.camera.fov/_lz.camera.vertical:_lz.camera.fov*_lz.camera.vertical
}
// New raycaster vector positions
window.newRayCasterVectorPostion=function(){
	return{
		raycaster:new THREE.Raycaster(),
		position:new THREE.Vector3(),
		axis:new THREE.Vector3(0,1,0)
	}
}
// Return constants
window.returnConstant=function(sel0,str0){
	// if(sel0=='stereoEffect')return(new StereoEffect(str0))
	if(sel0=='perspectiveCamera')return new THREE.PerspectiveCamera(str0.fov,str0.aspect,str0.near,str0.far)
	if(sel0=='cinematicCamera')return new CinematicCamera(str0.fov,str0.aspect,str0.near,str0.far)
	if(sel0=='videoTexture')return new THREE.VideoTexture(str0)
	if(sel0=='vector3')return new THREE.Vector3(str0.x,str0.y,str0.z)
	if(sel0=='boundingBox'){
		_pz.box=new THREE.Box3().setFromObject(str0)
		return{x:(_pz.box.max.x-_pz.box.min.x)/2,y:(_pz.box.max.y-_pz.box.min.y)/2,z:(_pz.box.max.z-_pz.box.min.z)/2}
	}sel0=str0=undefined
}
// Load GUI
function loadGUI(sunShadowParameters,updateSun){
  _pz.gui=new GUI()
	if(_lz.water){
		_pz.waterUniforms=_ez.water.material.uniforms
	  _pz.folderWater=_pz.gui.addFolder('Water')
	  _pz.folderWater.add(_pz.waterUniforms.distortionScale,'value',0,8,.1).name('distortionScale')
	  _pz.folderWater.add(_pz.waterUniforms.size,'value',.1,10,.1).name('size')
	  _pz.folderWater.open()
	}
	document.getElementById(_ez.tCanvas.id+'-cont').appendChild(_ez.stats.dom)
	sunShadowParameters=updateSun=undefined
}
// ==== PHYSICS ====
// Initialize physics
window.initPhysics=function(){
	// Worker physics
	createWorker('aiPhysics')
	worker.aiPhysics.operation.onmessage=function(e){console.log(e.data)}
	setTimeout(function(){worker.aiPhysics.operation.postMessage({op:'initphysics'})},100)
	// Main thread physics
	_ez.world=new CANNON.World()
	_ez.world.broadphase=new CANNON.SAPBroadphase(_ez.world)
	_ez.world.gravity.set(0,_lz.gravity,0)
	_ez.world.quatNormalizeSkip=0
	_ez.world.quatNormalizeFast=false
	_ez.world.defaultContactMaterial.friction=.001
	_ez.world.defaultContactMaterial.restitution=.3
	_ez.world.defaultContactMaterial.contactEquationStiffness=1e128
	_ez.world.defaultContactMaterial.contactEquationRelaxation=4
	_ez.world.defaultContactMaterial.frictionEquationRegularizationTime=3
	_ez.world.solver.iterations=20
	_ez.world.solver.tolerance=0
	_ez.genericMaterial=new CANNON.ContactMaterial(_ez.world.defaultContactMaterial,new CANNON.Material('terrainMaterial'),{
		friction:.4,
		restitution:.3,
		contactEquationStiffness:1e128,
		contactEquationRelaxation:4,
		frictionEquationStiffness:1e128,
		frictionEquationRelaxation:4
	})
	if(_lz.debug)cannonDebugRenderer=new CannonDebugger(_ez.scene,_ez.world)
}
// Function send mesh
window.postMesh=function(mesh,ad0){
  if(mesh.children.length>0&&mesh.children[0].geometry){
    worker.aiPhysics.operation.postMessage({
      op:'Body',
      add:ad0,
      mesh:mesh.children.map((m)=>m.geometry.toJSON())
    })
  }
}
// Post body
window.postBody=function(body,ad0){
  if(body){
    worker.aiPhysics.operation.postMessage({
      op:'Body',
      add:ad0,
      body:CircularJSON.stringify(body),
			shapes:CircularJSON.stringify(body.shapes)
    })
  }
}
// Create player physics material
window.createPhysicsMaterial=function(fr0,rs0){
	_pz.mat=new CANNON.Material()
	_ez.world.addContactMaterial(new CANNON.ContactMaterial(_ez.genericMaterial,_pz.mat,{friction:fr0,restitution:rs0}))
	fr0=rs0=undefined
	return _pz.mat
}
// Get capsule
window.getCapsule=function(uid,index,kg,ht,x,y,z){
	_pz.cA0=true
	if(_mz.driveVehicleIndex[index]!=null){
		ht/=10
		_pz.cA0=_pz.cT0=false
	}else _pz.cT0=_lz.sphereCapsule// index==_lz.index?_lz.sphereCapsule:false
	_pz.body=new CANNON.Body({mass:kg,material:createPhysicsMaterial(0,0)})
	if(_pz.cT0){
		_pz.body.addShape(new CANNON.Sphere(ht*.18),new CANNON.Vec3(0,ht*.18,0))
		.addShape(new CANNON.Sphere(ht*.18),new CANNON.Vec3(0,ht-ht*.18,0))
		.addShape(new CANNON.Cylinder(ht*.18,ht*.18,ht-ht*.36,4),new CANNON.Vec3(0,ht/2,0))
	}else _pz.body.addShape(new CANNON.Cylinder(ht*.18,ht*.18,ht,_pz.cA0?4:3),new CANNON.Vec3(0,ht/2,0))
	_pz.body.id=index
	_pz.body.bodyType='player'
	_pz.body.position.set(x,y,z)
	_pz.body.avatarMesh=uid
	_pz.body.angularDamping=_pz.cA0
	index=kg=ht=x=y=z=undefined
	return _pz.body
}
// Generate height field coordinate
window.generateTerrain=async function(terrainMesh,kg){
	const{heightMap,pointDistance,position:[x,y,z]}=terrainMesh
	_pz.terrain=new CANNON.Body({mass:kg,shape:new CANNON.Heightfield(heightMap,{elementSize:pointDistance}),material:_ez.genericMaterial})
	_pz.terrain.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2)
	_pz.terrain.position.set(x,y,z)
	terrainMesh=kg=undefined
	return _pz.terrain
}
// Load heightfield from mesh
window.loadMeshHeightfield=async function(mesh,fn,pd,kg){
	if(lsRd(fn)==null||lsRd('_set'+fn)!=pd){
		_pz.terrain=await createMeshPhysicsHeightfield(mesh,pd,kg)
		lsSv(fn,CircularJSON.stringify(_pz.terrain))
		lsSv('_set'+fn,pd)
	}else{
		_pz.heightMap=JSON.parse(lsRd(fn))
		_pz.position=[_pz.heightMap.position.x,_pz.heightMap.position.y,_pz.heightMap.position.z]
		_pz.heightMap=JSON.parse('[['+JSON.stringify(_pz.heightMap.shapes).split('"data":[[')[1].split(']],"maxValue":')[0]+']]')
		_pz.heightMap={pointDistance:pd,position:_pz.position,heightMap:_pz.heightMap}
		_pz.terrain=generateTerrain(_pz.heightMap,kg)
	}
	mesh=fn=pd=kg=undefined
	return _pz.terrain
}
// generate height field from mesh
async function createMeshPhysicsHeightfield(mesh,pointDistance,kg){
	_pz.newRayCaster=newRayCasterVectorPostion()
	_pz.rayCaster=_pz.newRayCaster.raycaster
	_pz.rayCasterPosition=_pz.newRayCaster.position
	_pz.heightMap=[]
	_pz.geometry=findGeometry(mesh)
	_pz.geometry.computeBoundingBox()
	const{
		min:{x:minX,y:minY,z:minZ},
		max:{x:maxX,z:maxZ},
	}=_pz.geometry.boundingBox
	_pz.totalX=(maxX-minX)/pointDistance+1
	_pz.totalZ=(maxZ-minZ)/pointDistance+1
	_pz.totalSteps=_pz.totalX*_pz.totalZ
	_pz.currentStep=0
	for(_pz.x=minX;_pz.x<=maxX;_pz.x+=pointDistance){
		_pz.heightDataRow=[]
		_pz.heightMap.push(_pz.heightDataRow)
		for(_pz.z=maxZ;_pz.z>=minZ;_pz.z-=pointDistance){
			_pz.rayCasterPosition.set(_pz.x,minY,_pz.z)
			_pz.rayCaster.set(_pz.rayCasterPosition,_pz.newRayCaster.axis)
			_pz.y=await calculateMeshSurfaceDistanceByRayCast()
			_pz.heightDataRow.push(_pz.y)
		}
	}
	_pz.heightfield=new CANNON.Body({mass:kg,shape:new CANNON.Heightfield(_pz.heightMap,{elementSize:pointDistance})})
	_pz.heightfield.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2)
	_pz.heightfield.position.set(minX,0,maxZ)
	mesh=pointDistance=kg=undefined
	return _pz.heightfield
	function calculateMeshSurfaceDistanceByRayCast(){
		return new Promise((resolve)=>{
			window.setTimeout(()=>{
				_pz.currentStep++
				showProgress(((_lz.parameters.length-_mz.loaded-1)/(_lz.parameters.length)+_pz.currentStep/_pz.totalSteps/(_lz.parameters.length))*80+10+'%','#228b22','Generating...',false)
				const [result]=_pz.rayCaster.intersectObject(mesh,true)
				resolve(result.distance)
			})
		})
	}
	function findGeometry(mesh){
		delete _pz.geometry
		mesh.traverse((child)=>{
			if(!_pz.geometry&&child.type==='Mesh'&&child.geometry)_pz.geometry=child.geometry
		})
		return _pz.geometry
	}
}
// Update camera position
window.updateCamPos=function(){
	if(_ez.physicsPlayed){
		_pz.pos=_ez.camera.position
		if(_mz.driveVehicleIndex[_lz.index]==null&&_ez.camera.position.y<_mz.meshesData[_lz.index].position.y)_ez.camera.position.y=_mz.meshesData[_lz.index].position.y+_cz.height[_lz.index]
		if(!isNoOverview())if(_ez.camera.position.y<_mz.meshesData[_lz.index].position.y+_lz.camera.overview.height)_ez.camera.position.y=_mz.meshesData[_lz.index].position.y+_lz.camera.overview.height
		if(_ez.camera.fov>_lz.camera.max+9||_ez.camera.fov<_lz.camera.min-9)setFOV()
		if(_mz.driveVehicleIndex[_lz.index]==null||!isNoOverview()||_ez.cameraIndex==_ez.cameras.length-1){
			_cz.player.position.copy(_mz.meshesData[_lz.index].position)
			if(!isNoOverview()||_ez.cameraIndex==_cz.player.children.length-1){
				if(!_ez.enableGyro){
					if(isNoOverview()||!isNoOverview()&&_lz.camera.overview&&_lz.camera.overview.follow)_ez.orbitControl.target.set(_cz.player.position.x,(_cz.player.position.y+_cz.height[_lz.index]*(_ez.cameraIndex<_cz.player.children.length-1?1:(_cz.alive[_lz.index]?_ez.lookElevation:0))),_cz.player.position.z)
					_ez.orbitControl.maxDistance=setCamMaxDistance()*(_mz.driveVehicleIndex[_lz.index]!=null&&isMobile?(orientation?1.2:2):1)*(isNoOverview()?1:_lz.camera.overview.distance)
				}_ez.orbitControl.update()
			}
		}else try{
			_cz.player.position.copy(compensateForce(_mz.meshesData[_lz.index].position,_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].chassisBody.velocity,_lz.compensateForce))
		}catch(err){}
		if((isNoOverview()||_lz.camera.overview&&_lz.camera.overview.delay<_lz.camera.overview.duration)&&_ez.cameraIndex<_ez.cameras.length-1||_ez.enableGyro){
			try{
				if(_ez.cameras[_ez.cameraIndex].lerpVec===undefined)_ez.cameras[_ez.cameraIndex].lerpVec=new THREE.Vector3()
				_ez.camera.position.lerp(_ez.cameras[_ez.cameraIndex].getWorldPosition(_ez.cameras[_ez.cameraIndex].lerpVec),_mz.driveVehicleIndex[_lz.index]!=null||_ez.cameraIndex==1?1:isPlayerFalling(_lz.index,-9)?.16:(_ez.stick.stickLD[_lz.index]=='C'&&_ez.stick.stickRD[_lz.index]=='C')?.05:.5)
			}catch(err){}
			if(!_ez.enableGyro){
				_pz.pH0=_cz.height[_lz.index]
				if(_mz.driveVehicleIndex[_lz.index]!=null){
					_pz.pH0*=.65
				}else _pz.pH0*=.86
				_pz.pos=_cz.player.position.clone()
				_pz.pos.y+=(_cz.alive[_lz.index]?_pz.pH0:0)+_ez.lookElevation
				_ez.camera.lookAt(_pz.pos)
			}
		}
		if(isNoOverview()&&_ez.cameraIndex!=1&&!_ez.transformControls&&_mz.driveVehicleIndex[_lz.index]==null&&!_ez.enableGyro){
			_ez.raycaster.set(_ez.orbitControl.target,new THREE.Vector3().subVectors(_ez.camera.position,_ez.orbitControl.target).normalize().subVectors(_ez.camera.position,_ez.orbitControl.target).normalize())
			_pz.intersects=_ez.raycaster.intersectObjects(_ez.scene.children)
			if(_pz.intersects.length>0&&!_pz.intersects[0].object.skeleton&&_pz.intersects[0].distance<_ez.orbitControl.target.distanceTo(_ez.camera.position)){
				if(_ez.orbitControl.target.distanceTo(_ez.camera.position)<setCamMaxDistance()){
					if(_ez.cameraIndex==_cz.player.children.length-2)_ez.cameraIndex=0
				}else reloadOrbitControls()
				_ez.camera.position.copy(_pz.intersects[0].point)
			}
		}
		if(_mz.driveVehicleIndex[_lz.index]!=null)_cz.player.quaternion.copy(_mz.meshesData[_lz.index].quaternion)
		if(_ez.cameraIndex==_ez.cameras.length-1&&_ez.camera.position.y<_cz.player.position.y+_cz.height[_lz.index])_ez.camera.position.y+=.01
		if(!isInRange(_ez.camera.position,setCamMaxDistance()*4)&&!_ez.animation.previous[_lz.index].match(/(Flying|Falling|Floating)/))_ez.camera.position.copy(_pz.pos)
		onCameraChange()
		return true
	}
}
// Check if aerial
window.isNoOverview=function(){
	if(_lz.camera.overview&&_lz.camera.overview.delay<_lz.camera.overview.duration)_lz.camera.overview.delay++
	return!_lz.camera.overview||(_lz.camera.overview&&_ez.cameraIndex==_ez.cameras.length-2)==false
}
// Show speed
function showSpeed(sPD,sPV){
	if($('#speed').html()==''){
		if(sPD){
			$('#speed').html(`<img class="speedwind" src="assets/images/speed.gif"/>`)
			$('#speed').fadeIn('slow')
		}
	}else if(!sPD){
		$('#speed').hide()
		$('#speed').html('')
	}else $('#speedwind').css('opacity',sPV)
}
// Update physics
window.updatePhysics=function(){
	if(_ez.physicsPass===undefined)_ez.physicsPass={dCounter:0}
	try{
		if(_cz.prevStickLD!=_ez.stick.stickLD[_lz.index]){
			delete _lz.posChecked
			_cz.prevStickLD=_ez.stick.stickLD[_lz.index]
			playerSlowDown(_lz.index,3.6)
		}
		if(_mz.driveVehicleIndex[_lz.index]!=null){
			_pz.sV0=getVectorVelocity(_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].chassisBody.velocity,100)
			showSpeed(_pz.sV0>.1,_pz.sV0)
		}else{
			_pz.sV0=getVectorVelocity(_cz.physics[_lz.index].velocity,100)
			showSpeed(_pz.sV0>.1,_pz.sV0)
		}
	}catch(err){}
	updateAudio()
	if(_ez.updateObjectsBusy==undefined){
		_pz.delta=_ez.clock.getDelta()
		_pz.deltaTime=Math.min(.05,_pz.delta)/5
		isWaterFog()
		updatePlayerPhysics()
		if(!_ez.transformControls&&_ez.physicsPass.dCounter==0)updateObjectPhysics()
		return true
	}
	if(_ez.physicsPass.dCounter>2){
		_ez.physicsPass.dCounter=0
	}else _ez.physicsPass.dCounter++
}
// Underwater fog
function isWaterFog(){
	if(_lz.water){
		_pz.fG0=_ez.camera.position.y>0
		if(_pz.fG0!=_ez.underFog){
			if(_lz.water||_ez.underFog===undefined){
				if(_ez.sunShadowParameters.elevation<180){
					_pz.fC0=_lz.fog.night
				}else _pz.fC0=_lz.fog.day
				if(!_pz.fG0){
					_ez.scene.fog=new THREE.FogExp2(_pz.fC0,_lz.fog.under)
				}else _ez.scene.fog=new THREE.FogExp2(_pz.fC0,_lz.fog.above)
			}
			_ez.underFog=_pz.fG0
		}
	}
}
// Update player physics
function updatePlayerPhysics(){
	if(_ez.playerPhysicsIndex<_mz.meshesData.length){
		if(_ez.scene.children[_mz.meshIndex[_ez.playerPhysicsIndex]]!=undefined&&_mz.driveVehicleIndex[_ez.playerPhysicsIndex]==null){
			if(_cz.velocity[_ez.playerPhysicsIndex]){
				if(!_cz.onfloor[_ez.playerPhysicsIndex]&&(isAboveWater(_ez.playerPhysicsIndex,-.3)||!_lz.water)){
					if(_cz.physics[_ez.playerPhysicsIndex].velocity.y.toFixed(1)==0){
						if(_cz.staticPlayerIndex===undefined){
							setTimeout(function(){
								if(_mz.staticPlayerIndex)try{
									for(_pz.pF0=0;_pz.pF0<_mz.staticPlayerIndex.length;_pz.pF0++)if(_cz.physics[_pz.pF0].velocity.y.toFixed(1)==0)_cz.onfloor[_mz.staticPlayerIndex[_pz.pF0]]=true
									delete _mz.staticPlayerIndex
								}catch(err){}
							},100)
						}
						if(_mz.staticPlayerIndex===undefined)_mz.staticPlayerIndex=[]
						if(!_mz.staticPlayerIndex.includes(_ez.playerPhysicsIndex))_mz.staticPlayerIndex.push(_ez.playerPhysicsIndex)
					}
				}
				_cz.velocity[_ez.playerPhysicsIndex].addScaledVector(_cz.velocity[_ez.playerPhysicsIndex],Math.exp(-4*_pz.deltaTime)-1)
			}
		}_ez.playerPhysicsIndex++
	}else _ez.playerPhysicsIndex=0
	for(_pz.up0=0;_pz.up0<_mz.meshesData.length;_pz.up0++){
		if(_ez.scene.children[_mz.meshIndex[_pz.up0]]!=undefined){
			updateStickXY(_pz.up0)
			playerMoveControls(_pz.deltaTime,_pz.up0)
			if(_mz.playerMixers[_pz.up0]!==undefined){
				if(_mz.playerMixers[_pz.up0]._actions[0].paused===undefined){
					_ez.animation.previous[_pz.up0]='none'
				}
			}else _ez.animation.previous[_pz.up0]='none'
			_pz.act=playArtificialBehaviours(_pz.up0,_ez.animation.previous[_pz.up0]=='none'?'mixer':'update')
			if(_ez.animation.previous[_pz.up0]!=_pz.act&&_pz.act!='none'){
				_ez.animation.previous[_pz.up0]=_pz.act
				loadFBXAnim(_ez.animation.previous[_pz.up0]+'.fbx',_ez.scene.children[_mz.meshIndex[_pz.up0]],_pz.up0,false,true)
			}
			if(!isFirstPerson(_pz.up0)&&_mz.playerMixers[_pz.up0]!==undefined)_mz.playerMixers[_pz.up0].update(_pz.delta)
			updateBuoyancy(_pz.up0,'player')
			adjustColliderPosition(_pz.up0,true)
		}
	}
}
// Update object physics
function updateObjectPhysics(){
	if(_ez.objectPhysicsIndex<_mz.objectMeshes.length){
		if(_mz.objectMeshes[_ez.objectPhysicsIndex].obID!==undefined&&_mz.objectMeshes[_ez.objectPhysicsIndex].obID==_ez.objectPhysics[_ez.objectPhysicsIndex].obID){
			try{
				updateBuoyancy(null,_ez.objectPhysicsIndex,'object')
				if(_ez.objectPhysics[_ez.objectPhysicsIndex].offset!=null){
					_pz.offset={
						x:_ez.objectPhysics[_ez.objectPhysicsIndex].position.x-_ez.objectPhysics[_ez.objectPhysicsIndex].offset.x,
						y:_ez.objectPhysics[_ez.objectPhysicsIndex].position.y-_ez.objectPhysics[_ez.objectPhysicsIndex].offset.y,
						z:_ez.objectPhysics[_ez.objectPhysicsIndex].position.z-_ez.objectPhysics[_ez.objectPhysicsIndex].offset.z,
					}
				}else{
					_pz.offset=_ez.objectPhysics[_ez.objectPhysicsIndex].position
					_ez.scene.children[_mz.objMeshIndex[_ez.objectPhysicsIndex]].quaternion.copy(_ez.objectPhysics[_ez.objectPhysicsIndex].quaternion)
				}
				_ez.scene.children[_mz.objMeshIndex[_ez.objectPhysicsIndex]].position.copy(_pz.offset)
				if(_mz.objectMixers[_ez.objectPhysicsIndex]!==undefined)_mz.objectMixers[_ez.objectPhysicsIndex].update(_pz.delta)
			}catch(err){}
		}
		_ez.objectPhysicsIndex++
	}else _ez.objectPhysicsIndex=0
}
// Update collider position
function adjustColliderPosition(up0,ac0){
	if(_mz.meshesData[up0]){
		_pz.am0=0
		_pz.am1=1
		if(_lz.index==up0&&_cz.stickState=='avatar')_mz.driveVehicleIndex[up0]=null
		if(_mz.driveVehicleIndex.length+1<_mz.meshesData.length){
			if(_ez.isGlitch===undefined){
				_ez.isGlitch=true
				setTimeout(function(){
					delete _ez.isGlitch
					if(_mz.driveVehicleIndex.length+1<_mz.meshesData.length)removeGlitchInMatrix()
				},3600)
			}
		}
		_mz.meshesData[up0].position.x=_cz.physics[up0].position.x
		_mz.meshesData[up0].position.z=_cz.physics[up0].position.z
		if(_mz.driveVehicleIndex[up0]==null){
			if(ac0&&!_cz.onfloor[up0]){
				if(isPlayerFalling(up0,_lz.fatalFall.hard)&&_ez.animation.previous[up0]=='Falling')_pz.am0=-_cz.height[up0]-.3
				if(_ez.animation.previous[up0]=='FallingIdle'||_ez.animation.previous[up0]=='Flying'||_ez.animation.previous[up0]=='Floating')_pz.am0=-.3
				_pz.am1=isPlayerFalling(up0,-1)?.5:.2
			}else _pz.am0=_cz.offset[up0]
			if(_ez.animation.previous[up0]=='LayingIdle'||!_cz.alive[up0])_pz.am0=0
			_mz.meshesData[up0].position.y=_mz.meshesData[up0].position.y+(_cz.physics[up0].position.y+_pz.am0-_mz.meshesData[up0].position.y)*_pz.am1
			_cz.player.quaternion.copy(_mz.meshesData[_lz.index].quaternion)
			_cz.invertQuaternion[up0]=null
		}else if(_mz.chassisMeshIndex[_mz.driveVehicleIndex[up0]]!==undefined&&_lz.enteringVehicle===undefined){
			if(_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[up0]]].name!='chassis')updateMeshIndex(['mesh'])
			_pz.cPos=_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[up0]]].position
			_pz.cQua=_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[up0]]].quaternion
			_mz.driveAnchor[_mz.driveVehicleIndex[up0]].position.copy(compensateForce(_pz.cPos,_mz.vehicle[_mz.driveVehicleIndex[up0]].chassisBody.velocity,_lz.compensateForce))
			_mz.driveAnchor[_mz.driveVehicleIndex[up0]].quaternion.copy(_pz.cQua)
			_cz.physics[up0].position.copy(_mz.driveAnchor[_mz.driveVehicleIndex[up0]].position)
			_cz.physics[up0].quaternion.copy(_pz.cQua)
			if(_mz.meshesData[up0].quaternion!==undefined){
				if(_cz.invertQuaternion[up0]===null){
					try{
						_mz.meshesData[up0].rotation.set(0,0,0)
						_mz.meshesData[up0].rotation.y+=Math.PI/180*90
						_cz.invertQuaternion[up0]=new THREE.Quaternion().multiply(_mz.meshesData[up0].quaternion.invert())
					}catch(err){}
				}
				try{
					_mz.meshesData[up0].quaternion.multiplyQuaternions(_pz.cQua,_cz.invertQuaternion[up0])
				}catch(err){}
			}
			if(_mz.meshesData[up0].lerpVec===undefined)_mz.meshesData[up0].lerpVec=new THREE.Vector3()
			try{
				_mz.meshesData[up0].position.lerp(_mz.driveSeat[_mz.driveVehicleIndex[up0]][_cz.mySeat[up0]].getWorldPosition(_mz.meshesData[up0].lerpVec),1)
			}catch(err){}
		}
		return true
	}else return false
}
// Update buoyancy
function updateBuoyancy(up0,by0){
	if(_lz.water){
		if(by0=='player'&&_mz.driveVehicleIndex[up0]==null){ // Prevent player to sink underwater further
			_cz.physics[up0].mass=_cz.mass[up0]
			if(_cz.onfloor[up0]==false){
				if(_mz.meshesData[up0].position.y<(_cz.height[up0]+.5)*-1){
					_cz.physics[up0].velocity.y/=1.1
					_cz.physics[up0].mass=-_cz.mass[up0]/5
					playerSlowDown(up0,1.1)
				}else if(_mz.meshesData[up0].position.y<(_cz.height[up0]-.45)*-1){
					if(_cz.physics[up0].velocity.y>.1)_cz.physics[up0].velocity.y/=1.05
					_cz.physics[up0].mass=-_cz.mass[up0]/600
				}else if(_mz.meshesData[up0].position.y<(_cz.height[up0]-.6)*-1)_cz.physics[up0].mass=_cz.mass[up0]/5
			}else if(_mz.meshesData[up0].position.y<(_cz.height[up0]-.3)*-1){
				_cz.physics[up0].velocity.y=_cz.velocity[up0].y
				_cz.onfloor[up0]=false
			}
			if(_mz.meshesData[up0].position.y<-.3&&_cz.velocity[up0]<-2)_cz.onfloor[up0]=false
		}
		if(by0=='object'){ // Prevent object to sink underwater further
			_pz.mI0=_mz.objMeshIndex[up0]
			if(_ez.scene.children[_pz.mI0].position.y<-3){
				_ez.objectPhysics[up0].velocity.y/=1.05
				_ez.objectPhysics[up0].mass=-_ez.objectPhysics.mass[up0]/2
			}else if(_ez.scene.children[_pz.mI0].position.y<-1.5){
				_ez.objectPhysics[up0].mass=-_ez.objectPhysics.mass[up0]/20
			}else if(_ez.scene.children[_pz.mI0].position.y<-1){
				_ez.objectPhysics[up0].mass=-_ez.objectPhysics.mass[up0]/200
			}else if(_ez.scene.children[_pz.mI0].position.y<-.5){
				if(_ez.objectPhysics[up0].velocity.y>.1)_ez.objectPhysics[up0].velocity.y/=1.05
				_ez.objectPhysics[up0].mass=_ez.objectPhysics.mass[up0]/750
			}else if(_ez.scene.children[_pz.mI0].position.y<0){
				_ez.objectPhysics[up0].mass=_ez.objectPhysics.mass[up0]/1500
			}else _ez.objectPhysics[up0].mass=_ez.objectPhysics.mass[up0]
		}
	}
	up0=undefined
}
// Get vector velocity
function getVectorVelocity(bV0,bV1){
	_pz.iF0=(bV0.x<0?-bV0.x:bV0.x+bV0.y<0?-bV0.y:bV0.y+bV0.z<0?-bV0.z:bV0.z)/bV1
	return _pz.iF0>1?1:_pz.iF0<.01?.01:_pz.iF0
}
// Player collision
window.playerCollision=function(index){
	try{
		_cz.physics[index].addEventListener('collide',function(e){
			try{
				window.avatarCollision=function(e){
					if(_cz.hitted){
						_cz.hitted=e.body
						if(isPlayersIndex(_cz.hitted.id)){
							if(_cz.alive[_cz.hitted.id]){
								playerSlowDown(_cz.hitted,_cz.hitted.id,1.1)
								setTimeout(function(){
									_pz.act=playArtificialBehaviours(_cz.hitted.id,'player')
									if(_ez.animation.previous[_cz.hitted.id]!=_pz.act&&_pz.act!='none'){
										_ez.animation.previous[_cz.hitted.id]=_pz.act
										loadFBXAnim(_ez.animation.previous[_cz.hitted.id]+'.fbx',_ez.scene.children[_mz.meshIndex[_pz.pc1]],_pz.pc1,false,true)
									}
									_cz.hitted=null
								},_lz.index==_cz.hitted.id?600:10)
							}
						}
					}
				}
			}catch(err){}
			try{
				avatarCollision(e)
			}catch(err){
				setTimeout(function(){
					avatarCollision(e)
				},100)
			}
		})
	}catch(err){}
}
// Object collision
window.objectCollision=function(body){
	body.addEventListener('collide',function(e){
		if(_ez.updateObjectsBusy===undefined){
			if(_ez.isCollisionBusy===undefined){
				_ez.isCollisionBusy=true
				if(isPlayersIndex(e.body.id)){
					if(_cz.onfloor[e.body.id]==false){
						_cz.onfloor[e.body.id]=true
						adjustColliderPosition(e.body.id,false)
						if(isMovingJump(e.body.id)||_ez.stick.stickLD[e.body.id]=='C'){
							playerSlowDown(e.body,e.body.id,7)
						}else playerSlowDown(e.body,e.body.id,1.2)
						if(_lz.mortality==undefined){
							_pz.act=parseFloat($('#healthFill').css('width'))>0?playArtificialBehaviours(e.body.id,'terrain'):randomString(['FallingFlatImpact','Dying','DyingBackwards'])
							if(_ez.animation.previous[e.body.id]!=_pz.act&&_pz.act!='none'){
								_ez.animation.previous[e.body.id]=_pz.act
								if(_pz.act.match(/(Dying|FlatImpact)/)){
									if(_lz.index==e.body.id){
										hospitalizeMeOption(2400)
										_lz.mortality='hurt'
										savePosition(_lz.index)
										_ez.cameraIndex=_cz.player.children.length-2
									}
								}
								activityAnimation(_pz.act,e.body.id,true)
							}
						}
					}
					if(e.body.id==_lz.index&&_lz.mortality==undefined){
						_pz.iF0=getVectorVelocity(e.body.velocity,30)
						$('#healthFill').css('width',(parseFloat($('#healthFill').css('width'))-_pz.iF0*10)+'px')
					}
				}else try{
					if(_ez.sound&&_ez.archive[e.body.id-10000].objectIndex!==undefined){
						_pz.iF0=getVectorVelocity(e.body.velocity,30)
						_pz.ds0=_ez.world.bodies[_ez.archive[e.body.id-10000].objectIndex].position.distanceTo(_mz.meshesData[_lz.index].position)
						if(_ez.objectSounds[e.body.id-10000].hit)loadAudio('object',randomString(_ez.objectSounds[e.body.id-10000].hit),((1/_pz.ds0>1?1:1/_pz.ds0)+_pz.iF0*2)/3,false,true,e.body.position)
					}
				}catch(err){}
				delete _ez.isCollisionBusy
			}
		}
	})
}
// ==== CAR ENGINE SOUND ====
// Load car engine sound
function loadCarEngineSound(){
	_ez.carEngineOn=false
	_ez.listener=new SoundGeneratorAudioListener()
	EngineSoundGenerator.load(_ez.loadingManager,_ez.listener,'.')
}
// Start car engine sound
window.startSoundCarEngine=function(eI0,sE0){
	if(_mz.soundCarEngine[eI0]!==undefined){
		_ez.listener.context.resume()
	  if(sE0){
			_mz.carEngine[eI0].start()
			_mz.soundCarEngine[eI0].play()
	  }else{
			try{
				_mz.soundCarEngine[eI0].gain.gain.value=.01*0
				_mz.carEngine[eI0].starting=false
				_mz.carEngine[eI0].started=false
				_mz.soundCarEngine[eI0].stop()
				_mz.carEngine[eI0].rpm=0
			}catch(err){}
		}
	}
}
// Play car engine sound
function playCarEngineSound(){
	_pz.time=window.performance.now()
	_pz.dt=_pz.time-_ez.lastTimeAnimate
	for(_pz.uI0=0;_pz.uI0<_mz.carEngine.length;_pz.uI0++){
		if(isNaN(_mz.carEngine[_pz.uI0].rpm))_mz.carEngine[_pz.uI0].rpm=1
		try{
			if(_mz.soundCarEngine[_pz.uI0].source)_mz.soundCarEngine[_pz.uI0].worklet.parameters.get('rpm').value=_mz.carEngine[_pz.uI0].rpm
		}catch(err){}
		try{
			_mz.carEngine[_pz.uI0].update(.001*_pz.dt)
		}catch(err){}
	}
	_ez.lastTimeAnimate=_pz.time
}
// Car engine sound
window.carEngineSound=function(cI0,pW0,cE0){
	try{
		if(cE0===undefined&&_ez.carEngineRunning&&_mz.soundCarEngine[_mz.driveVehicleIndex[cI0]]!==undefined){
			_pz.vC0=_mz.vehicle[_mz.driveVehicleIndex[cI0]].chassisBody.velocity
			_pz.iF0=(_pz.vC0.x<0?-_pz.vC0.x:_pz.vC0.x+_pz.vC0.y<0?-_pz.vC0.y:_pz.vC0.y+_pz.vC0.z<0?-_pz.vC0.z:_pz.vC0.z)/300*pW0
			_pz.iF0=_pz.iF0>5?5:_pz.iF0<.1?.1:_pz.iF0
			_pz.cP0=_mz.vehicleMotor[_mz.driveVehicleIndex[cI0]].forwardForce/3500
			_pz.cP0=_pz.cP0>1?1:_pz.cP0
	    _mz.soundCarEngine[_mz.driveVehicleIndex[cI0]].gain.gain.value=.01*100
			_mz.soundCarEngine[_mz.driveVehicleIndex[cI0]].gainIntake.gain.value=.01*(_ez.cameraIndex>1?(pW0*_pz.cP0):(pW0*_pz.cP0/99))
			_mz.soundCarEngine[_mz.driveVehicleIndex[cI0]].gainEngineBlockVibrations.gain.value=.01*100
	    _mz.soundCarEngine[_mz.driveVehicleIndex[cI0]].gainOutlet.gain.value=.01*100
			_mz.carEngine[_mz.driveVehicleIndex[cI0]].throttle=.01*((pW0*_pz.cP0)<5?5:(pW0*_pz.cP0))
		}else if(cE0){
			_ez.carEngineRunning=true
		}else stopBrakeSound()
	}catch(err){}
}
// Car brake sound
window.carBrakeSound=function(cI0,bK0){
	if(_ez.carEngineRunning){
		if(bK0){
			_pz.vC0=_mz.vehicle[_mz.driveVehicleIndex[cI0]].chassisBody.velocity
			_pz.iF0=((_pz.vC0.x<0?-_pz.vC0.x:_pz.vC0.x+_pz.vC0.y<0?-_pz.vC0.y:_pz.vC0.y+_pz.vC0.z<0?-_pz.vC0.z:_pz.vC0.z)/50).toFixed(3)
			if(_pz.iF0>.1){
				_pz.iF0=_pz.iF0>1?1:_pz.iF0<.1?.1:_pz.iF0
				loadAudio('vehicle',randomString(['carbreakingskid','tirebrake']),_pz.iF0,false,true,_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[cI0]]])
				_ez.carBraking=true
			}else stopBrakeSound()
		}else stopBrakeSound()
	}setCarMaterial(cI0,bK0,_lz.vehicleSignal.brake)
}
// Stop brake sound
function stopBrakeSound(){
	delete _ez.carBraking
	loadAudio('vehicle','carbreakingskid',0,false,false)
	loadAudio('vehicle','tirebrake',0,false,false)
}
// Brake light
window.setCarMaterial=function(cI0,bK0,lT0){
	if(_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[cI0]]]){
		_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[cI0]]].traverse(child=>{
			if(child.material&&child.material.name.includes(lT0)){
				child.material.emissiveIntensity=bK0?((lT0=='headlamp'?256:256)*(lsRd('hdLow')?1:2)):1
				return child.material.color
			}
		})
	}return false
}
// Apply car brake
window.applyBrake=function(aB0,c0){
	if(_cz.mySeat[aB0]==0){
		if(c0){
			[0,1,2,3].forEach(wheelIndex=>{
				if(wheelIndex==0)_mz.vehicleMotor[_mz.driveVehicleIndex[aB0]].brakeForce=interpolate(_mz.vehicleMotor[_mz.driveVehicleIndex[aB0]].brakeForce,1000,.0005)
				_mz.vehicle[_mz.driveVehicleIndex[aB0]].setBrake(_mz.vehicleMotor[_mz.driveVehicleIndex[aB0]].brakeForce,wheelIndex)
			})
			_mz.aiEngagedBrake[aB0]=true
		}else [0,1,2,3].forEach(wheelIndex=>{
			_mz.vehicleMotor[_mz.driveVehicleIndex[_lz.index]].brakeForce=50
			_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].setBrake(0,wheelIndex)
		})
		carBrakeSound(aB0,c0)
	}
}
// ==== INTERACTIVE ====
// Mouse down
window.mouseDown=function(event){
	setTimeout(function(){
		if(_cz.buttonPressed===undefined){
			if(_mz.loaded==0){
				event.preventDefault()
				_ez.raycaster.setFromCamera(new THREE.Vector3((event.clientX/_ez.tCanvas.width)*2-1,-(event.clientY/_ez.tCanvas.height)*2+1,.5),_ez.camera)
				_pz.intersects=_ez.raycaster.intersectObjects(_ez.scene.children)
				if(_pz.intersects.length>0){
					if(_lz.virtualCam)_ez.camera.focusAt(_pz.intersects[0].distance)
					if(_pz.intersects[0].object.select=='node')showDialog('myObjective.png',_pz.intersects[0].object.message,'','Dismiss')
					_pz.iNT0=_pz.intersects[0].object.parent==_ez.scene?_pz.intersects[0].object:_pz.intersects[0].object.parent
					if(_pz.iNT0.select=='navigatable'&&($('#dynamic-joystick').html()!=''&&isMobile||!isMobile)&&_oz.target.length>0){
						if(event.button==1||(_lz.dblClicker&&event.button==0)||isMobile){
							_ez.loadedPins[_ez.navTgtIndex].position=_pz.intersects[0].point
							if(_oz.target[_lz.index]!='notarget'){
								_oz.target[_lz.index].x=_ez.loadedPins[_ez.navTgtIndex].position.x
								_oz.target[_lz.index].z=_ez.loadedPins[_ez.navTgtIndex].position.z
							}$('#pin-cont-'+_ez.loadedPins[_ez.navTgtIndex].divElem.id+'-navigation').fadeIn('slow')
						}
					}
					if(event.button==0&&_pz.iNT0.select=='movable'){
						if(_pz.iNT0.cmAuth===undefined||_pz.iNT0.cmAuth&&[myUserID.uid,'all','any','*'].some(slug=>_pz.iNT0.cmAuth.includes(slug))){
							if(_ez.transformControls){
								_ez.scene.remove(_ez.transformControls)
								try{
									_ez.transformControls.dispose()
								}catch(err){}
								delete _ez.transformControls
							}
							if(_ez.outlineEffect){
								if(_ez.outlineEffect.selection.has(_pz.intersects[0].object)){
									_ez.outlineEffect.selection.delete(_pz.intersects[0].object)
								}else _ez.outlineEffect.selection.add(_pz.intersects[0].object)
							}
							_ez.transformControls=new TransformControls(_ez.camera,_ez.renderer.domElement)
							transformControlsSettings()
							_ez.transformControls.name='move-gizmo'
							_ez.scene.add(_ez.transformControls)
							_ez.transformControls.attach(_pz.iNT0)
							_mz.moveMeshID=_pz.iNT0
							_ez.transformControls.addEventListener('dragging-changed',function(event){
								_ez.orbitControl.enabled=!event.value
								if(!event.value){
									if(_ez.editActivity===undefined)_ez.editActivity=[]
									if(_lz.placeArea){
										_pz.iNA={}
										for(_pz.pL0 in _lz.placeArea){
											_pz.iNA.ed=isPositionInArea(_mz.moveMeshID.position,_lz.placeArea[_pz.pL0].corners)
											_pz.cM0=_mz.moveMeshID.clone()
											_pz.cM0.rotation.y=(_pz.iNA.ed.edge.o)*Math.PI/180
											_pz.iNA.ds=getPerpendicularPosition(_pz.iNA.ed,_pz.cM0.position)
											_pz.iNA.ds=_pz.iNA.ds.distanceTo(_pz.cM0.position)
											if(!_pz.iNA.area||_pz.iNA.distance>_pz.iNA.ds){
												_pz.iNA.area=_pz.iNA.ed
												_pz.iNA.distance=_pz.iNA.ds
											}delete _pz.cM0
										}
										if(!_pz.iNA.area.in){
											_mz.moveMeshID.rotation.y=(_pz.iNA.area.edge.o)*Math.PI/180
											_mz.moveMeshID.position.copy(getPerpendicularPosition(_pz.iNA.area,_mz.moveMeshID.position))
											_pz.bo0=returnConstant('boundingBox',_mz.moveMeshID)
											_pz.op0=getObjectPosition(_mz.moveMeshID,_pz.bo0.z)
											_mz.moveMeshID.position.set(_pz.op0.x,_mz.moveMeshID.position.y,_pz.op0.z)
											_mz.moveMeshID.rotation.y=(_pz.iNA.area.edge.o+180)*Math.PI/180
										}
									}saveObjectTransform(_mz.moveMeshID,true)
								}
							})
							$('#dynamic-joystick').html('')
							switchTransformOrbit(_ez.transformControlsMode)
						}
					}else if(_ez.transformControls)setTimeout(function(){
						if(_ez.orbitControl.enabled&&!_ez.orbitNavigating)disableTransformControl()
					},200)
				}
			}
		}delete _lz.dblClicker
	},100)
}
// Remove selected
window.removeSelectedAsset=function(){
	disableTransformControl()
	disposeHierarchy(_mz.moveMeshID)
}
// Disable transform controls
window.disableTransformControl=function(){ // Disable transform controls
	for(_pz.oA0=0;_pz.oA0<_ez.objectPhysics.length;_pz.oA0++){
		if(_ez.objectPhysics[_pz.oA0].holdMass)_ez.objectPhysics[_pz.oA0].mass=_ez.objectPhysics[_pz.oA0].holdMass
	}_ez.scene.remove(_ez.transformControls)
	_ez.transformControls.dispose()
	delete _ez.transformControls
	if(isMobile)loadJoyStick(_lz.dynamicJoy)
	$('#'+(_lz.dynamicJoy?'bottomLeftThirdIcon':'actionLeftIconB')).html('')
	$('#'+(_lz.dynamicJoy?'bottomLeftSecondIcon':'actionLeftIconA')).html('')
}
// Save object transforms
window.saveObjectTransform=function(mesh,c0){
	if(isCustomModel(mesh))for(_pz.oA0=0;_pz.oA0<_ez.archive.length;_pz.oA0++){
		if(mesh.obID&&_ez.archive[_pz.oA0].obID==mesh.obID){
			_ez.archive[_pz.oA0].position.x=mesh.position.x
			_ez.archive[_pz.oA0].position.y=mesh.position.y
			_ez.archive[_pz.oA0].position.z=mesh.position.z
			_ez.archive[_pz.oA0].position.o={
				x:mesh.rotation.x*180/Math.PI,
				y:mesh.rotation.y*180/Math.PI,
				z:mesh.rotation.z*180/Math.PI
			}
			if(c0){
				_ez.editActivity.push({
					obID:mesh.obID,
					position:mesh.clone().position,
					quaternion:mesh.clone().quaternion
				})
			}else _ez.editActivity=deleteArray(_ez.editActivity,_ez.editActivity.length-1)
		}
	}
	for(_pz.oA0=0;_pz.oA0<_ez.objectPhysics.length;_pz.oA0++){
		if(mesh.obID&&_ez.objectPhysics[_pz.oA0].obID==mesh.obID){
			if(_ez.objectPhysics[_pz.oA0].mass!=0)_ez.objectPhysics[_pz.oA0].holdMass=_ez.objectPhysics[_pz.oA0].mass
			_ez.objectPhysics[_pz.oA0].mass=0
			_ez.objectPhysics[_pz.oA0].position.x=mesh.position.x
			_ez.objectPhysics[_pz.oA0].position.y=mesh.position.y
			_ez.objectPhysics[_pz.oA0].position.z=mesh.position.z
			_ez.objectPhysics[_pz.oA0].quaternion.copy(mesh.quaternion)
			if(_ez.objectPhysics[_pz.oA0].cmKey){
				mesh.cmKey=_ez.objectPhysics[_pz.oA0].cmKey
				isCustomModel(mesh)
			}
		}
	}savePosition(_lz.index)
	mesh=undefined
}
// ==== ANIMATION ====
// Play player artificial behaviours
window.playArtificialBehaviours=function(ai0,ca){
	_pz.act='none'
	if(_mz.driveVehicleIndex[ai0]!=null){
		if((ai0==_lz.index&&_cz.stickState!='avatar')||ai0!=_lz.index)_pz.act='Driving'
	}else if(_cz.alive[ai0]==false){
		_pz.act='LayingIdle'
	}else{
		if(isMovingJump(ai0)&&isPlayersIndex(ai0)){
			if(ca=='update'){
				try{
					if(_cz.onfloor[ai0]){
						if(isPlayerFalling(ai0,_lz.fatalFall.soft)||isPlayersEscaping(ai0,9)){
							if(_cz.onfloor[ai0])_pz.act='Floating'
							_cz.onfloor[ai0]=false
						}else if(isPlayersEscaping(ai0,1)&&_cz.onfloor[ai0])_cz.physics[ai0].velocity.y=_cz.physics[ai0].velocity.y/2
					}
				}catch(err){}
				try{
					if(isAboveWater(ai0,-.3)){
						if(!_cz.onfloor[ai0]){
							if(!_ez.animation.previous[ai0].match(/(FallingIdle|Flying|JumpingUp)/)){
								if(_cz.physics[ai0].velocity.y>5&&_ez.stick.stickLD[ai0]=='C')_pz.act='Floating'
								if(isPlayerFalling(ai0,-4)&&isPlayersEscaping(ai0,-40)){
									_cz.physics[ai0].material.friction=.00001
									_pz.act='FallingIdle'
								}
							}
						}else if(isPlayerFalling(ai0,-2))_cz.onfloor[ai0]=false
					}
				}catch(err){}
			}
			if(ca=='player'){
				if(_cz.onfloor[ai0]){
					if(_ez.stick.stickLD[ai0]!='C'){
						_pz.act='JumpingUp'
					}else _pz.act=randomString(_mz.playerHit)
				}else if(isAboveWater(ai0,-.3)){
					if(_ez.stick.stickLD[ai0]!='C'){
						_pz.act='JumpingUp'
					}else _pz.act='FallingToLanding'
				}else _pz.act='Floating'
			}
		}
		if(ca=='mixer'){
			if(_ez.activityAnimation===undefined||_ez.activityAnimation.act===undefined){
				try{
					if(_cz.onfloor[ai0]){
						if(isAboveWater(ai0,-.9)&&_ez.stick.stickLD[ai0]=='C'&&_ez.stick.stickLA[ai0]!='GettingUp')_pz.act=randomString(_mz.standIdle)
					}else if(_lz.water&&_mz.meshesData[ai0].position.y<-.9&&_ez.stick.stickLA[ai0]!='Swimming'){
						_pz.act='TreadingWater'
					}else{
						if(isAboveWater(ai0,-.9)){
							if(isPlayerFalling(ai0,_lz.fatalFall.hard)||_ez.stick.stickLA[ai0]=='Flying'){
								_pz.act='Falling'
							}else if(isPlayersEscaping(ai0,10)){
								_pz.act='Floating'
							}else _pz.act='FallingIdle'
						}
					}
				}catch(err){
					_pz.act=randomString(_mz.standIdle)
				}
			}else _pz.act=randomString(_ez.activityAnimation.act)
			if(_pz.act=='none')_pz.act=randomString(_mz.playerHit)
		}
		if(ca=='terrain'){
			if(isAboveWater(ai0,-.9)){
				if(isPlayerFalling(ai0,_lz.fatalFall.extreme)){
					_pz.act='FallingFlatImpact'
				}else if(isPlayerFalling(ai0,_lz.fatalFall.hard)){
					_pz.act='Dying'
				}else if(isPlayerFalling(ai0,_lz.fatalFall.normal)){
					_pz.act='DyingBackwards'
				}else if(_ez.stick.stickLD[ai0]=='C'||_ez.stick.stickLA[ai0].match(/(Walking|WalkingBackwards)/)||_ez.stick.stickLA[ai0].includes('Left')||_ez.stick.stickLA[ai0].includes('Right')){
					if(_ez.stick.stickLD[ai0]=='C')_cz.physics[ai0].material.friction=0
					_pz.act='FallingToLanding'
				}else _pz.act=isJumpForwardBackward(ai0)
			}
		}
	}
	return _pz.act
}
// Activity animation
window.activityAnimation=function(act,index,hS0){
	if(_mz.driveVehicleIndex[index]==null)loadFBXAnim(act+'.fbx',_ez.scene.children[_mz.meshIndex[index]],index,false,true)
	if(act.match(/(Dying|FlatImpact)/)){
		_cz.alive[index]=false
		if(hS0&&_lz.index==index)setHealthStamina(['health','stamina'],0)
	}
	if(act=='FallingFlatImpact')_cz.physics[index].velocity.y=-_cz.physics[index].velocity.y/5
	act=index=hS0=undefined
}
// Check if jump forward or backward
function isJumpForwardBackward(jp0){
	_pz.act='none'
	if(!_pz.jumpFB){
		_pz.jumpFB=true
		if(isMovingJump(jp0)&&isAboveWater(jp0,-.3)){
			if(_ez.stick.stickLA[jp0].match(/(RunningBackward|SlowJogBackwards)/)){
				if(isPlayerFalling(jp0,-1)&&_ez.stick.stickLA[jp0]=='RunningBackward'){
					_pz.act='BackwardJump'
				}else if(isPlayersEscaping(jp0,-2))_pz.act='BackFlip'
			}
			if(_ez.stick.stickLA[jp0].match(/(Running|RunningFast|Flying)/)&&!_ez.stick.stickLA[jp0].match(/(Back|Strafe)/)){
				if(isPlayerFalling(jp0,-1)&&_ez.stick.stickLA[jp0].match(/(RunningFast|Flying)/)){
					_pz.act='ForwardJump'
				}else if(isPlayersEscaping(jp0,-2))_pz.act='RunningForwardFlip'
			}
		}
		_cz.physics[jp0].velocity.y=_cz.velocity[jp0].y
		_cz.onfloor[jp0]=false
	}
	jp0=undefined
	return _pz.act
}
// ==== MULTIPLAYER ====
// Check if multiplayer
window.isMultiplayer=function(){
	if(_lz.online){
		return true
	}else return false
}
// Check if player is inside area
function isPlayerInArea(){
	_lz.posChecked=true
	function _saveLeave(){
		savePosition(_lz.index)
		updateModels(0,false)
		if(isOnL())onRd(_ez.engineName.toLowerCase()+'/models/',[_lz.levelName],`loadNewModels()`)
	}
	function _checkAreas(areas){
		if(areas){
			delete _pz.noP
			for(_pz.zN0 in areas){
				if(areas[_pz.zN0].corners&&isPositionInArea(_mz.meshesData[_lz.index].position,areas[_pz.zN0].corners).in){
					if(areas[_pz.zN0].elevation&&areas[_pz.zN0].height){
						if(_mz.meshesData[_lz.index].position.y>=areas[_pz.zN0].elevation&&_mz.meshesData[_lz.index].position.y<=areas[_pz.zN0].elevation+areas[_pz.zN0].height){
							_lz.zone=_pz.zN0
							if(areas[_pz.zN0].constrains){
								_lz.placeArea=[]
								for(_pz.zN1 in areas[_pz.zN0].constrains){
									_lz.placeArea=_lz.placeArea.concat(areas[_pz.zN0].constrains[_pz.zN1])
								}
							}return areas[_pz.zN0].properties
						}
					}else{
						if(areas[_pz.zN0].price)createTouchButton('sinebeep',_ez.bottomIcon?'bottomLeftSecondIcon':'actionLeftIconA','actionBuyProperty',undefined,'png','actnecessary.gif',.36)
						showHeadline(areas,_pz.zN0)
						_lz.buyList=areas[_pz.zN0]
						return
					}
				}if(!areas[_pz.zN0].elevation||!areas[_pz.zN0].height)_pz.noP=true
			}if(_pz.noP&&$('#walletICON').html().toString().includes('landMark.png'))hideActButtons($('#walletICON').html(''))
		}
	}
	_checkAreas(_checkAreas(_lz.zoneArea))
	_saveLeave()
}
// Update player activity online
window.updateActivity=function(ua0){
	if(_mz.update>(_mz.loadMode?_lz.updateInterval.loadModels:_lz.updateInterval.unloadModels)){
		_mz.update=0
		if((_ez.stick.stickLD[_lz.index]=='C'&&!_lz.posChecked)||(_ez.stick.stickLD[_lz.index]!='C'&&isPlayerMoved()&&_ez.resumeUpdateParameters===undefined&&_cz.alive[_lz.index]))isPlayerInArea()
	}else _mz.update++
	if(parseInt(_oz.onPosition.update)+(_mz.driveVehicleIndex[_lz.index]!=null?_lz.updateInterval.driving:_lz.updateInterval.walking)<parseInt(cDtTm())||ua0.match(/(horn|drivevehicle|exitvehicle|replay|halt|change|wave|jump|replay|leave|changeavatar)/)){
		_oz.onPosition.update=cDtTm()
		_pz.ov0=_lz.index
		if(ua0.match(/(horn|drivevehicle|exitvehicle|replay|halt|change|wave|jump|replay|leave|changeavatar)/)){
			_pz.act=ua0
			ua0=true
		}else _pz.act=_ez.animation.previous[_pz.ov0]
		if(ua0!='none'||_lz.levelName!==undefined&&$('#loadingBar').css('display')=='none'){
			_pz.x=parseInt(_cz.physics[_pz.ov0].position.x*10)/10
			_pz.y=parseInt(_cz.physics[_pz.ov0].position.y*10)/10
			_pz.z=parseInt(_cz.physics[_pz.ov0].position.z*10)/10
			_pz.o=parseInt(_mz.meshesData[_pz.ov0].rotation.y*10)/10
			if(ua0!='none'||_oz.onPosition.x!=_pz.x||_oz.onPosition.z!=_pz.z||_oz.onPosition.o!=_pz.o){
				if(isMultiplayer()&&isOnL()){
					_oz.onPosition.x=_pz.x
					_oz.onPosition.y=_pz.y
					_oz.onPosition.z=_pz.z
					_oz.onPosition.o=_pz.o
					_pz.carState={stickLY:null,stickRX:null,gear:null,forwardForce:null,reverseForce:null,brakeForce:null,position:new THREE.Vector3()}
					if(_mz.driveVehicleIndex[_pz.ov0]!=null){
						if(_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_pz.ov0]]]!==undefined){
							_pz.carState.stickLY=_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.ov0]].stickLY
							_pz.carState.stickRX=_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.ov0]].stickRX
							_pz.carState.gear=_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.ov0]].gear
							_pz.carState.forwardForce=_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.ov0]].forwardForce
							_pz.carState.reverseForce=_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.ov0]].reverseForce
							_pz.carState.brakeForce=_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.ov0]].brakeForce
							_pz.carState.position.copy(_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_pz.ov0]]].position)
						}
					}
					try{
						_pz.cH0=_lz.parameters[_lz.avatarParameterIndex].character
						onSv(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'/'+myUserID.uid+'/',{
							type:'player',
							path:_lz.path,
							model:_lz.model,
							animation:_pz.act,
							update:cDtTm(),
							character:_pz.cH0?_pz.cH0:null,
							x:_pz.x,
							y:_pz.y,
							z:_pz.z,
							o:_pz.o,
							ht:_cz.height[_pz.ov0],
							kg:_cz.mass[_pz.ov0],
							of:_cz.offset[_pz.ov0],
							name:myUserID.name,
							profile:myUserID.profile?myUserID.profile:null,
							carState:_pz.carState,
							device:meAndF?'android':'browser',
							engine:_ez.engineName,
						})
					}catch(err){}
					setTimeout(function(){
						onRd(_ez.engineName.toLowerCase()+'/transfers/'+myUserID.uid+'/',['amount','name'],`receiveTransfer()`)
					},600)
				}
			}
		}
	}
}
// ==== ARTIFICIAL CROWD ====
// Check artificial crowd required
window.checkACRequired=function(){
	if(_lz.artificialCrowd){
		if(_oz.ACIndex.length>1){
			for(_pz.aC1=0;_pz.aC1<_oz.ACIndex.length;_pz.aC1++){
				try{
					_pz.nC_0=_oz.ACIndex[_pz.aC1].nC0
					_pz.nC_1=_oz.ACIndex[_pz.aC1].nC1
					if(_mz.meshesData[_pz.aC1]!==undefined&&_pz.nC_0!==undefined&&_pz.nC_1!==undefined){
						_pz.sD0=_lz.artificialCrowd.spawn[_pz.nC_0].isDriving[_pz.nC_1]
						if(_pz.sD0==true)_lz.artificialCrowd.spawn[_pz.nC_0].isDriving[_pz.nC_1]=_mz.driveVehicleIndex[_lz.artificialCrowd.spawn[_pz.nC_0].indexes[_pz.nC_1]]
						if(_pz.sD0){
							_pz.rI0=_lz.artificialCrowd.spawn[_pz.nC_0].rallyIndex[_pz.nC_1]
							_pz.rL2=_lz.artificialCrowd.spawn[_pz.nC_0].rally[_pz.rI0]
						}else{
							_pz.dI0=_lz.artificialCrowd.spawn[_pz.nC_0].destinyIndex[_pz.nC_1]
							_pz.rL2=_lz.artificialCrowd.spawn[_pz.nC_0].destiny[_pz.dI0]
						}
						if(_pz.rL2.ds>_mz.meshesData[_pz.aC1].position.distanceTo(_pz.rL2)){
							if(_pz.sD0){
								if(_pz.rI0<_lz.artificialCrowd.spawn[_pz.nC_0].rally.length){
									_pz.rI0++
								}else _pz.rI0=0
								_lz.artificialCrowd.spawn[_pz.nC_0].rallyIndex[_pz.nC_1]=_pz.rI0
							}else{
								if(_pz.dI0<_lz.artificialCrowd.spawn[_pz.nC_0].destiny.length){
									_pz.dI0++
								}else _pz.dI0=0
								_lz.artificialCrowd.spawn[_pz.nC_0].destinyIndex[_pz.nC_1]=_pz.dI0
							}
						}
					}
				}catch(err){}
			}
		}else if(_lz.artificialCrowd.loaded)removeGlitchInMatrix()
	}
}
// Remove glitch in matrix
function removeGlitchInMatrix(){
	for(_pz.rG0=0;_pz.rG0<_ez.scene.children.length;_pz.rG0++){
		if(_ez.scene.children[_pz.rG0].meshType=='player'&&_ez.scene.children[_pz.rG0].name!=myUserID.uid){
			_ez.scene.remove(_ez.scene.children[_pz.rG0])
		}
	}
	for(_pz.rG0=0;_pz.rG0<_ez.world.bodies.length;_pz.rG0++){
		if(_ez.world.bodies[_pz.rG0].bodyType=='player'&&_ez.world.bodies[_pz.rG0].avatarMesh!=myUserID.uid){
			_ez.world.removeBody(_ez.world.bodies[_pz.rG0])
			postBody(_ez.world.bodies[_pz.rG0],false)
		}
	}
	_lz.playerIndexList=[_lz.index]
	resetMyTarget()
	_lz.artificialCrowd.loaded=false
	// Remove all other players
	_mz.meshesData=[_mz.meshesData[0]]
	_cz.physics=[_cz.physics[0]]
	_cz.model=[_cz.model[0]]
	_cz.onfloor=[_cz.onfloor[0]]
	_cz.alive=[_cz.alive[0]]
	_cz.height=[_cz.height[0]]
	_cz.mass=[_cz.mass[0]]
	_cz.offset=[_cz.offset[0]]
	_cz.velocity=[_cz.velocity[0]]
	_cz.direction=[_cz.direction[0]]
	_cz.invertQuaternion=[_cz.invertQuaternion[0]]
	_cz.mySeat=[_cz.mySeat[0]]
	_mz.playerMixers=[_mz.playerMixers[0]]
	_mz.driveVehicleIndex=[_mz.driveVehicleIndex[0]]
	_ez.stick.stickLA=[_ez.stick.stickLA[0]]
	_ez.stick.stickLD=[_ez.stick.stickLD[0]]
	_ez.stick.stickRD=[_ez.stick.stickRD[0]]
	_ez.stick.jumpLD=[_ez.stick.jumpLD[0]]
	_ez.animation.previous=[_ez.animation.previous[0]]
	_ez.animation.played=[_ez.animation.played[0]]
}
// Set my target
function resetMyTarget(){
	_oz.uid=_oz.uid.length==0?[myUserID.uid]:[_oz.uid[0]]
	_oz.target=_oz.target.length==0?['notarget']:[_oz.target[0]]
	_oz.ACIndex=_oz.ACIndex.length==0?[{nC0:undefined,nC1:undefined}]:[_oz.ACIndex[0]]
}
// Create artificial crowd
function artificialCrowd(nC0,nC1){
	if(_lz.artificialCrowd&&_oz.ready){
		if(_ez.updateObjectsBusy===undefined){
			setTimeout(function(){
				function getDriveDestination(nC0,nC1){
					_pz.carState={stickLY:null,stickRX:null,gear:null,forwardForce:null,reverseForce:null,brakeForce:null,position:new THREE.Vector3()}
					_pz.nD0=_lz.artificialCrowd.spawn[nC0].indexes[nC1]
					if(_mz.driveVehicleIndex[_pz.nD0]!=null){
						for(_pz.iR0=0;_pz.iR0<_lz.artificialCrowd.spawn[nC0].rally.length;_pz.iR0++){
							_pz.carState.position.copy(getRandomPosition(_lz.artificialCrowd.spawn[nC0].rally,_lz.artificialCrowd.spawn[nC0].rallyIndex[nC1]))
							if(isInRange(_pz.carState.position,_lz.proximity))continue
							_lz.artificialCrowd.spawn[nC0].rallyIndex[nC1]++
						}
						if(_pz.iR0==_lz.artificialCrowd.spawn[nC0].rally.length)_pz.sp3=getRandomPosition([{target:'me',o:0,s:7,ds:15}],0)
					}
				}
				try{
					if(_lz.artificialCrowd.spawn[nC0].isAlive[nC1]){
						// ALIVE
						_pz.nAct=randomString(_lz.artificialCrowd.spawn[nC0].animations)
						if(_lz.artificialCrowd.spawn[nC0].isDriving[nC1]){
							// DRIVING
							_pz.nAct='Driving'
							if(_pz.nAct.match(/(horn)/)&&Math.floor(Math.random()*3)!=1)_pz.nAct='horn'
							getDriveDestination(nC0,nC1)
						}else{
							// WALKING
							if(_pz.nAct.match(/(drivevehicle)/))getDriveDestination(nC0,nC1)
							if(_pz.nAct.match(/(horn)/))_pz.nAct='halt'
							for(_pz.iR0=0;_pz.iR0<_lz.artificialCrowd.spawn[nC0].destiny.length;_pz.iR0++){
								_pz.sp3=getRandomPosition(_lz.artificialCrowd.spawn[nC0].destiny,_lz.artificialCrowd.spawn[nC0].destinyIndex[nC1])
								if(isInRange(_pz.sp3,_lz.proximity))continue
								_lz.artificialCrowd.spawn[nC0].destinyIndex[nC1]++
							}
							if(_pz.iR0==_lz.artificialCrowd.spawn[nC0].destiny.length)_pz.sp3=getRandomPosition([{target:'me',o:0,s:7,ds:15}],0)
						}
					}else{
						// SPAWN
						_pz.nAct='halt'
						_lz.artificialCrowd.spawn[nC0].isDriving[nC1]=false
						_pz.sp3=getRandomPosition(_lz.artificialCrowd.spawn[nC0].position,Math.floor(Math.random()*_lz.artificialCrowd.spawn[nC0].position.length))
						if(!isInRange(_pz.sp3,_lz.proximity)){
							/*
							BAD CODES
							_pz.sp3=_ez.scene.children[_mz.meshIndex[_lz.index]].position
							_pz.sp3.o=0
							_pz.sp3.s=10
							_pz.sp3=getRandomPosition([_pz.sp3],0)
							*/
							_pz.sp3=false
						}
					}
					if(_pz.sp3){
						_pz.nm1=_lz.artificialCrowd.spawn[nC0].models[nC1]
						_pz.aD0=getAvatarParameters(_pz.nm1)
						if(lsRd('playerAvatar'+myUserID.uid)){
							if(lsRd('playerAvatar'+myUserID.uid).includes(',"character":undefined'))lsSv('playerAvatar'+myUserID.uid,lsRd('playerAvatar'+myUserID.uid).replace(',"character":undefined',''))
							if(JSON.parse(lsRd('playerAvatar'+myUserID.uid)).character)_pz.cH0=JSON.parse(lsRd('playerAvatar'+myUserID.uid)).character.attached
						}
						if((lsRd('playerAvatar'+myUserID.uid)&&(_pz.aD0.parameters.character===undefined||_pz.cH0!=_pz.aD0.parameters.character.attached))||lsRd('playerAvatar'+myUserID.uid)==null){
							onRe.key=_lz.artificialCrowd.spawn[nC0].uid[nC1]
							onRe.target={
								type:_lz.artificialCrowd.spawn[nC0].type[nC1],
								path:'assets/models/players/'+_pz.nm1+'/',
								model:_pz.nm1+'.glb',
								animation:_pz.nAct,
								update:cDtTm(),
								character:_pz.aD0.parameters.character,
								x:_pz.sp3.x,
								y:_pz.sp3.y,
								z:_pz.sp3.z,
								o:Math.PI/180*Math.floor(Math.random()*360),
								ht:_pz.aD0.parameters.ht,
								kg:_pz.aD0.parameters.kg,
								of:_pz.aD0.parameters.of,
								name:_lz.artificialCrowd.spawn[nC0].names[nC1],
								profile:null,
								carState:_pz.carState,
								engine:_ez.engineName,
								ACIndex:{nC0:nC0,nC1:nC1}
							}
							updatePlayersTarget()
						}
					}
				}catch(err){}
				if(nC1>=_lz.artificialCrowd.spawn[nC0].names.length-1){
					nC1=0
					if(nC0>=_lz.artificialCrowd.spawn.length-1){
						nC0=0
						_lz.artificialCrowd.loaded=true
					}else nC0++
				}else{
					if(!_lz.artificialCrowd.loaded){
						if(_lz.artificialCrowd.loaded!==undefined){
							_lz.artificialCrowd.loaded=undefined
							nC1++
						}else _lz.artificialCrowd.loaded=null
					}else nC1++
				}
				artificialCrowd(nC0,nC1)
			},!_lz.artificialCrowd.loaded?(isMobile?600:300):(isMobile?1200:600)*(Math.floor(Math.random()*_lz.artificialCrowd.interval.delay)+3))
		}else setTimeout(function(){
			artificialCrowd(nC0,nC1)
		},300)
	}else setTimeout(function(){
		artificialCrowd(nC0,nC1)
	},300)
}
// ==== NAVIGATE PLAYERS POSITION ====
// Navigate players position
window.updatePlayersTarget=function(){
	if((onRe.target.type&&onRe.target.type.match(/(crowd|walker|runner)/)||(isMultiplayer()&&isOnL()))&&onRe.target.type!==undefined){
		_oz.ready=false
		if(onRe.target.type.match(/(player|walker|crowd|runner)/)){
			if(!_oz.uid.includes(onRe.key)){
				if(onRe.key!=myUserID.uid&&parseInt(onRe.target.update)+10>cDtTm()&&_oz.uid.length<(isMobile?_lz.population.mo:_lz.population.pc)&&isInRange(onRe.target,_lz.proximity)){
					_pz.lP0=loadPlayerMesh(onRe.target.path,onRe.target.model,true,onRe.target.x,onRe.target.y,onRe.target.z,onRe.target.o,1,_oz.target.length,onRe.target.ht,onRe.target.kg,false,0,onRe.target.of,{uid:onRe.key,name:onRe.target.name,profile:onRe.target.profile,character:onRe.target.character})
					if(_pz.lP0){
						if(onRe.target.ACIndex){
							_lz.artificialCrowd.spawn[onRe.target.ACIndex.nC0].indexes[onRe.target.ACIndex.nC1]=_oz.target.length
							_lz.artificialCrowd.spawn[onRe.target.ACIndex.nC0].isAlive[onRe.target.ACIndex.nC1]=true
						}
						_oz.uid.push(onRe.key)
						_oz.target.push(onRe.target)
						if(onRe.target.type.match(/(walker|crowd|runner)/)){
							_oz.ACIndex.push({nC0:onRe.target.ACIndex.nC0,nC1:onRe.target.ACIndex.nC1})
						}else _oz.ACIndex.push({nC0:undefined,nC1:undefined})
					}
				}
			}
			if(onRe.key!=myUserID.uid){
				for(_pz.uo0=0;_pz.uo0<_mz.meshesData.length;_pz.uo0++){
					if(_oz.target[_pz.uo0]!==undefined){
						if(_pz.uo0!=_lz.index&&_mz.meshesData[_pz.uo0].name==onRe.key){
							_pz.oI0=_mz.meshIndex[_pz.uo0]
							if(_oz.target[_pz.uo0].model!=onRe.target.model||onRe.target.animation.match(/(changeavatar)/)){
								_lz.playerIndexList=_lz.playerIndexList.filter(e=>e!==_pz.uo0)
								loadPlayerMesh(onRe.target.path,onRe.target.model,true,onRe.target.x,onRe.target.y,onRe.target.z,onRe.target.o,1,_pz.uo0,onRe.target.ht,onRe.target.kg,true,0,onRe.target.of,{uid:onRe.key,name:onRe.target.name,profile:onRe.target.profile,character:onRe.target.character})
							}
							if(!_ez.stick.stickLA[_pz.uo0].match(/(Falling|FallingIdle|Flying|Walking|Running|RunningFast)/)){
								if(onRe.target.animation.match(/(leave)/)){
									removeAvatar(onRe.target.type,_pz.uo0,onRe.target.ACIndex.nC0,onRe.target.ACIndex.nC1,onRe.target.ACIndex)
									return
								}
								if(onRe.target.animation.match(/(halt)/))loadFBXAnim(randomString(_mz.standIdle)+'.fbx',_ez.scene.children[_pz.oI0],_pz.uo0,false,true)
								if(onRe.target.animation.match(/(wave)/)&&_mz.driveVehicleIndex[_pz.uo0]==null)loadFBXAnim('Waving.fbx',_ez.scene.children[_pz.oI0],_pz.uo0,false,onRe.target.type!='player')
							}
							if(!onRe.target.animation.match(/(wave)/))_oz.target[_pz.uo0]=onRe.target
							if(onRe.target.animation.match(/(jump)/)&&_mz.driveVehicleIndex[_pz.uo0]==null)_ez.stick.jumpLD[_pz.uo0]=true
							if(onRe.target.animation.match(/(replay)/)){
								if(_mz.driveVehicleIndex[_pz.uo0]==null){
									_cz.physics[_pz.uo0].position.set(onRe.target.x,onRe.target.y,onRe.target.z)
									_cz.physics[_pz.uo0].velocity.y=0
									_mz.meshesData[_pz.uo0].position.copy(_cz.physics[_pz.uo0].position)
									_ez.scene.children[_pz.oI0].position.copy(_cz.physics[_pz.uo0].position)
									if(!_cz.alive[_pz.uo0]){
										_cz.alive[_pz.uo0]=true
										_ez.animation.previous[_pz.uo0]='GettingUp'
										loadFBXAnim(_ez.animation.previous[_pz.uo0]+'.fbx',_ez.scene.children[_pz.oI0],_pz.uo0,false,true)
									}
								}
							}
							if(onRe.target.animation.match(/(drivevehicle)/)){
								getNearVehicle(_pz.uo0,true)
								if(onRe.target.ACIndex)_lz.artificialCrowd.spawn[onRe.target.ACIndex.nC0].isDriving[onRe.target.ACIndex.nC1]=true
							}
							if(onRe.target.animation.match(/(exitvehicle)/))switchDriving(_pz.uo0,false)
							if(onRe.target.animation.match(/(horn)/)){
								if(onRe.target.animation.match(/(hornstop)/)){
									loadAudio('vehicle','carhornhonk',0,false,false)
								}else{
									_pz.vH0=_mz.meshesData[_lz.index].position.distanceTo(onRe.target)
									loadAudio('vehicle','carhornhonk',1/_pz.vH0>1?1:1/_pz.vH0,false,true,_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_pz.uo0]]])
								}
							}
							if(_mz.driveVehicleIndex[_pz.uo0]!=null&&onRe.target.carState!=undefined){
								_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.uo0]].stickLY=onRe.target.carState.stickLY
								_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.uo0]].stickRX=onRe.target.carState.stickRX
								_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.uo0]].gear=onRe.target.carState.gear?onRe.target.carState.gear:1
								_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.uo0]].forwardForce=onRe.target.carState.forwardForce
								_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.uo0]].reverseForce=onRe.target.carState.reverseForce
								_mz.vehicleMotor[_mz.driveVehicleIndex[_pz.uo0]].brakeForce=onRe.target.carState.brakeForce
							}
							if(parseInt(onRe.target.update)+1500<parseInt(cDtTm()))onEr(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'/'+onRe.key)
						}
					}
				}
			}
		}
		if(onRe.target.type.match(/(model)/)&&onRe.key!=myUserID.uid){
			if(!_ez.addedModels.includes(onRe.target.id)){
				_ez.addedModels.push(onRe.target.id)
				loadingNewModels(onRe.target)
			}
		}
		_oz.ready=true
		return
	}
}
// ==== VEHICLE ====
// Show drive option
window.showGearLevel=function(){
	$('#vehicleGear').html(_mz.vehicleMotor[_mz.driveVehicleIndex[_lz.index]].gear)
}
// Near vehicle
window.nearVehicle=function(un0){
	try{
		if(un0!==undefined&&$('#optionWindow').css('display')=='none'){
			if(_ez.archive[un0].vehicleIndex!==undefined&&_cz.stickState=='avatar'){
				_mz.nearVehicleIndex=_ez.archive[un0].vehicleIndex
				_lz.gameRules.testDriveIndex=un0
				createTouchButton('sinebeep',_ez.bottomIcon?'bottomLeftThirdIcon':'actionLeftIconB',{icon:'ti-car',name:'driveVehicle'},undefined,'icon','actnecessary.gif',.36)
			}
		}
	}catch(err){}
}
// Get near vehicle
function getNearVehicle(sw0,c0){
	if(_mz.chassisMeshIndex.length>0){
		for(_pz.gV0=0;_pz.gV0<_mz.chassisMeshIndex.length;_pz.gV0++){
			if(_ez.scene.children[_mz.chassisMeshIndex[_pz.gV0]]!==undefined){
				_pz.nR0=_ez.scene.children[_mz.chassisMeshIndex[_pz.gV0]].position.distanceTo(_mz.meshesData[sw0].position)
				if(_pz.nR1===undefined||_pz.nR0<_pz.nR1){
					_mz.nearVehicleIndex=_pz.gV0
					_pz.nR1=_pz.nR0
				}
			}
		}
		switchDriving(sw0,c0)
	}
}
// Switch to drive
window.switchDriving=function(sw0,c0){
	_lz.enteringVehicle=true
	_pz.vAct='none'
	_pz.vH1=_ez.scene.children[_mz.chassisMeshIndex[_mz.nearVehicleIndex]]
	if(c0){
		if(_mz.driveVehicleIndex[sw0]==null&&_mz.nearVehicleIndex!==undefined){
			_cz.mySeat[sw0]=-1
			do{_cz.mySeat[sw0]++}while(_mz.isOccupied[_mz.nearVehicleIndex][_cz.mySeat[sw0]]&&_cz.mySeat[sw0]<_mz.isOccupied[_mz.nearVehicleIndex].length-1)
			if(_pz.vH1===undefined)updateMeshIndex(['body','mesh'])
			if(!_mz.isOccupied[_mz.nearVehicleIndex][_cz.mySeat[sw0]]&&_cz.mySeat[sw0]<_mz.isOccupied[_mz.nearVehicleIndex].length){
				_mz.isOccupied[_mz.nearVehicleIndex][_cz.mySeat[sw0]]=true
				_mz.driveSeat[_mz.nearVehicleIndex][_cz.mySeat[sw0]].position.y=-_cz.height[sw0]*.5+.03+_mz.driveSeat[_mz.nearVehicleIndex][_cz.mySeat[sw0]].offset
				_mz.driveVehicleIndex[sw0]=_mz.nearVehicleIndex
			}else{
				$('#driveVehicle').fadeOut('slow')
				delete _lz.enteringVehicle
				return
			}
			_pz.vAct='Driving'
			if(sw0==_lz.index){
				s0='drive'
				$('#vehicleGear').fadeIn('slow')
				updateActivity('drivevehicle')
				showTouchControls(true)
				createTouchButton('softbuttonclick',_ez.bottomIcon?'bottomLeftThirdIcon':'actionRightIconB',{icon:'ti-shine',name:'headLight'},undefined,'icon','actoptional.gif',.12)
				if(lsRd('myCamera'+myUserID.uid)==null)_ez.cameraIndex=_cz.player.children.length-2
			}else setCarMaterial(sw0,true,_lz.vehicleSignal.light)
			if(_pz.vH1&&_cz.mySeat[sw0]==0)loadAudio('vehicle','startengine',1,false,true,_pz.vH1)
			if(_cz.mySeat[sw0]==0){
				startSoundCarEngine(_mz.driveVehicleIndex[sw0],true)
				setTimeout(function(){
					carEngineSound(sw0,0,true)
				},2400)
			}
			stopWalkSound()
		}
		_pz.dL0=900
		applyBrake(sw0,false)
	}else{
		if(_mz.driveVehicleIndex[sw0]!=null){
			applyBrake(sw0,true)
			/* USE THIS CODE WHEN PARKING CAR ON GARAGE */
			// _pz.cRV=_ez.scene.children[_mz.chassisMeshIndex[_mz.nearVehicleIndex]]
			// if(_pz.cRV!==undefined){
			// 	_lz.position.myCarState={
			// 		name:_pz.cRV.fileName.split('.')[0].replace('chassis',''),
			// 		color:setCarMaterial(_lz.index,false,'carbasecolor'),
			// 		position:_pz.cRV.position,
			// 		rotation:{x:_pz.cRV.rotation.x*180/Math.PI,y:_pz.cRV.rotation.y*180/Math.PI,z:_pz.cRV.rotation.z*180/Math.PI}
			// 	}
			// }
			/* USE THIS CODE WHEN PARKING CAR ON GARAGE */
			_mz.vehicleMotor[_mz.driveVehicleIndex[sw0]].gear=1
			if(sw0==_lz.index){
				checkRequired(true)
				s0='avatar'
				$('#vehicleGear').fadeOut('slow')
				updateActivity('exitvehicle')
				$('#stickRIGHT').fadeIn('slow')
				$('#stickLEFT').fadeIn('slow')
				_ez.lookElevation=0
				showGearLevel()
				$('#bottomLeftThirdIcon').html('')
				_lz.vehicleSignal.lightOn=undefined
				if(_ez.cameraIndex==_cz.player.children.length-1&&!_ez.enableGyro)_ez.cameraIndex=_cz.player.children.length-2
			}
			if(_cz.mySeat[sw0]==0){
				startSoundCarEngine(_mz.driveVehicleIndex[sw0],false)
				carEngineSound(sw0,0,false)
			}
			if(_pz.vH1&&_cz.mySeat[sw0]==0)loadAudio('vehicle','shutengine',1,false,true,_pz.vH1)
			setCarMaterial(sw0,false,_lz.vehicleSignal.light)
			_pz.vAct=randomString(_mz.standIdle)
			_mz.isOccupied[_mz.driveVehicleIndex[sw0]][_cz.mySeat[sw0]]=false
			try{
				_mz.meshesData[sw0].position.lerp(_mz.driveDoor[_mz.driveVehicleIndex[sw0]][_cz.mySeat[sw0]].getWorldPosition(_mz.meshesData[sw0].lerpVec),1)
			}catch(err){}
			_mz.driveVehicleIndex[sw0]=null
		}
		_pz.dL0=1200
	}
	_mz.meshesData[sw0].rotation.x=_mz.meshesData[sw0].rotation.z=0
	_pz.vE0=_cz.physics[sw0].velocity
	_ez.world.removeBody(_cz.physics[sw0])
	postBody(_cz.physics[sw0],false)
	_cz.physics[sw0]=getCapsule(_mz.meshesData[sw0].name,sw0,_cz.mass[sw0],_cz.height[sw0],_mz.meshesData[sw0].position.x,_mz.meshesData[sw0].position.y,_mz.meshesData[sw0].position.z)
	_cz.physics[sw0].fileName=_ez.scene.children[_mz.meshIndex[sw0]].fileName
	_cz.physics[sw0].velocity=_pz.vE0
	_ez.world.addBody(_cz.physics[sw0])
	postBody(_cz.physics[sw0],true)
	if(_ez.scene.children[_mz.meshIndex[sw0]])isDriveAnim(sw0,_pz.vAct,_pz.dL0)
	if(sw0==_lz.index){
		_cz.stickState=s0
		$('#stickcontrolballLEFT-image').attr('src','assets/images/'+s0+'stickcontrolballLEFT.png')
		$('#stickcontrolballRIGHT-image').attr('src','assets/images/'+s0+'stickcontrolballRIGHT.png')
		$('#sticksideLEFT-image').attr('src','assets/images/'+s0+'sticksideLEFT.png')
		$('#sticksideRIGHT-image').attr('src','assets/images/'+s0+'sticksideRIGHT.png')
		$('#sticktopLEFT-image').attr('src','assets/images/'+s0+'sticktopLEFT.png')
		$('#sticktopRIGHT-image').attr('src','assets/images/'+s0+'sticktopRIGHT.png')
		$('#driveVehicle').fadeOut('slow')
		if(!isMobile){
			if(c0){
				$('#topLeftNextAIconMENU').html('')
				$('#topLeftNextBIconMENU').html('')
			}else{
				createTouchButton('woodclick','topLeftNextAIconMENU',{icon:'ti-camera',name:'camera'},undefined,'icon')
				createTouchButton('bounceclick','topLeftNextBIconMENU',{icon:'ti-comment',name:'chat'},undefined,'icon')
			}
		}
		playAnimSounds('ambience',_lz.index)
		createCameras(false)
	}
	if(_pz.vH1)loadAudio('vehicle','cardoorclose',1,false,true,_pz.vH1)
	cameraCSM(_lz.cameraCSM)
	bottomActionButtons()
	if(_lz.index!=sw0&&!c0){
		setTimeout(function(){
			delete _lz.enteringVehicle
		},900)
	}else delete _lz.enteringVehicle
}
// Check if player is driving animation
function isDriveAnim(sw0,vAct,dL0,c0){
	if(_ez.cameraIndex!=1){
		_ez.scene.children[_mz.meshIndex[sw0]].visible=false
		setTimeout(function(){
			try{
				if(_ez.scene.children[_mz.meshIndex[sw0]].actName.includes(vAct)||c0){
					_ez.scene.children[_mz.meshIndex[sw0]].visible=true
				}else isDriveAnim(sw0,vAct,100,c0===undefined?false:true)
			}catch(err){}
		},dL0)
	}
	if(vAct!='none'){
		_ez.animation.previous[sw0]='none'
		loadFBXAnim(vAct+'.fbx',_ez.scene.children[_mz.meshIndex[sw0]],sw0,false,false)
	}
}
// Set avatar position
window.setAvatarPosition=function(index,t0){
	setTimeout(function(){
		_cz.physics[index].position.set(_lz.position.x,_lz.position.y,_lz.position.z)
	},t0)
}
// Set my position
window.setMyPosition=function(index,w80){
	setAvatarPosition(index,10)
	_mz.meshesData[index].quaternion.set(0,0,0,0)
	_cz.player.rotation.y=_mz.meshesData[index].rotation.y=Math.PI/180*_lz.position.o
	_cz.physics[index].velocity.y=0
	if(index==_lz.index){
		updateActivity('replay')
		_ez.camera.position.set(_lz.position.x,_lz.position.y+1,_lz.position.z)
		_ez.camera.zoom=1
		_ez.lookElevation=0
		_ez.camera.updateProjectionMatrix()
		if(_ez.resumeUpdateParameters===undefined){
			if(w80){
				function waitReposition(){
					setTimeout(function(){
						if($('#loadingBar').css('display')=='none'||$('#progressText').text()=='Moving...'||_mz.movingExpiry>9){
							reloadOrbitControls()
							$('#'+_ez.tCanvas.id+'-cont').fadeTo('slow',1)
							showProgress('100%','#3DCFFF','Arrived...',false)
							setAvatarPosition(index,10)
							$('#loadingBar').fadeOut('slow')
							if(!_cz.alive[_lz.index]){
								_lz.position.y+=_cz.height[_lz.index]
								_cz.alive[_lz.index]=true
								updateProximity(null)
								opSleep()
								_lz.mortality='wakeup'
								wakeMeUp()
								setTimeout(function(){setHealthStamina(['health'],20)},600)
							}else savePosition(_lz.index)
						}else waitReposition()
						_mz.movingExpiry++
					},w80)
				}
				_mz.movingExpiry=0
				showProgress('10%','#3DCFFF','Moving...',true)
				waitReposition()
			}
			_mz.loadMode=true
			updateModels(0,false)
		}
	}
}
// ==== DIALOGS ====
// Avatar urls
window.avatarURLS=function(){
	showDialog('userProfile.png',`You can paste your "Ready Player Me" avatar url here`,'opMyCharacter()','Back')
}
// ==== SOUNDS ====
// Start sound
window.startSounds=function(){
	if(!_ez.sound){
		_ez.sound=true
		playAnimSounds('ambience',_lz.index)
	}
}
// Assign object sound
window.objectSound=function(n){
	if(n!==undefined){
		for(_pz.os0=0;_pz.os0<_lz.parameters[n].x.length;_pz.os0++){
			_ez.objectSounds.push({loop:_lz.parameters[n].sl,hit:_lz.parameters[n].sh})
		}
	}
}
// Update audio
function updateAudio(){
	if(_ez.audioSources){
		if(_ez.audioIndex<_ez.audioSources.audio.length){
			try{
				_ez.scene.getObjectByName(_ez.audioSources.audio[_ez.audioIndex]).position.copy(_ez.scene.getObjectByName(_ez.audioSources.position[_ez.audioIndex]).position)
			}catch(err){
				_ez.scene.remove(_ez.scene.getObjectByName(_ez.audioSources.audio[_ez.audioIndex]))
				_ez.audioSources.audio=deleteArray(_ez.audioSources.audio,_ez.audioIndex)
				_ez.audioSources.position=deleteArray(_ez.audioSources.position,_ez.audioIndex)
			}
			_ez.audioIndex++
		}else _ez.audioIndex=0
	}
}
// Load audio
window.loadAudio=function(dR0,aS0,vO0,lO0,pL0,pO0){
	if(_mz.loaded==0){
		if(pL0){
			if(_ez.AudioLoader===undefined)_ez.AudioLoader=new THREE.AudioLoader()
			_ez.AudioLoader.load('assets/models/sounds/'+dR0+'/'+aS0+'.mp3',buffer=>{
				_pz.sound=_ez.scene.getObjectByName(aS0)
				if(_pz.sound===undefined){
					_pz.sound=new THREE.PositionalAudio(_ez.listener)
					_pz.sound.name=aS0
					_ez.scene.add(_pz.sound)
				}
				if(pO0===undefined)pO0=_ez.scene.children[_mz.meshIndex[_lz.index]].position
				if(pO0.name!==undefined){
					if(_ez.audioSources===undefined)_ez.audioSources={audio:[],position:[]}
					_ez.audioSources.audio.push(_pz.sound.name)
					if(pO0.name===undefined)pO0.name=pO0.uuid
					_ez.audioSources.position.push(pO0.name)
					_pz.sound.position.copy(pO0.position)
				}else _pz.sound.position.set(pO0.x,pO0.y,pO0.z)
				_pz.sound.setBuffer(buffer)
				_pz.sound.setLoop(lO0)
				try{
					_pz.sound.setVolume(vO0>1?1:vO0<0?0:vO0)
				}catch(err){}
				_pz.sound.setRefDistance(14)
				_pz.sound.pause()
				_pz.sound.play()
			})
		}else{
			_pz.sound=_ez.scene.getObjectByName(aS0)
			if(_pz.sound)_pz.sound.pause()
			_ez.scene.remove(_pz.sound)
		}
	}
}
// Stop walk sound
window.stopWalkSound=function(){
	loadAudio('animation','running',0,false,false)
	loadAudio('animation','walking',0,false,false)
	loadAudio('animation','jogging',0,false,false)
	loadAudio('animation','landing',0,false,false)
	loadAudio('animation','hitfloor',0,false,false)
	return true
}
// Play sound
var si,prevSi
window.playAnimSounds=function(actName,index){
	if(_ez.sound){
		_pz.vol=1.0
		_pz.l0=true
		if(si===undefined)actName='ambience'
		if(actName.match(/(FallingIdle)/)){
			if(si!='splash'&&_lz.water&&_mz.meshesData[index].position.y<.1){
				si='splash'
				_pz.l0=false
			}else{
				si='flying'
				_pz.vol=.15
			}
		}else if(_mz.playerHit.includes(actName.replace('.glb',''))||actName.match(/(Flip|wardJump)/)){
			si='hit'
			_pz.l0=false
		}else if(actName.match(/(TreadingWater|Swimming)/)){
			if(_ez.camera.position.y>0){
				si='abovewater'
			}else si='underwater'
		}else if(actName.match(/(FallingFlatImpact|Dying|DyingBackwards)/)){
			si='hitfloor'
			_pz.l0=false
		}else if(si!='landing'&&actName.match(/(FallingToLanding)/)){
			si='landing'
			_pz.l0=false
		}else if(actName.match(/(Flying|Falling)/)){
			si='flying'
		}else if(actName.match(/(Jog|Running)/)&&!actName.match(/(RunningFast|RunningBackward)/)){
			si='jogging'
		}else if(_ez.stick.stickLD[index]=='C'&&_ez.stick.stickRD[index]=='C'){
			if(prevSi!='none'&&prevSi!==undefined)loadAudio('animation',prevSi,0,false,false)
			prevSi=si='none'
		}else if(actName.match(/(Walking|WalkStrafe)/)){
			si='walking'
		}else if(actName.match(/(Running|Strafe)/)) si='running'
		if(_lz.index==index){
			if(actName=='ambience'){
				if(_ez.sunShadowParameters.elevation<180){
					prevSi='ambiencenight'
					si='ambienceday'
				}else{
					prevSi='ambienceday'
					si='ambiencenight'
				}
				if(_mz.driveVehicleIndex[index]!=null){
					prevSi=si
					si='carinterior'
				}else prevSi='carinterior'
			}
		}
		if(si!='none'&&prevSi!=si){
			if(prevSi!='none'&&prevSi!==undefined)loadAudio('animation',prevSi,0,false,false)
			if(si.match(/(walking|running|jogging)/))stopWalkSound()
			loadAudio('animation',si,(_ez.cameraIndex==0?.75:_ez.cameraIndex==1?1:_ez.cameraIndex==_cz.player.children.length-2?.5:.25)*_pz.vol,si.match(/(splash|hitfloor|landing)/)?false:_pz.l0,true,_ez.scene.children[_mz.meshIndex[index]])
			prevSi=si
		}
		if(actName=='ambience'||!_pz.l0)prevSi='none'
	}
	return actName
}
// ==== NODES ====
// Create node
function loadNodes(n){
	if(_lz.parameters[n].node.src[_ez.nodeMaterials.length].toLowerCase().match(/.gif/gi)){
		_pz.imgID=_lz.parameters[n].node.src[_ez.nodeMaterials.length].replace(/[ .]/g,'-')
		if(!_ez.loadedNodes.includes(_pz.imgID)){
			_ez.loadedNodes.push(_pz.imgID)
			$('#gif-cont').html('<span hidden><img rel:auto_play="1" rel:rubbable="1" id="'+_pz.imgID+'"/></span>')
			$('#'+_pz.imgID).attr({src:'assets/images/'+_lz.parameters[n].node.src[_ez.nodeMaterials.length]}).on('load',function(){
				_pz.supGif=new SuperGif({gif:document.getElementById(_pz.imgID)})
				_pz.supGif.load(function(){
					try{
						_pz.gifCanvas=_pz.supGif.get_canvas()
						_pz.nodeTexture=new THREE.Texture(_pz.gifCanvas)
						_pz.nodeTexture.index=_pz.imgID
						createNewNode(n)
					}catch(err){}
				})
			})
		}else createNewNode(n,_pz.imgID)
	}else _pz.nodeTexture=new THREE.TextureLoader().load('assets/images/'+_lz.parameters[n].node.src[_ez.nodeMaterials.length],function(){
		createNewNode(n)
	})
	isLoaded()
}
// Create tour node
function createNewNode(n,lM0){
	_pz.nI0=_ez.nodeMaterials.length
  if(lM0===undefined){
    _ez.nodeMaterials.push(new THREE.MeshStandardMaterial())
    if(_lz.parameters[n].node.map[_pz.nI0])_ez.nodeMaterials[_pz.nI0].map=_pz.nodeTexture
		_ez.nodeMaterials[_pz.nI0].textured=_lz.parameters[n].node.map[_pz.nI0]
    _ez.nodeMaterials[_pz.nI0].alphaMap=_pz.nodeTexture
    _ez.nodeMaterials[_pz.nI0].transparent=true
    _ez.nodeMaterials[_pz.nI0].name=_pz.imgID
  }else{
    for(j=0;j<_ez.nodeMaterials.length;j++){
      if(_ez.nodeMaterials[j].name==_pz.imgID){
        _ez.nodeMaterials[_pz.nI0]=_ez.nodeMaterials[j]
        continue
      }
    }
  }
	_ez.nodeMaterials[_pz.nI0].color.set(_lz.parameters[n].node.color[_pz.nI0])
  if(_lz.parameters[n].node.dSide[_pz.nI0])_ez.nodeMaterials[_pz.nI0].side=THREE.DoubleSide
  _pz.plane=new THREE.Mesh(new THREE.PlaneGeometry(_lz.parameters[n].node.w[_pz.nI0],_lz.parameters[n].node.h[_pz.nI0]),_ez.nodeMaterials[_pz.nI0])
  _pz.plane.position.set(_lz.parameters[n].node.x[_pz.nI0],_lz.parameters[n].node.y[_pz.nI0],_lz.parameters[n].node.z[_pz.nI0])
	_pz.plane.rotation.x=Math.PI/180*-((_lz.parameters[n].node.follows[_pz.nI0]?0:90)+_lz.parameters[n].node.po[_pz.nI0].x)
  _pz.plane.rotation.y=Math.PI/180*-_lz.parameters[n].node.po[_pz.nI0].y
	_pz.plane.select='node'
	_pz.plane.ds=_lz.parameters[n].ds
	_pz.plane.follows=_lz.parameters[n].node.follows[_pz.nI0]
	_pz.plane.message=_lz.parameters[n].node.message[_pz.nI0]
  _ez.scene.add(_pz.plane)
	if(_lz.parameters[n].node.src.length>_pz.nI0+1)loadNodes(n)
}
// Play gif image
window.updateMakers=function(nD0){
	if(nD0){
		for(_pz.gF0=0;_pz.gF0<_ez.scene.children.length;_pz.gF0++){
			if(_ez.scene.children[_pz.gF0].select=='node'){
				_ez.scene.children[_pz.gF0].visible=isInRange(_ez.scene.children[_pz.gF0].position,_ez.scene.children[_pz.gF0].ds)
				if(_ez.scene.children[_pz.gF0].follows)_ez.scene.children[_pz.gF0].rotation.y=Math.atan2(_cz.player.position.x-_ez.scene.children[_pz.gF0].position.x,_cz.player.position.z-_ez.scene.children[_pz.gF0].position.z)
			}
		}
	}else{
		for(_pz.gF0=0;_pz.gF0<_ez.nodeMaterials.length;_pz.gF0++){
			if(_ez.nodeMaterials[_pz.gF0].textured)_ez.nodeMaterials[_pz.gF0].map.needsUpdate=true
			_ez.nodeMaterials[_pz.gF0].alphaMap.needsUpdate=true
		}
	}
}
// ==== SYSTEM ====
// Leave level
window.leaveLevel=function(){
	if(myUserID.authentication=='anonymous'&&!meAndF){
		myUserID.authentication='delete'
		deleteAccount()
		_pz.lV0=1200
	}else _pz.lV0=900
	savePosition(_lz.index)
	updateActivity('leave')
	if(isOnL())onEr(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'/'+myUserID.uid)
	setTimeout(function(){history.back()},_pz.lV0)
}
// Show cors error
window.onCorsError=function(err){
	if(!err){
		showDialog('gltf.png',`Unable to load assets, because it's blocked by CORS policy`,'','Dimiss')
	}else if(oRyt('true',err))return
}
// Save position
window.savePosition=function(sVI){
	if(!isPlayerFalling(_lz.index,-1)&&(isAboveWater(sVI,-.3)&&_cz.onfloor[sVI]||!_lz.water)){
		_pz.sVP=_ez.scene.children[_mz.meshIndex[sVI]].position
		if(_lz.position.myCarState){
			_pz.sVP.myCarState=_lz.position.myCarState
		}else if(_mz.driveVehicleIndex[_lz.index]!=null){
			_pz.oF0=getObjectPosition(_ez.scene.children[_mz.meshIndex[sVI]],-3.2)
			_pz.sVP.x=_pz.oF0.x
			_pz.sVP.y=_pz.sVP.y+.5
			_pz.sVP.z=_pz.oF0.z
			try{
				_pz.cRV=_ez.scene.children[_mz.chassisMeshIndex[_mz.nearVehicleIndex]]
				if(_pz.cRV.indexes){
					for(_pz.cI0=0;_pz.cI0<_pz.cRV.indexes.length;_pz.cI0++){
						_ez.archive[_pz.cRV.indexes[_pz.cI0]].position=_pz.cRV.position
						_ez.archive[_pz.cRV.indexes[_pz.cI0]].position.o={x:_pz.cRV.rotation.x*180/Math.PI,y:_pz.cRV.rotation.y*180/Math.PI,z:_pz.cRV.rotation.z*180/Math.PI}
					}
				}
			}catch(err){}
		}
		_pz.sVP.o=_ez.scene.children[_mz.meshIndex[sVI]].rotation.y*180/Math.PI
		_pz.sVP.sky=_ez.sunShadowParameters
		if(_lz.zone)_pz.sVP.zone=_lz.zone
		lsSv('leavePosition'+myUserID.uid+_lz.levelName,JSON.stringify(_pz.sVP))
		if(_lz.updateModels)lsSv('reload'+myUserID.uid+_lz.levelName,
			meAndF?
			JSON.stringify({
				mortality:_lz.mortality,
				health:$('#healthFill').css('width'),
				stamina:$('#staminaFill').css('width'),
				rules:JSON.stringify(_lz.gameRules),
			})
			:
			JSON.stringify({
				mortality:_lz.mortality,
				health:$('#healthFill').css('width'),
				stamina:$('#staminaFill').css('width'),
				parameters:meAndF?'none':JSON.stringify(_lz.parameters),
				archived:meAndF?'none':JSON.stringify(_ez.archive).replace(/"loaded":true/g,'"loaded":null'),
				rules:JSON.stringify(_lz.gameRules),
				activity:JSON.stringify(_ez.objectActivity)
			})
		)
	}
	sVI=undefined
}
// ==== Android ====
// Leave level
window.exApp=function(c0){
	if($('#dialogWindow').css('display')!='none'){
		closeDialog(null,false)
	}else opBackOUT()
}
// Grant ads reward
window.grantAdsReward=function(reward){
	if(reward=='earned'){
		if(_lz.gameRules.process.reward=='nowaiting'){
			setTimeout(function(){
				completeAction(_lz.gameRules.process.type)
			},900)
		}
		if(_lz.gameRules.process.reward=='testdrive'){
			setTimeout(function(){
				switchDriving(_lz.index,true)
			},900)
		}
		if(_lz.gameRules.process.reward=='revive'){
			setTimeout(function(){
				reviveMe()
			},900)
		}
	}
	if(reward=='ready')_lz.gameRules.rewardAds=reward
}
// Show ads
window.requestRewardedAds=function(t0){
	showIndicators()
	if(_lz.gameRules.process.reward=='nowaiting'){
		showDialog('noWait.png',`The `+_lz.gameRules.process.name+` `+_lz.gameRules.process.request+` will take a while, <strong>watch video ads</strong> while `+_lz.gameRules.process.request+` is being `+_lz.gameRules.process.action+`ed...`,
		`if(meAndF){
			AppInterface.showAwardAds()
			goURL('#serve')
		}`,'Watch Video Ads',null,null,t0)
		$('#noWaiting').fadeOut('slow')
	}
	if(_lz.gameRules.process.reward=='testdrive'){
		showDialog('carkey.png',`<strong>Watch video ads</strong> to test drive this vehicle`,
		`if(meAndF){
			AppInterface.showAwardAds()
			goURL('#serve')
		}`,'Watch Video Ads',null,null,t0)
	}
	if(_lz.gameRules.process.reward=='revive'){
		showDialog('injection.png',`<strong>Watch video ads</strong> to revive avatar to life`,
		`if(meAndF){
			_ez.objectActivity[_lz.gameRules.testDriveIndex].activity.amountRange=['0-0']
			AppInterface.showAwardAds()
			goURL('#serve')
		}`,'Watch Video Ads',null,null,t0)
	}
}
// ==== END OF ENGINE ====
