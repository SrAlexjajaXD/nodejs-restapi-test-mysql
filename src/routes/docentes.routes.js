import { Router } from "express";
import { createDocente, deleteDocente, getDocentes, getDocente, updateDocente, getDocenteforLogin } from "../controllers/docentes.controllers.js";

const router = Router()

router.get('/docentes', getDocentes)

router.get('/login/docentes/:correo', getDocenteforLogin)

router.get('/docentes/:id', getDocente)

router.post('/docentes', createDocente)

router.patch('/docentes/:id', updateDocente)

router.delete('/docentes/:id', deleteDocente)

export default router