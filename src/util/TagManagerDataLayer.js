import React from 'react';
import TagManager from 'react-gtm-module';

export const formSubmitDataLayer = (page_title, page_url) => {
    const tagManagerArgs = {
        dataLayer: {
            'event': 'form_submission',
            'attributes': {
                'status': true,
                'page_title': page_title,
                'page_url': page_url,
            }
        }
    }
    console.log(tagManagerArgs)
    TagManager.dataLayer(tagManagerArgs)
    return true;
}