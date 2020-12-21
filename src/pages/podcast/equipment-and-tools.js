import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";

import Wavve from "../../img/Affiliates/Wave-logo.png";

class PodcastToolsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="podcastPage tools-equipment">
          <div className="podcastPage__hero">
            <div className="podcastPage__hero--content-box">
              <h1 className="hero-title">
                Equipment, tools, and other resources I use and mention in my
                Podcast!
              </h1>
              <p className="hero-content">
                Disclaimer: This page includes affiliate links to helpful
                resources I use in my own business. I may get a commission for
                purchases and trials made through the links.
              </p>
            </div>
          </div>
          <section className="podcastPage__container">
            <div className="content">
              <div className="content__box">
                <iframe
                  style={{ width: "120px", height: "240px" }}
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  frameborder="0"
                  src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=lswellness06-20&language=en_US&marketplace=amazon&region=US&placement=159052201X&asins=159052201X&linkId=b8fca96a8de460a1b10fecc006cddc2f&show_border=true&link_opens_in_new_window=true"
                ></iframe>
              </div>
              <div className="content__box">
                <iframe
                  style={{ width: "120px", height: "240px" }}
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  frameborder="0"
                  src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=lswellness06-20&marketplace=amazon&region=US&placement=B001D7UYBO&asins=B001D7UYBO&linkId=824b7a2a6fbf7ae68be8d15746f2c680&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
                ></iframe>
              </div>
              <div className="content__box">
                <iframe
                  style={{ width: "120px", height: "240px" }}
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  frameborder="0"
                  src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=lswellness06-20&marketplace=amazon&region=US&placement=B000WA8KYG&asins=B000WA8KYG&linkId=d087bf1035a7d60b6ace36c846c5881c&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
                ></iframe>
              </div>
              <div className="content__box">
                <iframe
                  style={{ width: "120px", height: "240px" }}
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  frameborder="0"
                  src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=lswellness06-20&marketplace=amazon&region=US&placement=B000JM46FY&asins=B000JM46FY&linkId=6e5fc0eff2227f74bb1470c8a07275ef&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
                ></iframe>
              </div>
              <div className="content__box">
                <iframe
                  style={{ width: "120px", height: "240px" }}
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  frameborder="0"
                  src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=lswellness06-20&marketplace=amazon&region=US&placement=B001R76D42&asins=B001R76D42&linkId=cc0bb55a5c895ed542b8b8ecdecadeb0&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
                ></iframe>
              </div>
              <div className="content__box">
                <a
                  href="https://wavve.co/?ref=lisastrzoda"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Wavve} className="podcast-thumb" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default PodcastToolsPage;
