// require the framework
const fastify = require("fastify")({ logger: true });

// require packages
const fetch = require("node-fetch");

// declare a route
fastify.get("/", (request, reply) => {
  reply.send({
    hello: "world",
    dedar: "alam",
    student: true,
  });
});

fastify.get("/github", async (request, reply) => {
  const response = await fetch("https://api.github.com/users/github");
  const data = await response.json();
  console.log(data);
  reply.send({ data });
});

fastify.get("/check", async (request, reply) => {
  const response = await fetch("http://timepassbd.live");
  const body = await response.ok

  console.log(body);
  reply.send({body})
});

// run the server
fastify.listen(3000, () => {
  fastify.log.info("Server Start");
});
