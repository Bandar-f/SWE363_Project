-To launch, right click on the SWE363_Project folder, then select open with vscode
-Then when you open vscode, open the terminal using ctrl+`
-In the terminal, type npm i then pre enter to install all the necessary addons to run the project
-then in the terminal, type npm start and press enter to start the project

Improvements made:
-all the pages in the web app are now fully dynamic
-major bug fixes
-completely overhauled the pages Upcoming trips, More details, history, rating, new admin page (accessible only through an admin account), Request ride, date and time, pickup details, and many more pages.

Notable accounts

-Admin: can be either in the customer or the driver page, has access to an admin page through the side menu on the left that no one else has and can ban users (permenantly delete their accounts) through it

Admin account example:
Phone number: 0599999999
Password: 12345678

Driver: can also be a customer if he wishes, he can check his upcoming trips, and schedule a new trip through the schedule ride option in the side menu, also through the main page (Upcoming Trips) he can expand the details of the trips in the list through the more details button and see the customers that applied to the trip he schedule, he can either cancel the trip (which would delete the trip from the backend) or click on complete ride once he finishes his trip, which would transfer his trip to the history page, through the history page, he can see his previous passangers from completed trips and expand their details to give them a rating which would update the database

Notable driver account(with scheduled trips and previous trips in the history):
Phone number: 0581131080
Password: 12345678

Customer: can also be a driver if he wishes, he will be greeted with a page where he can select  location and the tier he desires to filter out trip results in the next page, then in the next page which is the date and time page, he can select the time then click on the search button (a wide blue button at the bottom) to display his search results if any, then after clicking on the desired trip (with the driver name and rating displayed), he'll have his trip reserved in the pickup details page, in the pickup details page he can see his scheduled trips and the name of the driver and the rating, he can either call the driver of a specific trip or cancel one of the reserved trips (this time, removing himself from the trip collection rather than removing the entire trip collection), if a driver has clicked on complete trip button indicating that he finished his trip, the trip will automatically go to the customer's history page (if neither the driver nor the customer cancelled the trip) and the customer then will be able to see the drivers of his previous trips through that page

Notable customer account:
Phone number: 0566666666
Password: 11111111 (8 ones)