CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    reading_chapter_id INTEGER REFERENCES chapters(id),
    PageNumber INTEGER
);
create TABLE user_favorite(
    user_id INTEGER REFERENCES users(id),
    character_id INTEGER REFERENCES character(id),
    PRIMARY KEY (user_id, character_id)
);
create TABLE character(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    character_img VARCHAR(255),
    character_smallDescription TEXT,
    character_fullDescription TEXT,
);

CREATE TABLE manga_volumes (
    id SERIAL PRIMARY KEY,
    volume_number VARCHAR(10) NOT NULL,
    chapters JSONB NOT NULL,
    image_url TEXT NOT NULL
);

CREATE TABLE chapters (
    id SERIAL PRIMARY
    real_id NUMERIC(5, 1),
    path VARCHAR(255) NOT NULL
);

CREATE TABLE music (
    id SERIAL PRIMARY KEY,
    track_name VARCHAR(70),
    video_path TEXT,
    cover_path TEXT,
    Lyrick TEXT ,
    track_path TEXT
);

CREATE TABLE chat_messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ,
    chapter_id INTEGER REFERENCES chapters(id) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);