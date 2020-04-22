let CustomerService =require( './source/services/customer-service');
//import CustomerService from './source/services/customer-service';
console.log('Welcome to the world of ES 2015');

let customerServiceObj = new CustomerService();

for(let customer of customerServiceObj)
{
    console.log(customer.toString());
}

async function showData()
{
    try
    {
        let result = await customerServiceObj.init();
        if(result)
        {
            for(let customer of customerServiceObj)
            {
                console.log(customer.toString());
            }
        }
    }
    catch(error)
    {
        console.log(`Exception, Details:${error.message }`);
    }
}

showData();

console.log('End of app');