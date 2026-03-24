import * as Hapi from "@hapi/hapi";
import db from "../db/database";

// register CRUD-routes with Hapi-server
export const registerRoutes = (server: Hapi.Server) => {

    // GET: /api/todos - get all todos ordered by latest created
    server.route({
        method: "GET",
        path: "/api/todos",
        handler: () => {
            return db.prepare("SELECT * FROM todos ORDER BY created_at DESC").all();
        },
    });

    // POST: /api/todos - create new todo with title, desription and status
    server.route({
        method: "POST",
        path: "/api/todos",
        handler: (request, h) => {
            const { title, description = "", status = "not_started" } = request.payload as any;

            // insert the new todo to the database
            const result = db
                .prepare("INSERT INTO todos (title, description, status) VALUES (?, ?, ?)")
                .run(title, description, status);

            // get the new todo with statuscode 201
            const todo = db
                .prepare("SELECT * FROM todos WHERE id = ?")
                .get(result.lastInsertRowid) as Record<string, unknown>;
            return h.response(todo).code(201);
        },
    });

    // PUT: /api/todos/{id} - update existing todo with new content
    server.route({
        method: "PUT",
        path: "/api/todos/{id}",
        handler: (request, h) => {
            const { title, description, status } = request.payload as any;

            // checking if todo exists and return 404 if not
            const existing = db
                .prepare("SELECT * FROM todos WHERE id = ?")
                .get(request.params.id);
            if (!existing) return h.response({ error: "Hittades inte" }).code(404);

            // update todo in database
            db.prepare(
                "UPDATE todos SET title = ?, description = ?, status = ? WHERE id = ?"
            ).run(title, description, status, request.params.id);

            // get updated todo with statuscode 200
            const updated = db
                .prepare("SELECT * FROM todos WHERE id = ?")
                .get(request.params.id) as Record<string, unknown>;
            return h.response(updated).code(200);
        },
    });

    // DELETE: /api/todos/{id} - delete todo based on id
    server.route({
        method: "DELETE",
        path: "/api/todos/{id}",
        handler: (request, h) => {
            db.prepare("DELETE FROM todos WHERE id = ?").run(request.params.id);

            // return statuscode 204 since no content is returned
            return h.response().code(204);
        },
    });
};