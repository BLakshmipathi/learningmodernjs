let ObjectFormatter=require('../utilities/object-formatter');
let Customer =require('./customer');
const DEFAULT_DELIMITER =',';
class InternetCustomer extends Customer {
    constructor(id, name, address, creditLimit, status, remarks, blogUrl) {
        super(...arguments);

        this.blogUrl = blogUrl;
    }
    toString() {
        return ObjectFormatter.format(this);
    }

    static create(csvString, delimiter = DEFAULT_DELIMITER) {
        if (!csvString) {
            throw new Error(INVALID_ARGUMENT_SPECIFIED);
        }

        let splittedString = csvString.split(delimiter);
        let customer = new InternetCustomer(...splittedString);

        return customer;
    }
}

module.exports=
    InternetCustomer
;
