import React, { useEffect } from 'react';
import _ from 'lodash'
import { weekdays } from 'moment'

export const GoodComponent: React.FC = () => {
    useEffect(() => {
        weekdays();

        _.partition([1, 2, 3, 4], n => n % 2);
    }, []);

    return <div>Render GoodComponent</div>
}
