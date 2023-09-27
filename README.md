# Sitemate Backend Challenge

This is a solution to the Sitemate backend challenge.

- **Backend** is built using Ruby on Rails ver. 7. It stores data in SQLite DB and issue title is unique and cannot be null.

- **Frontend** is built using NodeJS. It has help command to make it a bit interactive and user-friendly.

## How to run server and make calls?

1. Make sure you have all [prerequisites](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails) to run Rails app.

2. Go to `api` folder and run

```Bash
bundle install && bin/rails db:setup
```

It should install all the gems (packages) and initialize database.

3. Run server

```Bash
bin/rails s
```

4. Following is the API interface:

| Prefix | Verb   | URI Pattern | Controller#Action |
| ------ | ------ | ----------- | ----------------- |
| issues | POST   | /issues     | issues#create     |
|        | GET    | /issues/:id | issues#show       |
|        | PUT    | /issues/:id | issues#update     |
|        | DELETE | /issues/:id | issues#delete     |

## How to run client?

1. On another terminal screen go to `client` folder and run

```Bash
yarn install
```

2. You can run one of the commands:

| Command                                         | Description     |
| ----------------------------------------------- | --------------- |
| node index.js create [title] [description]      | Create an issue |
| node index.js get [id]                          | Show issue      |
| node index.js update [id] [title] [description] | Update issue    |
| node index.js delete [id]                       | Delete issue    |

You can also see it by running

```Bash
node index.js --help
```

# Improvements

If I had more time I would do the following improvements:

- Add unit test to each API request including all the edge cases.
- Improve client interactivity by adding navigation option between commands and validate user inputs.
- Add issues listing API request with pagination support.
- Add search API request and build client support.
- Add end-to-end test.
- use docker to wrap the application.
