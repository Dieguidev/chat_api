const { Router } = require('express');
const { createConversation } = require('../controllers/conversations.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/conversations:
 *   post:
 *     summary: create a new conversations
 *     tags:
 *       - Conversations
 *     requestBody:
 *       description: Required fields to create a new conversation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newConversation'
 *     responses:
 *       201:
 *         description: Created
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: conversation created
 *       400:
 *         description: Validation error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 */

router.post('/', createConversation );

module.exports = router;