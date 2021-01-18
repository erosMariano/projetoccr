const timer = document.querySelector(".timer p");

var min, seg;		
min = 20;		
seg = 1	
function relogio(){			
    if((min > 0) || (seg > 0)){				
        if(seg == 0){					
            seg = 59;					
            min = min - 1	
        }				
        else{					
            seg = seg - 1;				
        }				
        if(min.toString().length == 1){					
            min = "0" + min;				
        }				
        if(seg.toString().length == 1){					
            seg = "0" + seg;				
        }				
        timer.innerHTML = min + ":" + seg;				
        setTimeout('relogio()', 1000);			
    }			
    else{				
        timer.innerHTML = "00:00";			
    }		
}	
relogio()