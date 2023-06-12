This backend application is create using Node.js, Express.js, MongoDB. This application server is tested running in `http://localhost:8080` with below routes categories:
- Route for Admin: `/api/v1/admin`
- Route for User: `/api/v1/user`
- Route for Dentist: `/api/v1/dentist`

### Register Endpoint
Any one can register to the application in `http://localhost:8080/api/v1/user/register` endpoint providing name, email and password.
### Login Endpoint
The registered user can then login to the application with email and password to `http://localhost:8080/api/v1/user/login` endpoint. The jwt token is provide for the user which then needs to be passed as **Authorization** value for all the enpoint calls and the result is provided according to the user authorization.
### Admin Endpoint
The admin user of the application has authorization to handle all users and dentists accounts and their appointment details. The following are the endpoint that admin has access to.
The admin is able to check following with endpoint prefix of `http://localhost:8080/api/v1/admin`:
- `/getAllUsers` - gets all the registered users as customers
- `/getAllDentists` - gets all users as dentist
- `/getAllAppointments` - gets all the appointments that has been made.
- `/createUser` - create user account
- `/createDentist` - create dentist account
- `/bookAppointment` - create appointment
- `/getUserById/:userId` - gets the user by its Id
- `/getDentistById/:dentistId` - gets the dentist by its Id
- `/getAppointmentById/:appointmentId` - gets the appointment by its Id
- `/updateUserProfile/:userId` - updates the user details by its Id
- `/updateDentistProfile/:dentistId` - updates the dentist details by its Id
- `/updateAppointmentProfile/:appointmentId` - updates the appointment details by its Id
- `/deleteUserById/:userId` - delete user by its Id
- `/deleteDentistById/:dentistId` - delete user by its Id
- `/deleteAppointment/:appointmentId` - delete appointment by its Id
- `/changeAccountStatus` - approves the requested dentist account from registered users.

### User Endpoint
User is anyone who is using the application. This can also be of dentist designation or be a customer who is looking for the dental service.
The user is able to perform following endpoint calls with prefix of `http://localhost:8080/api/v1/user`:
- `/createDentist` - create dentist account or request admin to approve the user as dentist
- `/getAllDentists` - gets all dentists
- `/bookAppointment` - book for a new appointment
- `/checkAvailability` - check for the appointment availability
- `/getDentistById/:dentistId` - gets the dentist by its Id
- `/userAppointments` - gets all appointment made by the logged in user
- `/updateUserProfile/:userId` - updates the own details
- `/deleteUserById/:userId` - delete own account
- `/updateAppointmentProfile/:appointmentId` - updates the logged in user's appointment details by its Id
- `/deleteAppointment/:appointmentId` - delete the logged in user's appointment by its Id
### Dentist Endpoint
A user applies for the dentist account to the admin with their hours availability, fee and their expertise. The dentist account is create to that user after admin has approved for the account.
The user is able to perform following endpoint calls with prefix of `http://localhost:8080/api/v1/dentist`:
- `/getAllDentists` - gets all dentists
- `/getDentistById/:dentistId` - gets the dentist by its Id
- `/dentistAppointments` - gets all appointment for the logged in dentist
- `/updateDentistProfile/:dentistId` - updates the own details
- `/deleteDentistById/:dentistId` - delete own account as dentist

![Dental Clinic Application Architecture](/images/dental-clinic-architech.drawio.png "Dental Clinic Reservation App")

![Logical Diagram of Dental Clinic Reservation Application](/images/LDM_Dental_Reservation.png "Logical Diagram of Dental Clinic Reservation App")

## Work logs
- 11th and 12th March: 6 hours - research and material readings
- 18th and 19th March: 6 hours - material reading and research with initial data modelling and code dev
- 25th and 26th March: 8 hours - register, login, jwt and basic get requests code dev
- 1st and 2nd April: 6 hours - create and post request code dev
- 7th, 8th, 9th and 10th April: 24 hours - update and delete request 
- 15th and 16th April: 6 hours - code improvements and research
- 22nd and 23rd April: 6 hours - overall project improvements and manual testing
- 27th April: 3 hours - api documentation 
- 28th April: 8 hours - documentation, repository creation, finalization and project submit

## My Thoughts on building project
The overall building backend project using Node.js, Express.js and MongoDB was full of learning and fun. Node.js is an easy programming language. npm provides a good packaging controls to the app. The server set up was short and easy. The endpoint division among the admin, normal user and dentist was little bit confusing to manage. The greatest learning experience for me was to be able to create a restful api from data modelling and designing to finishing up with a full working project with user authentication using json web token (jwt). I have fulfilled the both core and extra requirement of the assginment as a new user, dentist and appointment can be created, modified and deleted. User can book new appointment with dentist and they can see thier own appointments and also edit and delete them. Multiple reservation can be make by different user in same time. Admin can see all users, dentists, appointments and can also modify and delete them. JWT is implemented. Since I have full all the requirements of the assignment, I propose full grade of 5 for this assignment.

### Notes 
The code in this project are all written by me referring the course materials and node.js documentaion pages. There might me minor response messages copy paste but not a full code from stackoverflow but mostly are from course materials and node documentations.

### Demo video link
https://youtu.be/rgAKkRRqCjg

### Diagrams
- [Conceptual Data Model](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=CDM_Dental_Reservation_v2.drawio#R1VfbctowEP0aHpPxBQx5DJcknU4mbSBD2jfFFrYSWfLIAgNf35Ut2diGhtJ0Qp%2BQjlYr7dmjXdNxR%2FH6VqAkuucBph3HCtYdd9xxHNseXMGPQjYG8awCCQUJNFYBU7LFGjRmSxLgtGYoOaeSJHXQ54xhX9YwJATP6mYLTuunJijELWDqI9pG5ySQUYEOelaF32ESRuZk29IrMTLGGkgjFPBsB3InHXckOJfFKF6PMFXsGV6KfTcHVsuLCczkMRumD%2F2LuX1tZV%2Ft3vVr8D3NXlYX2ssK0aUO%2BCnFQl9YbgwLgi9ZgJUju%2BMOkfB1oiBL7jCLiMTTBPkKyUAHgEUypsaakpDB2Id7gmt32L64uQUWEq93IB3ILeYxlmIDJnq129ekalk5RlVZlaMyE9FOfroaQ1oWYem6Yg4Gmrw%2FINJtEfmIgckVkoSzs%2BfTHtT5dD%2Bdz26LzzGER1J59lw2tVnOP43LXovLFok4gKqnp4pnuXnENNfupFoZLjiThl2nziRmwbUqtzCdPHKGZ%2FweMWBgWKXHys0goOdyD0x%2BqJVLp2fm4%2FWu6XijZwcTk%2FKl8PH7JU4iEWL5%2FgtWTPw2ze%2BlsQRFzuCq3kj2JVef8Y0TiK16k84BHRkXReR6127hbzhyGo7cpqOCmpajXGtl4KfLzzsf%2BZ2uou5%2FqiLnqpH8ZpU5VkVuw1GrXH2ciu7GXvgaO0%2F9L%2FcpxvHDLGSTPV8qHcejUskAlrxQjZR2kPJU672FFRxaGRowae1ESaIiiHEeu9j1o1ORD%2FlC2eZakqSwzQgktAAD06oswjTkU8KIn3%2BBCg1JgVF%2B0OXOHZPqio03Au1H1kWfSsHf8IhTcOmOGchePRJCaQNKof8RFgLQq2YzDr1wfOEc6pIcOt6C5i8qIgFEdPxjOr5X9uy6qHrtVll%2B2u19HX%2FTK73FzdvbYr7dvvz07izybA2W1l6Z%2FdNitcWCz%2FhDnihYuCHUmH1U6Tq2AXbPrHSVH6FaHH3nxNLVbTjymo5OLl0wrf7AFebV%2F2B38gs%3D)
- [Logical Data Model](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=LDM_Dental_Reservation_v2.drawio#R7Z1Rc6I6FMc%2FjY%2B7IyJWH6ut291tu53WvffuUycrUXIXCDektfbT3wQSUEItdKuwJjOdKRxCgHP%2BJz8JR%2BzYk%2BDpEwGRd4Vd6Hd6XfepY591ej3LGo7YP25Zp5Zeb9BNLUuCXNEqN9yhZyiMstkDcmG81ZBi7FMUbRvnOAzhnG7ZACF4td1sgf3to0ZgCRXD3Rz4qvVv5FIvtQ6dbm6%2FgGjpySNbXbElALKxMMQecPFqywSf6BSHVJziDSQBCGFI2ZYrQH5B0nHOPUr5lZ52elP2t%2BCtPy4xXvoQRCj%2BOMcBM89j1mS6AAHyuZ83OhqLjtjh7POOPSEY03QpeJpAnwdLhiE9p%2BkLWzM%2FEN5vhR2cm%2BtL%2B9vq5mf%2F%2BXY960Zf1l9GH3ppL4%2FAfxD%2B%2FR6nZ8f8Q9fS6cxVEV%2Bk4Cc3jWMKCBXasLvMwKJNAQrZrvaZlaz7PohilDRPLR7y3Uuwxg9UdiTXxgv0BN3bVBq8LVPJJeuMr%2FLOuZPvxMnwzcBHy5Atz9mV8yOOCYzZuVyCmIoWHg18sai6SXjuERIKnzZMwm2fIA4gJWvWRGztS3mInPkwkoZVrkBrKGzehvqyrAFCUsus8zxSbEEEq0bgbCVwu4N2y5U%2B9jBBzzxUvnDtZiCT9RUKfCbVCwjcgmmMkzEjCQjy%2FQn2MY92iEOoBJw3cgmOZoAsIRWGCCORWs6Y%2FTHPTLofnY7DznXC1q18nf3x5oROcBhTwoTF%2B4AsvivIYzymOBKd%2BnAh%2ByfC73z5J6aUZeJLEtiZC6%2FrQujArqgCe18i6CsiuPn6ogzY9VME%2FFs2KINw6adBS8ZokAetJLKlvs78W3R8MVcxc%2BfCT4ZZD7kuZHk7XnmIwrsIzHmjFePUaxm7MwNeD9dGfOya4RGd5U6r3Rvw2RgVAsry5yF0YyXm2Xm%2BXQaOIoMHNojfs32a1YIcp9O245hFHIXLy3TPQUEsTkvE8vRybjvvKp5K3R1APQNDkkok6e6RJIOmSXJSXQSHGTugi2R%2F%2B8XIoHKsjh0jQ0UDIQhg2xnSBmVox4yRYUbjzBg1zQx5b6shNEaVg3Xs0LAsRQQRiOMVJq2%2F%2B2iDPLQjh6XOOBp0HBodVtX5y%2F2xo8b85ZGxw6oerqOHhzqBCQOAfH3JUUMc2qHDqTFJYdCxL3Q4TaPDUecpdEFHlgEGHY46BYHie%2BAGKNSXHjX0oR09rJI7VYOPg%2BNj2DQ%2BrDp3oEfGjzwHDECskltQRhDmbopYwmjLkDoa0Q8iaqnFaZQM0kFS3bcLJx3dyuZOClVzJ%2F3Gq%2BYsU%2Bzw7mVzWU78OXVzljqToFHhnGVKHjJXqHMJbFCE5BFQhENTQfc21ej3scDUQ7z7rWV9rDReRCefqm3IYPrVangIOdzNpSmKyISgTjX9IRXZrZCHdvyQuDD8aJIfjRfU9dQZqelXbSYnsyQw%2FOipdRFiXlJrhNRQiHYIGRqEtAAhzRfWDfUtrBsagGSuKAEIO6C%2B6KihDf3QoT7UMug4PDoaL6wb1ng4dmzoqB6uo0eH%2BmyMIp2%2FBlpDG9qhwyqp4DfsODw7WlBVV%2BNDxJHBI08CQw%2BrpMImxBTG%2BvKjjjy0A0hffVJ29koFpp7FdH05nMtqOqfqmN%2Fr72vQ75s5x3evputXV0Zbqun66pSjRtV0WRIY%2BPf%2F5MdWh6ukq6EY%2FT4P1Phyp9ZIqXE%2FWR8pjVfS9dWCSo0q6bIkMEiRw5KppHuTPLTjx8h8ybcF%2FGi8km5U4870yOAxqh6tY4fHSL0xjTwePG3RUUMc2qHDMehoATqar6Bz9GWHY9iRuUJlRxzBOQs2ek6%2BHKovRGqo5JghMvhx%2Bek6BMFfE68XfsbOyY%2FTzyW%2FyGIYcniGHLKUrlQGWhRD7EwArQhS6gm1EAK4LoGxHqUQvykO7cBh3m3aBnAcso6uVAZavNt0ZwIYcKjPvhYQ3keQ3D%2BiGOnxarrflIh2%2BKjzWyyGH%2FviR%2Fbiusb4Ueclt0cGkCwFDEFKXnGr%2Fb1HDXkcMz3KHwtV%2BOYfdJdQ1sfxoj66voV%2BMhN6nm9Jq%2BhSfDARbsUJhu4p%2F%2F13tnp%2By8Qzw1cgXHOB8OuCGV44gbYaSuMU%2BRJTasxlcRB%2BIHO4a1AXV0YliV5qKF3Ar7vqYJL91vxmPDMjSfz1CLdOeIdobjgfczkOpDBkBfhg5Gz3kV682C1XidKTUks%2B6BZ6Sr2j9PRueqtwt3skerMryk2%2BHqs9cusXRTJ8q9xGhZ6conDfT26X51%2FAxT%2BuPbP%2Fo9fTb5N%2FyUWQvaV%2BU20DnwPIY24ZLPkS1xjgPd3m7%2F%2BUrdhB84bSGCl7gs03QXfJZj8iGMkiXvC2iZwoStuuEAtpaszeP97lP2SRmOY%2BCtGcLSwYeFMTJRCIA2WnGOVnWEglxju6nRvsQzT%2BBQsoL6G7AHQnLYkWa7ME%2Bfxth%2BVsLmP4ds69mE7V4ew4BVFZ3ZLJm6yStTRDfufT93QJvi9nfm9qT65ndyFh%2BfKrVGh7HdaeIcEz%2FC2JFdsgRiyrrYOcrFxszSBnFwe57G6t9iBX7KlX7OnNgxxbJRjTzeYs0bwr7ELe4n8%3D)
