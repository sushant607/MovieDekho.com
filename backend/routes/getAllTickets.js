import express from "express";
import { Ticket } from '../models/ticketSchema.js'; 

const router = express.Router();

router.get('/tickets', async (req, res) => {
  try {
    const username = req.query.username; 
    if (!username) {
      return res.status(400).json({ message: 'Missing username parameter' });
    }

    const tickets = await Ticket.find({ userId: username });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router as TicketRouter };
