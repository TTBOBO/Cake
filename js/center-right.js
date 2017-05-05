function ghbq(td) 
{ 
  var tr = td.parentElement.cells; 
  var ob = obody.rows; 
  for(var i=0; i<tr.length-1; i++) 
  { 
    tr[i].className = (td.cellIndex==i)?"ooihj":"ooihs"; 
    ob[i].style.display = (td.cellIndex==i)?"block":"none"; 
  } 
} 