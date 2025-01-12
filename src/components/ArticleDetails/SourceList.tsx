import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './SourceList.css';

interface Source {
    sourceTitle: string;
    sourceLink: string;
}

interface SourceListProps {
    sources: Source[];
}

const SourceList: React.FC<SourceListProps> = ({ sources }) => {
    return (
        <div className="sources-container">
            <h4 className="sources-title">Sources</h4>
            <ul className="sources-list">
                {sources.map((source, index) => (
                    <li key={index} className="source-card">
                        <FaExternalLinkAlt className="source-icon" />
                        <div className="source-info">
                            <a href={source.sourceLink} target="_blank" rel="noopener noreferrer" className="source-link">
                                {source.sourceTitle}
                            </a>
                            <p className="source-description">Click to read more on the external site.</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SourceList;