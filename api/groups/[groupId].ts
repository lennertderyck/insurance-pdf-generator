import axios from "axios";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const groupId = params.get('groupId');
  const response = await axios('https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/groep/' + groupId);
  console.log(response.status)
  return new Response(JSON.stringify(response.data), request);
}