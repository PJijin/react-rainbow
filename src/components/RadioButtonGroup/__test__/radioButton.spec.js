import React from 'react';
import { mount } from 'enzyme';
import RadioButton from '../radioButton';

describe('<RadioButton />', () => {
    it('should set type radio to the input element', () => {
        const component = mount(<RadioButton />);
        expect(component.find('input').prop('type')).toBe('radio');
    });
    it('should pass a generated id to the input element and set the same id to the htmFor of the label element', () => {
        const component = mount(<RadioButton />);
        expect(component.find('input').prop('id')).toMatch(/radiobutton/);
        expect(component.find('label').prop('htmlFor')).toMatch(/radiobutton/);
    });
    it('should set the name passed to the name prop of the input element', () => {
        const component = mount(<RadioButton name="name-1" />);
        expect(component.find('input').prop('name')).toBe('name-1');
    });
    it('should set the value passed to the value prop of the input element', () => {
        const component = mount(<RadioButton value="value-1" />);
        expect(component.find('input').prop('value')).toBe('value-1');
    });
    it('should set the isChecked passed to the checked prop of the input element', () => {
        const component = mount(<RadioButton isChecked />);
        expect(component.find('input').prop('checked')).toBe(true);
    });
    it('should set the value ariaDescribedby to the ariaDescribedby prop of the input element', () => {
        const component = mount(<RadioButton ariaDescribedby="error-1" />);
        expect(component.find('input').prop('aria-describedby')).toBe('error-1');
    });
    it('should fire an event when the user click the radio', () => {
        const onChangeFn = jest.fn();
        const component = mount(<RadioButton onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the disabled passed to the disabled prop of the input element', () => {
        const component = mount(<RadioButton disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should have the right classNames when in the span element of the label when is disabled', () => {
        const component = mount(<RadioButton label="radio label" disabled />);
        expect(
            component
                .find(
                    'span[className="rainbow-radio-button-group_radio-label rainbow-radio-button-group_radio-label--disabled"]',
                )
                .exists(),
        ).toBe(true);
    });
});
