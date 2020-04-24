-- export PATH=/home/bcuser/pigstuff/pig-0.16.0/bin:$PATH;

A = LOAD 'orders450DDTTSS-Head2.csv' using PigStorage(',') AS 
(Id:int, storeNumber:int, salesPersonId:int, itemNumber:int,pricePaid:int,timePurch:chararray ); 

B = FILTER A by storeNumber  == 98046 OR storeNumber == 98077;
C = FILTER B by itemNumber == 543216;
D = GROUP C by storeNumber;
E = FOREACH D GENERATE group, COUNT(C);


STORE E into 'output';
