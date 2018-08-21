import sqlite3
db = sqlite3.connect('users.sqlite')

db.execute('DROP TABLE IF EXISTS users')

db.execute('''CREATE TABLE users(
    id integer PRIMARY KEY,
    email text NOT NULL,
    password text NOT NULL
)''')

cursor = db.cursor()

cursor.execute('''
    INSERT INTO users(email,password)
    VALUES('bookname1996@gmail.com','bookname1996')
''')

cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('Mary@hotmail.com','mary123')
''')

db.commit()
db.close()