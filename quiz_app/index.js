
function GetElementInsideContainer(containerID) {
  var elm = [];
  var j = 0;
  var elms = document.getElementById(containerID).getElementsByTagName("div");
  for (var i = 0; i < elms.length; i++) {
    elm[j] = elms[i].id;
    j++;
  }
  return elm;
}
//Here e is  an array containing id  of div elements 
var e = GetElementInsideContainer("quiz_app");
console.log(e);

let score = 0;
// const name = document.querySelector("#intro");
// const btn = document.querySelector("button");
// btn.addEventListener("click", quiz_q_display);
//__________________________________________________________________________



function GET_score(k) {
  if (k == 1) {
    if (document.getElementById('q1_op2').checked) {
      score++;
      console.log("one is" + score);
    }
    else {
      --score;
    }
  }
  else if (k == 2) {
    if (document.getElementById('q2_op1').checked) {
      score++;
      console.log("two is" + score);
    }
    else {
      --score;
    }
  }
  else if (k == 3) {
    if (document.getElementById('q3_op3').checked) {
      score++;
      console.log(score);
    }
    else {
      --score;
    }
  }
  else {
    return score;
  }

  return score;
}


//__________________________________________________________________________

// var qno1 = "quiz\q1.html";
// var qno2 = "quiz\q2.html";
// var qno3 ="quiz\q3.html"


//  function for inserting innerHTML(qno1) when start is press.
var i = 0;
//var j = 1;


function quiz_next_q_display() {
  if (i === 3) {
    document.getElementById(e[i]).style.display = 'none';
    GET_score(i);
    document.getElementById('score_avg').innerText = "The  score is : " + score;
  }
  else {

    GET_score(i);
    document.getElementById(e[i]).style.display = 'none';
    i++;
    document.getElementById(e[i]).style.display = 'block';
  }

  // if (i <= 2) { GET_score(i); }
  // else {
  //   GET_score(i);
  //   document.getElementById(e[i]).style.display = 'none';
  //   i = 0;
  //   // console.log(final_result);
  //   document.getElementById('score_avg').innerText = score;
  //}

}

//for button of start 
function proceed() {
  document.getElementById(e[i]).style.display = 'none';
  i++;
  document.getElementById(e[i]).style.display = 'block';
}







