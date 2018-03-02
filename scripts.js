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
