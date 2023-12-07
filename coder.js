var htmlValue=CodeMirror(document.getElementById('html-area',), {
  lineNumbers: true,
  value:document.getElementById("html-area").innerText ,
  tabSize: 2,
  mode: "text/html",
  autoCloseTags: true, 
  theme: 'monokai'
});

var cssValue=CodeMirror(document.querySelector('.codeeditor #css-area',), {
  lineNumbers: true,
  value:document.getElementById("css-area").innerText ,
  tabSize: 2,
  mode:'css',
  theme: 'monokai'
});

var jsValue=CodeMirror(document.querySelector('.codeeditor #script-area',), {
  lineNumbers: true,
  value:document.getElementById("script-area").innerText ,
  tabSize: 2,
  mode: 'javascript',
  theme: 'monokai'
});

function run(){		
	
  var htmlCode=htmlValue.getValue();			
	
  let cssCode="<style>"+cssValue.getValue()+"</style>";
	let scriptCode=jsValue.getValue();
	let output =document.querySelector(".outputeditor #output-frame");
	
  output.contentDocument.body.innerHTML=htmlCode+cssCode;
	output.contentWindow.eval(scriptCode);
}