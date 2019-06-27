import React from "react";
import "./AmazonLinks.css";
import { directive } from "@babel/types";


const AmazonLinks = () =>{
    return (
        <div>
            <iframe className = "amazonPic"  marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=flukeywheat-20&marketplace=amazon&region=US&placement=B07NWF9FKW&asins=B07NWF9FKW&linkId=21529994212e83c811cca2397c82db11&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
            <iframe className = "amazonPic"  marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=flukeywheat-20&marketplace=amazon&region=US&placement=B07Q9KHYLG&asins=B07Q9KHYLG&linkId=c1f098a35f8ade58d8c36b026025a106&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
            <iframe className = "amazonPic" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=flukeywheat-20&marketplace=amazon&region=US&placement=B074SL7TZM&asins=B074SL7TZM&linkId=9565bb44031880e7de4183ae70a9ec34&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>
        </div>
    );
    
}



export default AmazonLinks;