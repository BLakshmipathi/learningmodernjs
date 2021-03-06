const DELIMITER = ', ';
const NO_OF_TRAIL_CHARACTERS = 2;
const START_POS = 0;

const INVALID_ARGUMENT_SPECIFIED = 'Invalid Argument(s) Specified!';

class ObjectFormatter {
    static format(obj) {
        if (!obj) {
            throw new Error(INVALID_ARGUMENT_SPECIFIED);
        }

        let formattedMessage = '';

        for (let propertyIndex in obj) {
            let propertyValue = obj[propertyIndex];

            if (typeof propertyValue !== 'function') {
                formattedMessage += `${propertyValue}${DELIMITER}`;
            }
        }

        formattedMessage = formattedMessage.substr(
            START_POS, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);

        return formattedMessage;
    }
}

module.exports = ObjectFormatter;
//export {
//    ObjectFormatter
//};
