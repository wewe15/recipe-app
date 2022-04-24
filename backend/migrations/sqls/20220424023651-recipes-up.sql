CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    ingredient_id bigint REFERENCES ingredients(id),
    image VARCHAR(200) NOT NULL
);