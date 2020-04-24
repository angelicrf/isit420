-- export PATH=/home/bcuser/pigstuff/pig-0.16.0/bin:$PATH;

A = LOAD 'orders450DDTTSS-Head2.csv' using PigStorage(',') AS 
(Id:int, storeNumber:int, salesPersonId:int, itemNumber:int,pricePaid:int,timePurch:chararray );

B = FILTER A by pricePaid IN (6,7,8,9,10);
C = FILTER B by salesPersonId > 19;
D = GROUP C by pricePaid;

E = FOREACH D GENERATE group, C.(Id,storeNumber); 
-- E = FOREACH D GENERATE $0, COUNT(D), $1;


STORE E into 'output1';

