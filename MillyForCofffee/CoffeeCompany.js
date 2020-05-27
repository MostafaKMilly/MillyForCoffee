function scollfun() {
if (document.body.scrollTop > 995 || document.documentElement.scrollTop > 995) {
document.getElementById('nav').style.position='absolute';
}

else {
x=document.getElementById('nav');
if(document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
x.style.backgroundColor="#fff";
document.getElementById('mm').style.display="inline-block";
document.getElementById('nav').style.position='fixed';
}
else {
  x.style.backgroundColor="#ffffff96";
  document.getElementById('mm').style.display="none";
  document.getElementById('nav').style.position='fixed';
} } }
function DisplayAllItems () {
  parentofelemnts=document.getElementById('container');
  Arrayofele=parentofelemnts.getElementsByTagName('div');
  for (i=0 ; i<Arrayofele.length ; i++) {
    Arrayofele[i].style.display='inline-block';
  }
}
function DisplayItems(element) {
  key=element.innerHTML.toUpperCase();
  parentofelemnts=document.getElementById('container');
  Arrayofele=parentofelemnts.getElementsByTagName('div');
  for (i=0 ; i<Arrayofele.length ;i++) {
  par=Arrayofele[i].getElementsByTagName('p')[0];
  text=par.textContent || par.innerHTML;
  if (text.toUpperCase().indexOf(key) >-1)
  Arrayofele[i].style.display="inline-block";
  else {
    Arrayofele[i].style.display="none";
  } }
}
function SearchDisplay() {
  key=document.getElementById('searchbox').value.toUpperCase();
  parentofelemnts=document.getElementById('container');
  Arrayofele=parentofelemnts.getElementsByTagName('div');
  for (i=0 ; i<Arrayofele.length ;i++) {
  par=Arrayofele[i].getElementsByTagName('p')[0];
  text=par.textContent || par.innerHTML;
  if (text.toUpperCase().indexOf(key) >-1)
  Arrayofele[i].style.display="inline-block";
  else {
    Arrayofele[i].style.display="none";
  } }
}
