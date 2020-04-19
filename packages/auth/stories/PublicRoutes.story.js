import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-rainbow-components';
import { RainbowFirebaseApp } from 'rainbow-app';
import app from "rainbow-app/stories/firebase";
import { showAppSpinner, hideAppSpinner } from 'rainbow-app';

const stories = storiesOf('Authentication/Spinner', module);

const Content = () => {
    const show = () => {
        showAppSpinner();
        setTimeout(() => {
            hideAppSpinner();
        }, 1000);
    }
    return <Button label="Show App Spinner for 1s" onClick={show} />
};

stories.add('show App Spinner', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Content />
        </RainbowFirebaseApp>
    );
});
