// JScript File


/*****************************************************************
* Theme Functions
*****************************************************************/
var strPrefix = '';

if(window.location.href.match('/ChapterPortal/')!=null)
    strPrefix='../'
    
BBO = {};
BBO.themes = {};
BBO.themes.theme_name='';
BBO.themes.changeColor=function(colorName){return BBO.themes.changeStyle('color',colorName);}
BBO.themes.changeFont=function(fontName){return BBO.themes.changeStyle('font',fontName);}
BBO.themes.changeStyle=function(styleType,newStyle){if(styleType=='color'){document.getElementById('ctl00_current_color_style').href=strPrefix+"StyleSheets/"+BBO.themes.theme_name+"color_"+newStyle+"_style.css";}
if(styleType=='font'){font_el=document.getElementById('ctl00_current_font_style');font_el.removeAttribute('href');font_el.setAttribute('href',strPrefix+"StyleSheets/"+BBO.themes.theme_name+"font_"+newStyle+"_style.css");font_el.href=strPrefix+"StyleSheets/"+BBO.themes.theme_name+"font_"+newStyle+"_style.css";}
Set_Cookie('bbo_'+styleType+'_style',newStyle,30,'/','','');};

    
/*****************************************************************
* Check Cookie for Theme
*****************************************************************/
if(Get_Cookie('bbo_color_style')!=null)
    BBO.themes.changeStyle('color',Get_Cookie('bbo_color_style'))
if(Get_Cookie('bbo_font_style')!=null)
    BBO.themes.changeStyle('font',Get_Cookie('bbo_font_style'))