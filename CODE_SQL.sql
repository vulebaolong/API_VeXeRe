
use vexere_db;

-- Lấy tất cả chuyến đi của người dùng
select users.name as fullName, 
fromSta.name as fromStation, 
toSta.name as toStation ,
trips.startTime,
trips.price
from users
inner join tickets on users.id = tickets.user_id
inner join trips on trips.id = tickets.trip_id
inner join stations as fromSta on fromSta.id = trips.fromStation
inner join stations as toSta on toSta.id = trips.toStation;


