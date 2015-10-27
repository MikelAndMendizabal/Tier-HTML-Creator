function toggleReward(rew_inf,rew,rew_img,arrow)
{
    var reward_info = document.getElementById(rew_inf);
    var reward = document.getElementById(rew);
    var reward_img = document.getElementsByClassName(rew_img);
    var arrow = document.getElementById(arrow);

    if (reward_info.classList.contains('hidden')) {
      reward_info.classList.remove('hidden');
      reward_info.classList.add('show');
    } else {
      reward_info.classList.remove('show');
      reward_info.classList.add('hidden');
    }

    if (reward.classList.contains('unselected')) {
      reward.classList.add('selected');
      reward.classList.remove('unselected');
      reward_img[0].classList.add('ani_pulse');
      if(reward_img.length>=2)
        for(var i=0; i<reward_img.length; i++){
          reward_img[i].classList.add('ani_pulse');
        }
    } else {
      reward.classList.add('unselected');
      reward.classList.remove('selected');
      reward_img[0].classList.remove('ani_pulse');
      if(reward_img.length>=2)
        for(var i=0; i<reward_img.length; i++){
          reward_img[i].classList.remove('ani_pulse');
        }
    }

    if (arrow.classList.contains('arrow_on')) {
      arrow.classList.add('arrow_off');
      arrow.classList.remove('arrow_on');
    } else {
      arrow.classList.add('arrow_on');
      arrow.classList.remove('arrow_off');
    }
}

function toggleSmallReward(rewards_small,rew1,rew2)
{
    var rewards = document.getElementById(rewards_small);
    var reward1 = document.getElementById(rew1);
    var reward2 = document.getElementById(rew2);

    if (reward1.classList.contains('show') || reward2.classList.contains('show')) {
      rewards.classList.remove('hidden');
      rewards.classList.add('show');
    } else {
      rewards.classList.remove('show');
      rewards.classList.add('hidden');
    }
}

function toggleAni(arrow)
{
    var arrow = document.getElementById(arrow);

    if (arrow.classList.contains('ani_shake')) {
      arrow.classList.remove('ani_shake');
    } else {
      arrow.classList.add('ani_shake');
    }

}

function load(){
  $.getJSON("tiers.json", function(tiers) {
    console.log(tiers); // console test
var dropdownid=100;
var i;
var itemnum=1;
var packagesize=0;
var tiernum=1;
var tiercount='Tier'+' '+tiernum;
var nexttier='Tier'+' '+(tiernum+1);
var bonustiercount='Bonus Tier'+' '+tiernum;
var nextbonustiercount='Bonus Tier'+' '+(tiernum+1);
var iDiv;

for(i=0;i<tiers.length;i++)
{
  if((tiercount==tiers[i].tier)&&(tiers[i].number==1))
  {
  	iDiv = document.createElement('div');
    iDiv.id = tiercount.replace(/\s+/g, '');
    iDiv.className = 'TierCode';
    document.getElementById('container').appendChild(iDiv);
    iDiv.innerHTML = '&lt;div id=&quot;tier&quot;&gt;&lt;h1 id=&quot;h1&quot;&gt;'+tiers[i].tier+'&lt;/h1&gt;&lt;div class=&quot;price&quot;&gt;&lt;p&gt;'+tiers[i].price+'&lt;/p&gt;&lt;/div&gt;&lt;h2 id=&quot;h2&quot;&gt;'+tiers[i].text+'&lt;/h2&gt;&lt;/div&gt;';
    
  	$("#container").append('<div id="tier"><h1 id="h1">'+tiers[i].tier+'</h1><div class="price"><p>'+tiers[i].price+'</p></div><h2 id="h2">'+tiers[i].text+'</h2></div>');
  	tiercount= 'Tier'+' '+tiernum;
  	bonustiercount= 'Bonus Tier'+' '+tiernum;
  	nextbonustiercount='Bonus Tier'+' '+(tiernum+1);
  	nexttier='Tier'+' '+(tiernum+1);
  	
  	tiernum++;
  
  } 
  else if((nexttier==tiers[i].tier)&&(tiers[i].number==1))
  {
    iDiv.innerHTML =iDiv.innerHTML + '&lt;/div&gt;';
    
    tiercount= 'Tier'+' '+tiernum;
    nexttier='Tier'+' '+(tiernum+1);
    nextbonustiercount='Bonus Tier'+' '+(tiernum+1);
    bonustiercount= 'Bonus Tier'+' '+tiernum;
    
    iDiv = document.createElement('div');
    iDiv.id = tiercount.replace(/\s+/g, '');
    iDiv.className = 'TierCode';
    document.getElementById('container').appendChild(iDiv);
    iDiv.innerHTML = '&lt;div id=&quot;tier&quot;&gt;&lt;h1 id=&quot;h1&quot;&gt;'+tiers[i].tier+'&lt;/h1&gt;&lt;div class=&quot;price&quot;&gt;&lt;p&gt;'+tiers[i].price+'&lt;/p&gt;&lt;/div&gt;&lt;h2 id=&quot;h2&quot;&gt;'+tiers[i].text+'&lt;/h2&gt;&lt;/div&gt;';

    $("#container").append('<div id="tier"><h1 id="h1">'+tiers[i].tier+'</h1><div class="price"><p>'+tiers[i].price+'</p></div><h2 id="h2">'+tiers[i].text+'</h2></div>');
    
    tiernum++;
  }
  
  else if((bonustiercount==tiers[i].tier)&&(tiers[i].number==1))
  {
  	iDiv.innerHTML =iDiv.innerHTML + '&lt;/div&gt;';
  	
  	iDiv = document.createElement('div');
    iDiv.id = bonustiercount.replace(/\s+/g, '');
    iDiv.className = 'TierCode';
    document.getElementById('container').appendChild(iDiv);
    iDiv.innerHTML = '&lt;div id=&quot;tier&quot;&gt;&lt;h1 id=&quot;h1&quot;&gt;'+tiers[i].tier+'&lt;/h1&gt;&lt;div class=&quot;price&quot;&gt;&lt;p&gt;'+tiers[i].price+'&lt;/p&gt;&lt;/div&gt;&lt;h2 id=&quot;h2&quot;&gt;'+tiers[i].text+'&lt;/h2&gt;&lt;/div&gt;';
  	
  	$("#container").append('<div id="tier"><h1 id="h1">'+tiers[i].tier+'</h1><div class="price"><p>'+tiers[i].price+'</p></div><h2 id="h2">'+tiers[i].text+'</h2></div>');
  	
  	bonustiercount= 'Bonus Tier'+' '+tiernum;
  	nextbonustiercount='Bonus Tier'+' '+(tiernum+1);
    tiernum++; 
  } 
  else if((nextbonustiercount==tiers[i].tier)&&(tiers[i].number==1))
  {
    iDiv.innerHTML =iDiv.innerHTML + '&lt;/div&gt;';
   
    bonustiercount= 'Bonus Tier'+' '+tiernum;
    nextbonustiercount='Bonus Tier'+' '+(tiernum+1);
   
    iDiv = document.createElement('div');
    iDiv.id = bonustiercount.replace(/\s+/g, '');
    iDiv.className = 'TierCode';
    document.getElementById('container').appendChild(iDiv);
    iDiv.innerHTML = '&lt;div id=&quot;tier&quot;&gt;&lt;h1 id=&quot;h1&quot;&gt;'+tiers[i].tier+'&lt;/h1&gt;&lt;div class=&quot;price&quot;&gt;&lt;p&gt;'+tiers[i].price+'&lt;/p&gt;&lt;/div&gt;&lt;h2 id=&quot;h2&quot;&gt;'+tiers[i].text+'&lt;/h2&gt;&lt;/div&gt;';
   
    $("#container").append('<div id="tier"><h1 id="h1">'+tiers[i].tier+'</h1><div class="price"><p>'+tiers[i].price+'</p></div><h2 id="h2">'+tiers[i].text+'</h2></div>');
     
    tiernum++;
  }
  
  //when type is normal
  if(tiers[i].type=='Normal')
  {
  	     
    //when boxtype is long
    if(tiers[i].boxtype=='Long')
    {
    	//when boxcolor is blue
       if(tiers[i].boxcolor=='Blue')
        {
        	if((tiers[i].highlighttype=='None')&&(tiers[i].dropdown=='No Drop')&&(tiers[i].openclosed=='Starts open')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
         {
         $("#container").append('<!-- Special Reward 1 --><div class="reward selected rew_special r_blue" id="reward_s1"><img alt="" class="rewards1_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><div class="reward_info show" id="reward_info_s1"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" class="ani_pulseon" id="rewards1_img" src="'+tiers[i].icon+'"/><p>'+tiers[i].description+'</div></div>');
         iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Special Reward 1 --&gt;&lt;div class=&quot;reward selected rew_special r_blue&quot; id=&quot;reward_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward_info show&quot; id=&quot;reward_info_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; class=&quot;ani_pulseon&quot; id=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot;/&gt;&lt;p&gt;'+tiers[i].description+'&lt;/div&gt;&lt;/div&gt;';
         }
          else if((tiers[i].highlighttype=='Recommended')&&(tiers[i].dropdown=='No Drop')&&(tiers[i].openclosed=='Starts open')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Special Reward 1 --><div class="reward selected rew_special r_blue" id="reward_s1"><img alt="" class="rewards1_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3><div class="reward_recommended"></div></div><div class="reward_info show" id="reward_info_s1"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" class="ani_pulseon" id="rewards1_img" src="'+tiers[i].icon+'"/><p>'+tiers[i].description+'</div></div>');
          iDiv.innerHTML =iDiv.innerHTML +'&lt;!-- Special Reward 1 --&gt;&lt;div class=&quot;reward selected rew_special r_blue&quot; id=&quot;reward_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward_info show&quot; id=&quot;reward_info_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; class=&quot;ani_pulseon&quot; id=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot;/&gt;&lt;p&gt;'+tiers[i].description+'&lt;/div&gt;&lt;/div&gt;';
          }
          else if((tiers[i].highlighttype=='New')&&(tiers[i].dropdown=='No Drop')&&(tiers[i].openclosed=='Starts open')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Special Reward 1 --><div class="reward selected rew_special r_blue" id="reward_s1"><img alt="" class="rewards1_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3><div class="reward_new ani_pulse2on"></div></div><div class="reward_info show" id="reward_info_s1"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" class="ani_pulseon" id="rewards1_img" src="'+tiers[i].icon+'"/><p>'+tiers[i].description+'</div></div>');
          iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Special Reward 1 --&gt;&lt;div class=&quot;reward selected rew_special r_blue&quot; id=&quot;reward_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;div class=&quot;reward_new ani_pulse2on&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info show&quot; id=&quot;reward_info_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; class=&quot;ani_pulseon&quot; id=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot;/&gt;&lt;p&gt;'+tiers[i].description+'&lt;/div&gt;&lt;/div&gt;';
          }
          else if((tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='No Drop')&&(tiers[i].openclosed=='Starts open')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Special Reward 1 --><div class="reward selected rew_special r_blue" id="reward_s1"><img alt="" class="rewards1_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3><div class="reward_recommended"></div><div class="reward_new ani_pulse2on"></div></div><div class="reward_info show" id="reward_info_s1"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" class="ani_pulseon" id="rewards1_img" src="'+tiers[i].icon+'"/><p>'+tiers[i].description+'</div></div>');
          iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Special Reward 1 --&gt;&lt;div class=&quot;reward selected rew_special r_blue&quot; id=&quot;reward_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;div class=&quot;reward_recommended&quot;&gt;&lt;/div&gt;&lt;div class=&quot;reward_new ani_pulse2on&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info show&quot; id=&quot;reward_info_s1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; class=&quot;ani_pulseon&quot; id=&quot;rewards1_img&quot; src=&quot;'+tiers[i].icon+'&quot;/&gt;&lt;p&gt;'+tiers[i].description+'&lt;/div&gt;&lt;/div&gt;';
          }
          else if((tiers[i].highlighttype=='None')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Reward 1 --><div class="reward unselected rew_hover r_blue" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'">&nbsp;</div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><p>'+tiers[i].description+'</p></div></div>');
          iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 1 --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&amp;nbsp;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
          dropdownid++;
          }
          else if((tiers[i].highlighttype=='Recommended')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Reward 1 --><div class="reward unselected rew_hover r_blue" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'">&nbsp;</div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3><div class="reward_recommended"></div></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><p>'+tiers[i].description+'</p></div></div>');
          iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 1 --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&amp;nbsp;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;div class=&quot;reward_recommended&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
           dropdownid++;
          }
          else if((tiers[i].highlighttype=='New')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Reward 1 --><div class="reward unselected rew_hover r_blue" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'">&nbsp;</div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3><div class="reward_new"></div></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><p>'+tiers[i].description+'</p></div></div>');
          iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 1 --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&amp;nbsp;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;div class=&quot;reward_new&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
           dropdownid++;
          }
          else if((tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
          {
          $("#container").append('<!-- Reward 1 --><div class="reward unselected rew_hover r_blue" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'">&nbsp;</div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3><div class="reward_recommended"></div><div class="reward_new ani_pulse2on"></div></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">'+tiers[i].itemname+'</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><p>'+tiers[i].description+'</p></div></div>');
          iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 1 --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&amp;nbsp;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;div class=&quot;reward_recommended&quot;&gt;&lt;/div&gt;&lt;div class=&quot;reward_new ani_pulse2on&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
           dropdownid++;
          }
          //when screeenshottype is Whole
          else if((tiers[i].highlighttype=='None')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Whole')&&(tiers[i].descriptionornot=='No'))     
          {
             $("#container").append('<!-- Reward 12 -- Example big picture description --><div id="reward'+dropdownid+'" class="reward unselected rew_hover r_blue" onmouseover="toggleAni(\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')"><div id="arrow'+dropdownid+'" class="arrow arrow_on"></div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'"><h3>'+tiers[i].itemname+'</h3></div><div id="reward_info'+dropdownid+'" class="reward_info hidden"><img class="reward_img_big" alt="" src="'+tiers[i].screenshot+'"></div>');
         iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 12 -- Example big picture description --&gt;&lt;div id=&quot;reward'+dropdownid+'&quot; class=&quot;reward unselected rew_hover r_blue&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot;&gt;&lt;div id=&quot;arrow'+dropdownid+'&quot; class=&quot;arrow arrow_on&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot;&gt;&lt;h3&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;div id=&quot;reward_info'+dropdownid+'&quot; class=&quot;reward_info hidden&quot;&gt;&lt;img class=&quot;reward_img_big&quot; alt=&quot;&quot; src=&quot;'+tiers[i].screenshot+'&quot;&gt;&lt;/div&gt;';
          dropdownid++;
            }
    
     }
    }
    
    //when boxtype is GM Service
    else if(tiers[i].boxtype=='GM Service')
    {
        if((tiers[i].boxcolor=='Gold')&&(tiers[i].highlighttype=='New')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='None')&&(tiers[i].descriptionornot=='No'))     
        {
        $("#container").append('<!-- Reward 6 -- Example GM Service --><div class="reward unselected rew_hover r_gold" id="reward6" onclick="toggleReward(\'reward_info6\',\'reward6\',\'reward6_img\',\'arrow6\')" onmouseout="toggleAni(\'arrow6\')" onmouseover="toggleAni(\'arrow6\')"><div class="r_arrow arrow_on" id="arrow6"></div><img alt="" class="reward6_img" src="'+tiers[i].icon+'" /><h3 id="h3">GM Service</h3><div class="reward_new ani_pulse2on"></div></div><div class="reward_info hidden" id="reward_info6"><div class="reward_info_details reward_service"><h4 id="h4">'+tiers[i].itemname+'</h4><p>You can ask for any already released item & they are gift-able.</p><p style="font-size:16px; text-shadow: none; color: #496C5E;">Not including: Items released after the June Tiered Spender was released don’t apply. No Full Key or key Fragment.</p><p style="font-size:16px">Simply fill in the following form to request your Item, in case you wish to gift it to a friend, you’ll have the opportunity to put in the account name of the lucky player in the form too.</p><div id="reward_button"><a href="https://docs.google.com/forms/d/1d4SgT2xQ5LtqpO66wWZnjmGLePBW1MiQ3B0S_V1NJ-o/viewform?c=0&w=1">Click here</a></div></div></div>');
        iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 6 -- Example GM Service --&gt;&lt;div class=&quot;reward unselected rew_hover r_gold&quot; id=&quot;reward6&quot; onclick=&quot;toggleReward(\'reward_info6\',\'reward6\',\'reward6_img\',\'arrow6\')&quot; onmouseout=&quot;toggleAni(\'arrow6\')&quot; onmouseover=&quot;toggleAni(\'arrow6\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow6&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward6_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;GM Service&lt;/h3&gt;&lt;div class=&quot;reward_new ani_pulse2on&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info6&quot;&gt;&lt;div class=&quot;reward_info_details reward_service&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;p&gt;You can ask for any already released item &amp; they are gift-able.&lt;/p&gt;&lt;p style=&quot;font-size:16px; text-shadow: none; color: #496C5E;&quot;&gt;Not including: Items released after the June Tiered Spender was released don&rsquo;t apply. No Full Key or key Fragment.&lt;/p&gt;&lt;p style=&quot;font-size:16px&quot;&gt;Simply fill in the following form to request your Item, in case you wish to gift it to a friend, you&rsquo;ll have the opportunity to put in the account name of the lucky player in the form too.&lt;/p&gt;&lt;div id=&quot;reward_button&quot;&gt;&lt;a href=&quot;https://docs.google.com/forms/d/1d4SgT2xQ5LtqpO66wWZnjmGLePBW1MiQ3B0S_V1NJ-o/viewform?c=0&amp;w=1&quot;&gt;Click here&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';
        }
        else if((tiers[i].boxcolor=='Gold')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='None')&&(tiers[i].descriptionornot=='No'))     
        {
        $("#container").append('<!-- Reward 6 -- Example GM Service --><div class="reward unselected rew_hover r_gold" id="reward6" onclick="toggleReward(\'reward_info6\',\'reward6\',\'reward6_img\',\'arrow6\')" onmouseout="toggleAni(\'arrow6\')" onmouseover="toggleAni(\'arrow6\')"><div class="r_arrow arrow_on" id="arrow6"></div><img alt="" class="reward6_img" src="'+tiers[i].icon+'" /><h3 id="h3">GM Service</h3><div class="reward_recommended"></div><div class="reward_new ani_pulse2on"></div></div><div class="reward_info hidden" id="reward_info6"><div class="reward_info_details reward_service"><h4 id="h4">'+tiers[i].itemname+'</h4><p>You can ask for any already released item & they are gift-able.</p><p style="font-size:16px; text-shadow: none; color: #496C5E;">Not including: Items released after the June Tiered Spender was released don’t apply. No Full Key or key Fragment.</p><p style="font-size:16px">Simply fill in the following form to request your Item, in case you wish to gift it to a friend, you’ll have the opportunity to put in the account name of the lucky player in the form too.</p><div id="reward_button"><a href="https://docs.google.com/forms/d/1d4SgT2xQ5LtqpO66wWZnjmGLePBW1MiQ3B0S_V1NJ-o/viewform?c=0&w=1">Click here</a></div></div></div>');
        iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 6 -- Example GM Service --&gt;&lt;div class=&quot;reward unselected rew_hover r_gold&quot; id=&quot;reward6&quot; onclick=&quot;toggleReward(\'reward_info6\',\'reward6\',\'reward6_img\',\'arrow6\')&quot; onmouseout=&quot;toggleAni(\'arrow6\')&quot; onmouseover=&quot;toggleAni(\'arrow6\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow6&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward6_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;GM Service&lt;/h3&gt;&lt;div class=&quot;reward_recommended&quot;&gt;&lt;/div&gt;&lt;div class=&quot;reward_new ani_pulse2on&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info6&quot;&gt;&lt;div class=&quot;reward_info_details reward_service&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;p&gt;You can ask for any already released item &amp; they are gift-able.&lt;/p&gt;&lt;p style=&quot;font-size:16px; text-shadow: none; color: #496C5E;&quot;&gt;Not including: Items released after the June Tiered Spender was released don&rsquo;t apply. No Full Key or key Fragment.&lt;/p&gt;&lt;p style=&quot;font-size:16px&quot;&gt;Simply fill in the following form to request your Item, in case you wish to gift it to a friend, you&rsquo;ll have the opportunity to put in the account name of the lucky player in the form too.&lt;/p&gt;&lt;div id=&quot;reward_button&quot;&gt;&lt;a href=&quot;https://docs.google.com/forms/d/1d4SgT2xQ5LtqpO66wWZnjmGLePBW1MiQ3B0S_V1NJ-o/viewform?c=0&amp;w=1&quot;&gt;Click here&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';
        }
         else if((tiers[i].boxcolor=='Gold')&&(tiers[i].highlighttype=='Recommended')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='None')&&(tiers[i].descriptionornot=='No'))     
        {
        $("#container").append('<!-- Reward 6 -- Example GM Service --><div class="reward unselected rew_hover r_gold" id="reward6" onclick="toggleReward(\'reward_info6\',\'reward6\',\'reward6_img\',\'arrow6\')" onmouseout="toggleAni(\'arrow6\')" onmouseover="toggleAni(\'arrow6\')"><div class="r_arrow arrow_on" id="arrow6"></div><img alt="" class="reward6_img" src="'+tiers[i].icon+'" /><h3 id="h3">GM Service</h3><div class="reward_recommended"></div></div><div class="reward_info hidden" id="reward_info6"><div class="reward_info_details reward_service"><h4 id="h4">'+tiers[i].itemname+'</h4><p>You can ask for any already released item & they are gift-able.</p><p style="font-size:16px; text-shadow: none; color: #496C5E;">Not including: Items released after the June Tiered Spender was released don’t apply. No Full Key or key Fragment.</p><p style="font-size:16px">Simply fill in the following form to request your Item, in case you wish to gift it to a friend, you’ll have the opportunity to put in the account name of the lucky player in the form too.</p><div id="reward_button"><a href="https://docs.google.com/forms/d/1d4SgT2xQ5LtqpO66wWZnjmGLePBW1MiQ3B0S_V1NJ-o/viewform?c=0&w=1">Click here</a></div></div></div>');
        iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 6 -- Example GM Service --&gt;&lt;div class=&quot;reward unselected rew_hover r_gold&quot; id=&quot;reward6&quot; onclick=&quot;toggleReward(\'reward_info6\',\'reward6\',\'reward6_img\',\'arrow6\')&quot; onmouseout=&quot;toggleAni(\'arrow6\')&quot; onmouseover=&quot;toggleAni(\'arrow6\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow6&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward6_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;GM Service&lt;/h3&gt;&lt;div class=&quot;reward_recommended&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info6&quot;&gt;&lt;div class=&quot;reward_info_details reward_service&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i].itemname+'&lt;/h4&gt;&lt;p&gt;You can ask for any already released item &amp; they are gift-able.&lt;/p&gt;&lt;p style=&quot;font-size:16px; text-shadow: none; color: #496C5E;&quot;&gt;Not including: Items released after the June Tiered Spender was released don&rsquo;t apply. No Full Key or key Fragment.&lt;/p&gt;&lt;p style=&quot;font-size:16px&quot;&gt;Simply fill in the following form to request your Item, in case you wish to gift it to a friend, you&rsquo;ll have the opportunity to put in the account name of the lucky player in the form too.&lt;/p&gt;&lt;div id=&quot;reward_button&quot;&gt;&lt;a href=&quot;https://docs.google.com/forms/d/1d4SgT2xQ5LtqpO66wWZnjmGLePBW1MiQ3B0S_V1NJ-o/viewform?c=0&amp;w=1&quot;&gt;Click here&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';
        }
    }
  
  //when boxtype is Left Screen and the next one is Right Description
  else if((tiers[i].boxtype=='Left screen')&&(tiers[i+1].boxtype=='Right Description'))
  {
    
    if((tiers[i].boxcolor=='Grey')&&(tiers[i].highlighttype=='None')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='No'))     
      {
      $("#container").append('<!-- Reward 8 & 9 -- Example Small Rewards --><div class="reward rew_Half unselected rew_hover r_grey" id="reward8" onclick="toggleReward(\'reward_info8\',\'reward8\',\'reward8_img\',\'arrow8\'); toggleSmallReward(\'reward_info_Half8_9\',\'reward_info8\',\'reward_info9\')" onmouseout="toggleAni(\'arrow8\')" onmouseover="toggleAni(\'arrow8\')"><div class="r_arrow arrow_on" id="arrow8"></div><img alt="" class="reward8_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><div class="reward rew_Half2 unselected rew_hover r_grey" id="reward9" onclick="toggleReward(\'reward_info9\',\'reward9\',\'reward9_img\',\'arrow9\'); toggleSmallReward(\'reward_info_Half8_9\',\'reward_info9\',\'reward_info8\')" onmouseout="toggleAni(\'arrow9\')" onmouseover="toggleAni(\'arrow9\')"><div class="r_arrow arrow_on" id="arrow9"></div><img alt="" class="reward9_img" src="'+tiers[i+1].icon+'" /><h3 id="h3">'+tiers[i+1].itemname+'</h3></div><div class="reward_info_Halfs hidden" id="reward_info_Half8_9"><div class="reward_info reward_info_Half hidden" id="reward_info8"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /></div><div class="reward_info reward_info_Half2 hidden" id="reward_info9"><div class="reward_info_details reward_Half"><h4 id="h4">'+tiers[i+1].itemname+'</h4><img alt="" id="reward9_img" src="'+tiers[i+1].icon+'" /><p>'+tiers[i+1].description+'</p></div></div></div>');
      iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 8 &amp; 9 -- Example Small Rewards --&gt;&lt;div class=&quot;reward rew_Half unselected rew_hover r_grey&quot; id=&quot;reward8&quot; onclick=&quot;toggleReward(\'reward_info8\',\'reward8\',\'reward8_img\',\'arrow8\'); toggleSmallReward(\'reward_info_Half8_9\',\'reward_info8\',\'reward_info9\')&quot; onmouseout=&quot;toggleAni(\'arrow8\')&quot; onmouseover=&quot;toggleAni(\'arrow8\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow8&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward8_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward rew_Half2 unselected rew_hover r_grey&quot; id=&quot;reward9&quot; onclick=&quot;toggleReward(\'reward_info9\',\'reward9\',\'reward9_img\',\'arrow9\'); toggleSmallReward(\'reward_info_Half8_9\',\'reward_info9\',\'reward_info8\')&quot; onmouseout=&quot;toggleAni(\'arrow9\')&quot; onmouseover=&quot;toggleAni(\'arrow9\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow9&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward9_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i+1].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward_info_Halfs hidden&quot; id=&quot;reward_info_Half8_9&quot;&gt;&lt;div class=&quot;reward_info reward_info_Half hidden&quot; id=&quot;reward_info8&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;/div&gt;&lt;div class=&quot;reward_info reward_info_Half2 hidden&quot; id=&quot;reward_info9&quot;&gt;&lt;div class=&quot;reward_info_details reward_Half&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;'+tiers[i+1].itemname+'&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward9_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i+1].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';
      }
    i++;
  }
  //when boxtype is Left Description and the next one is Right Secreen
  else if((tiers[i].boxtype=='Left Description')&&(tiers[i+1].boxtype=='Right Screen'))
  {
    if((tiers[i].boxtype=='Left Description')&&(tiers[i].boxcolor=='Grey')&&(tiers[i].highlighttype=='None')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='None')&&(tiers[i].descriptionornot=='Yes'))     
      {
      
      }
    i++;
  }
  
}
  //when type is package
  else if(tiers[i].type=='Package')
  {
   //Check how many items are in the package
   var count=0;
   itemnum=tiers[i].number;
   for(j=i;j<(i+12);j++)
    {
      if(tiers[j].number==(itemnum+1)&&tiers[j].tier==tiercount)
      {
       packagesize=count; 
      }
     else if(tiers[j].number!=(itemnum+1)&&tiers[j].tier==tiercount)
      {
       count++; 
      }
    }
    if(packagesize==2)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
        $("#container").append('<!-- Reward 2 -- Example 2 Items --><div class="reward unselected rew_hover r_blue two_rewards" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'"></div><div class="two_rewards_r1"><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><p class="reward_plus" id="reward_plus">+</p><div class="two_rewards_r2"><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i+1].icon+'"/><h3 id="h3" style="left: 50px;">'+tiers[i+1].itemname+'</h3></div></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">Set Promotion</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /> <img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i+1].icon+'" /><p>'+tiers[i].description+'<br/>'+tiers[i+1].description+'</p></div></div>');
        iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 2 -- Example 2 Items --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue two_rewards&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&lt;/div&gt;&lt;div class=&quot;two_rewards_r1&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;'+tiers[i].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;p class=&quot;reward_plus&quot; id=&quot;reward_plus&quot;&gt;+&lt;/p&gt;&lt;div class=&quot;two_rewards_r2&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+1].icon+'&quot;/&gt;&lt;h3 id=&quot;h3&quot; style=&quot;left: 50px;&quot;&gt;'+tiers[i+1].itemname+'&lt;/h3&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;Set Promotion&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;br/&gt;'+tiers[i+1].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
      dropdownid++;
      }
    }
    else if(packagesize==3)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
         $("#container").append('<!-- Reward 3 -- Example 3 Items --><div class="reward unselected rew_hover r_blue more_rewards more_rewards3" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'"></div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /><p class="reward_plus" id="reward_plus">+</p><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i+1].icon+'" /><p class="reward_plus" id="reward_plus2">+</p><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i+2].icon+'" /><h3 id="h3">Set Promotion</h3></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">Set Promotion</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /> <img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i+1].icon+'" /><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i+2].icon+'" /><p>'+tiers[i].description+'<br />'+tiers[i+1].description+'<br />'+tiers[i+2].description+'</p></div></div>');
         iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 3 -- Example 3 Items --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue more_rewards more_rewards3&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt;&lt;p class=&quot;reward_plus&quot; id=&quot;reward_plus&quot;&gt;+&lt;/p&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt;&lt;p class=&quot;reward_plus&quot; id=&quot;reward_plus2&quot;&gt;+&lt;/p&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+2].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;Set Promotion&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;Set Promotion&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+2].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;br /&gt;'+tiers[i+1].description+'&lt;br /&gt;'+tiers[i+2].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;';
      dropdownid++;
      }
      
    }
    else if(packagesize==4)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
       $("#container").append('<!-- Reward 4 -- Example 4 Items --><div class="reward unselected rew_hover r_blue more_rewards more_rewards4" id="reward'+dropdownid+'" onclick="toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')" onmouseout="toggleAni(\'arrow'+dropdownid+'\')" onmouseover="toggleAni(\'arrow'+dropdownid+'\')"><div class="r_arrow arrow_on" id="arrow'+dropdownid+'"></div><img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /> <img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i+1].icon+'" /> <img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i+2].icon+'" /> <img alt="" class="reward'+dropdownid+'_img" src="'+tiers[i+3].icon+'" /><h3 id="h3">Set Promotion</h3></div><div class="reward_info hidden" id="reward_info'+dropdownid+'"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">Set Promotion</h4><img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i].icon+'" /> <img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i+1].icon+'" /> <img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i+2].icon+'" /> <img alt="" id="reward'+dropdownid+'_img" src="'+tiers[i+3].icon+'" /><p>'+tiers[i].description+'<br />'+tiers[i+1].description+'<br />'+tiers[i+2].description+'<br />'+tiers[i+3].description+'</p></div></div>');
       iDiv.innerHTML =iDiv.innerHTML + '&lt;!-- Reward 4 -- Example 4 Items --&gt;&lt;div class=&quot;reward unselected rew_hover r_blue more_rewards more_rewards4&quot; id=&quot;reward'+dropdownid+'&quot; onclick=&quot;toggleReward(\'reward_info'+dropdownid+'\',\'reward'+dropdownid+'\',\'reward'+dropdownid+'_img\',\'arrow'+dropdownid+'\')&quot; onmouseout=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot; onmouseover=&quot;toggleAni(\'arrow'+dropdownid+'\')&quot;&gt;&lt;div class=&quot;r_arrow arrow_on&quot; id=&quot;arrow'+dropdownid+'&quot;&gt;&lt;/div&gt;&lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+2].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; class=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+3].icon+'&quot; /&gt;&lt;h3 id=&quot;h3&quot;&gt;Set Promotion&lt;/h3&gt;&lt;/div&gt;&lt;div class=&quot;reward_info hidden&quot; id=&quot;reward_info'+dropdownid+'&quot;&gt;&lt;img alt=&quot;&quot; class=&quot;reward_img&quot; src=&quot;'+tiers[i].screenshot+'&quot; /&gt;&lt;div class=&quot;reward_info_details&quot;&gt;&lt;h4 id=&quot;h4&quot;&gt;Set Promotion&lt;/h4&gt;&lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+1].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+2].icon+'&quot; /&gt; &lt;img alt=&quot;&quot; id=&quot;reward'+dropdownid+'_img&quot; src=&quot;'+tiers[i+3].icon+'&quot; /&gt;&lt;p&gt;'+tiers[i].description+'&lt;br /&gt;'+tiers[i+1].description+'&lt;br /&gt;'+tiers[i+2].description+'&lt;br /&gt;'+tiers[i+3].description+'&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;',
      dropdownid++;
        
      }
      
    }
     else if(packagesize==5)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
        $("#container").append('<!-- Reward 5 -- Example 5 Items --><div class="reward unselected rew_hover r_blue more_rewards more_rewards5" id="reward5" onclick="toggleReward(\'reward_info5\',\'reward5\',\'reward5_img\',\'arrow5\')" onmouseout="toggleAni(\'arrow5\')" onmouseover="toggleAni(\'arrow5\')"><div class="r_arrow arrow_on" id="arrow5"></div><img alt="" class="reward5_img" src="'+tiers[i].icon+'" /> <img alt="" class="reward5_img" src="'+tiers[i+1].icon+'" /> <img alt="" class="reward5_img" src="'+tiers[i+2].icon+'" /> <img alt="" class="reward5_img" src="'+tiers[i+3].icon+'" /> <img alt="" class="reward5_img" src="'+tiers[i+4].icon+'" /><h3 id="h3">Set Promotion</h3></div><div class="reward_info hidden" id="reward_info5"><img alt="" class="reward_img" src="'+tiers[i].screenshot+'" /><div class="reward_info_details"><h4 id="h4">Set Promotion</h4><img alt="" class="reward_img_5" id="reward2_img" src="'+tiers[i].icon+'" /> <img alt="" class="reward_img_5" id="reward2_img" src="'+tiers[i+1].icon+'" /> <img alt="" class="reward_img_5" id="reward2_img" src="'+tiers[i+2].icon+'" /> <img alt="" class="reward_img_5" id="reward2_img" src="'+tiers[i+3].icon+'" /> <img alt="" class="reward_img_5" id="reward2_img" src="'+tiers[i].icon+'" /><p>'+tiers[i].description+'<br />'+tiers[i+1].description+'<br />'+tiers[i+2].description+'<br />'+tiers[i+3].description+'<br />'+tiers[i+4].description+'</p></div></div>');
      }
      
    }
    else if(packagesize==6)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
      $("#container").append('<!-- Reward 7 -- Example List --><div class="reward unselected rew_hover r_blue" id="reward6" onclick="toggleReward(\'reward_info7\',\'reward7\',\'reward7_img\',\'arrow7\')" onmouseout="toggleAni(\'arrow7\')" onmouseover="toggleAni(\'arrow7\')"><div class="r_arrow arrow_on" id="arrow7"></div><img alt="" class="reward7_img" src="'+tiers[i].icon+'" /><h3 id="h3">Cool item package</h3></div><div class="reward_info hidden" id="reward_info7"><div class="reward_info_details reward_list"><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+1].icon+'" /><h3 id="h3">'+tiers[i+1].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+2].icon+'" /><h3 id="h3">'+tiers[i+2].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+3].icon+'" /><h3 id="h3">'+tiers[i+3].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+4].icon+'" /><h3 id="h3">'+tiers[i+4].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+5].icon+'" /><h3 id="h3">'+tiers[i+5].itemname+'</h3></div></div></div>');
      }
      
    }   
    else if(packagesize==7)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
      $("#container").append('<!-- Reward 7 -- Example List --><div class="reward unselected rew_hover r_blue" id="reward6" onclick="toggleReward(\'reward_info7\',\'reward7\',\'reward7_img\',\'arrow7\')" onmouseout="toggleAni(\'arrow7\')" onmouseover="toggleAni(\'arrow7\')"><div class="r_arrow arrow_on" id="arrow7"></div><img alt="" class="reward7_img" src="'+tiers[i].icon+'" /><h3 id="h3">Cool item package</h3></div><div class="reward_info hidden" id="reward_info7"><div class="reward_info_details reward_list"><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+1].icon+'" /><h3 id="h3">'+tiers[i+1].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+2].icon+'" /><h3 id="h3">'+tiers[i+2].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+3].icon+'" /><h3 id="h3">'+tiers[i+3].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+4].icon+'" /><h3 id="h3">'+tiers[i+4].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+5].icon+'" /><h3 id="h3">'+tiers[i+5].itemname+'</h3></div></div><div class="reward_info_details reward_list2"><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+6].icon+'" /><h3 id="h3">'+tiers[i+6].itemname+'</h3></div></div></div>');
      }
      
    }
    else if(packagesize==8)
    {
      if((tiers[i].boxcolor=='Blue')&&(tiers[i].highlighttype=='Both')&&(tiers[i].dropdown=='Drop')&&(tiers[i].openclosed=='Starts closed')&&(tiers[i].screenshottype=='Half')&&(tiers[i].descriptionornot=='Yes'))     
      {
      $("#container").append('<!-- Reward 7 -- Example List --><div class="reward unselected rew_hover r_blue" id="reward6" onclick="toggleReward(\'reward_info7\',\'reward7\',\'reward7_img\',\'arrow7\')" onmouseout="toggleAni(\'arrow7\')" onmouseover="toggleAni(\'arrow7\')"><div class="r_arrow arrow_on" id="arrow7"></div><img alt="" class="reward7_img" src="'+tiers[i].icon+'" /><h3 id="h3">Cool item package</h3></div><div class="reward_info hidden" id="reward_info7"><div class="reward_info_details reward_list"><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i].icon+'" /><h3 id="h3">'+tiers[i].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+1].icon+'" /><h3 id="h3">'+tiers[i+1].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+2].icon+'" /><h3 id="h3">'+tiers[i+2].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+3].icon+'" /><h3 id="h3">'+tiers[i+3].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+4].icon+'" /><h3 id="h3">'+tiers[i+4].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+5].icon+'" /><h3 id="h3">'+tiers[i+5].itemname+'</h3></div></div><div class="reward_info_details reward_list2"><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+6].icon+'" /><h3 id="h3">'+tiers[i+6].itemname+'</h3></div><div class="reward_list_rewards"><img alt="" id="reward7_img" src="'+tiers[i+7].icon+'"/><h3 id="h3">'+tiers[i+7].itemname+'</h3></div></div></div>');
      }
    
    }
    i=i+(packagesize-1);
  }   
  //itemnum error catch
  else  $("#error_messages").append('There is an issue with item number '+tiers[i].number+' from tier '+tiers[i].tier+'. Please check it! </br>');

 }
 
  });
}

