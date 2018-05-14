# encryption-store

## Demo
You can view the demo at https://alacrity-law-api-jqdyicjbwu.now.sh/ (see usage below)

## Dependencies
Make sure you have Node running at v8 or higher

## Installation

Clone this then run
```npm install```
```mkdir data ```

## Usage

```npm start```

`POST` `JSON` data to `http://localhost:3000/api/v1/encryption-store` with `id`, `encryption_key` and `data` properties.

Data can be in any JSON format.

`GET` `http://localhost:3000/api/v1/encryption-store?id={your_id}&encryption_key={your_key}` will return the data object in JSON format.