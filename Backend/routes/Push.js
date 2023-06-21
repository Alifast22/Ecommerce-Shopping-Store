
const router =require("express").Router();
// Replace with your own VAPID keys
const deals = [];

router.post('/api/deals', (req, res) => {
  const { title, message } = req.body;
  deals.push({ title, message });
  res.json(deals);
});
const notif = [];
router.post('/api/push', (req, res) => {
  const { title, message } = req.body;

  // Save notification to a database
  const createdAt = new Date();
  const notification = { createdAt, title, message };
  notif.push(notification);
  // ...save to database...

  res.json(notif);
});

router.get('/api/notifications/:createdAt', (req, res) => {
  const created = Date.parse(req.params.createdAt);

  
  const newNotifications = notif.filter((notification) => notification.createdAt > created);

  res.json(newNotifications);
});


module.exports=router