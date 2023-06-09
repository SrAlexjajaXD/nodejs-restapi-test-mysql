import { pool } from "../db.js"

export const getDocentes = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from docentes')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const getDocenteforLogin = async (req, res) => {

    try {
        const [rows] = await pool.query('select * from docentes where correo = ?', [req.params.correo])

        if (rows.length <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const getDocente = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from docentes where id_docente = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const createDocente = async (req, res) => {
    try {
        await pool.query('insert into docentes (id_docente, nombre, usuario, escuela, correo, contra) values (null, ?, ?, ?, ?, ?)', 
        [req.body.nombre, req.body.usuario, req.body.escuela, req.body.correo, req.body.contra])

        res.send(req.body)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const updateDocente = async (req, res) => {

    try {


        const [result] = await pool.query('update docentes set nombre = IFNULL(?, nombre), usuario = IFNULL(?,usuario), escuela = IFNULL(?,escuela), correo = IFNULL(?,correo), contra = IFNULL(?,contra) where id_docente = ?', [req.body.nombre, req.body.usuario, req.body.escuela, req.body.correo, req.body.contra, req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }

        const [rows] = await pool.query('select * from docentes where id_docente=?', [req.params.id])

        res.json(rows[0])
    } catch (error) {
        return res.json({
            message: error
        })
    }
}

export const deleteDocente = async (req, res) => {
    try {
        const [result] = await pool.query('delete from docentes where id_docente = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}