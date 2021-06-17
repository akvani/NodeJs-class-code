
const Contact = require('./contact.entity')
const { uuid } = require('uuidv4');

module.exports ={
    createContact: async args=>{
        // Store in db
        try{
            const existingContact = await Contact.findOne({mobile:args.userInput.mobile})
            if(existingContact)
            {
                throw new Error("Contact Aleady Present");
            }
            else
            {
                const newContact= new Contact(
                    {
                        contactId: uuid(),
                        contactName:args.userInput.name,
                        age:args.userInput.age,
                        mobile:args.userInput.mobile
                    }
                )
                const result= await newContact.save();
                return { ...result._doc,_id:result.contactId}
            }

        }
        catch(err){
                throw err;
        }
    },
    contact:()=>{
     
        return  Contact.find();
    }
}