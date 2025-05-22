import { Logger, Queue } from "@mondaycom/apps-sdk";

const queue = new Queue();
const logTag = "QueueService";
const logger = new Logger(logTag);


export const produceMessage = async (message) => {
    logger.info(`produce message received ${message}`);
    const messageId = await queue.publishMessage(message);
    logger.info(`Message ${messageId} published.`);
    return messageId;
}

export const readQueueMessage = ({ body, query }) => {
    const envMessageSecret = process.env.MNDY_TOPIC_MESSAGES_SECRET;
    logger.info(`expected queue secret value: ${envMessageSecret}`)
    logger.info(`queue message received body ${JSON.stringify(body)}`)
    logger.info(`queue message query params ${JSON.stringify(query)}`)
    if (!queue.validateMessageSecret(query.secret))  {
        logger.info("Queue message received is not valid, since secret is not matched, this message could come from an attacker.");
        throw new Error('not allowed');
    }
    logger.info("Queue message received successfully.");
    // process the queue message payload...
};
