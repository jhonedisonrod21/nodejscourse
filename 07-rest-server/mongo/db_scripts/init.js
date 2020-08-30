conn = new Mongo();
db = conn.getDB("cafe");
db.createUser(
    {
      user: "jhon",
      pwd: "jerm1998",
      roles: [ { role: "readWrite", db: "cafe" } ]
    }
);