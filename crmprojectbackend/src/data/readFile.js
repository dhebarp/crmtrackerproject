const csvjson = require('csvjson');
const readFile = require('fs').readFile;



class SeeData
{
    dbObjs = [];

    constructor()
    {
     this.loadSeed();
    }

    loadSeed()
    {

        readFile('./src/data/ScarpingData.csv', 'utf-8', (err, fileContent) => {
            if(err) {
                console.log(err); // Do something to handle the error or just throw it
                throw new Error(err);
            }
            const jsonObj = csvjson.toObject(fileContent);
            
            this.dbObjs = jsonObj.map(record => {
                return {
                    businessName: record.businessName,
                    address: {
                        street: record.street,
                        suburb: record.suburb,
                        postCode: record.postCode
                    },
                    officeTel: +record.officeTel,
                    email: record.email,
                    leadContact: {
                        firstName: record.firstName,
                        lastName: record.lastName
                    }
                }
            })
        }); 
    }

    // resetDB()
    // {
    //     LeadSBP.deletemany({});
    //     LeadSBP.create(this.dbObjs)
    // }
}

module.exports.SeeData = SeeData;