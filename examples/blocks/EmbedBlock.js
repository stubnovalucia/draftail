import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from '../../lib';

/**
 * Editor block to preview and edit embedded content.
 */
const EmbedBlock = ({ entity, entityConfig, isActive, onClick }) => {
    const {
        url,
        title,
        providerName,
        authorName,
        thumbnail,
    } = entity.getData();

    /* eslint-disable springload/jsx-a11y/no-static-element-interactions */
    return (
        <div>
            {entityConfig.icon && (
                <span className="RichEditor-media-icon">
                    <Icon icon={entityConfig.icon} />
                </span>
            )}

            <div className="RichEditor-media-container" onClick={onClick}>
                <span className="RichEditor-media-preview">
                    <img src={thumbnail} alt={title} />
                </span>
            </div>

            {isActive ? (
                <div className="RichEditor-media-options">
                    <h3>
                        <strong>{title}</strong>
                    </h3>
                    <p>
                        <span>
                            URL:
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {url}
                            </a>
                        </span>
                        <br />
                        <span>{`Provider: ${providerName}`}</span>
                        <br />
                        <span>{`Author: ${authorName}`}</span>
                    </p>
                </div>
            ) : null}
        </div>
    );
};

EmbedBlock.propTypes = {
    entityConfig: PropTypes.object.isRequired,
    entity: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default EmbedBlock;