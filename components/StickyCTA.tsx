
import React from 'react';
import Button from './Button';

const StickyCTA: React.FC = () => {
    return (
        <div className="sticky bottom-0 z-40 p-4 md:hidden bg-white bg-opacity-90 backdrop-blur-sm shadow-2xl-top">
            <Button href="#tours" variant="primary" className="w-full text-center">
                Book Your Tour Now
            </Button>
        </div>
    );
};

export default StickyCTA;
