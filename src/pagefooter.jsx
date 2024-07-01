import React from 'react';

export default function Pagefooter(){
    return(
        <>
        {/* Page Footer */}
       <div className="footer_container">
<div className="footer">
    <div className="newsletter">
    <div className="textfooter"> Stay Updated and Connect with Us. subscript to our Newsletter</div>
    <div className="inputfooter"> 
    <span className="inputemail"> <input className="emailnews n" type="text" placeholder="Email" /></span> 
    <span className="div_subscribe"><input className="subscribe n" type="button" value="subscribe" /> </span>
    </div>

    </div>
<div  className="footer_links">
<div className="footer_left f">
<ul>
  <li>New Here</li>
  <li>Join a unit</li>
  <li>Regional Services</li>
</ul>
</div>
<div className="footer_right f">
    <ul>
    <li>Services days</li>
    <li>Prayer Sessios</li>
    <li>Social Media</li>
</ul>
</div>
</div>
<div className="footer_logo">
<img className="footer_logo_img"  id="logo" src="pics/logo.png" alt="not found" />
<div className="VV">NCF, UNIPORT</div>
</div>
<div className="copyright">
<span className="copy">  <i>&copy; NCF Uniport 2024, All Rights Reserved</i></span>
</div>
</div>
</div> 
        </>
    )
}