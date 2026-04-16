// ==== GAME RULES ====
// Register rules
function registerRules(n){
	if(n!==undefined){
		for(_pz.os0=0;_pz.os0<_lz.parameters[n].x.length;_pz.os0++){
			_pz.sl=_lz.parameters[n].sl
			// Index
			if(_pz.cO0!=_lz.parameters[n].name){
				_pz.cO0=_lz.parameters[n].name
				_pz.cO1=0
			}else _pz.cO1++
			// Doors
			if(_lz.parameters[n].lo!==undefined){
				_ez.reLocation.push({
					object:_lz.parameters[n].name,
					relocation:_lz.parameters[n].lo[_pz.cO1],
					indoor:{enabled:_lz.parameters[n].rm,exposure:_lz.parameters[n].exp},
					proximity:_lz.parameters[n].px
				})
			}else _ez.reLocation.push(null)
			// Activities
			if(_pz.lD0==null){
				if(_lz.parameters[n].activity!==undefined){
					_ez.objectActivity.push({
						object:_lz.parameters[n].name,
						activity:_lz.parameters[n].activity,
						proximity:_lz.parameters[n].px
					})
				}else _ez.objectActivity.push(null)
			}
		}
	}
}
// Perform action
function performAction(pA0){
	_ez.activityAnimation={
		type:pA0,
		description:_ez.objectActivity[_ez.objectSelect].activity.description[_ez.objectActivity[_ez.objectSelect].index],
		act:_ez.objectActivity[_ez.objectSelect].activity.animation[_ez.objectActivity[_ez.objectSelect].index].act,
		color:_ez.objectActivity[_ez.objectSelect].activity.color[_ez.objectActivity[_ez.objectSelect].index],
		duration:undefined,
		counter:_ez.objectActivity[_ez.objectSelect].activity.continue[_ez.objectActivity[_ez.objectSelect].index]
	}
	activityAnimation(randomString(_ez.activityAnimation.act),_lz.index)
	$('#loadingFill').css('width','1%')
	$('#loadingBar').fadeIn('slow')
	showNoWaiting(pA0)
	pA0=undefined
	stopWalkSound()
}
// Show no waiting
function showNoWaiting(pA0){
	if(isOnL()&&pA0.match(/(payIT|takeIT|takeJob|workJob|opportunity|loan|widrawal)/)&&meAndF&&_lz.gameRules.rewardAds=='serve'){
		_lz.gameRules.process={
			type:pA0,
			name:pA0.match(/(takeIT)/)?'claim':pA0.match(/(payIT)/)?'payment':pA0.match(/(takeJob)/)?'job':pA0.match(/(workJob)/)?'work':pA0,
			request:pA0.match(/(payIT|takeIT)/)?'transfer':pA0.match(/(takeJob)/)?'application':pA0.match(/(workJob)/)?'progress':'request',
			action:'process',
			reward:'nowaiting'
		}
		createTouchButton('softbuttonclick',_ez.bottomIcon?'bottomLeftSecondIcon':'actionLeftIconA',{icon:'ti-timer',name:'noWaiting'},undefined,'icon','actcretical.gif',.36)
		goURL('#request')
	}
	pA0=undefined
}
// Complete action
function completeAction(pA0){
	if(_lz.gameRules.rewardAds=='ready')_lz.gameRules.rewardAds='serve'
	goURL('#complete')
	delete _ez.activityAnimation
	$('#loadingFill').css('width','100%')
	$('#loadingBar').fadeOut('slow')
	$('#noWaiting').fadeOut('slow')
	if(pA0.match(/(payIT|takeIT|takeJob|workJob|widrawal|opportunity|deal|loan|debt)/)){
		function payOrTakeAmount(tP0){
			if(pA0.match(/(loan)/)){
				loadAudio('game','complete',1,false,true)
				_pz.fIN=randomString([
					'Financer',
					'Bank',
					'Provider',
					'Giver',
					'Government',
					'Philanthropist',
					'Mafia',
					'Organization',
					'Corporation',
					'Company',
					'Board',
					'Investor',
					'Lender'
				])
				_pz.fIT=randomString([
					'business',
					'personal expenses',
					'quest',
					'venture',
					'science',
					'strive',
					'project',
					'research',
					'industry',
					'factory',
					'production',
					'mining',
					'building',
					'event'
				])
				_pz.fII=(Math.floor(Math.random()*500)/10+5).toFixed(2)
				_pz.fIP=(Math.floor(Math.random()*5)*12+12).toFixed(0)
				_pz.fIR=((_ez.objectActivity[_ez.objectSelect].amount*(1+_pz.fII/100))/_pz.fIP).toFixed(2)
				_lz.gameRules.loan={lender:_pz.fIN,purpose:_pz.fIT,principal:_ez.objectActivity[_ez.objectSelect].amount,interest:_pz.fII,amount:_pz.fIR,duration:_pz.fIP}
				showDialog('payment.png',`<strong>`+_pz.fIT.toUpperCase()+` LOAN</strong><br>Do you have the capacity to request for <strong>υς`+iCommas((_ez.objectActivity[_ez.objectSelect].amount).toFixed(2))+`</strong> financial assistance & return the loan monthly due of <strong>υς`+iCommas(_pz.fIR)+`</strong> with `+_pz.fII+`% interest on schedule for the duration of `+_pz.fIP+` months?`,
				`setTimeout(function(){
					if(parseFloat(fmCur($('#walletAmount').text()))>`+_pz.fIR*6+`){
						loadAudio('game','achievementnotification',1,false,true)
						showDialog('iagree.png','<strong>LOAN OFFER</strong><br>The `+_pz.fIN.toLowerCase()+` has offered <strong>υς'+iCommas(_lz.gameRules.loan.principal.toFixed(2))+'</strong> to finance your `+_pz.fIT.toLowerCase()+` loan','','Dismiss')
						_ez.objectActivity[_ez.objectSelect].index++
						_ez.objectActivity[_ez.objectSelect].activity.amountRange[_ez.objectActivity[_ez.objectSelect].index]=_lz.gameRules.loan.principal+'-'+_lz.gameRules.loan.principal
						_ez.objectActivity[_ez.objectSelect].amount=undefined
						updateProximity(false)
					}else{
						loadAudio('interface','errormessage',1,false,true)
						showDialog('nopayment.png','<strong>LOAN DENIED</strong><br>The `+_pz.fIN.toLowerCase()+` has denied <strong>υς'+iCommas(_lz.gameRules.loan.principal.toFixed(2))+'</strong> loan request to finance your `+_pz.fIT.toLowerCase()+`','','Dismiss')
						_ez.objectActivity[_ez.objectSelect].index=undefined
						_ez.objectActivity[_ez.objectSelect].amount=undefined
					}
				},Math.floor(Math.random()*30)*300+300)`,`Request`,'updateProximity(false)','Cancel')
			}else if(pA0.match(/(debt)/)){
				loadAudio('game','achievementhappybeeps',1,false,true)
				showDialog('iagree.png',`<strong>DEBT CONTRACT</strong><br>The `+_lz.gameRules.loan.lender.toLowerCase()+` has approved your request to finance <strong>υς`+iCommas((_lz.gameRules.loan.principal).toFixed(2))+`</strong> `+_lz.gameRules.loan.purpose+` loan, please sign the debt contract`,
				`setTimeout(function(){
					if(_lz.gameRules.debt===undefined)_lz.gameRules.debt=[]
					_lz.gameRules.debt.push(_lz.gameRules.loan)
					_lz.gameRules.bankAccount.savings=parseFloat(_lz.gameRules.bankAccount.savings)+_lz.gameRules.loan.principal
					_ez.objectActivity[_ez.objectSelect].index=undefined
					_ez.objectActivity[_ez.objectSelect].amount=undefined
					updateProximity(false)
					loadAudio('game','levelup',1,false,true)
					showDialog('payment.png','<strong>DEBT CONTRACT</strong><br>Your `+_lz.gameRules.loan.purpose+` loan processing is completed, the <strong>υς`+iCommas((_lz.gameRules.loan.principal).toFixed(2))+`</strong> financial assistance will be deposited to your bank account','savePosition(_lz.index)','Dismiss')
				},2400)
				`,`Sign debt`)
			}else if(pA0.match(/(opportunity)/)){
				_pz.bZN=randomString([
					'House',
					'Amusement',
					'Race Track',
					'Cinema',
					'Car',
					'Housing',
					'Exploration'
				])
				_pz.bZA=randomString([
					'retail',
					'rental',
					'event',
					'resort',
					'manufacturer',
					'maker',
					'producer',
					'builder',
					'service'
				])
				_pz.bZT=randomString([
					'company',
					'corporation',
					'foundation',
					'organization',
					'coalation',
					'enterprise'
				])
				_pz.sHR=(Math.floor(Math.random()*90)/10+1).toFixed(2)
				_pz.rOI=(Math.floor(Math.random()*500)/10+5).toFixed(2)
				_pz.vAL=(_ez.objectActivity[_ez.objectSelect].amount*100/_pz.sHR)
				_lz.gameRules.opportunity={name:_pz.bZN,activity:_pz.bZA,type:_pz.bZT,amount:_ez.objectActivity[_ez.objectSelect].amount/12,investment:_ez.objectActivity[_ez.objectSelect].amount,share:_pz.sHR,rOI:_pz.rOI,total:_pz.vAL}
				loadAudio('game','complete',1,false,true)
				showDialog('agreement.png',`<strong>BUSINESS OPPORTUNITY</strong><br>The `
				+_pz.bZN+` `+_pz.bZA+` with market value of <strong>υς`+iCommas(_pz.vAL.toFixed(2))+`</strong> is offering `+_pz.sHR+`% share & "`+_pz.rOI+`%" ROI, would you like to invest <strong>"υς`+iCommas(_ez.objectActivity[_ez.objectSelect].amount.toFixed(2))+`"</strong> in this `+_pz.bZT+`?`,
				`setTimeout(function(){
					loadAudio('game','achievementnotification',1,false,true)
					showDialog('agreement.png','<strong>BUSINESS OFFER</strong><br>the `+_pz.bZT.toLowerCase()+` has offered you `+_pz.sHR+`% share with <strong>`+_pz.rOI+`%</strong> ROI','','Dismiss')
					_ez.objectActivity[_ez.objectSelect].index++
					_ez.objectActivity[_ez.objectSelect].activity.amountRange[_ez.objectActivity[_ez.objectSelect].index]=_lz.gameRules.opportunity.investment+'-'+_lz.gameRules.opportunity.investment
					_ez.objectActivity[_ez.objectSelect].amount=undefined
					updateProximity(false)
				},Math.floor(Math.random()*30)*300+300)`,`Proceed`,'updateProximity(false)',`Don't`)
			}else if(pA0.match(/(deal)/)){
				loadAudio('game','achievementhappybeeps',1,false,true)
				showDialog('payment.png',`<strong>BUSINESS OFFERED</strong><br>The `+_lz.gameRules.opportunity.type+` has approved your interest in buying `+_lz.gameRules.opportunity.share+`% share of "`+_lz.gameRules.opportunity.name.toLowerCase()+` `+_lz.gameRules.opportunity.activity+`", would you like to pay the share amout of <strong>υς`+iCommas(_lz.gameRules.opportunity.investment.toFixed(2))+`</strong>?`,
				`if(parseFloat(fmCur($('#walletAmount').text()))>_lz.gameRules.opportunity.investment){
					setTimeout(function(){
						if(_lz.gameRules.deal===undefined)_lz.gameRules.deal=[]
						_lz.gameRules.deal.push(_lz.gameRules.opportunity)
						_ez.objectActivity[_ez.objectSelect].amount=_lz.gameRules.opportunity.investment
						completeAction('payIT')
						_ez.objectActivity[_ez.objectSelect].index=undefined
						_ez.objectActivity[_ez.objectSelect].amount=undefined
						updateProximity(false)
						loadAudio('game','levelup',1,false,true)
						showDialog('iagree.png','<strong>BUSINESS CONTRACT</strong><br>You are entitled with `+_lz.gameRules.opportunity.share+`% share with <strong>`+_lz.gameRules.opportunity.rOI+`%</strong> ROI of the `+_lz.gameRules.opportunity.name.toLowerCase()+` `+_lz.gameRules.opportunity.activity+`','savePosition(_lz.index)','Dismiss')
					},2400)
				}else{
					setTimeout(function(){
						loadAudio('interface','errormessage',1,false,true)
						showDialog('nopayment.png','<strong>DEAL FAILED</strong><br>You do not have enough money to buy `+_lz.gameRules.opportunity.share+`% share of the `+_lz.gameRules.opportunity.name.toLowerCase()+` `+_lz.gameRules.opportunity.activity+`','','Dismiss')
						_ez.objectActivity[_ez.objectSelect].index=undefined
						_ez.objectActivity[_ez.objectSelect].amount=undefined
					},1200)
				}`,`Buy `+_lz.gameRules.opportunity.share+`% Share`)
			}else if(pA0.match(/(takeJob)/)){
				loadAudio('game','complete',1,false,true)
				_pz.jBN=randomString([
					'Designer','Programmer','Visualizer','Accountant','Creator','Manager','Coordinator','Transcriptor','Content Creator','Clerk','Staff','Promoter','Campainer','Inspector','Teacher','Coach','Instructor','Safety Officer','Officer'
				])
				_pz.jBA=randomString([
					'villa project','landscaping','urban project','millionare','yatch builder','warehouse','shopping mall','hospitality','space travel','racing event','dress maker','shopping centre','engineering contractor','contracting company','freight company'
				])
				showDialog('job.png',`<strong>JOB POST</strong><br>"`
				+_pz.jBN+`" for `+_pz.jBA+`, do you want to apply as candidate for the job?`,
				`setTimeout(function(){
					_ez.objectActivity[_ez.objectSelect].index++
					_ez.objectActivity[_ez.objectSelect].amount=undefined
					updateProximity(false)
					if(_ez.objectActivity[_ez.objectSelect].amount!==undefined){
						loadAudio('game','achievementnotification',1,false,true)
						showDialog('work.png','<strong>JOB OFFER</strong><br>The employeer has offered <strong>υς'+iCommas(_ez.objectActivity[_ez.objectSelect].amount.toFixed(2))+'</strong> for the `+_pz.jBN.toLowerCase()+` work','','Dismiss')
						_lz.gameRules.job={name:'`+_pz.jBN+`',type:'`+_pz.jBA+`',salary:_ez.objectActivity[_ez.objectSelect].amount/(Math.floor(Math.random()*50)/10+1)}
					}else{
						loadAudio('game','achievementhappybeeps',1,false,true)
						_lz.gameRules.job=undefined
						showDialog('work.png','<strong>JOB OFFER</strong><br>The employeer has offered you the `+_pz.jBN.toLowerCase()+` work','','Dismiss')
					}
				},Math.floor(Math.random()*30)*300+300)`,`Apply`)
			}else if(pA0.match(/(workJob)/)){
				loadAudio('game','levelup',1,false,true)
				showDialog('work.png',`You have earned <strong>υς`+iCommas(_ez.objectActivity[_ez.objectSelect].amount.toFixed(2))+`</strong> work pay, do you wish to deposit the amount in your bank account`,
				`if(_lz.gameRules.job!==undefined&&_lz.gameRules.work===undefined)setTimeout(function(){
					loadAudio('game','levelup',1,false,true)
					showDialog('work.png','<strong>OFFER LETTER</strong><br>Do you want to work as permanent '+_lz.gameRules.job.name.toLowerCase()+' and get regular <strong>υς'+iCommas(_lz.gameRules.job.salary.toFixed(2))+'</strong> salary?','_lz.gameRules.work=_lz.gameRules.job;savePosition(_lz.index)','Sign Contract')
				},2400)
				_lz.gameRules.bankAccount.savings=`+(parseFloat(_lz.gameRules.bankAccount.savings+_ez.objectActivity[_ez.objectSelect].amount*tP0)).toFixed(2)+`;savePosition(_lz.index)`,'Deposit')
				_ez.objectActivity[_ez.objectSelect].index=undefined
			}else{
				$('#walletAmount').text(iCommas((parseFloat(fmCur($('#walletAmount').text()))+_ez.objectActivity[_ez.objectSelect].amount*tP0).toFixed(2)))
				if(pA0.match(/(widrawal)/)){
					_lz.gameRules.bankAccount.savings=0
					_ez.objectActivity[_ez.objectSelect].index=undefined
				}else if(_ez.objectActivity[_ez.objectSelect].index<_ez.objectActivity[_ez.objectSelect].activity.type.length)_ez.objectActivity[_ez.objectSelect].index++
			}
			_ez.objectActivity[_ez.objectSelect].amount=undefined
			lsSv('walletAmount'+myUserID.uid,enAdStr($('#walletAmount').text()))
			if($('#walletICON').css('display')=='none')$('#walletICON').fadeIn('slow')
			showTradingAmount()
			checkRequired(true)
			updateProximity(false)
			$('#'+pA0).fadeOut('slow')
		}
		if(pA0.match(/(payIT)/)){
			if(fmCur($('#walletAmount').text())>=_ez.objectActivity[_ez.objectSelect].amount){
				loadAudio('game','completedpaid',1,false,true)
				payOrTakeAmount(-1)
			}else{
				if(!_cz.alive[_lz.index]){
					loadAudio('game',randomString(['sleeptalking']),.5,true,true)
					setTimeout(function(){
						if(_ez.sound)loadAudio('game',randomString(['saddefeat','death']),1,false,true)
						showLoudMessage(_lz.defeatmessage)
						_cz.alive[_lz.index]=true
						activityAnimation(randomString(['WrithingInPain']),_lz.index)
						_cz.alive[_lz.index]=false
						$('#wakeUp').fadeOut('slow')
						$('#payIT').fadeOut('fast')
						$('#stickLEFT').fadeOut('fast')
						$('#stickRIGHT').fadeOut('fast')
						setTimeout(function(){
							deadExitOption()
						},14000)
					},1200)
				}else{
					if(_ez.sound)loadAudio('interface','errormessage',1,false,true)
					showDialog('wallet.png',`Unable to pay υς`+iCommas(_ez.objectActivity[_ez.objectSelect].amount.toFixed(2))+`, because you only have υς`+iCommas(parseFloat(fmCur($('#walletAmount').text())).toFixed(2))+` in your wallet`,'','Dismiss')
					showNoWaiting('widrawal')
				}
			}
		}else payOrTakeAmount(1)
		if(pA0.match(/(widrawal)/))loadAudio('game','approvalhigh',1,false,true)
		savePosition(_lz.index)
	}
}
// Update proximity
function updateProximity(pX0){
	if(_ez.sound||pX0==null){
		$('#noWaiting').fadeOut('slow')
		$('#widrawal').fadeOut('fast')
		$('#opportunity').fadeOut('fast')
		$('#deal').fadeOut('fast')
		$('#loan').fadeOut('fast')
		$('#debt').fadeOut('fast')
		$('#takeJob').fadeOut('fast')
		$('#workJob').fadeOut('fast')
		$('#takeIT').fadeOut('fast')
		$('#payIT').fadeOut('fast')
		$('#driveVehicle').fadeOut('slow')
		$('#enterDoor').fadeOut('slow')
		$('#sleep').fadeOut('slow')
		for(_pz.sl0=0;_pz.sl0<_ez.archive.length;_pz.sl0++){
			if(_ez.archive[_pz.sl0].objectIndex!==undefined){
				try{
					_pz.ds0=_ez.world.bodies[_ez.archive[_pz.sl0].objectIndex].position.distanceTo(_mz.meshesData[_lz.index].position)
					if(_ez.objectSounds[_pz.sl0]!==undefined&&_ez.objectSounds[_pz.sl0].loop){
						if(_ez.archive[_pz.sl0].objectIndex!==undefined){
							loadAudio('loop',_ez.objectSounds[_pz.sl0].loop,1/_pz.ds0>1?1:1/_pz.ds0,false,true,_ez.archive[_pz.sl0].position)
						}else loadAudio('loop',_ez.objectSounds[_pz.sl0].loop,0,false,false)
					}
					// Doors
					if(_ez.reLocation[_pz.sl0]!=null&&_pz.ds0<parseFloat(_ez.reLocation[_pz.sl0].proximity)){
						_ez.objectSelect=_pz.sl0
						createTouchButton('buttonclick',_ez.bottomIcon?'bottomLeftThirdIcon':'actionLeftIconB','enterDoor',undefined,'png','actbeneficial.gif',.36)
					}
					// Activities
					if(_ez.objectActivity[_pz.sl0]!=null&&_pz.ds0<parseFloat(_ez.objectActivity[_pz.sl0].proximity)){
						_ez.objectSelect=_pz.sl0
						if(_ez.objectActivity[_pz.sl0].index===undefined){
							_ez.objectActivity[_pz.sl0].index=0
							if(_ez.objectActivity[_pz.sl0].activity.continue!==undefined)_ez.objectActivity[_pz.sl0].activity.continue[0]=0
						}
						if(_ez.objectActivity[_pz.sl0].activity.type[_ez.objectActivity[_pz.sl0].index]!==undefined){
							function showActivityButton(){
								createTouchButton(
									'buttonclick',
									_ez.bottomIcon?'bottomLeftThirdIcon':_ez.objectActivity[_pz.sl0].activity.containerID[_ez.objectActivity[_pz.sl0].index],
									_ez.objectActivity[_pz.sl0].activity.type[_ez.objectActivity[_pz.sl0].index],
									_ez.objectActivity[_pz.sl0].activity.amountID[_ez.objectActivity[_pz.sl0].index],
									'png','actpriority.gif',.36
								)
							}
							if(_ez.objectActivity[_pz.sl0].activity.type[_ez.objectActivity[_pz.sl0].index].match(/(sleep)/)){
								if(_ez.objectActivity[_pz.sl0].recovery===undefined){
									_pz.hl=_ez.objectActivity[_pz.sl0].activity.sleep[_ez.objectActivity[_pz.sl0].index].heal.split('-')
									_pz.cg=_ez.objectActivity[_pz.sl0].activity.sleep[_ez.objectActivity[_pz.sl0].index].charge.split('-')
									_ez.objectActivity[_pz.sl0].recovery={
										heal:Math.floor(Math.random()*(parseFloat(_pz.hl[1])-parseFloat(_pz.hl[0])))+parseFloat(_pz.hl[0]),
										charge:Math.floor(Math.random()*(parseFloat(_pz.cg[1])-parseFloat(_pz.cg[0])))+parseFloat(_pz.cg[0]),
										speed:_ez.objectActivity[_pz.sl0].activity.sleep[_ez.objectActivity[_pz.sl0].index].speed
									}
								}
								createTouchButton('buttonclick',_ez.bottomIcon?'bottomLeftSecondIcon':'actionLeftIconA',{icon:'ti-alarm-clock',name:'sleep'},undefined,'icon','actcretical.gif',.36)
							}
							if(_ez.objectActivity[_pz.sl0].activity.type[_ez.objectActivity[_pz.sl0].index].match(/(driveVehicle)/)){
								if(_ez.archive[_pz.sl0].type=='vehiclebody'){
									if(isInRange(returnConstant('vector3',{x:_ez.archive[_pz.sl0].position.x,y:_ez.archive[_pz.sl0].position.y,z:_ez.archive[_pz.sl0].position.z}),_ez.archive[_pz.sl0].near))nearVehicle(_pz.sl0)
								}
							}
							if(_ez.objectActivity[_pz.sl0].activity.type[_ez.objectActivity[_pz.sl0].index].match(/(payIT|takeIT|takeJob|workJob|opportunity|deal|loan|debt|widrawal)/)){
								if(!_ez.objectActivity[_pz.sl0].activity.type[_ez.objectActivity[_pz.sl0].index].match(/(widrawal)/)){
									if(_ez.objectActivity[_pz.sl0].amount===undefined){
										_pz.am=_ez.objectActivity[_pz.sl0].activity.amountRange[_ez.objectActivity[_pz.sl0].index].split('-')
										_ez.objectActivity[_pz.sl0].amount=Math.floor(Math.random()*(parseFloat(_pz.am[1])-parseFloat(_pz.am[0])))+parseFloat(_pz.am[0])
									}
								}else _ez.objectActivity[_pz.sl0].amount=parseFloat(_lz.gameRules.bankAccount.savings)
								if(_ez.objectActivity[_pz.sl0].amount>0){
									showActivityButton()
									$('#'+_ez.objectActivity[_pz.sl0].activity.amountID[_ez.objectActivity[_pz.sl0].index]).text(iCommas((parseFloat(_ez.objectActivity[_pz.sl0].amount)).toFixed(2)))
								}
							}
						}
					}
				}catch(err){}
			}
		}
		updateMakers(true)
		if(_lz.dynamicJoy){
			for(_pz.j=0;_pz.j<_mz.meshesData.length;_pz.j++){
				if(isInRange(_mz.meshesData[_pz.j].position,_lz.talkRange)&&_mz.meshesData[_pz.j].name!=myUserID.uid){
					createTouchButton('bounceclick','tradingICON',{icon:'ti-comment',name:'myChat'},'indicator','icon')
					$('#tradingICON').fadeIn('slow')
					continue
				}
			}
		}
	}
}
// Show trading
function showTradingAmount(){
	if(parseFloat($('#tradingAmount').text())>0){
		createTouchButton('shortclick','tradingICON',{icon:'ti-receipt',name:'tradingNow'},'trading','icon')
		$('#tradingICON').fadeIn('slow')
	}else $('#tradingICON').html('')
}
// Check required
function checkRequired(cR0){
	if(cR0){
		if(_lz.required!=null){
			if(_lz.required.length>0){
				for(_pz.cR1=0;_pz.cR1<_lz.required.length;_pz.cR1++){
					if(_lz.required[_pz.cR1]=='pay'){
						try{
							if(_lz.object[_pz.cR1]==_ez.objectActivity[_ez.objectSelect].object){
								_lz.required=deleteArray(_lz.required,_pz.cR1)
								_lz.object=deleteArray(_lz.object,_pz.cR1)
							}
						}catch(err){}
					}
					if(_lz.required[_pz.cR1]=='claim'){
						try{
							if(_lz.object[_pz.cR1]==_ez.objectActivity[_ez.objectSelect].object){
								_lz.required=deleteArray(_lz.required,_pz.cR1)
								_lz.object=deleteArray(_lz.object,_pz.cR1)
							}
						}catch(err){}
					}
					if(_lz.required[_pz.cR1]=='amount'){
						if(parseFloat($('#walletAmount').text().replace(/,/g,''))>=parseFloat(_lz.amount[_pz.cR1])){
							_lz.required=deleteArray(_lz.required,_pz.cR1)
							_lz.object=deleteArray(_lz.object,_pz.cR1)
						}
					}
					if(_lz.required[_pz.cR1]=='deliver'){
						try{
							if(_lz.object[_pz.cR1]==_ez.objectActivity[_ez.objectSelect].object){
								for(_pz.cR2=0;_pz.cR2<_lz.site.length;_pz.cR2++){
									_pz.rD0=_mz.meshesData[_lz.index].position.distanceTo(_lz.site[_pz.cR2])
									if(_pz.rD0<_lz.site[_pz.cR2].s){
										_pz.am=_lz.amount[_pz.cR1].split('-')
										_pz.am=Math.floor(Math.random()*(parseFloat(_pz.am[1])-parseFloat(_pz.am[0])))+parseFloat(_pz.am[0])
										if(_pz.am>0){
											$('#walletAmount').text(iCommas((parseFloat($('#walletAmount').text().replace(/,/g,''))+_pz.am).toFixed(2)))
											lsSv('walletAmount'+myUserID.uid,enAdStr($('#walletAmount').text()))
										}
										_lz.required=deleteArray(_lz.required,_pz.cR1)
										_lz.object=deleteArray(_lz.object,_pz.cR1)
										continue
									}
								}
							}
						}catch(err){}
					}
				}
			}
			if(_lz.required.length==0)_lz.required=null
			if(_lz.required==null&&lsRd('mission'+myUserID.uid+_lz.levelName)==null){
				lsSv('mission'+myUserID.uid+_lz.levelName,'done')
				if(_ez.sound)loadAudio('game',randomString(['victorycelebration','victoryfanfare']),1,false,true)
				showLoudMessage(_lz.victorymessage,8400)
			}
		}
	}else return lsRd('mission'+myUserID.uid+_lz.prerequisite)
}
// ==== ACTIVITIES ====
// Check if all UI is hidden
function isAllUIHidden(){
	return $('#avatarLibrary').css('display')=='none'&&$('#userIDWindow').css('display')=='none'&&$('#dialogWindow').css('display')=='none'&&$('#touchControls').css('display')=='none'
}
// Update activities
function updateActivities(){
	try{
		// Show touch controls if all UI is hidden
		if(_lz.allUIHidden===undefined&&isAllUIHidden()){
			_lz.allUIHidden=true
			setTimeout(function(){
				delete _lz.allUIHidden
				if(isAllUIHidden())showTouchControls(true)
			},3600)
		}
		// Revitalize on sleep
		if(_lz.mortality=='sleep'&&_ez.objectActivity[_ez.objectSelect].recovery!=undefined){
			if(_lz.prevHealthFill===undefined)_lz.prevHealthFill=parseFloat($('#healthFill').css('width'))
			if(parseFloat($('#healthFill').css('width'))>=parseFloat($('#healthBar').css('width'))||parseFloat($('#healthFill').css('width'))>=_lz.prevHealthFill+_ez.objectActivity[_ez.objectSelect].recovery.heal){
				delete _lz.prevHealthFill
				delete _lz.mortality
				savePosition(_lz.index)
			}else $('#healthFill').css('width',(parseFloat($('#healthFill').css('width'))+Math.floor(Math.random()*_ez.objectActivity[_ez.objectSelect].recovery.speed*2.4))+'px')
			if(parseFloat($('#staminaBar').css('width'))>parseFloat($('#staminaFill').css('width')))$('#staminaFill').css('width',(parseFloat($('#staminaFill').css('width'))+Math.floor(Math.random()*_ez.objectActivity[_ez.objectSelect].recovery.speed*3.6))+'px')
		}else if(_cz.alive[_lz.index]){
			// Spend stamina
			if(parseFloat($('#staminaFill').css('width'))>0){
				if(_lz.prevAnimation!=_ez.stick.stickLA[_lz.index]){
					_lz.prevAnimation=_ez.stick.stickLA[_lz.index]
					_pz.stamina=parseFloat($('#staminaFill').css('width'))-Math.floor(Math.random()*isAboveWater(_lz.index,-.3)?5:9)/10
					if(_pz.stamina<0)_pz.stamina=0
					$('#staminaFill').css('width',_pz.stamina+'px')
				}
			}else if(parseFloat($('#healthFill').css('width'))>0){
				_pz.health=parseFloat($('#healthFill').css('width'))-Math.floor(Math.random()*isAboveWater(_lz.index,-.3)?3:9)/10
				if(_pz.health<0)_pz.health=0
				$('#healthFill').css('width',_pz.health+'px')
			}else{
				activityAnimation(randomString(['FallingFlatImpact','DyingBackwards','Dying']),_lz.index)
				hospitalizeMeOption(2400)
			}
		}
		// Inflation up or down
		_pz.iNf=Math.floor(Math.random()*_lz.inflationFactor.ceiling)/100+_lz.inflationFactor.floor
		// Salary
		if(_lz.gameRules.salary.timer<0){
			_lz.gameRules.salary.timer=_lz.gameRules.salary.cycle
			if(_lz.gameRules.work!==undefined){
				_lz.gameRules.bankAccount.savings=parseFloat(_lz.gameRules.bankAccount.savings)+_lz.gameRules.work.salary
				loadAudio('game','complete',1,false,true)
				showDialog('work.png','<strong>JOB PAY</strong> your salary pay <strong>υς'+iCommas(_lz.gameRules.work.salary.toFixed(2))+'</strong> will be credited to your bank account','','Dismiss')
			}
		}else{
			_lz.gameRules.salary.timer--
			if(_lz.gameRules.work!==undefined)_lz.gameRules.work.salary*=(_pz.iNf+4)/5
		}
		// Dividen
		if(_lz.gameRules.dividen.timer<0){
			_lz.gameRules.dividen.timer=_lz.gameRules.dividen.cycle
			if(_lz.gameRules.deal!==undefined){
				_pz.dVN=0
				for(_pz.dL0=0;_pz.dL0<_lz.gameRules.deal.length;_pz.dL0++){
					if(_lz.gameRules.deal[_pz.dL0].amount!==undefined)_pz.dVN+=_lz.gameRules.deal[_pz.dL0].amount*_lz.gameRules.deal[_pz.dL0].rOI/100
				}
				_lz.gameRules.bankAccount.savings=parseFloat(_lz.gameRules.bankAccount.savings)+_pz.dVN
				loadAudio('game','complete',1,false,true)
				showDialog('agreement.png','<strong>BUSINESS DIVIDEN</strong> your dividen(s) total payments <strong>υς'+iCommas(_pz.dVN.toFixed(2))+'</strong> will be credited to your bank account','','Dismiss')
			}
		}else{
			_lz.gameRules.dividen.timer--
			// Market wave
			if(_lz.gameRules.deal!==undefined){
				for(_pz.dL0=0;_pz.dL0<_lz.gameRules.deal.length;_pz.dL0++){
					_lz.gameRules.deal[_pz.dL0].amount*=(_pz.iNf+4)/5
					_lz.gameRules.deal[_pz.dL0].total*=(_pz.iNf+4)/5
				}
			}
		}
		// Bills
		if(_lz.gameRules.liability.timer<0){
			_lz.gameRules.liability.timer=_lz.gameRules.liability.cycle
			if(_lz.gameRules.liabilities!==undefined){
				_pz.bLL=0
				for(_pz.lB0=0;_pz.lB0<_lz.gameRules.liabilities.length;_pz.lB0++){
					if(_lz.gameRules.liabilities[_pz.lB0].duration>0){
						if(_lz.gameRules.liabilities[_pz.lB0].amount!==undefined)_pz.bLL+=parseFloat(_lz.gameRules.liabilities[_pz.lB0].amount)
						_lz.gameRules.liabilities[_pz.lB0].duration--
					}else _lz.gameRules.liabilities=deleteArray(_lz.gameRules.liabilities,_pz.lB0)
				}
				if(parseFloat(fmCur($('#walletAmount').text()))>_pz.bLL){
					$('#walletAmount').text(iCommas((parseFloat(fmCur($('#walletAmount').text()))-_pz.bLL).toFixed(2)))
					loadAudio('game','complete',1,false,true)
					showDialog('payment.png','<strong>LIABILITIES</strong> your liability total bill <strong>υς'+iCommas(_pz.bLL.toFixed(2))+'</strong> will be deducted from your wallet','','Dismiss')
				}else financialDefault()
			}
		}else{
			_lz.gameRules.liability.timer--
			// Market wave
			if(_lz.gameRules.liabilities!==undefined){
				for(_pz.lB0=0;_pz.lB0<_lz.gameRules.liabilities.length;_pz.lB0++){
					_lz.gameRules.liabilities[_pz.lB0].amount*=(_pz.iNf+4)/5
				}
			}
		}
		// Debt
		if(_lz.gameRules.interest.timer<0){
			_lz.gameRules.interest.timer=_lz.gameRules.interest.cycle
			if(_lz.gameRules.debt!==undefined){
				_pz.lON=0
				for(_pz.lN0=0;_pz.lN0<_lz.gameRules.debt.length;_pz.lN0++){
					if(_lz.gameRules.debt[_pz.lN0].duration>0){
						if(_lz.gameRules.debt[_pz.lN0].amount!==undefined)_pz.lON+=parseFloat(_lz.gameRules.debt[_pz.lN0].amount)
						_lz.gameRules.debt[_pz.lN0].duration--
					}else _lz.gameRules.debt=deleteArray(_lz.gameRules.debt,_pz.lN0)
				}
				if(parseFloat(fmCur($('#walletAmount').text()))>_pz.lON){
					$('#walletAmount').text(iCommas((parseFloat(fmCur($('#walletAmount').text()))-_pz.lON).toFixed(2)))
					loadAudio('game','complete',1,false,true)
					showDialog('iagree.png','<strong>LIABILITIES</strong> your debt total <strong>υς'+iCommas(_pz.lON.toFixed(2))+'</strong> will be deducted from your wallet','','Dismiss')
				}else financialDefault()
			}
		}else _lz.gameRules.interest.timer--
		// One time payment
		if(_lz.gameRules.payOutAmount!==undefined&&_lz.gameRules.payOutAmount>0){
			if(parseFloat(fmCur($('#walletAmount').text()))>_lz.gameRules.payOutAmount){
				$('#walletAmount').text(iCommas((parseFloat(fmCur($('#walletAmount').text()))-_lz.gameRules.payOutAmount).toFixed(2)))
			}else{
				financialDefault()
				$('#walletAmount').text('0.00')
				_lz.gameRules.bankAccount.savings=0
				_lz.gameRules.opportunity=undefined
				delete _lz.gameRules.work
				delete _lz.gameRules.job
				delete _lz.gameRules.loan
			}
			_lz.gameRules.payOutAmount=0
		}
		// One time cash in
		if(_lz.gameRules.sellOutAmount>0)$('#tradingAmount').html(iCommas(_lz.gameRules.sellOutAmount.toFixed(2)))
		if(_lz.gameRules.sellOutAmount!==undefined&&_lz.gameRules.sellOutAmount>0&&Math.floor(Math.random()*_lz.gameRules.sellOutChance.floor)==Math.floor(Math.random()*_lz.gameRules.sellOutChance.ceiling)){
			_lz.gameRules.bankAccount.savings=(parseFloat(_lz.gameRules.bankAccount.savings)+_lz.gameRules.sellOutAmount).toFixed(2)
			loadAudio('game','complete',1,false,true)
			showDialog('payment.png','<strong>CASH IN</strong> you have cashed in <strong>υς'+iCommas(_lz.gameRules.sellOutAmount.toFixed(2))+'</strong>','','Dismiss')
			_lz.gameRules.sellOutAmount=0
			$('#tradingAmount').html('0.00')
		}
		// Salary change
		if(_lz.gameRules.work!==undefined&&Math.floor(Math.random()*_lz.gameRules.salaryChance.floor)==Math.floor(Math.random()*_lz.gameRules.salaryChance.ceiling)){
			_pz.wF0=randomString([
				'WORK','JOB','PROFESSION'
			])
			_pz.wF1=randomString([
				'tardy','lazy','slagish','failing','forgetting','making mistake','losing','fighting','rude'
			])
			if(Math.floor(Math.random()*10)==1){
				loadAudio('interface','errormessage',1,false,true)
				showDialog('job.png',`<strong>FIRED FROM `+_pz.wF0+`</strong><br> You have been `+_pz.wF1+` on your `+_pz.wF0.toLowerCase()+`, your employeer has decided to let you go`,'','Dismiss')
				_lz.gameRules.work=_lz.gameRules.job=undefined
			}else if(Math.floor(Math.random()*5)==1){
				loadAudio('interface','errormessage',1,false,true)
				showDialog('job.png',`<strong>DEMOTED FROM `+_pz.wF0+`</strong><br> You have been `+_pz.wF1+` on your `+_pz.wF0.toLowerCase()+`, your employeer has demoted you`,'','Dismiss')
				_lz.gameRules.work.salary*=Math.floor(Math.random()*50)/100
			}else{
				loadAudio('game','complete',1,false,true)
				showDialog('job.png',`<strong>PROMOTED ON `+_pz.wF0+`</strong><br> You have been doing well on your `+_pz.wF0.toLowerCase()+`, your employeer has promoted you`,'','Dismiss')
				_lz.gameRules.work.salary*=Math.floor(Math.random()*50)/100+1
			}
		}
		// Activity
		if(_ez.activityAnimation!==undefined){
			if(_ez.activityAnimation.act!==undefined){
				if(_ez.activityAnimation.duration===undefined){
					_pz.dR0=_ez.objectActivity[_ez.objectSelect].activity.duration[_ez.objectActivity[_ez.objectSelect].index].split('-')
					_ez.activityAnimation.duration=(Math.floor(Math.random()*(parseFloat(_pz.dR0[1])-parseFloat(_pz.dR0[0])))+parseFloat(_pz.dR0[0]))/10
				}
				if(_ez.activityAnimation.duration>_ez.activityAnimation.counter){
					showProgress(_ez.activityAnimation.counter/_ez.activityAnimation.duration*100+'%',_ez.activityAnimation.color,_ez.activityAnimation.description,false)
					_ez.activityAnimation.counter+=Math.floor(Math.random()*10)/10*(parseFloat($('#healthFill').css('width'))/parseFloat($('#healthBar').css('width'))+parseFloat($('#staminaFill').css('width'))/parseFloat($('#staminaBar').css('width')))/2
				}else completeAction(_ez.activityAnimation.type)
			}else completeAction(type)
			_pz.aT0=100
		}else _pz.aT0=1000
	}catch(err){}
	if(isNaN($('#walletAmount').text()))getWalletAmount()
	checkACRequired()
	setTimeout(function(){
		updateActivities()
	},_pz.aT0)
}
// Get wallet amount
function getWalletAmount(){
	if(lsRd('walletAmount'+myUserID.uid)!=null)$('#walletAmount').text(iCommas(deSuStr(lsRd('walletAmount'+myUserID.uid))))
}
// Halt activity
function haltActivity(){
	if(_ez.activityAnimation!==undefined){
		_ez.objectActivity[_ez.objectSelect].activity.continue[_ez.objectActivity[_ez.objectSelect].index]=_ez.activityAnimation.counter
		delete _ez.activityAnimation
	}
}
// ==== HEALTH ====
// Hospitalize me
function hospitalizeMeOption(t0){
	if(_lz.gameRules.mortal){
		showDialog('hospital.png','You have been badly hurted! Do you need hospitalization?',
		`if(_lz.reSpawn==null){
			setHealthStamina(['health','stamina'],300)
			opSleep()
		}else{
			_cz.onfloor[_lz.index]=_mz.loadMode=true
			$('#'+_ez.tCanvas.id+'-cont').fadeTo('slow',.05,function(){
				getSpawnPosition(_lz.reSpawn,null)
				setMyPosition(_lz.index,300)
			})
		}`,'Hospitalize',null,null,t0)
		loadAudio('game','failedfakeout',.35,false,true)
	}else reviveMe()
}
// Wake me up
function wakeMeUp(){
	showDialog('injection.png','You have suffered injuries. Would you like to be admitted for health recovery?',
	`updateProximity(null)
	if(_ez.objectSelect){
		if(_ez.objectActivity[_ez.objectSelect].amount!==undefined){
			if(_lz.gameRules.liabilities===undefined)_lz.gameRules.liabilities=[]
			_lz.gameRules.liabilities.push({type:'Health insurance',duration:12,amount:_ez.objectActivity[_ez.objectSelect].amount*Math.floor(Math.random()*90+10)/10})
			opSleep()
		}else opSleep(true)
	}else showDialog('hospital.png','Unable to secure a hospital bed for you!','opSleep(true)','Dismiss',null,null,600)
	setTimeout(function(){updateProximity(null)},2400)
	`,'Admit',null,null,1200)
}
// Financial default
function financialDefault(){
	if(_ez.sound)loadAudio('game',randomString(['saddefeat']),1,false,true)
	activityAnimation(randomString(['Defeat']),_lz.index)
	showLoudMessage(`Bankruptcy<br><span style="font-size:4vh">You Failed!<span>`)
	showMenu()
}
// Show loud message
function showLoudMessage(msg,mT0){
	showTouchControls(false)
	_pz.pSC0=orientation==90?_lz.pageScale.landscape:_lz.pageScale.portrait
	$('#loudICON').html(`<img src="assets/images/loud.png" style="`+(orientation==90?(`max-height`+(76/_pz.pSC0)+`vh`):(`max-width`+(76/_pz.pSC0)+`vw`))+`;opacity:.86"/>`)
	$('#loudICON').fadeIn('fast')
	$('#centerMessage').css('font-size',orientation==90?(5/_pz.pSC0+'vw'):(5/_pz.pSC0+'vh'))
	$('#centerTagMsg').css('font-size',orientation==90?(4/_pz.pSC0+'vw'):(4/_pz.pSC0+'vh'))
	$('#centerMessage').html(msg)
	$('#centerMessage').fadeIn('fast')
	if(mT0)setTimeout(function(){
		$('#loudICON').fadeOut('slow')
		$('#centerMessage').fadeOut('slow')
		opLeaderBoard()
		_pz.allLevels=allLevels(lsRd('serviceWorker'))
		for(_pz.aL0=0;_pz.aL0<_pz.allLevels.length;_pz.aL0++){
			if(_pz.allLevels[_pz.aL0].levelName==_lz.levelName&&_pz.aL0<_pz.allLevels.length-1){
				nextLevelIndex=_pz.aL0+1
				setTimeout(function(){
					showDialog('myObjective.png','Do you want to load the next level <strong>'+allLevels(lsRd('serviceWorker'))[nextLevelIndex].title+'</strong>?',`reloadLevel(allLevels(lsRd('serviceWorker'))[nextLevelIndex].levelName)`,'Next')
				},8600)
				continue
			}
		}
	},mT0)
}
// Activity animation
function activityAnimation(act,index,hS0){
	if(_mz.driveVehicleIndex[index]==null)loadFBXAnim(act+'.fbx',_ez.scene.children[_mz.meshIndex[index]],index,false,true)
	if(act.match(/(Dying|FlatImpact)/)){
		_cz.alive[index]=false
		if(hS0&&_lz.index==index)setHealthStamina(['health','stamina'],0)
	}
	_pz.pP0=getBodyByID(_cz.physics[index])
	if(act=='FallingFlatImpact')_pz.pP0.velocity.y=-_pz.pP0.velocity.y/5
	act=index=hS0=undefined
}
// Set health & stamina
function setHealthStamina(c0,a0){
	if(c0.includes('health'))$('#healthFill').css('width',Math.floor(Math.random()*a0)+'%')
	if(c0.includes('stamina'))$('#staminaFill').css('width',Math.floor(Math.random()*a0)+'%')
}
// Break loop when loading failed
function breakLoop(){
	if(_cz.alive[_lz.index]&&_mz.loaded==0){
		if(_lz.deadLoop===undefined)_lz.deadLoop=0
		if(_lz.deadLoop>_lz.maxDeadLoop&&$('#dialogWindow').css('display')=='none'){
			_lz.deadLoop=0
			delete _ez.resumeUpdateParameters
			delete _ez.updateObjectsBusy
			_ez.world.removeBodyEvent=null
			deadExitOption(30,true)
		}else _lz.deadLoop++
	}
}
// Update completed
function isUpdateCompleted(){
	if(_ez.updateObjectsBusy===undefined){
		if(_ez.updateCounter>_lz.updateDelay.loading){
			showProgress('100%','#3DCFFF','Loaded.',false)
			$('#loadingBar').fadeOut('slow')
		}
		if(_ez.updateCounter>_lz.updateDelay.reload)updateModels(0,false)
		_ez.renderer.renderLists.dispose()
		_ez.renderer.info.reset()
		_ez.renderer.update=true
  }else{
		_ez.updateCounter++
		if(_ez.updateCounter>=_lz.updateDelay.loading)showProgress(_ez.updateCounter+'%','#3DCFFF','Loading...',_ez.updateCounter==_lz.updateDelay.loading)
    setTimeout(isUpdateCompleted,1000/60)
	}
}
// Dead exit option
function deadExitOption(t0,mER){
	if(_mz.loaded==0){
		if(t0){
			loadAudio('game','burningcicadagreyroom',.5,false,true)
			_lz.mortality='dead'
			if(_mz.meshIndex!==undefined){
				savePosition(_lz.index)
				if(!meAndF&&_cz.stickState=='avatar'){
					if(!mER){
						activityAnimation(randomString(['FallingFlatImpact','DyingBackwards','Dying']),_lz.index)
					}else activityAnimation(randomString(['Defeat']),_lz.index)
				}
			}
			m0=`, for not having `+randomString(['good','enough','vital','medical','physical','psychological'])+` `+randomString(['vacation','rest','sleep','relaxation','revitalization'])
			f0=`reloadLevel(_lz.levelName)`
			b0='Replay'
			lsSv('lowSpec',true)
		}else{
			m0=`, because of `+randomString(['being deprived','denying','lack of','depriving','not having','not giving'])+` medical attentions`
			f0=`if(meAndF&&isOnL()){
				loadAudio('loop','sleeptalking',0,false,false)
				loadAudio('game','saddefeat',0,false,false)
				loadAudio('game','death',0,false,false)
				_lz.gameRules.process={
					reward:'revive'
				}
				requestRewardedAds(900)
			}else reviveMe()`
			b0='Revive'
		}
		stopWalkSound()
		if(mER){
			showDialog('jail.png',
			`You are `+randomString(['under arrest','arrested','held','detained','stopped','halted'])+`, for `+randomString(['displaying','exhibiting','showing','implementing','doing','influencing'])+` `+randomString(['suspecious','bad','advantagious','unwanted','destructive','infectious'])+` `+randomString(['attitude','beaviour','acts','conducts','politics','plans'])+`, that may `+randomString(['ruin','infect','destroy','break','crash','stop'])+` the `+randomString(['system','program','rules','law','constrain','scope'])+` of `+randomString(['physics','experience','this world','the island','virtual city','virtual tours'])+``,f0,`Replay`,null,null,600)
		}else showDialog('rip.png',
		`Your avatar has suffered `+randomString(['drowning in','extreme','accute','mild','chronic','severe'])+' '+randomString(['pain','suffocation','exhaustion','concussion'])+` & `+randomString(['died','collapsed','passed out','fainted'])+m0,f0,b0,null,null,t0)
		showMenu()
	}else setTimeout(function(){deadExitOption(t0)},3600)
}
// Revive avatar
function reviveMe(){
	showIndicators()
	setHealthStamina(['health','stamina'],300)
	createTouchButton('softbuttonclick',_ez.bottomIcon?'bottomLeftSecondIcon':'actionRightIconA',{icon:'ti-alarm-clock',name:'wakeUp'},undefined,'icon','actbeneficial.gif',.36)
	loadAudio('loop','sleeptalking',1,true,true,_ez.scene.children[_mz.objMeshIndex[_lz.index]])
	$('#stickLEFT').fadeIn('fast')
	$('#stickRIGHT').fadeIn('fast')
}
