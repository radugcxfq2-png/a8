(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function num(e,min,max){var v=parseInt(e.value,10);if(isNaN(v))v=min;return Math.min(max,Math.max(min,v));}
function hm(mins){var h=Math.floor(mins/60),m=Math.round(mins%60);return (h?h+' h ':'')+m+' min';}
var rp=$('rt-p');if(rp){var rk=$('rt-k'),rs=$('rt-s'),rm=$('rt-m');
 on([rp,rk,rs,rm],function(){var words=num(rp,1,3000)*parseInt(rk.value,10),mins=words/parseInt(rs.value,10),per=num(rm,5,600),days=Math.max(1,Math.ceil(mins/per)),d=new Date();d.setDate(d.getDate()+days-1);
  $('rt-r').innerHTML='<p class="rw-kick">Total reading time</p><span class="rw-big">'+hm(mins)+'</span><ul class="rw-rows"><li><span>Approximate words</span><b>'+words.toLocaleString('en-US')+'</b></li><li><span>Sittings of '+per+' minutes</span><b>'+days+'</b></li><li><span>Pages per sitting</span><b>'+Math.max(1,Math.round(num(rp,1,3000)/days))+'</b></li><li><span>Finish by, starting today</span><b>'+d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})+'</b></li></ul>';});}
var gb=$('rg-b');if(gb){var gp=$('rg-p'),gd=$('rg-d');
 on([gb,gp,gd],function(){var pages=num(gb,1,200)*num(gp,50,1500),days=parseInt(gd.value,10)*52,per=Math.ceil(pages/days),mins=Math.round(per*275/240);
  var verdict=mins<=20?'Comfortable. This fits into a coffee break.':mins<=45?'Realistic with one fixed slot a day.':mins<=90?'Ambitious. You will need two reading slots most days.':'Very demanding. Consider fewer books or shorter ones.';
  $('rg-r').innerHTML='<span class="rw-big">'+per+' pages</span><p>on each reading day, or about <b>'+hm(mins)+'</b> at a typical pace.</p><ul class="rw-rows"><li><span>Pages in the year</span><b>'+pages.toLocaleString('en-US')+'</b></li><li><span>Reading days</span><b>'+days+'</b></li><li><span>One book every</span><b>'+(Math.round(3650/num(gb,1,200))/10)+' days</b></li></ul><p>'+verdict+'</p>';});}
var sb=$('rs-b');if(sb){var st=$('rs-t'),sr=$('rs-r'),t0=0,words=st.textContent.trim().split(/\s+/).length;
 sb.addEventListener('click',function(){
  if(st.getAttribute('data-state')!=='run'){st.setAttribute('data-state','run');st.scrollTop=0;t0=Date.now();sb.textContent='I have finished';sr.innerHTML='<p>Timing. Read at the pace you would use for a novel.</p>';}
  else{var secs=Math.max(1,(Date.now()-t0)/1000),wpm=Math.round(words/secs*60);st.setAttribute('data-state','done');sb.textContent='Try again';
   var band=wpm>600?'That was faster than anyone reads with understanding. Try again without skimming.':wpm>=300?'A brisk pace. Check you could retell the passage; if so, this is a real strength.':wpm>=200?'Right in the typical adult range for everyday prose.':wpm>=120?'A careful pace. It suits study reading well and will rise with regular practice.':'A slow, deliberate pace. Short daily sessions are the most reliable way to build fluency.';
   sr.innerHTML='<span class="rw-big">'+wpm+' wpm</span><p>'+words+' words in '+Math.round(secs)+' seconds. '+band+'</p>';}
 });}
})();
