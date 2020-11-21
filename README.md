# platter

Issue 1: Inability to fetch single user, on the 'alluserstable' page, using the /routes/admng/finduser route. I also tried the /routes/admng/find/:_id GET route.



Description:  I am trying to use the routes/admng/finduser Route mentioned above to fetch the different individual users, from a page where all users are listed. I use the /routes/admng/allusers route to fetch all the users. On this page, an admin is logged in (isAuthenticated). However, when I click on each of these individual users, the route is fetching only the user that is logged in (that is admin). I need the /routes/admng/finduser or the /routes/admng/find/:_id route to fetch the single user when it is clicked on, accordingly.
Route to GET all users:  /routes/admng/allusers GET route
Route to GET single user: /routes/admng/finduser   OR    /routes/admng/find/:_id GET route
