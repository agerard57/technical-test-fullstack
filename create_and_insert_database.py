#!/usr/bin/env python3

import sqlite3
import csv
import os
import logging

# Logger configuration
logging.basicConfig(
    format="[%(asctime)s][%(levelname)s][%(name)s][%(funcName)s:%(lineno)d]: %(message)s"
)
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def create_table(cursor, connector):
    """
    TODO Create the two tables, users and addresses by following the diagram below.

    Users table schema:
        id int,
        firstName string,
        lastName string,
        gender string,
        email string,
        age int,
        eyeColor string,
        phone string,
        registered string

    Addresses table schema:
        id int,
        streetNumber int,
        street string,
        postalCode int,
        city string,
        userId Foreign key users.id

    Create tables users and addresses into an sqlite database.
    :param cursor: Cursor for navigate into sql database
    :type cursor: sqlite Cursor
    :param connector: The sql database connector
    :type connector: sqlite Connector
    :return: None
    """
    logger.info("Drop addresses and users table if exists")
    cursor.execute("DROP TABLE IF EXISTS addresses;")
    cursor.execute("DROP TABLE IF EXISTS users;")
    logger.info("Create users table")
    cursor.execute(
        """
        CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            firstname TEXT NOT NULL,
            lastname TEXT NOT NULL,
            gender TEXT NOT NULL,
            email TEXT NOT NULL,
            age INTEGER NOT NULL,
            eyeColor TEXT NOT NULL,
            phone TEXT NOT NULL,
            registered TEXT NOT NULL
        );
        """
    )
    logger.info("Create addresses table")
    cursor.execute(
        """
        CREATE TABLE addresses (
            id INTEGER PRIMARY KEY,
            streetNumber INTEGER NOT NULL,
            street TEXT NOT NULL,
            postalCode INT NOT NULL,
            city STRING NOT NULL,
            userId INTEGER NOT NULL UNIQUE,
            
            FOREIGN KEY(userId) REFERENCES users(id)
        );
        """
    )
    connector.commit()


def insert_in_tables(cursor, connector):
    """
    Insert data into table previously created
    :param cursor: Cursor for navigate into sql database
    :type cursor: sqlite Cursor
    :param connector: The sql database connector
    :type connector: sqlite Connector
    :return: None
    """
    logger.info("Read users CSV file")
    dir_path = os.path.dirname(os.path.realpath(__file__))
    # Open users csv file
    users_file = open(f"{dir_path}/data/users.csv")
    users_rows = csv.reader(users_file)
    logger.info("Drop CSV header")
    next(users_rows, None)
    logger.info("Insert users datas")

    # Insert data into users table
    cursor.executemany(
        """
        INSERT INTO users (
            id,
            firstName,
            lastName,
            gender,
            email,
            age,
            eyeColor,
            phone,
            registered
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        """,
        users_rows,
    )
    connector.commit()

    logger.info("Read addresses CSV file")
    addresses_file = open(f"{dir_path}/data/addresses.csv")
    # Open addresses csv file
    addresses_rows = csv.reader(addresses_file)
    logger.info("Drop CSV header")
    next(addresses_rows, None)
    logger.info("Insert addresses datas")

    # Insert data into addresses table
    cursor.executemany(
        """
        INSERT INTO addresses (
            id,
            streetNumber,
            street,
            postalCode,
            city,
            userId
        ) VALUES (?, ?, ?, ?, ?, ?);
        """,
        addresses_rows,
    )
    connector.commit()
    # Close database connection
    connector.close()


def main():
    """
    Main function
    :return: None
    """
    logger.info("Create sqlite3 connection")
    connector = sqlite3.connect("database.db")
    logger.info("Create sqlite3 cursor")
    cursor = connector.cursor()
    create_table(cursor, connector)
    insert_in_tables(cursor, connector)
    logger.info("Sqlite3 database successfully created")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logger.error(f"Cannot run the data insertion: {e}")
