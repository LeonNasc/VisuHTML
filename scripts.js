function updateHTML(){
  var src = document.getElementById("HTML_area").children[0];
  var iframe = document.getElementById("View");
  iframe = iframe.contentWindow.document;

  writeHTML(iframe,src.value);
}

function updateCSS(){
  var css = document.getElementById("CSS_area").children[0];
  var iframe = document.getElementById("View");
  iframe = iframe.contentWindow.document;

  head =  iframe.querySelector("head");
  if(!iframe.querySelector("style")){
    style = document.createElement("style");
    style.innerHTML = css.value;
    head.append(style);
  }
  else{
    iframe.querySelector("style").innerHTML = css.value;
  }
}

function writeHTML(iframe,content){
  iframe.open();
  iframe.write(content);
  iframe.close();
}

function collapse_toggle(target_id){

  let target = document.querySelector("#" + target_id);

  if(target.classList.contains('show')){
    target.classList.remove('show');
  }
  else{
    target.classList.add('show');
  }
}

function insert_placeholder(){

  let form = document.querySelector('#placeholder_controls');
  let info = form.querySelectorAll('input');

  let height = info[0].value;
  let width = info[1].value;

  let html_content = "\n<div  style='background:radial-gradient(#dddddd,#888888);height:"+height+";width:"+width+";color:white;vertical-align:middle; text-align:center;font-family:sans-serif'></div>";

  let target = document.querySelector('#HTML_area > textarea');
  target.value += html_content;

  //Necessário para aparecer a informação no iframe
  target.dispatchEvent(new KeyboardEvent('keyup'));

}
