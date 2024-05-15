import { Ticket } from '../models/ticketSchema.js';
import express from 'express';

const router = express.Router();

router.post('/bookTicket', async (req, res) => {
  try {
    const { movieName, location, price, userId } = req.body;

    // Validate request body
    if (!movieName || !location || !price || !userId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new ticket
    const newTicket = new Ticket({
      movieName,
      location,
      price,
      userId
    });

    // Save the ticket to the database
    await newTicket.save();

    res.status(201).json({ message: 'Ticket booked successfully', ticket: newTicket });
  } catch (error) {
    console.error('Error booking ticket:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as TicketRouter };
