import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar';
import TimeSelect from '../TimePicker/timeSelect';
import extractDate from './helpers/extractDate';
import extractTime from './helpers/extractTime';
import formatDate from '../DatePicker/helpers/formatDate';
import Styled from './styledComponents';

function DateTimePickerModal(props) {
    const {
        isOpen,
        title,
        value,
        minDate,
        maxDate,
        formatStyle,
        okLabel,
        cancelLabel,
        onRequestClose,
        onChange,
    } = props;

    const [date, setDate] = useState(value);
    const modalTitle = title || formatDate(date, formatStyle);

    useEffect(() => {
        if (isOpen) {
            setDate(value);
        }
    }, [isOpen, value]);

    const handleChange = time => {
        const currentValue = new Date(`${extractDate(date)} ${time}`);
        onChange(currentValue);
    };

    return (
        <Styled.Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <Styled.Header>
                <Styled.H2>{modalTitle}</Styled.H2>
            </Styled.Header>
            <Styled.ResponsiveContainer>
                <Calendar
                    value={date}
                    minDate={minDate}
                    maxDate={maxDate}
                    formatStyle={formatStyle}
                    onChange={d => setDate(d)}
                />
                <Styled.Divider />
                <TimeSelect
                    value={extractTime(value)}
                    okLabel={okLabel}
                    cancelLabel={cancelLabel}
                    onCloseModal={onRequestClose}
                    onChange={handleChange}
                />
            </Styled.ResponsiveContainer>
        </Styled.Modal>
    );
}

DateTimePickerModal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    value: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    onRequestClose: PropTypes.func.isRequired,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    onChange: PropTypes.func,
};

DateTimePickerModal.defaultProps = {
    title: undefined,
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    okLabel: 'Ok',
    cancelLabel: 'Cancel',
    onChange: () => {},
};

export default DateTimePickerModal;
