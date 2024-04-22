import React from 'react';
import ReactDOM from 'react-dom';
import { GoodComponent } from '@test-compilers/ui';

const App: React.FC = () => {
    return (
        <>
            <h1>Hello, SWC with Webpack and TypeScript!</h1>
            <GoodComponent />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
