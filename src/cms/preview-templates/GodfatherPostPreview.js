import React from 'react';
import PropTypes from 'prop-types';
import { GodfatherPostTemplate } from '../../templates/godfather-post';

const GodfatherPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <GodfatherPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'featuredimage'])}
    />
  );
};

GodfatherPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GodfatherPostPreview;
