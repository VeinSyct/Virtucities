/* ==== Main interface ==== */
//Load main user interface
function loadMainUI(levels){
  getOrientation()
  loadStyle('assets/css/themify-icons.min.css','head')
  $('#engine-container').html(`
    <span hidden id="fullview-cont"></span>
    <div hidden class="mobileframe" id="mobileframe"></div>
    <span id="app-cont">
    	<div id="speed"></div>
    	<div id="status"></div>
    	<div class="appWindow" id="app">
      	<div hidden class="webcam-frame" id="webcam-frame"></div>
      	<div hidden class="world" id="`+'three-canvas'+`-cont"></div>
      	<div hidden id="signIn"></div>
      	<img hidden src="assets/images/welcome.png" onerror="$('#welcome').hide()" style="opacity:.96" id="welcome"/>
      	<div hidden class="progressBar" id="loadingBar">
      		<div class="progressFill" id="loadingFill">
      		  <div class="progressText" id="progressText"></div>
      		</div>
      	</div>
        <div hidden class="topLeftIcon" id="desktopTopLeftIcon"></div>
        <div hidden class="topRightIcon" id="loadingTopRightIcon"></div>
        <div hidden id="dialogWindow">
          <div class="container" style="z-index:1">
            <div class="dialogcontainer">
              <div class="dialogbox dialogBack">
                <div id="closeDialog">
                  <img
                    src="assets/images/closeDialog.png"
                    ontouchstart="closeDialog(this,true)"
                    ontouchend="closeDialog(this,false)"
                    onmousedown="if(!isMobile)closeDialog(this,true)"
                    onmouseup="if(!isMobile)closeDialog(this,false)"
                    style="opacity:.86;cursor:pointer"/>
                </div>
                <div>
                  <img style="margin-left:9px;opacity:.86" onerror="$(this).hide()" id="dialogIcon"/>
                  <p class="dialogMessage" id="dialogMessage"></p>
                </div>
                <div class="buttonContainer">
                  <span id="dialogButtonA"></span>
                  <span id="dialogButtonB"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div hidden style="position:absolute" id="loudICON"></div>
        <span hidden class="centerMessage" id="centerMessage"></span>
        <div hidden style="position:absolute" id="screenTarget">
          <img src="assets/images/screentarget.png" style="height:36px"/>
        </div>
        <div hidden class="snapCont" id="snapCont"></div>
        <span id="worldControls">
          <div hidden id="noVRICON">
            <div class="topLeftIcon" id="topLeftIconVR"></div>
            <div class="topRightIcon" id="topRightIconVR"></div>
          </div>
          <div class="actionLeftIconB" id="actionLeftIconB"></div>
          <div class="actionLeftIconA" id="actionLeftIconA"></div>
          <div class="actionRightIconB" id="actionRightIconB"></div>
          <div class="actionRightIconA" id="actionRightIconA"></div>
          <div hidden id="optionWindow">
            <div class="container">
              <div class="topLeftIcon" id="topLeftIconOPT"></div>
              <div hidden id="avatarLibrary"></div>
              <div hidden id="contactWindow">
                <div class="dialogcontainer">
                  <div class="dialogbox" style="overflow-y:scroll;max-height:52vh" id="contactList"></div>
                  <div id="contactChat"></div>
                </div>
              </div>
              <div hidden id="userIDWindow"></div>
            </div>
          </div>
          <div hidden id="contactICON">
            <div class="topRightNextAIcon" id="topRightNextAIconCON"></div>
            <div class="topRightNextBIcon" id="topRightNextBIconCON"></div>
            <div class="topRightNextCIcon" id="topRightNextCIconCON"></div>
            <div class="topRightNextDIcon" id="topRightNextDIconCON"></div>
            <div class="topRightNextEIcon" id="topRightNextEIconCON"></div>
            <div class="topRightIcon" id="topRightIconCON"></div>
            <span hidden id="aiWorkers"></span>
          </div>
          <div hidden id="touchControls">
            <div id="calCulus"></div>
            <!-- INDICATOR -->
            <span id="vitalIndicators">`+loadVitalIndiocators()+`</span>
            <!-- FINANCE -->
            <div hidden class="topLeftSecondIcon" id="walletICON"></div>
            <div hidden class="topRightIcon" id="tradingICON"></div>
            <!-- LEFT -->`+
            (levels[0].dynamicJoy?'':
            `<span hidden id="mobileControlLEFT">
              <div class="stickBack" style="left:2px">
                <img src="assets/images/stickcontrolbackLEFT.png" />
              </div>
              <div class="stickBase" style="left:5px">
                <img src="assets/images/stickcontrolbase.png" />
                <div class="stickLEFT" id="stickLEFT"></div>
              </div>
              <div class="stickEdge" style="left:11px" id="stickEdgeLBASE"></div>
              <div class="stickTop" style="left:34px" id="stickTopLBASE"></div>
              <div class="stickSide" style="left:93px" id="stickSideLBASE"></div>
            </span>`)+
            `<!-- LEFT OPTIONS -->
            <div hidden id="menuOption">
              <div class="topLeftIcon" id="topLeftIconMENU"></div>
              <div class="topLeftNextAIcon" id="topLeftNextAIconMENU"></div>
              <div class="topLeftNextBIcon" id="topLeftNextBIconMENU"></div>
              <div class="topRightIcon" id="topRightIconMENU"></div>
              <div class="topRightNextAIcon" id="topRightNextAIconMENU"></div>
              <div class="topRightNextBIcon" id="topRightNextBIconMENU"></div>
              <div class="topRightNextCIcon" id="topRightNextCIconMENU"></div>
              <div class="topRightNextDIcon" id="topRightNextDIconMENU"></div>
              <div class="topRightNextEIcon" id="topRightNextEIconMENU"></div>
            </div>
            <!-- CAMERA OPTIONS -->
            <div hidden id="cameraOption">
              <div hidden class="topRightNextCIcon" id="goVRICON"></div>
              <div class="topRightNextASecondIcon" id="topRightNextASecondIcon"></div>
              <div class="topRightNextBIcon" id="topRightNextBIcon"></div>
              <div class="topRightIcon" id="topRightIconCAM"></div>
              <div class="topRightSecondIcon" id="topRightSecondIconCAM"></div>
              <div class="topRightNextAIcon" id="topRightNextAIconCAM"></div>
              <div class="topRightNextSecondIcon" id="topRightNextSecondIconCAM"></div>
              <div class="topLeftNextAIcon" id="topLeftNextAIconCAM"></div>
              <div class="topLeftNextSecondIcon" id="topLeftNextSecondIconCAM"></div>
              <div class="topLeftIcon" id="topLeftIconCAM"></div>
              <div class="topLeftSecondIcon" id="topLeftSecondIconCAM"></div>
            </div>
            <!-- RIGHT -->`+
            (levels[0].dynamicJoy?'':
            `<span hidden id="mobileControlRIGHT">
              <div class="stickBack" style="right:2px">
                <img src="assets/images/stickcontrolbackRIGHT.png" />
              </div>
              <div class="stickBase" style="right:5px">
                <img src="assets/images/stickcontrolbase.png" />
                <div class="stickRIGHT" id="stickRIGHT"></div>
              </div>
              <div class="stickEdge" style="right:11px" id="stickEdgeRBASE"></div>
              <div class="stickTop" style="right:34px" id="stickTopRBASE"></div>
              <div class="stickSide" style="right:93px" id="stickSideRBASE"></div>
            </span>`)+
            `<!-- BOTTOM ACTIONS -->
            <div id="bottomActions">
              <div class="bottomLeftIcon" id="bottomLeftIcon"></div>
              <div class="bottomLeftNextAIcon" id="bottomLeftNextAIcon"></div>
              <div class="bottomLeftSecondIcon" id="bottomLeftSecondIcon"></div>
              <div class="bottomLeftThirdIcon" id="bottomLeftThirdIcon"></div>
              <div class="bottomRightIcon" id="bottomRightIcon"></div>
              <div class="bottomRightNextAIcon" id="bottomRightNextAIcon"></div>
              <div class="bottomRightSecondIcon" id="bottomRightSecondIcon"></div>
              <div class="bottomRightThirdIcon" id="bottomRightThirdIcon"></div>
            </div>
            <canvas hidden id="carEngineSound"></canvas>
            <span hidden id="gif-cont"></span>
            <span id="dynamic-joystick"></span>
            <span class="pins" id="pins"></span>
			<span class="shoutouts">
				<span onclick="noClickCanvas();$(this).fadeOut('slow');$('#shoutouts-messages').fadeOut('slow')"
					hidden style="margin-top:-24px;font-size:21px;cursor:pointer;z-index:1"
					id="shoutouts-messages-close">✖</span>
				<span class="dialogbox dialogBack" id="shoutouts-messages" hidden></span>
				<div>
					<div class="dialogbox dialogBack" onclick="showShoutOuts({})">
						<input type="text" ontouchend="$(this).focus()"
							onmouseup="if(!isMobile)$(this).focus()"
							onfocus="_mz.shoutoutsSelected=true"
							onblur="delete _mz.shoutoutsSelected"
							onkeyup="if(event.keyCode===13){sendShoutouts({message:this.value})}"
							placeholder="Message here..." id="shoutouts-input"/>
						<span class="notifyDot" style="top:4px;right:4px" id="shoutouts-dot" hidden></span>
					</div>
				</div>
			</span>
          </div>
        </span>
    	</div>
    </span>`)
}
// Load vital indicator
function loadVitalIndiocators(cl){
	return`
	<div class="`+cl+`" id="indicatorBars">
		<div>
      <i class="ti-pulse"></i>
			<span class="healthBar" id="healthBar">
			<div class="healthFill" id="healthFill"></div>
			</span>
		</div>
		<div>
      <i class="ti-bolt"></i>
			<span class="staminaBar" id="staminaBar">
			<div class="staminaFill" id="staminaFill"></div>
			</span>
		</div>
	</div>`
}
// ==== GAME UI ====
// Load my custom object
function opLoadAsset(){
	setTimeout(function(){
		if(myUserID.name!='Noname'){
			if(_mz.myUploadGallery===undefined){
				_mz.myUploadGallery=`<div>
						<div class="profileFrame">
							<label class="dialogbox imageBack" style="overflow:hidden">
								<img class="profileImage"
								src="assets/images/upload.png" style="margin-right:10px"/>
								<input hidden type="file" multiple value="upload" accept=".gltf,.glb,.fbx"
								onChange="flMxSz=isMobile?2048*1024:8192*1024;cmprsF=true;uploadAssets('upMPs','upMGa',this.files)"/>
							</label>
						</div>
						<div class="avatarframe" style="display:none" id="upMGa"></div>
						<div hidden class="dialogbox" style="max-height:14vh" id="upMPs"></div>
					</div>`
				setTimeout(function(){
					upKey=_ez.engineName.toLowerCase()+'/assets/'+myUserID.uid+'/'
					if($('#upMGa').html()=='')upDisp('upMPs','upMGa',isMobile?'96px':'128px',true)
				},600)
			}showDialog(null,_mz.myUploadGallery,'','Close')
		}else showDialog('gltf.png','You do not have a profile to load your custom models. Do you wish to create your profile?','opUserID()','Create')
	},1000)
	hideOpTm=0
}
// Open user id
function opUserID(){
	setTimeout(function(){
		showTouchControls(false)
		if($('#userIDWindow').html()=='')$('#userIDWindow').html(`
			<div class="dialogcontainer">
				<span style="text-align:center;font-size:24px">My Profile</span>
				<div class="dialogbox dialogBack" style="overflow:hidden;padding-right:10px">
					<div class="profileFrame">
						<label class="dialogbox imageBack" style="overflow:hidden">
							<img class="profileImage"
							src="assets/images/userProfile.png"
							onerror="$(this).attr('src','assets/images/userProfile.png')"
							style="margin-right:10px" id="profileImage"/>
							<input hidden type="file" multiple value="upload" accept="image/*"
							onChange="flMxSz=2048*1024;cmprsF=false;uploadAssets('upPPs','upPGa',this.files)"/>
						</label>
					</div>
					<div class="avatarframe" style="display:none" id="upPGa"></div>
					<div hidden class="dialogbox" style="max-height:14vh" id="upPPs"></div>
					<div class="dialogbox dialogText" style="overflow:hidden">
						<input class="linkInput" type="text"
						ontouchend="$(this).focus()"
						onmouseup="if(!isMobile)$(this).focus()"
						onkeyup="if(event.keyCode===13)saveUserID()"
						placeholder="Player..."
						id="userName"/>
					</div>
					<span style="display:flex;justify-content:center">
						<div class="dialogbox dialogButton"
						onclick="saveUserID()"
						style="width:96px">
							<div class="buttonContainer">
								<span>Save <img src="assets/images/avatarLoad.png"/></span>
							</div>
						</div>
					</span>
				</div>
			</div>`)
		upKey=getConstant('engine').toLowerCase()+'/profile/'+myUserID.uid+'/'
		if($('#upPGa').html()=='')upDisp('upPPs','upPGa',isMobile?'96px':'128px',true)
		$('#desktopTopLeftIcon').fadeOut('slow')
		$('#userIDWindow').show()
		$('#optionWindow').fadeIn('slow')
		if(myUserID.name!='Noname')$('#userName').val(myUserID.name)
		setTimeout(function(){$('#userName').focus()},100)
		try{
			if(myUserID.profile!=null)$('#profileImage').attr('src',myUserID.profile)
		}catch(err){}
		$('#signIn').html('')
	},1000)
	hideOpTm=0
}
// My wallet
function opTransferTo(){
	setTimeout(function(){
		isMyContacts(JSON.stringify(_oz.myContacts),'uid')
		if(_oz.myContacts.uid.length>0){
			showTouchControls(false)
			_pz.ac0=''
			for(_pz.iI5=0;_pz.iI5<_oz.myContacts.uid.length;_pz.iI5++){
				if(_oz.myContacts.uid[_pz.iI5]!=null){
					_pz.pSC0=orientation==90?_lz.pageScale.landscape:_lz.pageScale.portrait
					_pz.ac0+=`<div class="dialogbox"
							ontouchend="$('#AmountFrame`+_oz.myContacts.uid[_pz.iI5]+`').fadeIn('slow')"
							onmouseup="if(!isMobile)$('#AmountFrame`+_oz.myContacts.uid[_pz.iI5]+`').fadeIn('slow')"
							style="margin:6px;width:`+(60/_pz.pSC0)+`vw">
							<div style="display:flex">
								<img class="contactProfileImage" src="assets/models/players/`+_oz.myContacts.data[_pz.iI5].model.replace('.glb','')+`.jpg"
								onerror="$(this).attr('src','assets/models/players/noprofile.jpg');lsEr('profile`+_oz.myContacts.uid[_pz.iI5]+`')"/>
								<div hidden class="dialogbox" style="overflow:hidden" id="AmountFrame`+_oz.myContacts.uid[_pz.iI5]+`">
									<input class="linkInput" type="text"
									ontouchend="$(this).focus()"
									onmouseup="if(!isMobile)$(this).focus()"
									onkeyup="if(event.keyCode===13)transferCredit()"
									placeholder="0.00" style="font-size:22px"
									id="AmountIn`+_oz.myContacts.uid[_pz.iI5]+`"/>
								</div>
							</div>
							<span>`+_oz.myContacts.data[_pz.iI5].name+`</span>
						</div>`
				}
			}
			showDialog('transfer.png',
			`<span style="position:absolute;margin-left:86px;margin-top:-50px;font-size:30px">υς`+$('#walletAmount').text()+`</span><br>
			<div style="margin-top:-18px;max-height:22vh;overflow-y:scroll" id="accountList">`+_pz.ac0+`</div>`,
			'transferCredit()','Transfer')
		}else showDialog('transfer.png',`You don't have a contact to transfer credits to`,'','Dismiss')
	},1000)
	hideOpTm=0
}
// My Portfolio
function opMyPortfolio(){
	setTimeout(function(){
		showTouchControls(false)
		_pz.totalIncome=_pz.totalExpenses=0
		// SALARY
		if(_lz.gameRules.work){
			_pz.xRK=`
			setTimeout(function(){
				loadAudio('game','complete',1,false,true)
				showDialog('job.png','Do you want to leave your <strong>'+_lz.gameRules.work.name+'</strong> work?','loadAudio(\\'game\\',\\'achievementhappybeeps\\',1,false,true);_lz.gameRules.work=undefined','Sign Resignation')
			},1200)`
			_pz.wRK=`
				<br>SALARY
				<div class="avatarframe dialogText">
					<div class="dialogbox" style="background-color:#1BAFFF">`+_lz.gameRules.work.name.toUpperCase()+` for `+_lz.gameRules.work.type+`</div>
					<div >Monthly Pay:<div class="dialogbox" style="background-color:#00c04b">υς`+iCommas(_lz.gameRules.work.salary.toFixed(2))+`</div></div>
					<div class="dialogbox dialogButton"
					ontouchend="closeDialog(null,false);loadAudio('interface','woodclick',1,false,true);`+_pz.xRK+`"
					onmouseup="if(!isMobile){closeDialog(null,false);`+_pz.xRK+`}" style="width:100%">
						<div class="buttonContainer">Resign</div>
					</div>
				</div>`
			_pz.totalIncome+=_lz.gameRules.work.salary
		}else _pz.wRK=''
		// ASSETS
		if(_lz.gameRules.deal!==undefined&&_lz.gameRules.deal.length>0){
			_pz.dLS=`
				<br>ASSETS
				<div class="avatarframe dialogText">`
			for(_pz.dL0=0;_pz.dL0<_lz.gameRules.deal.length;_pz.dL0++){
				_pz.sO0=_lz.gameRules.deal[_pz.dL0].total*_lz.gameRules.deal[_pz.dL0].share/100
				_pz.xLS=`setTimeout(function(){
						loadAudio('game','complete',1,false,true)
						showDialog('payment.png','Do you want to sell your <strong>υς`+iCommas(_pz.sO0.toFixed(2))+`</strong> `+_lz.gameRules.deal[_pz.dL0].share+`% share?','loadAudio(\\'game\\',\\'achievementhappybeeps\\',1,false,true);_lz.gameRules.sellOutAmount+=`+_pz.sO0+`;_lz.gameRules.deal=deleteArray(_lz.gameRules.deal,`+_pz.dL0+`)','Sell')
					},1200)`
				_pz.dLS+=`
					<div class="dialogbox" style="background-color:#1BAFFF">
						<div>Title: <strong>`+_lz.gameRules.deal[_pz.dL0].name.toUpperCase()+` DEAL</strong></div>
						<div>Dividen: <strong>υς`+iCommas((_lz.gameRules.deal[_pz.dL0].amount*_lz.gameRules.deal[_pz.dL0].rOI/100).toFixed(2))+`</strong></div>
						<div>Investment: υς`+iCommas(_lz.gameRules.deal[_pz.dL0].investment.toFixed(2))+`</div>
						<div>Share: `+_lz.gameRules.deal[_pz.dL0].share+`%</div>
						<div>Owner: `+_lz.gameRules.deal[_pz.dL0].type.toUpperCase()+`</div>
						<div>Worth: υς`+iCommas(_lz.gameRules.deal[_pz.dL0].total.toFixed(2))+`</div>
						<div>ROI Rate: `+_lz.gameRules.deal[_pz.dL0].rOI+`%</div>
						<div class="dialogbox dialogButton"
						ontouchend="closeDialog(null,false);loadAudio('interface','woodclick',1,false,true);`+_pz.xLS+`"
						onmouseup="if(!isMobile){closeDialog(null,false);`+_pz.xLS+`}">
							<div class="buttonContainer">Sell Share</div>
						</div>
					</div>`
				_pz.totalIncome+=_lz.gameRules.deal[_pz.dL0].amount*_lz.gameRules.deal[_pz.dL0].rOI/100
			}
			_pz.dLS+=`</div>`
		}else _pz.dLS=''
		// LIABILITIES
		if(_lz.gameRules.liabilities!==undefined&&_lz.gameRules.liabilities.length>0){
			_pz.lIA=`
				<br>LIABILITIES<br><hr>
				BILLS
				<div class="avatarframe dialogText">`
			for(_pz.lI0=0;_pz.lI0<_lz.gameRules.liabilities.length;_pz.lI0++){
				if(_lz.gameRules.liabilities[_pz.lI0]!=null&&_lz.gameRules.liabilities[_pz.lI0].amount>0){
					_pz.pA0=_lz.gameRules.liabilities[_pz.lI0].amount*_lz.gameRules.liabilities[_pz.lI0].duration
					_pz.xIA=`setTimeout(function(){
							loadAudio('game','complete',1,false,true)
							showDialog('nopayment.png','Do you want to terminate the <strong>`+_lz.gameRules.liabilities[_pz.lI0].type+`</strong>, please pay <strong>υς`+iCommas(_pz.pA0.toFixed(2))+`</strong> settlement?','loadAudio(\\'game\\',\\'achievementhappybeeps\\',1,false,true);_lz.gameRules.payOutAmount+=`+_pz.pA0+`;_lz.gameRules.liabilities=deleteArray(_lz.gameRules.liabilities,`+_pz.lI0+`)','Settle')
						},1200)`
					_pz.lIA+=`
						<div class="dialogbox" style="background-color:#FF3FB9">
							<div><strong>`+_lz.gameRules.liabilities[_pz.lI0].type+`</strong></div>
							<div>Duration: `+_lz.gameRules.liabilities[_pz.lI0].duration+` months</div>
							<div>Fee: <strong>υς`+iCommas(_lz.gameRules.liabilities[_pz.lI0].amount.toFixed(2))+`</strong></div>
							<div class="dialogbox dialogButton"
							ontouchend="closeDialog(null,false);loadAudio('interface','woodclick',1,false,true);`+_pz.xIA+`"
							onmouseup="if(!isMobile){closeDialog(null,false);`+_pz.xIA+`}">
								<div class="buttonContainer">Terminate</div>
							</div>
						</div>`
					_pz.totalExpenses+=_lz.gameRules.liabilities[_pz.lI0].amount
				}
			}
			_pz.lIA+=`</div>`
		}else _pz.lIA=''
		// DEBT
		if(_lz.gameRules.debt!==undefined&&_lz.gameRules.debt.length>0){
			_pz.dBT=`
				<br>DEBT
				<div class="avatarframe dialogText">`
			for(_pz.dB0=0;_pz.dB0<_lz.gameRules.debt.length;_pz.dB0++){
				if(_lz.gameRules.debt[_pz.dB0].amount>0){
					_pz.pA0=_lz.gameRules.debt[_pz.dB0].amount*_lz.gameRules.debt[_pz.dB0].duration
					_pz.xBT=`setTimeout(function(){
							loadAudio('game','complete',1,false,true)
							showDialog('nopayment.png','Do you want to payout the  <strong>υς`+iCommas(_pz.pA0.toFixed(2))+`</strong> `+_lz.gameRules.debt[_pz.dB0].purpose+` debt?','loadAudio(\\'game\\',\\'achievementhappybeeps\\',1,false,true);_lz.gameRules.payOutAmount+=`+_pz.pA0+`;_lz.gameRules.debt=deleteArray(_lz.gameRules.debt,`+_pz.dB0+`)','Payout')
						},1200)`
					_pz.dBT+=`
						<div class="dialogbox" style="background-color:#151716">
							<div><strong>`+_lz.gameRules.debt[_pz.dB0].purpose.toUpperCase()+` LOAN</strong></div>
							<div>Amortization: <strong>υς`+iCommas(_lz.gameRules.debt[_pz.dB0].amount)+`</strong></div>
							<div>Interest: `+_lz.gameRules.debt[_pz.dB0].interest+`%</div>
							<div>Duration: `+_lz.gameRules.debt[_pz.dB0].duration+` months</div>
							<div>Lender: <strong>`+_lz.gameRules.debt[_pz.dB0].lender.toUpperCase()+` DEAL</strong></div>
							<div>Pricipal: υς`+iCommas(_lz.gameRules.debt[_pz.dB0].principal.toFixed(2))+`</div>
							<div class="dialogbox dialogButton"
							ontouchend="closeDialog(null,false);loadAudio('interface','woodclick',1,false,true);`+_pz.xBT+`"
							onmouseup="if(!isMobile){closeDialog(null,false);`+_pz.xBT+`}">
								<div class="buttonContainer">Payout</div>
							</div>
						</div>`
					_pz.totalExpenses+=parseFloat(_lz.gameRules.debt[_pz.dB0].amount)
				}
			}
			_pz.dBT+=`</div>`
		}else _pz.dBT=''
		// BANK ACCOUNT
		_pz.pF0=`
			<br>PORFOLIO
			<div class="avatarframe dialogText">
				<div>Income:<div class="dialogbox" style="background-color:#00c04b">υς`+iCommas(_pz.totalIncome.toFixed(2))+`</div></div>
				<div>Expenses:<div class="dialogbox" style="background-color:#FF3FB9">υς`+iCommas(_pz.totalExpenses.toFixed(2))+`</div></div>
			</div>
			<br>BANK ACCOUNTS
			<div class="avatarframe dialogText">
				<div>Cash:<div class="dialogbox" style="background-color:#1BAFFF">υς`+$('#walletAmount').html()+`</div></div>
				<div>Saving:<div class="dialogbox" style="background-color:#00c04b">υς`+iCommas(parseFloat(_lz.gameRules.bankAccount.savings).toFixed(2))+`</div></div>
			</div>
			`+_pz.wRK+`
			`+_pz.dLS+`
			`+_pz.lIA+`
			`+_pz.dBT+`<br>`
		showDialog('portfolio.png',_pz.pF0,`lsSv('portfolio'+myUserID.uid+_lz.levelName,'done')`,lsRd('portfolio'+myUserID.uid+_lz.levelName)==null?'Understood':'Dismiss')
	},1000)
	hideOpTm=0
}
// ==== UI EXTENDED OPERATIONS ====
// Load avatar list
function loadAvatarList(){
	oA0=onlineAvatars()
	if(oA0.length>0){
		oD0=`<span style="text-align:center;font-size:16px">Or</span>
		<div `+(orientation==90?'style="display:flex;justify-content:center"':'')+`>
			<div class="dialogbox dialogText" style="overflow:hidden">
				<img src="assets/images/avatarLink.png"
				ontouchend="avatarURLS()"
				onmouseup="if(!isMobile)avatarURLS()"
				style="position:absolute"/>
				<div style="padding-left:24px">
					<input class="linkInput" type="text"
					onkeyup="if(event.keyCode===13)loadMyAvatar('online')"
					placeholder="paste your avatar url here..."
					id="avatarLink"/>
				</div>
			</div>
			<div style="display:flex;justify-content:center">
				<div class="dialogbox dialogButton"
				ontouchend="loadMyAvatar('online')"
				onmouseup="if(!isMobile)loadMyAvatar('online')"
				style="width:96px">
					<div class="buttonContainer">
						<span>Load <img src="assets/images/avatarLoad.png"/></span>
					</div>
				</div>
			</div>
		</div>`
	}else oD0=''
	if($('#avatarLibrary').html()==''){
		$('#avatarLibrary').html(`<div class="dialogcontainer">
			<span style="text-align:center;font-size:24px">Chose Your Avatar</span>
			<div class="avatarframe dialogBack" style="max-height:`+(orientation==90?14*_lz.pageScale.landscape:'40')+`vh" id="avatarList"></div>
			`+oD0+`
		</div>`)
	}
	if($('#avatarList').html()==''){
		_pz.aN0=oA0.concat(allAvatars())
		for(_pz.iI4=0;_pz.iI4<_pz.aN0.length;_pz.iI4++){
			if((_pz.aN0[_pz.iI4].url&&isOnL())||_pz.aN0[_pz.iI4].url===undefined){
				$('#avatarList').html($('#avatarList').html()
				+'<img class="avatarimage"'
				+'src="assets/models/players/'+_pz.aN0[_pz.iI4].name+'.jpg"'
				+`onerror="$(this).attr('src','assets/models/players/noprofile.jpg')"`
				+`onclick="loadMyAvatar(`+(_pz.aN0[_pz.iI4].url?(`'online','`+_pz.aN0[_pz.iI4].url+`'`):_lz.avatars.length+_pz.iI4-_pz.aN0.length)+`)"`
				+`style="height:`+(orientation==90?'12vw':'20vw')+`;max-height:96px"/>`)
			}
		}
	}
	setTimeout(function(){
		$('#desktopTopLeftIcon').fadeOut('slow')
	},900)
}
// Confirm load avatar
function confirmLoadMyAvatar(iI4){
	_pz.aN0=onlineAvatars().concat(allAvatars())
	f0='opMyCharacter()'
	f1=`loadMyAvatar(`+(_pz.aN0[iI4].url?(`'online','`+_pz.aN0[iI4].url+`'`):_lz.avatars.length+iI4-_pz.aN0.length)+`)`
	showDialog(null,
		`<div class="dialogcontainer">
			<div class="profileFrame">
				<img class="profileImage"
				src="assets/models/players/`+_pz.aN0[iI4].name+`.jpg"
				onerror="$(this).attr('src','assets/images/userProfile.png')"
				style="margin-right:10px" id="profileImage"/>
			</div>
		</div>`
		+`You have selected the <strong>`+_pz.aN0[iI4].avatar+`</strong> avatar, please confim?`,f0,'Back',f1,'Confirm')
	iI4=undefined
}
// ==== CREATE TOUCH BUTTONS ====
// Create touch button
function createTouchButton(bSN,tBP,tID,tBA,iTY,bIB,bIO,sZ0,ftr){
	if(iTY&&iTY.match(/(icon)/)){
		_pz.iCO=tID.icon
		tID=tID.name
	}else _pz.iCO=''
	bF1=''
	bF0=`op`+upperFirstChar(tID)+`(c0)`
	if(tBA!==undefined&&tBA.includes('double'))bF1=bF0
	if(tBA!==undefined&&tBA.includes('mode')){
		tM0=`'+_cz.stickState+'`
		tM1=_cz.stickState
	}else tM0=tM1=''
	_pz.iP0=tBP.toLowerCase().includes('right')?'bottom:0;right:0':tBP.toLowerCase().includes('left')?'bottom:0;left:0':''
	_pz.tA0=_pz.cLS=''
	if(tBA!==undefined&&tBA.includes('pin')){
		_pz.cLS='class="pin"'
	}else if(tBA!==undefined&&tBA.includes('gear')){
		_pz.tA0=`<div style="margin-left:32px;margin-bottom:0px;font-size:18px;opacity:.76">
			<span hidden style="font-size:16px" id="vehicleGear">1</span>
		</div>`
	}else if(tBA!==undefined&&tBA.includes('indicator')){
		_pz.tA0=`<div hidden class="notifyDot" style="`+(_lz.dynamicJoy?'right:3px;top:2px':'right:16px;bottom:37px')+`" id="notifyDot"></div>`
	}else if(tBA=='wallet'){
		_pz.tA0=`
		<span style="position:absolute;left:42px;top:7px;font-size:`+(isMobile?'3.7vw':'36px')+`;opacity:.76">
			υς<span style="font-size:`+(isMobile?'3.5vw':'30px')+`" id="walletAmount">0.00</span>
		</span>`
	}else if(tBA=='trading'){
		_pz.tA0=`
		<span style="position:absolute;right:42px;top:7px;font-size:`+(isMobile?'3.7vw':'36px')+`;opacity:.76">
			υς<span style="font-size:`+(isMobile?'3.5vw':'30px')+`" id="tradingAmount">0.00</span>
		</span>`
	}else if(tBA!==undefined&&!tBA.includes('mode')&&!tBA.includes('double')){
    _pz.tA0=`<div style="margin-left:-3px;font-size:18px;opacity:.76">
      <p>υς<span style="font-size:14px" id="`+tBA+`"></span></p><br>
    </div>`
  }
  _pz.nCV=`noClickCanvas();`
	_pz.bSN=bSN==null?'':`loadAudio('interface','`+bSN+`',1,false,true)`
	_pz.fN0=(!tID.match(/(stick)/)?`onMouseOver="this.style.transform='scale(1.1)';$('#`+tID+`-backing').css('transform','scale(1.07)')"
		onMouseOut="this.style.transform='scale(1)';$('#`+tID+`-backing').css('transform','scale(1)')"`:'')+`
		ontouchstart="`+tID+`(this,true);`+_pz.nCV+_pz.bSN+`"
		ontouchend="`+tID+`(this,false)"
		onmousedown="if(!isMobile){`+tID+`(this,true);`+_pz.nCV+_pz.bSN+`}"
		onmouseup="if(!isMobile){`+tID+`(this,false)}"`
	$('#'+tBP).html(`<span style="transform:'scale(.76)';cursor:pointer" id="`+tID+`">
		<span `+_pz.cLS+`>
			`+_pz.tA0+`
			`+(bIB?`<img class="`+(ftr?ftr.back:'')+`" src="assets/images/`+bIB+`"
			`+(sZ0?'height="'+sZ0+'"':'')+`
			style="position:absolute;`+_pz.iP0+`;opacity:`+bIO+`;border-radius:50%"
			id="`+tID+`-backing"/>`:'')+
			`<img class="`+(_pz.cLS==''&&!tID.match(/(stick)/)?'iconoutline':'')+` `+(ftr?ftr.front:'')+`" src="assets/images/`+(_pz.iCO==''?(tM1+tID.split('__')[0]+`.`+(!iTY?'png':iTY)):'blank.png')+`"
			`+_pz.fN0+(sZ0?' height="'+sZ0+'"':'')+` style="opacity:.97`+(bIB||_pz.cLS!=''?`;position:absolute;`+_pz.iP0:'')+(bIB||tID.match(/(takeSnap)/)?';border-radius:50%"':'')+`;`+(!bIB&&_pz.cLS==''&&!tID.match(/(stick)/)?'width:38px;height:38px;box-shadow:rgba(50,50,93,.36) 0px 30px 60px -12px inset, rgba(0,0,0,.42) 0px 18px 36px -18px inset':'')+`"
			id="`+tID+`-image"/>`+
			(_pz.iCO==''?'':`<span `+_pz.fN0+` style="position:absolute;`+_pz.iP0+`;`+(bIB?'':((tBP.toLowerCase().includes('right')?'right':'left')+':-1.5px;bottom:2px;'))+`display:flex;justify-content:center;align-items:center;width:41px;height:35px">
				<span class="`+_pz.iCO+`" style="position:absolute;font-size:29px"></span>
			</span>`)
		+`</span>
		<script>
			function `+tID+`(e,c0){
        if('`+iTY+`'!='icon'){
          $(e).attr('src','assets/images/`+tM0+tID.split('__')[0]+`.`+(!iTY?'png':iTY)+`')
          if(c0)$(e).attr('src',changePNGColor(e,'#3cdfff'))
        }else $(e).css('color',c0?'#3cdfff':'#ffffff')
        if(c0){`+bF1+`}else `+bF0+`
			}
		</script>`)
	// HIDE WHEN
	setTimeout(function(){
		if(tBP.includes('actionLeftIcon'))$('#walletICON').fadeOut('fast')
		if(tBP.includes('actionRightIcon'))$('#tradingICON').html('')
	},300)
}
// No click canvas
function noClickCanvas(){
  _cz.buttonPressed=true;setTimeout(function(){_cz.buttonPressed=undefined},300)
}
// Build controls
function buildInterface(){
	// STICK
  if(!_lz.dynamicJoy){
    createTouchButton(null,'stickLEFT','stickcontrolballLEFT',['mode','double'])
  	createTouchButton(null,'stickRIGHT','stickcontrolballRIGHT',['mode','double'])
  	createTouchButton('menubuttonclick','stickSideRBASE','sticksideRIGHT',['indicator','mode','double'])
  	createTouchButton('bounceclick','stickTopRBASE','sticktopRIGHT',['mode','double'])
  	createTouchButton('shortclick','stickEdgeRBASE','stickedgeRIGHT',['double'])
  	createTouchButton('bounceclick','stickSideLBASE','sticksideLEFT',['mode','double'])
  	createTouchButton('woodclick','stickTopLBASE','sticktopLEFT',['mode','double','gear'])
  	createTouchButton('shortclick','stickEdgeLBASE','stickedgeLEFT',['double'])
  }
	// Main
	createTouchButton('softbuttonclick','topLeftIconOPT',{icon:'ti-back-right',name:'backIN'},undefined,'icon')
	createTouchButton('accomplishjingle','topLeftIconMENU',{icon:'ti-close',name:'backOUT'},undefined,'icon')
	createTouchButton('accomplishjingle','topLeftIconVR',{icon:'ti-layout-slider',name:'backVR'},undefined,'icon')
	createTouchButton('shortclick','walletICON',{icon:'ti-wallet',name:'myWallet'},'wallet','icon')
	// Camera
	createTouchButton('shutter','snapCont','takeSnap')
	createTouchButton('bounceclick','topRightNextBIcon',{icon:'ti-fullscreen',name:'maximize'},undefined,'icon')
	createTouchButton('menubuttonclick','topRightNextASecondIcon',lsRd('hdLow')==null?{icon:'ti-stats-down',name:'hdLow'}:{icon:'ti-stats-up',name:'hdHigh'},undefined,'icon')
	createTouchButton('bounceclick','topRightSecondIconCAM',{icon:'ti-angle-double-down',name:'optionPixelDOWN'},undefined,'icon')
	createTouchButton('menubuttonclick','topRightIconCAM',{icon:'ti-angle-double-up',name:'optionPixelUP'},undefined,'icon')
	createTouchButton('bounceclick','topRightNextSecondIconCAM',{icon:'ti-arrow-circle-down',name:'exposureDOWN'},undefined,'icon')
	createTouchButton('menubuttonclick','topRightNextAIconCAM',{icon:'ti-arrow-circle-up',name:'exposureUP'},undefined,'icon')
	createTouchButton('bounceclick','topLeftSecondIconCAM',{icon:'ti-zoom-out',name:'zoomFAR'},undefined,'icon')
	createTouchButton('menubuttonclick','topLeftIconCAM',{icon:'ti-zoom-in',name:'zoomNEAR'},undefined,'icon')
	createTouchButton('bounceclick','topLeftNextSecondIconCAM',{icon:'ti-angle-down',name:'fovDOWN'},undefined,'icon')
	createTouchButton('menubuttonclick','topLeftNextAIconCAM',{icon:'ti-angle-up',name:'fovUP'},undefined,'icon')
	createTouchButton('bounceclick','topRightIconVR',{icon:'ti-layout-slider-alt',name:'noVR'},undefined,'icon')
	if(orientation==90){
		createTouchButton('menubuttonclick','goVRICON',{icon:'ti-layout-slider',name:'goVR'},undefined,'icon')
		createTouchButton('shortclick','topRightNextDIconMENU',{icon:'ti-import',name:'loadAsset'},undefined,'icon')
	}
	// MENU
	createTouchButton('shortclick','topRightNextCIconMENU',_ez.sunShadowParameters.elevation<180?{icon:'ti-star',name:'switchNight'}:{icon:'ti-shine',name:'switchDay'},undefined,'icon')
	createTouchButton('shortclick','topRightNextBIconMENU',{icon:'ti-id-badge',name:'userID'},undefined,'icon')
	createTouchButton('shortclick','topRightNextAIconMENU',{icon:'ti-user',name:'myCharacter'},undefined,'icon')
	createTouchButton('softbuttonclick','topRightIconMENU',{icon:'ti-arrow-down',name:'replayIN'},undefined,'icon')
	// CONTACT
	createTouchButton('pickedcoinecho','topRightNextDIconCON',{icon:'ti-cup',name:'leaderBoard'},undefined,'icon')
	createTouchButton('softbuttonclick','topRightNextCIconCON',{icon:'ti-briefcase',name:'myPortfolio'},undefined,'icon')
	createTouchButton('softbuttonclick','topRightNextBIconCON',{icon:'ti-flag',name:'myMission'},undefined,'icon')
	createTouchButton('sinebeep','topRightNextAIconCON',{icon:'ti-location-arrow',name:'transferTo'},undefined,'icon')
	createTouchButton('sinebeep','topRightIconCON',{icon:'ti-comment',name:'myChat'},undefined,'icon')
	// SUBSCRIPTION
	if(lsRd('_myCart'+myUserID.uid)){
		createTouchButton('bounceclick','tradingICON',{icon:'ti-shopping-cart',name:'addToList'},undefined,'icon')
		$('#tradingICON').fadeIn('slow')
	}
}
// ==== MOBILE SCREEN ====
// Show mobile screen
function showMobileScreen(){
	$('#mobileframe').html(`<img disabled class="mobileframe-image" src="assets/images/mobileframe.png" style="transform:rotate(`+(orientation==0||!isMobile?'0deg':'-90deg')+`);`+(!isMobile?'height:'+93/getScale(_ez.tCanvas.id)+'vh':orientation==0?'width:'+86/getScale(_ez.tCanvas.id)+'vw':'height:'+152/getScale(_ez.tCanvas.id)+'vh')+`"/>`)
	if($('.mobileframe-image').width()==0){
		_pz.ht0=$('.mobileframe-image').height()
		_pz.wd0=parseInt(_pz.ht0*1076/2150)
		_pz.of0=_pz.wd0*.1
	}else{
		_pz.wd0=$('.mobileframe-image').width()
		_pz.ht0=parseInt(_pz.wd0*2150/1076)
		_pz.of0=_pz.wd0*.1
	}
  _pz.mSz={width:((orientation==0||!isMobile?_pz.wd0:_pz.ht0)-_pz.of0),height:((orientation==0||!isMobile?_pz.ht0:_pz.wd0)-_pz.of0)}
	$('#mobileframe').html(`
    <span class="mobileframe-cont">`
      +$('#mobileframe').html()+
      `<div class="mobilescreen-cont" style="width:`+_pz.mSz.width+`px;height:`+_pz.mSz.height+`px">
    		<div hidden class="mobilescreen" id="mobilescreen"></div>
    	</div>
    </span>`)
	$('#mobileframe').fadeIn('slow')
  return _pz.mSz
}
// Close mobile screen
function closeMobileScreen(){
  noClickCanvas()
	$('#mobileframe').fadeOut('fast')
  setTimeout(function(){
    $('#mobileframe').html('')
		if(_lz.ecommerce.paybutton){
			delete _lz.ecommerce.paybutton
			uloadScript('assets/js/checkout.js')
		}
  },1200)
}
// ==== TOUCH CONTROLS ====
// Show indicators
function showIndicators(){
	hideMenu()
	$('#contactICON').fadeOut('fast')
	if($('#walletAmount').text()!='0.00')$('#walletICON').fadeIn('slow')
	showTradingAmount()
	$('#indicatorBars').fadeIn('slow')
}
// Hide left options
function hideMenu(){
	$('#menuOption').fadeOut('fast')
	$('#loadingBar').fadeOut('fast')
	$('#cameraOption').fadeOut('fast')
	if(_lz.dynamicJoy){
		if($('#desktopTopLeftIcon').html()==''&&_mz.startRulesUpdating)createTouchButton('shortclick','desktopTopLeftIcon',{icon:'ti-menu-alt',name:'menu'},undefined,'icon')
		if($('#contactWindow').css('display')!='block')$('#desktopTopLeftIcon').fadeIn('slow')
		if(_mz.driveVehicleIndex[_lz.index]==null){
			$('#topLeftNextAIconMENU').show()
			$('#topLeftNextBIconMENU').show()
		}else{
			$('#topLeftNextAIconMENU').hide()
			$('#topLeftNextBIconMENU').hide()
		}
	}
	haltActivity()
}
// Show menu
function showMenu(){
	$('#walletICON').hide()
	$('#tradingICON').html('')
	$('#indicatorBars').fadeOut('fast')
	$('#cameraOption').fadeOut('fast')
	$('#contactICON').fadeOut('fast')
	$('#menuOption').fadeIn('slow')
	$('#desktopTopLeftIcon').fadeOut('slow')
	hideActButtons()
}
// Hide action buttons
function hideActButtons(){
	$('#actionLeftIconA').html('')
	$('#actionLeftIconB').html('')
	$('#actionRightIconA').html('')
	$('#actionRightIconB').html('')
	$('#bottomLeftNextAIcon').html('')
	$('#bottomLeftSecondIcon').html('')
	$('#bottomLeftThirdIcon').html('')
	$('#loadingTopRightIcon').fadeOut('fast')
	if($('#walletICON').html()=='')createTouchButton('shortclick','walletICON',{icon:'ti-wallet',name:'myWallet'},'wallet','icon')
}
// Show touch controls
function showTouchControls(st0){
	if(_mz.loaded==0&&_ez.physicsPlayed){
		showPleaseWait(false)
		if($('body').css('background-image')!='url(assets/images/black.jpg)')$('body').css('background-image','url(assets/images/black.jpg)')
		_pz.fd0='.3'
		if(st0){
			if($('#contactWindow').css('display')=='none'){
				hideMenu()
				$('#dialogWindow').fadeOut('fast')
				$('#optionWindow').fadeOut('slow')
				$('#avatarLibrary').fadeOut('slow')
				$('#userIDWindow').fadeOut('slow')
				if(!_ez.vr)$('#touchControls').fadeIn('slow')
				if(!isMobile)loadKeyControls()
				_pz.fd0='1'
			}
		}else $('#touchControls').fadeOut('slow')
		$('#sleep').hide()
		$('#enterDoor').hide()
		$('#driveVehicle').hide()
		$('#payIT').hide()
		$('#takeIT').hide()
		$('#avatarLibrary').hide()
		$('#takeSnap').hide()
		$('#screenTarget').hide()
		$('#'+_ez.tCanvas.id+'-cont').fadeTo('slow',_pz.fd0)
		if(_mz.driveVehicleIndex[_lz.index]!=null){
			if(_cz.mySeat[_lz.index]!=0){
				$('#stickRIGHT').fadeOut('slow')
				$('#stickLEFT').fadeOut('slow')
			}else{
				$('#stickRIGHT').fadeIn('slow')
				$('#stickLEFT').fadeIn('slow')
			}
		}
	}
}
// ==== DIALOG ====
// Show dialog message
function showDialog(im,m0,f0,b0,f1,b1,t0){
	function opShowDialog(im,m0,f0,b0,f1,b1,t0){
		$('#loudICON').fadeOut('slow')
		$('#centerMessage').fadeOut('slow')
		$('#worldControls').fadeOut('slow')
		$('#loadingFill').css('width','100%')
		setTimeout(function(){
			$('#loadingBar').fadeOut('fast')
		},600)
		if(_mz.loaded==0)showTouchControls(false)
		if(im!=null){
			$('#dialogIcon').show()
			$('#dialogIcon').attr('src','assets/images/'+im)
		}else $('#dialogIcon').hide()
		$('#dialogMessage').html(m0)
		function dialogButton(fB,bB){
			return`<div class="dialogbox dialogButton"
				ontouchend="closeDialog(null,false);loadAudio('interface','woodclick',1,false,true);`+fB+`"
				onmouseup="if(!isMobile){closeDialog(null,false);loadAudio('interface','woodclick',1,false,true);`+fB+`}"
				style="margin-top:12px">
					<div class="buttonContainer">`+bB+`</div>
				</div>`
		}
		if(f0==null)f0=''
		if(b0!=null){
			$('#dialogButtonA').html(dialogButton(f0,b0))
			$('#dialogButtonA').show()
		}else $('#dialogButtonA').hide()
		if(f1==null)f1=''
		if(b1!=null){
			$('#dialogButtonB').html(dialogButton(f1,b1))
			$('#dialogButtonB').show()
		}else $('#dialogButtonB').hide()
		$('#dialogWindow').fadeIn('slow')
	}
	if(t0!==undefined){
		setTimeout(function(){
			opShowDialog(im,m0,f0,b0,f1,b1,t0)
		},t0)
	}else opShowDialog(im,m0,f0,b0,f1,b1,t0)
	hideActButtons()
}
// Close dialog
function closeDialog(e,c0){
  	noClickCanvas()
  	if(e!=null)$(e).attr('src','assets/images/closeDialog.png')
	  if(!c0){
		$('#dialogWindow').fadeOut('slow')
		$('#worldControls').fadeIn('slow')
		if(_mz.loaded==0){
			if(checkRequired(false)==null&&_lz.prerequisite!=null)leaveLevel()
			showTouchControls(true)
			startSounds()
			hideOpTm=0
		}
	}else $(e).attr('src',changePNGColor(e,'#3cdfff'))
}
// ==== HEADLINE ====
// Show head line
function showHeadline(ads,i){
  $('#walletICON').html(`
    <div class="dialogbox dialogBack"
      onMouseOver="this.style.transform='scale(.99)'"
      onMouseOut="this.style.transform='scale(1)'"
      onclick="createFlipBook('`+ads[i].url+`','`+ads[i].color+`')"
      style="display:flex;margin-left:0px;max-width:256px;cursor:pointer">
      <span style="display:flex;justify-content:center;margin:0px;margin-left:-6px;margin-top:-4px">
        <img src="assets/images/landMark.png"
          onMouseOver="this.style.transform='scale(1.04)'"
          onMouseOut="this.style.transform='scale(1)'"
          style="height:56px;opacity:.86"/>
        <strong class="breakwords" disabled style="position:absolute;bottom:0px;margin:0px;margin-bottom:14px;`+(ads[i].color?('color:'+ads[i].color+';'):'')+`font-size:`+(isMobile?'5px':'10px')+`">`
          +(ads[i].tag?ads[i].tag:'')+
        `</strong>
      </span>
      <span style="positon:absolute;margin-top:0px;margin-left:6px">
        <p class="breakwords" disabled style="margin:0px;font-size:`+(isMobile?'20px':'20px')+`">`+(ads[i].title?ads[i].title:'')+`</p>
        <p class="breakwords" disabled style="margin:0px;font-size:`+(isMobile?'10px':'10px')+`">`+(ads[i].description?ads[i].description:'')+`</p>
      </span>
    </div>`)
  $('#walletICON').fadeIn('slow')
}
// ==== EXTRAS ====
function showFacebook(){
	window.open("https://www.facebook.com/groups/browsergamedeveloper");
}
function showGit(){
	window.open("https://github.com/VeinSyct/ThreeJsCannon");
}
function showTalk(){
	window.open(whApNo('+639544765588'))
//   _pz.mSz=showMobileScreen()
//   $('#mobilescreen').html(`
//     <div style="justify-content:center;width:100%;overflow:hidden">
//       <img src="assets/images/cancel.png"
//         onClick="closeMobileScreen()"
//         onMouseOver="this.style.transform='scale(1.1)'"
//         onMouseOut="this.style.transform='scale(1)'"
//         style="position:absolute;margin-left:-4px;margin-top:-4px;cursor:pointer;z-index:2"/>
//       <object type="text/html" data="https://vctalk.web.app" style="width:100%;height:`+_pz.mSz.height+`px"></object>
//     </div>`)
//   $('#mobilescreen').fadeIn('slow')
}
//Whatspp
function whApNo(mo){if(isMobile==true){wa='https://wa.me/'}else{wa='https://web.whatsapp.com/send/?phone='}return wa+xtDgfmSt(mo)}
function xtDgfmSt(s0){return s0.match(/\d+/g).toString().replace(/,/g,'')}
