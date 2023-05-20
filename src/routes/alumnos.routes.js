import { Router } from "express";
import { getAlumnos, getAlumnosProf, getAlumno, deleteAlumno, updateAlumno, createAlumno, getTipos } from "../controllers/alumnos.controllers.js";

const router = Router()

router.get('/alumnos', getAlumnos)

router.get('/alumnos/:id_docente', getAlumnosProf)

router.get('/alumno/:id', getAlumno)

router.get('/tipos/alumnos/:id_docente', getTipos)

router.post('/alumnos', createAlumno)

router.patch('/alumnos/:id', updateAlumno)

router.delete('/alumnos/:id', deleteAlumno)

export default router