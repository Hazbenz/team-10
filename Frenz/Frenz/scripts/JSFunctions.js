// JScript File
//Show Error as alert (0) or on top of the page (1) or 2 both
var AppApprovedSelectedStatus = 241;
var showErrorType = 2;
var isDeveloperTesting = false; 
var popup = null;
var outSideUSStateCode = '494';
var countryUSCode = '1';
var otherEthnicityCode = '156';
var otherRegionalCenterCode = '257';
var otherOfficerRole = '508';
var regexMSOthersCode = /^178|195$/;
var roleBuddyCode = '133';
var roleCollegeBuddyCode = '134';

var roleHSBuddyCode = '602';
var roleHSPeerBuddyCode = '601';
var roleMSBuddyCode = '615';
var roleMSPeerBuddyCode = '614';
var roleESBuddyCode = '1458';
var roleESPeerBuddyCode = '1457';
var otherOfficerRoleHS = '612'
var otherOfficerRoleMS='624';
var otherOfficerRoleES = '1474';
var otherAdvisorRole = '1435';
var otherAdvisorRoleHS = '1436';
var otherAdvisorRoleMS = '1437';
var otherAdvisorRoleES = '1464';
var otherAdvisorRolePromoter = '1432';
var otherAdvisorRolePromoterHS = '1433';
var otherAdvisorRolePromoterMS = '1434';
var otherAdvisorRolePromoterES = '1469';
var ProgramYear = '2012-2013';


var regexOtherFAHSCAssist = /^557$/;
var regexOtherAOIOther1 = /^571$/;
var regexOtherAOIOther2 = /^572$/;

var CollegeCode = 237;
var HighSchoolCode = 238;
var MiddleSchoolCode = 239;
var ElementarySchoolCode = 1481;
/*****************************************************************
* RemoveValidation
*****************************************************************/
function SetValidation(value)
{
    isDeveloperTesting = value;
}
/*****************************************************************
* Validation Image Ico or Style 
*****************************************************************/
var validationImagePath = "Images/error_icon.gif";
var validationImage = "<img src=\""+validationImagePath+"\"alt=\"error\" width=\"16px\" height=\"16px\"/>";
function CreateValidationImage(obj)
{
    var o = obj.parentNode;
    var cn=o.childNodes;
    if(o.innerHTML.match("alt=\"error\"")==null && o.innerHTML.match("alt=error")==null)
    {
     o.innerHTML = o.innerHTML + validationImage;
     document.getElementById(obj.id).className += " redBorder";
    }
}   

function RemoveValidationImage(obj)
{
   var o = obj.parentNode;
   o.innerHTML = o.innerHTML.replace("alt=\"error\"","style=\"display:none;\"");     
   o.innerHTML = o.innerHTML.replace("alt=error","style=\"display:none;\"");     
   document.getElementById(obj.id).className = obj.className.replace(" redBorder","");
}        
/*****************************************************************
* Back To returnURL
******************************************************************/
function Back()
{
    var qryStrArr = window.location.search.split("?");
    var objSkip= document.getElementById('ctl00_cphCenter_hdnSkip');
    if(objSkip!=null && objSkip.value != "")
    {    
        //alert(parseInt(objSkip.value,0));
        history.go(-1 * parseInt(objSkip.value,0));
    }
    else if(qryStrArr[1].match("returnURL")!=null)
    {
        var returnURL =   qryStrArr[1].split("returnURL=")[1];
        window.location.href = returnURL+"?"+qryStrArr[2];
    } 
    else
    {  
        if(window.location.search.match('&skip1')!=null) 
            history.go(-2);
        else if(window.location.search.match('&skip2')!=null)
            history.go(-3);
        else    
            history.go(-1);
    }
             
    
    return false;
}
/*****************************************************************
* Reload 
******************************************************************/
function ReloadWindow()
{
    if(window.location.href.match("&reload")!=null)
        window.location.href=window.location.href.replace("&reload","");
    
    return false;    
}   
/*****************************************************************
* Show Hide the Controls
*****************************************************************/
function ShowNext(obj,count)
{
    var objArr = obj.parentNode.parentNode.getElementsByTagName('span');
    var currentIndex=0;
    for(var i=0;i<objArr.length;i++)
    {
       if(objArr[i].style.display=='block')
       {
            objArr[i].style.display='none';
            currentIndex=(i<objArr.length-1)?i+1:objArr.length-1;    
       }
    }
   
    objArr[currentIndex].style.display='block';
    
}
function ShowPrevious(obj,count)
{
    var objArr = obj.parentNode.parentNode.getElementsByTagName('span');
    var currentIndex=0;
    for(var i=0;i<objArr.length;i++)
    {
       if(objArr[i].style.display=='block')
       {
            objArr[i].style.display='none';
            currentIndex=(i>0)?i-1:0;    
       }
    }
    
    objArr[currentIndex].style.display='block';
    
}
function Show(clientId)
{
    var obj = document.getElementById(clientId);
    if(obj!=null)
        obj.style.display='block';
}
function Hide(clientId)
{
    var obj = document.getElementById(clientId);
    if(obj!=null)
        obj.style.display='none';
} 
/*****************************************************************
* Get Element By Cliass Name
*****************************************************************/
function getElementsByClassName(strClassName,tagName) {
var arrElements = document.getElementsByTagName(tagName);
    for ( var i = 0; i < arrElements.length; i++ )
        if(arrElements[i].className != undefined && arrElements[i].className == strClassName)
            return arrElements[i];
return null;           
}
/*****************************************************************
* Show The Validation Messages
*****************************************************************/
function ShowValidationMessages(msg)
{
     if(Trim(msg).length > 0)
        {
            if(showErrorType==0)
            {    
                msg = msg.replace(/<li>/g,"* ");
                msg = msg.replace(/<\/li>/g,"\n");
                alert(msg);
            }   
            else if(showErrorType==1)
            {
                document.getElementById('ValidationSummry').innerHTML = "<br/>"+msg+"<br/>";
                document.getElementById('aVSF').focus();
            }
            else
            {
                var msg1 = msg.replace(/<li>/g,"* ");
                msg1 = msg1.replace(/<\/li>/g,"\n");
                alert(msg1);

                document.getElementById('ValidationSummry').innerHTML = "<br/>"+msg+"<br/>";
                document.getElementById('aVSF').focus();
            }
            
            var obj = document.getElementById('divValidation');
            if(obj!=null)
                obj.style.display = 'block';

            return false;
        }

        return true;
}
/****************************************************************
* Add CSS Class in Rutime 
****************************************************************/
function addClassNames()
{ 
   
    var elements = document.getElementsByTagName("input"); 
    
    for (var i=0; i < elements.length; i++) 
    { 
        var element = elements[i]; 
        
        //if(element.className == "noclass") continue;
        
        if(element.className.indexOf("noclass") > 0) continue;
               
        if (element.type == "submit" || element.type == "button") 
        { 
            element.className = element.className + " button"; 
        } 
        else if(element.type == "text" || element.type == "password") 
        { 
            element.className = element.className + " textbox"; 
        } 
        else if(element.type == "checkbox") 
        { 
            element.className = element.className + " checkbox"; 
        } 
        else if (element.type == "radio") 
        {
            element.className = element.className + " radio"; 
        } 
     }
    
    elements = document.getElementsByTagName("select"); 
    for (var i=0; i < elements.length; i++) 
    { 
         elements[i].className = elements[i].className + " select"; 
    }  
     
    elements = document.getElementsByTagName("textarea"); 
    for (var i=0; i < elements.length; i++) 
    { 
         elements[i].className = elements[i].className + " textarea"; 
        
     }   
}
/**********************************************************************************
* Function for OpenPrintPrevew
**********************************************************************************/
function OpenPrintPreview(clientId)
{
  var win=window.open("Print.aspx?obj="+ clientId,"PrintPreview","toolbar=no,location=no,status=yes,menubar=no,scrollbars=yes,resizable=no,width=800,height=600,top=50,left=50");
  return false;
}
function OpenPrintPreviewRelative(path,clientId)
{
  var win=window.open(path+"Print.aspx?obj="+ clientId,"PrintPreview","toolbar=no,location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=800,height=700,top=50,left=50");
  return false;
}

function PrintContent(printDivId)
{
    if(window.frames["print_frame"]!=null && document.getElementById(printDivId)!=null)
    {
        var content =  document.getElementById(printDivId).innerHTML;
        window.frames["print_frame"].document.body.innerHTML = content;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();
    }
}

/**********************************************************************************
* Coockies functions
**********************************************************************************/
//Cookies Get Functions
function Get_Cookie(name)
{
    var start=document.cookie.indexOf(name+'=');
    var len=start+name.length+1;
    if((!start)&&(name!=document.cookie.substring(0,name.length))) return null;
    if(start==-1) return null;
    var end=document.cookie.indexOf(';',len);
    if(end==-1) end=document.cookie.length;
    return unescape(document.cookie.substring(len,end));
}

//Cookies Set Functions
function Set_Cookie(name,value,expires,path,domain,secure)
{
    var today=new Date();
    today.setTime(today.getTime());
    if(expires)
    {
        expires=expires*1000*60*60*24;
    }
    var expires_date=new Date(today.getTime()+(expires));
    document.cookie=name+"="+escape(value)+((expires)?";expires="+expires_date.toGMTString():"")+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+((secure)?";secure":"");
}

//Cookies Delete Function
function Delete_Cookie(name,path,domain)
{
    if(Get_Cookie(name)) 
        document.cookie=name+'='+((path)?';path='+path:'')+((domain)?';domain='+domain:'')+';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

    
/****************************************************************
* Comman Validation Functions
****************************************************************/
/*Email Check*/
function IsEmail(s) 
{
    
    s = Trim(s);  
    var regex =  /^\w+([-.'/_]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regex.test(s);
}

/*Phone Number Check*/
function IsPhone(s) 
{
    //var regex = /^\(?([1-9]\d{2})(\) ?|[.-])?(\d{3})[.-]?(\d{4})$/; //US Phone Number
    //return regex.test(s);
    s = Trim(s);    
    var stringLen = s.length;
    
    if(stringLen < 10)
        return false;

    //var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!$%^*_`~<>,?=/\\";
    var iChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < stringLen; i++) 
    {
        if (iChars.indexOf(s.charAt(i)) != -1)
            return false;
    }
    
    return true;    
}

/*Url Check*/
function isValidUrl(s)
{
   s = Trim(s);
   var regUrl = /^(((ht|f){1}(tp:[/][/]){1})|((www.){1}))[-a-zA-Z0-9@:%_\+.~#?&//=]+$/;
   return regUrl.test(s)
}

/*Zip +4 Code*/
function isUSZip4Code(s)
{
    var regex =  /^\d{5}[-]\d{4}$/;
    return regex.test(s);
}

/*Zip Code*/
function isUSZipCode(s)
{
    var regex =  /^\d{5}$/;
    return regex.test(s);
    /*
    if(!isNaN(Trim(s)) && s.length > 4 )
        return true
    else
        return false;    
    */
}

/*Numeric check*/1
function IsNumericValue(s) 
{
    s= Trim(s);
    var regex =/^\d+$/;
    return regex.test(s);
}

/*Check Othere option is selected or not*/
function IsOtherOptionSelected(obj,textbox,regexString)
{
        var flag = false;
        
        var regex = regexString;
        
        var txtboxobj = document.getElementById(textbox);
        
        for(var i =0;i<obj.length;i++)
        {
            if(obj[i].checked && regex.test(obj[i].parentNode.getAttribute("alt")) && Trim(txtboxobj.value)=="")
            flag = true;
        }
       
        return flag;
}

/*Get number of selected values*/ 
function GetSelectedCountValue(obj)
{
    var count =0;
    for(var i =0;i<obj.length;i++)
    {
        if(obj[i].checked)
            count ++;
    }   

    return count;
}

/*Check Decimal Value*/
function IsDecimalValue(s)
{
    var regex =/^[-+]?\d*\.?\d*$/;
    return regex.test(s);            

    //var flag = regex.test(s);
    //
    //if(flag && parseFloat(s) > 0)
    //  return true;
    //else
    //  return false;
}


/*Trim Functions*/
function Trim(str)
{
    return lrtrim(str," ");
}    
function lrtrim(str, chars) 
{
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) 
{
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
function rtrim(str, chars) 
{
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
 /***************************************************************
 *  ValidateDate function
 ***************************************************************/  
 function ValidateDate(dateStr,objStr)
    {
        dateStr=dateStr.replace(/\-/g,"/");
        dateStr=dateStr.replace(/\./g,"/");
        
        var str = dateStr.split("/");
        if(str.length != 3)
        {  
           alert("Invalid "+objStr+" Date: \""+dateStr+"\".\nAccepted format are mm/dd/yyyy, mm-dd-yyyy, mm.dd.yyyy.");
           return false;
        }
           
        if(parseInt(str[0]) > 12)
        { 
            alert("Invalid "+objStr+" Date: \""+dateStr+"\".\nAllowed range for month is 1-12.");
            return false;
        }
        if(parseInt(str[1]) > 31)
        { 
            alert("Invalid "+objStr+" Date: \""+dateStr+"\".\nAllowed range for month is 1-31.");
            return false;
        }
        if(isNaN(str[2]) || parseInt(str[2])<1901 || parseInt(str[2]) >2078  )
        { 
            alert("Invalid "+objStr+" Date: \""+dateStr+"\".\nAllowed range for year is 1901-2078.");
            return false;
        }
        
        var dt = new Date(parseFloat(str[2]), parseFloat(str[0])-1, parseFloat(str[1]), 0, 0, 0, 0);
        if(dt.getDate()!=str[1])
        { 
            alert("Invalid "+objStr+" Date: \""+dateStr+"\".");
            return false; 
        }
        return true;     
    }
/****************************************************************
* desableAllFormElements
****************************************************************/   
function desableAllFormElements(flag)
{
var arr = document.documentElement.getElementsByTagName("input");
for (var i=0;i<arr.length;i++)
{
  if(arr[i].type!='button')
     arr[i].disabled = flag;
}
var arr = document.documentElement.getElementsByTagName("select");
for (var i=0;i<arr.length;i++)
    arr[i].disabled = flag;  
var arr = document.documentElement.getElementsByTagName("textarea");
for (var i=0;i<arr.length;i++)
    arr[i].disabled = flag;    
var arr = document.documentElement.getElementsByTagName("img");
for (var i=0;i<arr.length;i++)
    arr[i].disabled = flag;      
}   
/****************************************************************
* TogalStateOtherStateCountry
*****************************************************************/
function TogalStateCountry(sourceType,ddlStateId,ddlCountryId)
{
   var objStateDDL = document.getElementById(ddlStateId);
   var objCountryDDL = document.getElementById(ddlCountryId);
   if(sourceType == 'state')
   {
        if(objStateDDL.value == outSideUSStateCode)
        {                        
            objCountryDDL.value ='0';
        }
        else
        {
            objCountryDDL.value = countryUSCode;
        }
  }
  else if(sourceType == 'country')
  {
        
        if(objCountryDDL.value == countryUSCode)
        {   
           objStateDDL.value ='0';
        }
        else
        {
           objStateDDL.value =outSideUSStateCode;
        }
  }
}

function TogalStateOtherStateCountry(sourceType,ddlStateId,txtOtherStateId,ddlCountryId,spanId)
{
    var objStateDDL = document.getElementById(ddlStateId);
    var objOtherStateTXT = document.getElementById(txtOtherStateId);
    var objCountryDDL = document.getElementById(ddlCountryId);
    var objStarSpan = document.getElementById(spanId);
   if(sourceType == 'state')
   {
        if(objStateDDL.value == outSideUSStateCode)
        {   
            objOtherStateTXT.style.display = 'block';
            objStarSpan.style.display = 'block';
            objCountryDDL.value ='';
            objOtherStateTXT.focus();
        }
        else
        {
            //objOtherStateTXT.value='';
            objOtherStateTXT.style.display = 'none';
            objStarSpan.style.display = 'none';
            objCountryDDL.value = countryUSCode;
        }
  }
  else if(sourceType == 'country')
  {
        
        if(objCountryDDL.value == countryUSCode)
        {   
            //objOtherStateTXT.value='';
            objOtherStateTXT.style.display = 'none';
            objStarSpan.style.display = 'none';
            objStateDDL.value ='';
        }
        else
        {
            objOtherStateTXT.style.display = 'block';
            objStarSpan.style.display = 'block';
            objStateDDL.value =outSideUSStateCode;
        }
  }
}
/****************************************************************
* CheckTextArea MaxLength
****************************************************************/
function MaxLength(obj,length,showMsg)
{
    
    if(obj.value.length >= length)
    {
        obj.value = obj.value.substring(0,length-1);
        if(showMsg)
            alert("Maximum charecters alloved: " + length);
        obj.focus();    
    }
}
/****************************************************************
* Download
****************************************************************/
function Download(resourse)
{
    if(popup!=null)
        popup.close();
        
    if(resourse.match('(!ProgramYear)')!=null)
        resourse = resourse.replace('(!ProgramYear)',ProgramYear);
        
    popup = window.open(resourse,'BestBuddiesOnline','toolbar=no,resizable=yes');
    
    return false;    
}
/****************************************************************
* ToggleLeftMenu
*****************************************************************/
function ToggleLeftMenu()
{
    var div2 = document.getElementById('leftMenuDiv2');
    var div1 = document.getElementById('leftMenuDiv1');
    var div3 = document.getElementById('leftMenuDiv3');
    if(div2.title=="Hide")
    {
        div1.style.width="0%";
        div3.style.width="100%";
        div2.title = "Show";
        div2.innerHTML="&raquo";
        div1.style.display="none";
    }
    else
    {
        div1.style.width="15%";
        div3.style.width="83%";
        div2.title = "Hide";
        div2.innerHTML="&laquo";
        div1.style.display="block";
    }
}

/****************************************************************
* Top Menu functions for IE 6 Fix.
*****************************************************************/
var objPrepareShowHide = "";
function prepareShowMenu()
{
    if(navigator.appVersion.match("MSIE 6.0")!=null)
    {
        var obj = document.getElementsByTagName('select');
        if(obj!=null)
        {
            for (var i=0;i<obj.length;i++)
            {
               if(obj[i].style.display != 'none' && obj[i].id != "" )
               {
                    obj[i].className += ' hide';
                    objPrepareShowHide += obj[i].id + "|";
               }
            }
        }
        else
        {
            objPrepareShowHide = "";
        }
    }
}

function prepareHideMenu()
{
    if(objPrepareShowHide != "")
    {
        var objNameArr = objPrepareShowHide.split("|");
        for (var i=0;i<objNameArr.length - 1 ;i++)
        {
            var obj = document.getElementById(objNameArr[i]);
            if(obj!=null)
               obj.className = obj.className.replace(' hide','');
        }
        
        objPrepareShowHide = "";   
    }
}
/****************************************************************
* Image Load Functions
*****************************************************************/
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
  if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/***************************************************************
* Enable/disable other state requried filed validator (used on chapter/addedit.aspx in hostsite tab)
/***************************************************************/
function EnableOtherStateValidator(sourceType,ddlStateId,txtOtherStateId,ddlCountryId,spanId,rfvOtherState)
{
    
var objStateDDL = document.getElementById(ddlStateId);
    var objOtherStateTXT = document.getElementById(txtOtherStateId);
    var objCountryDDL = document.getElementById(ddlCountryId);
    var objStarSpan = document.getElementById(spanId);
    var objrfvOtherState = document.getElementById(rfvOtherState);
   if(sourceType == 'state')
   {
        if(objStateDDL.value == outSideUSStateCode)
        {   
            objOtherStateTXT.style.display = 'block';
            objStarSpan.style.display = 'block';
            objCountryDDL.value ='0';             
            objOtherStateTXT.focus();
            ValidatorEnable(objrfvOtherState,true);             
        }
        else
        {
            //objOtherStateTXT.value='';
            objOtherStateTXT.style.display = 'none';
            objStarSpan.style.display = 'none';
            objCountryDDL.value = countryUSCode;
            ValidatorEnable(objrfvOtherState,false);
        }
  }
  else if(sourceType == 'country')
  {
        
        if(objCountryDDL.value == countryUSCode)
        {   
            //objOtherStateTXT.value='';
            objOtherStateTXT.style.display = 'none';
            objStarSpan.style.display = 'none';
            objStateDDL.value ='0';
            ValidatorEnable(objrfvOtherState,false);
        }
        else
        {
            objOtherStateTXT.style.display = 'block';
            objStarSpan.style.display = 'block';
            objStateDDL.value =outSideUSStateCode;
            ValidatorEnable(objrfvOtherState,true);
        }
  }
     
}
//Vishal May 30,2010
// check for numeric data only
function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}




 
//CalculateAge('11/05/1985');
function CalculateAgeByDOB(DOB)
 {
                          
        //ctl00_cphCenter_dob_ddlMonth
        //ctl00_cphCenter_dob_ddlDay
        //ctl00_cphCenter_dob_ddlYear
       
     if (DOB.value != '') {

        now = new Date()
      
        dob = DOB.split('/');

        if (dob.length === 3) {

            born = new Date(dob[2], dob[1] * 1 - 1, dob[0]);

            age = Math.floor((now.getTime() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

            if(isNaN(age))

            {
                
               return 0; 
               //alert('Input date is incorrect!');

            }

            else

            {
            
                
                return age;
                                   
             }

        }

    }

}


function CreateRSSScript(URL)
{
var scptCode = ''
//var id = (new Date()).valueOf() + "" + Math.round(Math.random() * 1000);
//id=\"feed-" + id + "\"
scptCode = "<script type=\"text/javascript\" src=\"" + URL + "\"></script>";

return scptCode;

}
