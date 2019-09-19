/* Practice the following queries:

Find the restaurant with id 30112340. > db.restaurants.find({"restaurant_id":"30112340"}).pretty()
Find May May Kitchen. > db.restaurants.find({"name":"May May Kitchen"}).pretty()
Find the restaurants where their cuisine is Tapas. > db.restaurants.find({"cuisine":"Tapas"}).pretty()
Find the restaurants in postal code 11208. >db.restaurants.find({"address.zipcode":"11208"}).pretty()
Find all restaurants that have a score greater or equal than 70. > db.restaurants.find({"grades.score":{ $gte: 70 }}).pretty()
Find all restaurants in Brooklynthat have a score greater than 80
All restaurants with Chilean or Czech cuisine. > db.restaurants.find({$or:[{"cuisine":"Chilean"},{"cuisine":"Czech"}]}).pretty()
All restaurants with grade A in second position of the array. >db.restaurants.find({"grades.1.grade":"A"}).pretty()
All restaurants with grades A or B.
All restaurants that have a review made in 2014-09-16.
All restaurant their cuisine is Tapas ordered by name in ascending (normal) order.
How many restaurants have been graded after 2015-01-01. */