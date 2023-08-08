import { Router, Request, Response } from "express";
import staffControllers from "../controllers/staff.controllers";
const api: Router = Router();

export default (): Router => {
    api.get("/:id", async (req: Request, res: Response) => {
        try {
            let id: string = req.params.id;
            let staff = await staffControllers.getStaff(id);
            res.status(200).json({ ok: true, payload: staff })
        } catch (error: any) {
            res.status(500).json({ ok: false, error: error.message })
        }
    });
    api.get("/", async (req: Request, res: Response) => {
        try {
            let staff = await staffControllers.getAllStaff();
            res.status(200).json({ ok: true, payload: staff });
        } catch (error: any) {
            res.status(500).json({ ok: false, error: error.message })
        }
    });
    api.put("/:id", async (req: Request, res: Response) => {
        try {
            let id: string = req.params.id;
            let data = req.body;
            let staff = await staffControllers.updateStaff(id, data);
            res.status(200).json({ ok: true, payload: staff })
        } catch (error: any) {
            res.status(500).json({ ok: false, error: error.message })
        }
    });
    api.post("/", async (req: Request, res: Response) => {
        try {
            let data = req.body;
            let newStaff = staffControllers.registerStaff(data)
            res.status(200).json({ ok: true, payload: newStaff })
        } catch (error: any) {
            res.status(200).json({ ok: false, payload: error.message });
        }
    })
    api.delete("/:id", async (req: Request, res: Response) => {
        try {
            let id: string = req.params.id;
            let deletedStaff = await staffControllers.deleteStaff(id);
            res.status(200).json({ ok: true, payload: `user with ${deletedStaff?.id} has been deleted` })
        } catch (error: any) {
            res.status(500).json({ ok: false, error: error.message })
        }

    })






    return api;
}