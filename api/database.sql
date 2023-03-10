--In this file, there are all the commands to create a database
--IMPORTANT! Check the information about database in "pool" method in back.js. Change name and password if they are different for you

--Creating ENUM for transaction_category column
CREATE TYPE category AS ENUM ('Home', 'Car', 'Pets', 'Food', 'Electronics', 'School', 'Misc');

--Creating table
create TABLE money(
    transaction_id SERIAL PRIMARY KEY,
    date DATE,
    debit_amount INTEGER,
    credit_amount INTEGER,
    sender VARCHAR(255),
    reciever VARCHAR(255),
    transaction_category category 
);

--Data mock
INSERT INTO money (date, debit_amount, credit_amount, sender, reciever, transaction_category) VALUES
('2022-12-08', 500, 0, 'Mihail Trofimov', 'Serghei Trofimov', 'Car'),
('2020-08-11', 0, 750, 'Will Grigg', 'Josh Maja', 'Misc'),
('2023-01-01', 1000, 0, 'Mason Mount', 'Jake Grealish', 'Electronics'),
('2020-08-11', 0, 3000, 'Michael Carrick', 'Sir Alex Ferguson', 'School'),
('2023-01-02', 0, 5000, 'Steve Bruce', 'Sean Dyche', 'Pets'),
('2019-08-24', 400, 0, 'Ryan Fraser', 'Callum Wilson', 'Food'),
('2023-01-02', 0, 600, 'Harry Kane', 'Lucas Moura', 'Food'),
('2022-11-09', 0, 7600, 'Fraser Forster', 'Ben Foster', 'Misc'),
('2020-07-29', 50000, 0, 'Nick Pope', 'Kieran Trippier', 'Electronics'),
('2021-08-19', 0, 400, 'Luis Suares', 'Lionel Messi', 'School'),
('2022-11-24', 45000, 0, 'Cristiano Ronaldo', 'Marcelo', 'Car'),
('2023-01-01', 0, 500000, 'Mauro Icardi', 'Wanda Nara', 'Misc'),
('2019-12-31', 4000, 0, 'Mario Balotelli', 'Marco Materazzi', 'Food'),
('2021-10-10', 1000, 0, 'Federico Bernardeschi', 'Lorenzo Insigne', 'School'),
('2023-01-18', 0, 6000, 'Jermaine Defoe', 'Eddie Howe', 'Food'),
('2021-05-15', 500, 0, 'Sadio Mane', 'Mohamed Salah', 'Home'),
('2018-03-26', 7500, 0, 'Dider Drogba', 'Frank Lampard', 'Misc'),
('2022-06-16', 0, 10000, 'Mauro Icardi', 'Edinson Cavani', 'Food'),
('2023-01-11', 100000, 0, 'Landon Donovan', 'Clint Dempsey', 'Home'),
('2019-03-17', 200000, 0, 'Oscar', 'Kenny Lala', 'Car'),
('2021-06-18', 0, 17000, 'Michael Carrick', 'Ryan Giggs', 'Electronics'),
('2023-01-22', 0, 500, 'Miroslav Klose', 'Arjen Robben', 'Misc'),
('2017-05-20', 1000, 0, 'Troy Deeney', 'Ola Aina', 'Car'),
('2023-01-01', 0, 500000, 'Ross Barkley', 'Danny Drinkwater', 'Pets'),
('2021-08-27', 1500, 0, 'Graham Potter', 'Thomas Tuchel', 'Food'),
('2020-01-27', 0, 5000, 'Fraser Forster', 'Alexis Macalister', 'School'),
('2018-11-26', 4000, 0, 'Erling Haaland', 'Mohamed Salah', 'Home'),
('2019-10-11', 500000, 0, 'Tammy Abraham', 'Paul Pogba', 'Misc'),
('2021-11-11', 9000, 0, 'Stefan Savic', 'Alexandr Sobolev', 'School'),
('2022-10-10', 0, 1000, 'Mason Mount', 'Neymar', 'Pets'),
('2021-01-10', 0, 5000, 'Will Grigg', 'Alexandr Kerzhakov', 'Misc'),
('2020-09-11', 100, 0, 'David De Gea', 'Lucas Leiva', 'Car'),
('2021-05-19', 5000, 0, 'Didier Drogba', 'Mateo Kovacic', 'Electronics'),
('2020-09-09', 0, 10000, 'Dider Deschamps', 'Olivier Giroud', 'School'),
('2021-01-11', 100, 0, 'Lucas Ocampos', 'Lionel Messi', 'Misc'),
('2023-01-02', 10000, 0, 'Ademola Lookman', 'Reece James', 'Food'),
('2020-05-11', 0, 900, 'Lucas Leiva', 'Lucas Moura', 'Home'),
('2019-08-10', 1000, 0, 'David James', 'David Beckham', 'Food'),
('2021-12-01', 0, 8000, 'Ivan Toney', 'Patrick Bamford', 'Misc'),
('2023-01-11', 1000, 0, 'Antoine Griezmann', 'Anthony Modeste', 'Car'),
('2020-05-16', 0, 5000, 'Moussa Dembele', 'Ousmane Dembele', 'Electronics'),
('2021-01-15', 0, 60000, 'Andre Gray', 'Kyle Walker', 'Car'),
('2017-05-16', 500, 0, 'Mason Greenwood', 'Kurt Zouma', 'Pets'),
('2020-04-20', 1000, 0, 'Kevin De Bruyne', 'Fernandinho', 'School'),
('2021-05-05', 5000, 0, 'Jerome Boateng', 'Manuel Neuer', 'Electronics'),
('2022-10-06', 0, 60000, 'David Bentley', 'Andrey Arshavin', 'Pets'),
('2021-09-13', 1000, 0, 'Demarai Gray', 'Lucas Leiva', 'Car'),
('2020-11-07', 0, 6000, 'John Terry', 'Frank Lampard', 'Misc'),
('2019-08-16', 0, 100, 'Andrew Gordon', 'Andrew Robertson', 'Food'),
('2022-11-11', 10000, 0, 'Mario Balotelli', 'Lucas Klostermann', 'Electronics'),
('2020-11-05', 0, 400, 'Kieran Trippier', 'Kylian Mbappe', 'School'),
('2018-06-11', 1500, 0, 'Lucas Leiva', 'Lucas Torreira', 'Pets');
('2020-05-11', 0, 3000, 'Michael Carrick', 'Sir Alex Ferguson', 'School'),
('2021-06-18', 10000, 0, 'Kieran Gibbs', 'Morgan Gibbs-White', 'Car'),
('2018-07-11', 0, 6000, 'Didier Deschamps', 'Josh Sargent', 'Electronics'),
('2021-04-07', 900, 0, 'Michael Jackson', 'Michael Jordan', 'Food'),
('2022-05-06', 0, 10000, 'George Floyd', 'Michael Harris', 'Pets'),
('2021-11-09', 1000, 0, 'Donovan Mitchell', 'Rudy Gobert', 'Car'),
('2020-11-05', 0, 5000, 'Michael Keane', 'Robbie Keane', 'School'),
('2021-10-10', 10000, 0, 'Blake Mason', 'Robbie Williams', 'Electronics'),
('2018-10-29', 5500, 0, 'Andrei Santos', 'Ricardo Milos', 'Misc'),
('2020-06-11', 0, 4500, 'Andrei Svechnikov', 'Sebastian Aho', 'School'),
('2017-09-04', 0, 10000, 'Wanda Nara', 'Maxi Lopez', 'Misc'),
('2021-01-10', 7000, 0, 'Michael Keane', 'Brook Lopez', 'Car'),
('2019-06-14', 0, 55000, 'Danny Ings', 'Joshua King', 'Electronics'),
('2022-09-24', 0, 10000, 'Frank Kessie', 'Theo Hernandez', 'Pets'),
('2017-10-17', 0, 6000, 'Donny Van De Beek', 'Dusan Tadic', 'Car'),
('2022-02-15', 1000, 0, 'Paul Pogba', 'Harry Maguire', 'Home'),
('2023-01-11', 5500, 0, 'Mason Greenwood', 'Hulk', 'Home'),
('2019-05-17', 7500, 0, 'Jonjo Shelvey', 'Ryan Fraser', 'Home'),
('2022-08-11', 0, 2500, 'Son Heung-Min', 'Leighton Baines', 'Home'),
('2020-05-24', 0, 6000, 'Dean Henderson', 'Nick Pope', 'School'),
('2022-08-26', 100, 0, 'Philipp Lahm', 'Joshua Kimmich', 'Pets'),
('2021-09-19', 0, 4500, 'Duncan Ferguson', 'Drew Brees', 'Electronics'),
('2020-01-11', 0, 7000, 'Sir Alex Ferguson', 'Freddie Mercury', 'Food'),
('2023-01-16', 24000, 0, 'Samir Handanovic', 'Jan Oblak', 'Misc'),
('2019-07-15', 0, 1000, 'Kieran Trippier', 'Ademola Lookman', 'Home'),
('2018-10-26', 0, 5000, 'Lee Dixon', 'Alan Smith', 'Food'),
('2021-06-14', 5000, 0, 'Jonathan Clauss', 'David Ospina', 'Car'),
('2019-04-17', 0, 400, 'Callum Chambers', 'Mason Mount', 'Misc'),
('2020-10-27', 5000, 0, 'Sergio Romero', 'Emiliano Martinez', 'Electronics'),
('2019-06-11', 10000, 0, 'Lucas Leiva', 'Jose Mourinho', 'Home'),
('2022-05-12', 0, 500, 'Walter White', 'Jesse Pinkman', 'Misc'),
('2019-09-19', 0, 1000, 'Tyler Adams', 'Patrick Bamford', 'Misc'),
('2022-07-13', 10000, 0, 'Mason Greenwood', 'Donny Van De Beek', 'Pets'),
('2020-11-04', 0, 4500, 'Ryan Fraser', 'Raheem Sterling', 'Car'),
('2019-05-29', 10000, 0, 'Neymar', 'Ronaldo', 'Home'),
('2023-01-26', 0, 6500, 'Didier Drogba', 'Lucas Leiva', 'Electronics'),
('2019-08-25', 0, 100, 'Jordan Pickford', 'Dominick Calvert-Lewin', 'Misc'),
('2023-01-11', 5000, 0, 'Wayne Rooney', 'Samir Handanovic', 'Car'),
('2020-05-17', 0, 400, 'Andrea Pirlo', 'Leandro Trossard', 'Pets'),
('2019-01-08', 2500, 0, 'Moses Caicedo', 'Victor Moses', 'Home'),
('2022-05-12', 6500, 0, 'Quincy Promes', 'Adrian Mutu', 'Misc'),
('2018-09-19', 0, 50000, 'Andrew Norton', 'George Washington', 'School'),
('2021-03-13', 2500, 0, 'Tim Cahill', 'Chris Wood', 'Food'),
('2018-06-17', 15000, 0, 'Frank Lampard', 'David Ospina', 'Home'),
('2022-02-14', 0, 2000, 'George Michael', 'Stevie Wonder', 'Car'),
('2019-01-23', 5000, 0, 'Ruslan Malinovskiy', 'Andrei Arshavin', 'Pets'),
('2023-01-11', 0, 10000, 'Mason Greenwood', 'Mason Mount', 'Electronics'),
('2019-05-30', 5500, 0, 'Blake Griffin', 'Joe Hart', 'Misc');

--Query for "/api/sums"
SELECT transaction_category AS category, SUM(debit_amount) AS debit, SUM(credit_amount) AS credit 
FROM money 
GROUP BY transaction_category;

--Query for "/api/data"
SELECT * FROM money;