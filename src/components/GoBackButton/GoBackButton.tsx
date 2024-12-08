import React from 'react';
import { Button } from 'reactstrap';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackButtonProps {
    handleGoBack: () => void;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ handleGoBack }) => {
    return (
        <Button color="link" onClick={handleGoBack} className="go-back-button">
            <FaArrowLeft /> Go Back
        </Button>
    );
};

export default GoBackButton;