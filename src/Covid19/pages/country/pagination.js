function check(total,distance, page){
    var start, end;
    var first=false, last=false;
    var saw = Math.ceil(distance/2)
    if(page-saw>0){
        first=true;
    }
    if(page+saw<total){
        last=true;
    }
    var d=page-saw;
    var e=page+saw;
    if(d<=1){
        start=1;
        end= total > distance ? distance : total;
        if(d===1) first=false
    }
    else if(e>=total){
        end=total;
        start=total-distance+1;
        if(d===total) first=false
    }else{
        start=page-2;
        end=page+2;
    }
    return {first:first,last:last,start:start,end:end}
}

function Paginator(total, distance, page ){
    const checkPage = check(total, distance, page)
    const arr = []
    for(let i=checkPage.start; i <= checkPage.end;i++){
      arr.push(i)
    }
    if(checkPage.first) {
      arr.unshift('prev')
      arr.unshift(1)
    }
    if(checkPage.last) {
      arr.push('next')
      arr.push(total)
    }
    return arr
}
export default Paginator;
  