import Command from '../Command';

const ping = new Command({
  name: 'ping',
  description: 'Responds with "pong"',
  handler: async ctx => {
    const startTime = ctx.getInteractionDate();

    await ctx.respondWithMessage('pong');

    const msg = await ctx.getResponse();
    const endTime = new Date(msg.timestamp);
    const latency = endTime.getTime() - startTime.getTime();

    await ctx.editResponse({
      content: `pong (latency: ${latency}ms)`,
    });
  },
});

export default ping;
