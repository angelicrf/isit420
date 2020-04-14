const mongoose = require('mongoose');


const TodosSchema = new mongoose.Schema({
  
    storeNumber: {
     type: [String],
     required: [true, 'Please add a store number'],
    },
    salesPersonID: {
        type: [String],
        required: [true, 'Please add a person id'],
    },
    itemNumber: {
        type: [String],
        required: [true, 'Please add a item number'],
    },
    timePurch: {
        type: [String],
        required: [true, 'Please add a timePurch'],
    },
    pricePaid: {
        type: [String],
        required: [true, 'Please add a procePaid']
    }
});
module.exports = mongoose.model('Todos', TodosSchema);