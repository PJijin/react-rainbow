import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import VisualPicker from '..';
import VisualPickerOption from '../../VisualPickerOption';
import VisualPickerOptionFooter from '../../VisualPickerOptionFooter';

describe('<VisualPicker/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <VisualPicker label="Our Rainbow Options" value="option-1">
                <VisualPickerOption
                    name="option-1"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Complete service for teams of any size."
                        />
                    }
                >
                    <h3>user/month</h3>
                </VisualPickerOption>
                <VisualPickerOption
                    name="option-2"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Everything you need to take support."
                        />
                    }
                >
                    <h3>user/month</h3>
                </VisualPickerOption>
            </VisualPicker>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
