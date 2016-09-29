import {Component, PropTypes} from 'react';

// todo: add icon support
export default class RadioButtons extends Component (props) {

    render() {
        return (
            <div>

            </div>
        );
    }
}

RadioButtons.propTypes = {
    buttons: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        var btn = propValue[key];
        if (!btn || typeof btn.name !== 'string' || !typeof btn.value !== 'string') {
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to `' + componentName + '` at `' + location + '`. Must be an Array of Objects with String `name` and `value` fields. Validation failed.'
            );
        }
    }).isRequired,
    selected: PropTypes.string,
    name: PropTypes.string.isRequired

};
