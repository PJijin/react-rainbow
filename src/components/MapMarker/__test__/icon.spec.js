import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<Icon/>', () => {
    it('should return the icon passed', () => {
        const component = mount(<Icon icon={<svg data-id="custom-icon" />} />);
        expect(component.find('svg[data-id="custom-icon"]').exists()).toBe(true);
    });
    it('should render the fallback icon when no icon is passed', () => {
        const component = mount(<Icon />);
        expect(component.find('span.rainbow-google-map-marker_icon').exists()).toBe(true);
        expect(component.find('MarkerIcon').exists()).toBe(true);
    });
    it('should set the same text as title in span element and text in AssistiveText when no icon is passed', () => {
        const component = mount(<Icon />);
        expect(component.find('span.rainbow-google-map-marker_icon').prop('title')).toBe(
            'marker icon',
        );
        expect(component.find('AssistiveText').prop('text')).toBe('marker icon');
    });
});
