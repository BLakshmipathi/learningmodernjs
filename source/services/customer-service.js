let InternetCustomer =require( '../models/internet-customer');

let CUSTOMER_SYMBOL = Symbol();
class InternetCustomerService
{
    init()
    {
        throw new Error('INVALID_ARGUMENT_SPECIFIED');
        let promise = new Promise(
            (reslove,reject)=>
            {
                setTimeout(() => 
                {
                this[CUSTOMER_SYMBOL] = [
                    InternetCustomer.create('11,NorthWind,Hyderabad 12000,true,simple customer,https://blogs.msdn.com'),
                    InternetCustomer.create('12,SouthWind,Hyderabad 12000,true,simple customer,https://blogs.msdn.com')];
                    reslove(true);
                },4000);
            }
            );
            return promise;
    }

    constructor()
    {
        this[CUSTOMER_SYMBOL] = [
            InternetCustomer.create('11,NorthWind,Hyderabad 12000,true,simple customer,https://blogs.msdn.com'),
            InternetCustomer.create('12,SouthWind,Hyderabad 12000,true,simple customer,https://blogs.msdn.com')];
  
    }

    *[Symbol.iterator] ()
    {
        for(let customerIndex in this[CUSTOMER_SYMBOL])
        {
            let customer = this[CUSTOMER_SYMBOL][customerIndex];

            if(customer)
            {
                yield customer;
            }
        }
    }
}

module.exports= InternetCustomerService;
