import express from "express";
import { Ticket } from '../models/ticketSchema.js'; 

const router = express.Router();

router.get('/tickets', async (req, res) => {
    console.log("hello")
  try {
    const username = req.query.username; 
    
    if (!username) {
      return res.status(400).json({ message: 'Missing username parameter' });
    }

    const tickets = await Ticket.find({ userId: username });
    console.log(username,tickets)
    console.log("ftgyihbe ifbf8j")
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router as UserTicketRouter };
