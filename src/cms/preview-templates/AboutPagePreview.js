import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <AboutPageTemplate
        title={data.title}
        headerImage={getAsset(data.headerImage)}
        storyImage={getAsset(data.storyImage)}
        content={data.body}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
