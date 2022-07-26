export const getAllMessages = async (id) => {
  const res = await fetch(
    `https://62df172a9c47ff309e8159dc.mockapi.io/messages`
  );
  let data = await res.json();
  return data;
};

export const getMessageById = async (id) => {
  const res = await fetch(
    `https://62df172a9c47ff309e8159dc.mockapi.io/messages/${id}`
  );
  let data = await res.json();
  return data;
};

export const deleteMessage = async (id) => {
  const res = await fetch(
    `https://62df172a9c47ff309e8159dc.mockapi.io/messages/${id}`,
    { method: "DELETE" }
  );
  let data = await res.json();
  return data;
};
