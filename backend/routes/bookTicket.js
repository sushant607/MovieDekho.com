import { Ticket } from '../models/ticketSchema.js';
import express from 'express';

const router = express.Router();

router.post('/bookTicket', async (req, res) => {
  try {
    const { movieName, location, price, userId, seatNumber } = req.body;

    if (!movieName || !location || !price || !userId || !seatNumber){
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newTicket = new Ticket({
      movieName,
      location,
      price,
      userId,
      seatNumber
    });

    await newTicket.save();

    res.status(201).json({ message: 'Ticket booked successfully', ticket: newTicket });
  } catch (error) {
    console.error('Error booking ticket:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as TicketRouter };

