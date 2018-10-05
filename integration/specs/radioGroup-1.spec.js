const PageRadioGroup = require('./../../src/components/RadioGroup/pageObject');
const { ARROW_DOWN_KEY } = require('./../constants');

const RADIO_GROUP = '#radio-group-component-1';

describe('RadioGroup base example', () => {
    beforeEach(() => {
        browser.url('/#!/RadioGroup/1');
        browser.refresh();
    });
    it('should focus the item clicked', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        expect(radio.hasFocus()).toBe(true);
    });
    it('should lose the focus when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio.hasFocus()).toBe(false);
    });
    it('should focus the next item when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio1 = radioGroup.getItem(1);
        const radio2 = radioGroup.getItem(2);
        radio1.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio2.hasFocus()).toBe(true);
    });
    it('should check the item clicked', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        expect(radio.isChecked()).toBe(true);
    });
    it('should uncheck the item when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio.isChecked()).toBe(false);
    });
    it('should check the next item when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio1 = radioGroup.getItem(1);
        const radio2 = radioGroup.getItem(2);
        radio1.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio2.isChecked()).toBe(true);
    });
});
