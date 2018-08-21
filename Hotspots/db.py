import sqlite3
db = sqlite3.connect('db.sqlite')

db.execute('''CREATE TABLE hotspots(
    id integer PRIMARY KEY,
    ssid text NOT NULL,
    passphrase text NOT NULL,
    security text NOT NULL,
    location_type text NOT NULL
)''')

cursor = db.cursor()

cursor.execute('''INSERT INTO hotspots(ssid,passphrase,security,location_type) VALUES("ChickenNet","TetWUYEMpFTUKF4b","WPA2","Private")''')
cursor.execute('''INSERT INTO hotspots(ssid,passphrase,security,location_type) VALUES("DuckNet","MZZbV3Wk","WEP","Public")''')
cursor.execute('''INSERT INTO hotspots(ssid,passphrase,security,location_type) VALUES("Meow Meow Wifi","kRQHs9mSxEjaNWx4"," WPA2","Private")''')
cursor.execute('''INSERT INTO hotspots(ssid,passphrase,security,location_type) VALUES("Yokai","","None","Public")''')

db.commit()
db.close()