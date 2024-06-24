export default async function POST(req, res) {
  const data = req.body;
  const id = await createItem(data);
  res.status(200).json({ id });
}
