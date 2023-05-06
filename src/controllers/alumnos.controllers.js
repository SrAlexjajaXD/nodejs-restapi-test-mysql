import { pool } from "../db.js"

export const getAlumnos = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from alumnos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const getAlumno = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from alumnos where id_alumno = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({
                message: "Alumno no encontrado"
            })
        }
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const createAlumno = async (req, res) => {
    const { id_docente, nombre } = req.body
    if (nombre == null || id_docente == null ) {
        return res.status(400).json({ msg: "Peticion incorrecta, porfavor llena todos los campos" })
    }

    try {
        

        const [rows] = await pool.query('insert into alumnos (id_alumno, id_docente, nombre ) values (null, ?, ?)', [ id_docente, nombre ])

        res.send({
            id_alumno: rows.insertId,
            id_docente,
            nombre
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const updateAlumno = async (req, res) => {
    const { id } = req.params
    const { id_docente, nombre, tipo } = req.body
    try {


        const [result] = await pool.query('update alumnos set id_docente = IFNULL(?, id_docente), nombre = IFNULL(?, nombre), tipo = IFNULL(?, tipo) where id_alumno = ?', [id_docente, nombre, tipo, id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Alumno no encontrado"
            })
        }

        const [rows] = await pool.query('select * from alumnos where id_alumno=?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const deleteAlumno = async (req, res) => {
    try {
        const [result] = await pool.query('delete from alumnos where id_alumnos = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Alumno no encontrado"
            })
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}