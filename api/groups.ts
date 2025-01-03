import axios from 'axios';
import csv from 'csvtojson';

export const config = {
  runtime: 'nodejs',
};

export const GET = async (request: Request) => {
  const re = await axios('https://docs.google.com/spreadsheets/d/e/2PACX-1vRIffwV3pGKdE9Cu-sn0HYm6UWKtsSue4HgvfmbpTl73v-eNWXpiEclLjFH8hoj6P6O266A7qJmUp1o/pub?gid=0&single=true&output=csv')
  const converted = await csv().fromString(re.data);
  return new Response(JSON.stringify(converted));
}