import { client } from "./sanityClient";

export const fetchTeams = async () => {
  const query = `
    *[_type in['team']] {
        name,
        _id,
        members[]->
    }
  `;

  return await client.fetch(query);
};

export const fetchMembers = async (teamId) => {
  const query = `
    *[_type == "member" && belong_to._ref == $teamId] {
      ...,
     belong_to->
   }
    `;

  return await client.fetch(query, { teamId });
};

export const fetchChallenge = async () => {
  const query = `
    *[_type == "challenge"][0] {
      ...,
     mentors[]->
   }
    `;

  return await client.fetch(query);
};
