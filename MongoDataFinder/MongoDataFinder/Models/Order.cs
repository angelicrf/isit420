namespace MongoDataFinder
{
    
    using System;
    using System.Collections.Generic;
    using MongoDB.Bson;
    using MongoDB.Bson.Serialization.Attributes;
    using MongoDB.Driver;
    using MongoDB.Driver.Linq;
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public String Id { get; set; }
        public object newObject { get; set; }
        public int __v { get; set; }
        //public IList<object> storeNumber { get; set; }
        //public IList<object> salesPersonID { get; set; }
        //public IList<object> itemNumber { get; set; }
        //public IList<object> timePurch { get; set; }
        //public IList<object> pricePaid { get; set; } 
    }
}